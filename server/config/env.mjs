// config/env.mjs

import dotenv from "dotenv";

// โหลดไฟล์ .env
dotenv.config();

// แสดงค่า environment ที่สำคัญ (เพื่อ debug ได้)
console.log("🌐 PORT:", process.env.PORT || "ไม่กำหนด");
console.log("🔐 VALID_ACCESS_KEYS (raw):", process.env.VALID_ACCESS_KEYS || "[]");

// แปลง VALID_ACCESS_KEYS เป็น Array
const VALID_ACCESS_KEYS = process.env.VALID_ACCESS_KEYS
  ? process.env.VALID_ACCESS_KEYS.split(",").map(key => key.trim())
  : [];

console.log("✅ VALID_ACCESS_KEYS (parsed):", VALID_ACCESS_KEYS);

export {
  VALID_ACCESS_KEYS
};