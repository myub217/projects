// routes/accessKey.mjs

import express from "express";
import { verifyToken } from "../middleware/auth.mjs";
import { VALID_ACCESS_KEYS } from "../config/env.mjs"; // เปลี่ยนชื่อไฟล์ตามที่ใช้

const router = express.Router();

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