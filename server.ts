import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import history from 'connect-history-api-fallback';
import dotenv from 'dotenv';
import apiRouter from './api/apiAdmin.js'; // .js required for ESM

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.VITE_CORS_ENABLED === 'true') {
  const cors = await import('cors');
  app.use(cors.default());
}

app.use(
  history({
    rewrites: [{ from: /^\/api\/.*$/, to: (ctx) => ctx.parsedUrl?.pathname || '' }],
  })
);

const distPath = path.join(__dirname, 'dist');
app.use(express.static(distPath));

app.use('/api', apiRouter);

app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Server ready at http://localhost:${PORT}`);
});