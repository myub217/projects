import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import history from 'connect-history-api-fallback';
import dotenv from 'dotenv';
import apiRouter from './api/apiAdmin.js'; // 🧠 ต้องใช้ .js ถ้าใช้ ESM จริง

// ✅ Load environment variables
dotenv.config();

// ✅ Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ Express init
const app = express();
const PORT = Number(process.env.PORT) || 3000;

// ✅ Middleware: JSON & form body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Optional: Enable CORS
if (process.env.VITE_CORS_ENABLED === 'true') {
  const cors = await import('cors');
  app.use(cors.default());
}

// ✅ SPA Fallback (except /api/*)
app.use(
  history({
    rewrites: [{ from: /^\/api\/.*$/, to: (ctx) => ctx.parsedUrl?.pathname || '' }],
  })
);

// ✅ Serve static files (from Vite build)
const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

// ✅ API Routes
app.use('/api', apiRouter);

// ✅ Fallback route → index.html (SPA)
app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

// ✅ Start server
app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});
