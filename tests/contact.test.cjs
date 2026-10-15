const { test } = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const vm = require('node:vm')
const ts = require('typescript')
const { NextRequest, NextResponse } = require('next/server')

const source = ts.transpileModule(fs.readFileSync('app/api/contact/route.ts', 'utf8'), {
  compilerOptions: { module: ts.ModuleKind.CommonJS, esModuleInterop: true },
}).outputText
const valid = { name: 'Test Visitor', email: 'test@example.com', message: 'Hello' }

function setup(env = {}, failAt = 0) {
  const sent = []
  let options
  let calls = 0
  const routeModule = { exports: {} }
  vm.runInNewContext(source, {
    module: routeModule, exports: routeModule.exports,
    process: { env: { SMTP_HOST: 'smtp.example.com', SMTP_USER: 'sender@example.com', SMTP_PASS: 'test', ...env } },
    console: { error() {} },
    require(name) {
      if (name === 'next/server') return { NextResponse }
      if (name === 'nodemailer') return {
        createTransport(config) {
          options = config
          return {
            async verify() {},
            async sendMail(mail) {
              calls++
              if (calls === failAt) throw new Error('SMTP rejected')
              sent.push(mail)
            },
          }
        },
      }
      throw new Error(`Unexpected import ${name}`)
    },
  })
  return {
    sent,
    get options() { return options },
    submit(body, raw = false) {
      return routeModule.exports.POST(new NextRequest('http://localhost/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: raw ? body : JSON.stringify(body),
      }))
    },
  }
}

test('rejects malformed JSON and invalid field types before sending email', async () => {
  for (const value of ['{', 'null', '[]', '{"name":{}}', '{"message":true}']) {
    const ctx = setup()
    assert.equal((await ctx.submit(value, true)).status, 400)
    assert.equal(ctx.sent.length, 0)
  }
})

test('validates required fields, email format and maximum lengths', async () => {
  for (const value of [{}, { ...valid, email: 'invalid' }, { ...valid, name: 'a'.repeat(121) }, { ...valid, message: 'a'.repeat(5001) }]) {
    assert.equal((await setup().submit(value)).status, 400)
  }
})

test('honeypot submissions return success without sending email', async () => {
  const ctx = setup()
  assert.equal((await ctx.submit({ ...valid, website: 'spam' })).status, 200)
  assert.equal(ctx.sent.length, 0)
})

test('uses TLS on default SMTP port and escapes submitted HTML', async () => {
  const ctx = setup()
  assert.equal((await ctx.submit({ ...valid, name: '<script>bad</script>', message: '<img src=x>\nHello' })).status, 200)
  assert.equal(ctx.options.port, 465)
  assert.equal(ctx.options.secure, true)
  assert.equal(ctx.sent.length, 2)
  assert.match(ctx.sent[0].html, /&lt;script&gt;bad&lt;\/script&gt;/)
  assert.match(ctx.sent[0].html, /&lt;img src=x&gt;<br\/>Hello/)
  assert.equal(ctx.sent[0].replyTo, valid.email)
})

test('supports STARTTLS and rejects invalid or missing SMTP configuration', async () => {
  const ctx = setup({ SMTP_PORT: '587' })
  assert.equal((await ctx.submit(valid)).status, 200)
  assert.equal(ctx.options.secure, false)
  for (const env of [{ SMTP_PORT: 'wrong' }, { SMTP_PORT: '0' }, { SMTP_SECURE: 'invalid' }, { SMTP_PASS: '' }]) {
    assert.equal((await setup(env).submit(valid)).status, 500)
  }
})

test('delivery failure is reported, but confirmation failure does not invite duplicate enquiries', async () => {
  assert.equal((await setup({}, 1).submit(valid)).status, 500)
  const ctx = setup({}, 2)
  assert.equal((await ctx.submit(valid)).status, 200)
  assert.equal(ctx.sent.length, 1)
})
