const assert = require('node:assert/strict')

async function main() {
  const origin = process.argv[2] || 'http://127.0.0.1:3000'
  const sitemap = await fetch(`${origin}/sitemap.xml`)
  assert.equal(sitemap.status, 200)
  const xml = await sitemap.text()
  const routes = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname)
  assert.equal(routes.length, 9)
  const resources = new Set(['/robots.txt'])
  for (const route of routes) {
    const response = await fetch(`${origin}${route}`)
    assert.equal(response.status, 200, route)
    const html = await response.text()
    assert.equal((html.match(/<h1[\s>]/g) || []).length, 1, `${route}: H1`)
    assert.match(html, /rel="canonical"/, `${route}: canonical`)
    assert.ok(!/facebook\.com|tiktok\.com|27681545803/.test(html), `${route}: outdated contact details`)
    for (const match of html.matchAll(/(?:href|src)="([^"#]+)"/g)) {
      const raw = match[1].replaceAll('&amp;', '&')
      if (raw.startsWith('/')) resources.add(raw.split('#')[0])
    }
  }
  resources.add('/images/services-studio.jpg')
  for (const resource of resources) {
    const response = await fetch(`${origin}${resource}`)
    assert.equal(response.status, 200, resource)
    await response.arrayBuffer()
  }
  for (const body of ['{', 'null', '{}']) {
    const response = await fetch(`${origin}/api/contact`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body,
    })
    assert.equal(response.status, 400)
  }
  console.log(`Passed: ${routes.length} pages, ${resources.size} linked resources, and invalid contact requests.`)
}
main().catch((error) => { console.error(error); process.exitCode = 1 })
