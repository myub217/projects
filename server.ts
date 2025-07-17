// ✅ server/index.ts – พร้อมใช้งาน Express + API + SPA + Static Assets รองรับ Vite/PWA

import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import history from 'connect-history-api-fallback';
import dotenv from 'dotenv';
import apiRouter from './api/apiAdmin.js'; // .js จำเป็นใน ESM Node

dotenv.config();

// 🔁 __dirname ใน ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Express App
const app = express();
const PORT = Number(process.env.PORT) || 3000;

// ✅ Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Enable CORS ถ้าตั้งค่า VITE_CORS_ENABLED
if (process.env.VITE_CORS_ENABLED === 'true') {
  const cors = await import('cors');
  app.use(cors.default());
}

// ✅ SPA Fallback สำหรับ React Router (เว้น /api/*)
app.use(
  history({
    rewrites: [{ from: /^\/api\/.*$/, to: (ctx) => ctx.parsedUrl?.pathname || '' }],
  })
);

// ✅ Static Assets จาก dist (vite build)
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// ✅ API Endpoint
app.use('/api', apiRouter);

// ✅ SPA Entry (fallback index.html)
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});