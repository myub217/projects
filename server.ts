// server.ts
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import history from "connect-history-api-fallback";
import dotenv from "dotenv";
import apiRouter from "./api/apiAdmin.js"; // ⚠️ หากใช้ TypeScript, ต้อง compile เป็น .js ก่อนใช้งาน

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
const PORT = process.env.PORT || 3000;

// รองรับ Single Page Application
app.use(history());

// Middleware
app.use(express.json()); // รองรับ JSON body parsing
app.use(express.urlencoded({ extended: true })); // รองรับ form-urlencoded

// Static file serving (จาก build Vite)
app.use(express.static(path.join(__dirname, "dist")));

// API Routes (prefix: /api)
app.use("/api", apiRouter);

// Server Start
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});