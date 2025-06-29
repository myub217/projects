// config/env.mjs
import dotenv from "dotenv";
import path from "path";

// โหลด .env
dotenv.config({
  path: path.resolve(process.cwd(), ".env")
});

// สร้างตัวแปร VALID_ACCESS_KEYS จาก environment แบบ array
const validAccessKeys = process.env.VALID_ACCESS_KEYS
  ? process.env.VALID_ACCESS_KEYS
      .split(",")
      .map((key) => key.trim())
      .filter(Boolean)
  : [];

// แสดง log เฉพาะ development
if (process.env.NODE_ENV !== "production") {
  console.log("🌐 PORT:", process.env.PORT || "ไม่กำหนด");
  console.log("🔐 VALID_ACCESS_KEYS (raw):", process.env.VALID_ACCESS_KEYS || "[]");
  console.log("✅ VALID_ACCESS_KEYS (parsed):", validAccessKeys);
}

// export ตัวแปรที่ต้องการ
export { validAccessKeys as VALID_ACCESS_KEYS };
export const PORT = process.env.PORT || 3000;