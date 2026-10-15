const { cpSync, existsSync } = require('node:fs')
const path = require('node:path')

const root = path.resolve(__dirname, '..')
const standalone = path.join(root, '.next', 'standalone')
const server = path.join(standalone, 'server.js')
if (!existsSync(server)) {
  console.error('Production build missing. Run npm run build before npm start.')
  process.exit(1)
}
cpSync(path.join(root, 'public'), path.join(standalone, 'public'), { recursive: true })
cpSync(path.join(root, '.next', 'static'), path.join(standalone, '.next', 'static'), { recursive: true })
process.env.HOSTNAME = process.env.HOSTNAME || '0.0.0.0'
require(server)
