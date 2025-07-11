// server.ts
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import history from "connect-history-api-fallback";
import dotenv from "dotenv";
import apiRouter from "./api/apiAdmin.js"; // เปลี่ยนเป็น .js หรือ config ใน build ให้รองรับ .ts

// โหลดตัวแปรจาก .env
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// ใช้ history fallback สำหรับ SPA
app.use(history());

// รองรับ JSON body parsing
app.use(express.json());

// serve ไฟล์ static จากโฟลเดอร์ dist
app.use(express.static(path.join(__dirname, "dist")));

// เส้นทาง API
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});