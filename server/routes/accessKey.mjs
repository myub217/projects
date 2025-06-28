// routes/accessKey.mjs

import express from "express";
import { verifyToken } from "../middleware/auth.mjs";
import { VALID_ACCESS_KEYS } from "../config/env.mjs";

const router = express.Router();

// ต้องใช้ express.json() middleware ก่อนเพื่อ parse req.body เป็น JSON
router.use(express.json());

/**
 * POST /accessKey
 * ตรวจสอบ accessKey ที่ส่งมาใน body
 * ต้องผ่าน verifyToken middleware ก่อน (ตรวจสอบ token)
 */
router.post("/", verifyToken, (req, res) => {
  const { accessKey } = req.body;

  if (!accessKey || typeof accessKey !== "string") {
    return res.status(400).json({ success: false, message: "Missing or invalid accessKey" });
  }

  if (VALID_ACCESS_KEYS.includes(accessKey)) {
    return res.status(200).json({ success: true, message: "Access granted" });
  }

  return res.status(401).json({ success: false, message: "Invalid access key" });
});

export default router;