// ✅ index.ts – Express Server สำหรับ Modular Onepage (Vite + PWA + API + Static + SPA)

import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import history from 'connect-history-api-fallback'
import dotenv from 'dotenv'
import apiAdmin from './src/api/apiAdmin'

dotenv.config()

// ✅ ESM-compatible __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// ✅ Express App Init
const app = express()
const PORT = Number(process.env.PORT) || 3000

// ✅ Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ✅ Optional CORS
if (process.env.VITE_CORS_ENABLED === 'true') {
  const cors = await import('cors')
  app.use(cors.default())
}

// ✅ React Router SPA Fallback (ยกเว้น /api)
app.use(
  history({
    rewrites: [
      { from: /^\/api\/.*$/, to: (ctx) => ctx.parsedUrl?.pathname || '' },
    ],
  })
)

// ✅ Static Serve (Vite build dist)
const distPath = path.resolve(__dirname, 'dist')
app.use(express.static(distPath))

// ✅ API Route
app.use('/api/admin', apiAdmin)

// ✅ SPA HTML Fallback
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`)
})