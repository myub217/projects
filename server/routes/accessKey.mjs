import express from "express";
import { verifyToken } from "../middleware/auth.mjs";
import { VALID_ACCESS_KEYS } from "../config/env.mjs";

const router = express.Router();

// ใช้ middleware ตัวนี้เพื่อ parse JSON body
router.use(express.json());

// POST /api/access-key
router.post("/", verifyToken, (req, res) => {
  const { accessKey } = req.body;

  // ตรวจสอบว่า accessKey มีค่าและเป็น string
  if (!accessKey || typeof accessKey !== "string") {
    return res.status(400).json({
      success: false,
      message: "🔑 กรุณาระบุ accessKey ที่ถูกต้อง",
    });
  }

  // ตรวจสอบว่า accessKey อยู่ในรายการที่อนุญาต
  const isValid = VALID_ACCESS_KEYS.includes(accessKey.trim());

  if (isValid) {
    return res.status(200).json({
      success: true,
      message: "✅ ยืนยัน access key สำเร็จ",
    });
  }

  return res.status(401).json({
    success: false,
    message: "❌ accessKey ไม่ถูกต้องหรือหมดอายุ",
  });
});

export default router;