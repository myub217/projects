// config/env.mjs
import dotenv from "dotenv";
import path from "path";

// โหลดไฟล์ .env (default path คือ root project/.env)
// ถ้าต้องการระบุ path เอง ให้แก้ path.resolve()
dotenv.config({
  path: path.resolve(process.cwd(), ".env")
});

// แสดงค่า environment ที่สำคัญ (เพื่อ debug ได้)
console.log("🌐 PORT:", process.env.PORT || "ไม่กำหนด");
console.log("🔐 VALID_ACCESS_KEYS (raw):", process.env.VALID_ACCESS_KEYS || "[]");

// แปลง VALID_ACCESS_KEYS เป็น Array (ถ้ามี) หรือเป็น array ว่าง
const VALID_ACCESS_KEYS = process.env.VALID_ACCESS_KEYS
  ? process.env.VALID_ACCESS_KEYS.split(",").map(key => key.trim()).filter(Boolean)
  : [];

console.log("✅ VALID_ACCESS_KEYS (parsed):", VALID_ACCESS_KEYS);

// export ตัวแปรออกไปใช้ในส่วนอื่น ๆ ของโปรเจกต์ได้เลย
export {
  VALID_ACCESS_KEYS
};