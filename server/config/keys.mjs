// config/keys.mjs
import dotenv from "dotenv";
import path from "path";

// โหลด .env ถ้ายังไม่ได้โหลด (กรณีเรียกไฟล์นี้โดยตรง)
dotenv.config({
  path: path.resolve(process.cwd(), ".env")
});

/**
 * รายการ Access Keys ที่ได้รับอนุญาต
 * โหลดจาก environment variable VALID_ACCESS_KEYS เช่น:
 * VALID_ACCESS_KEYS=JP2025KEY,ADMIN123,SPECIALKEY
 * 
 * ในกรณีที่ไม่ได้กำหนดใน env จะเป็น array ว่าง []
 */
const VALID_ACCESS_KEYS = process.env.VALID_ACCESS_KEYS
  ? process.env.VALID_ACCESS_KEYS
      .split(",")
      .map((key) => key.trim())
      .filter(Boolean)  // กรองค่าว่าง
  : [];

export { VALID_ACCESS_KEYS };



/**
 * ตัวอย่าง middleware เช็ค access key จาก header "x-access-key"
 * ถ้า key ถูกต้อง จะเรียก next()
 * ถ้าไม่ถูกต้อง จะตอบ 401 Unauthorized
 */
export function checkAccessKeyMiddleware(req, res, next) {
  const accessKey = req.headers["x-access-key"];

  if (!accessKey) {
    return res.status(401).json({ error: "Missing access key" });
  }

  if (!VALID_ACCESS_KEYS.includes(accessKey)) {
    return res.status(401).json({ error: "Invalid access key" });
  }

  // ผ่านการตรวจสอบ
  next();
}


/**
 * ตัวอย่างการใช้งานใน Express route:
 * 
 * import express from 'express';
 * import { checkAccessKeyMiddleware } from './config/keys.mjs';
 * const app = express();
 * 
 * app.use('/api/protected', checkAccessKeyMiddleware);
 * 
 * app.get('/api/protected/data', (req, res) => {
 *   res.json({ secretData: "ข้อมูลลับสำหรับผู้มีสิทธิ์" });
 * });
 * 
 * app.listen(3000, () => console.log("Server running on port 3000"));
 */