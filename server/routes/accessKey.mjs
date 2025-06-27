// routes/accessKey.mjs

import express from "express";
import { verifyToken } from "../middleware/auth.mjs";
import { VALID_ACCESS_KEYS } from "../config/keys.mjs";

const router = express.Router();

/**
 * POST /api/check-access-key
 * ใช้ตรวจสอบ accessKey ที่ผู้ใช้ป้อน โดยต้องผ่าน middleware verifyToken ก่อน
 */
router.post("/", verifyToken, (req, res) => {
  const { accessKey } = req.body;

  if (!accessKey) {
    return res.status(400).json({ success: false, message: "Missing accessKey" });
  }

  if (VALID_ACCESS_KEYS.includes(accessKey)) {
    return res.json({ success: true, message: "Access granted" });
  }

  return res.status(401).json({ success: false, message: "Invalid access key" });
});

export default router;