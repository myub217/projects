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
app.use(express.urlencoded({ extended: true }));

// ✅ เสิร์ฟ static files จาก dist (หลัง Vite build)
app.use(express.static(path.join(__dirname, "dist")));

// ✅ เส้นทาง API (เริ่มต้นด้วย /api)
app.use("/api", apiRouter);

// ✅ กรณี route ไม่ตรง ให้เสิร์ฟ index.html (SPA fallback)
app.get("*", (_req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// ✅ เริ่มต้นเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});