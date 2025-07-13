// server.ts
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import history from "connect-history-api-fallback";
import dotenv from "dotenv";
import apiRouter from "./api/apiAdmin"; // ✅ ไม่ใส่นามสกุลเพื่อรองรับ TypeScript build/dev

/**
 * ✅ Express Server Config: JP Visual & Docs
 * - ใช้ร่วมกับ Vite build output (dist)
 * - รองรับ React SPA (react-router)
 * - โหลด environment variables จาก .env
 * - รองรับ API routing ที่ /api
 */

dotenv.config(); // โหลดตัวแปรจาก .env

// แปลง ESM __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

// Middleware: รองรับ JSON และ form-urlencoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// SPA routing fallback แต่กัน /api/* ไม่ให้ fallback
app.use(
  history({
    rewrites: [{ from: /^\/api\/.*$/, to: (context) => context.parsedUrl.pathname }],
  })
);

// Static file serving (จาก Vite build)
app.use(express.static(path.join(__dirname, "dist")));

// API Routes (prefix: /api)
app.use("/api", apiRouter);

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});