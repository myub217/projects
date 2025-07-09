// server.ts

// ✅ โหลด Express และ dependency ที่จำเป็น
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import history from "connect-history-api-fallback";

// ✅ โหลด API router จากไฟล์
import apiRouter from "./api/apiAdmin.ts";

// ✅ ใช้ __dirname แบบ ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ✅ สร้าง Express app
const app = express();
const PORT = process.env.PORT || 3000;

// ✅ รองรับ SPA Routing เช่น React Router
app.use(history());

// ✅ Middleware ทั่วไป
app.use(express.json());

// ✅ ให้ Express เสิร์ฟไฟล์ static จาก /dist (หลัง build Vite)
app.use(express.static(path.join(__dirname, "dist")));

// ✅ เส้นทาง API
app.use("/api", apiRouter);

// ✅ เริ่มต้นเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});