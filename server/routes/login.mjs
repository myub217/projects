import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { ALL_USERS } from "../config/users.mjs"; // ⬅️ import จากไฟล์ใหม่

const router = express.Router();

router.post("/", async (req, res) => {
  const { username, password } = req.body;

  if (typeof username !== "string" || typeof password !== "string") {
    return res.status(400).json({ success: false, message: "ข้อมูลไม่ถูกต้อง" });
  }

  const user = ALL_USERS.find((u) => u.username === username);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ success: false, message: "❌ ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง" });
  }

  const token = jwt.sign(
    { username: user.username, role: user.role },
    process.env.ACCESS_TOKEN_SECRET || "default_secret_key",
    { expiresIn: "7d" }
  );

  return res.json({
    success: true,
    message: "✅ เข้าสู่ระบบสำเร็จ",
    data: { username: user.username, role: user.role, token },
  });
});

export default router;