// ✅ src/api/apiAdmin.ts — สมบูรณ์ พร้อมใช้งาน

import { Router, Request, Response } from 'express';

const router = Router();

// 🔹 GET /api/admin/ — ตรวจสอบสถานะ API แอดมิน
router.get('/', (_req: Request, res: Response) => {
  res.status(200).json({ status: '✅ admin api online' });
});

// 🔹 GET /api/admin/users — รายชื่อผู้ใช้จำลอง
router.get('/users', (_req: Request, res: Response) => {
  const mockUsers = [
    { id: 1, name: 'Admin', role: 'admin' },
    { id: 2, name: 'User1', role: 'user' },
    { id: 3, name: 'Manager', role: 'moderator' },
  ];
  res.status(200).json(mockUsers);
});

// 🔹 POST /api/admin/login — ตรวจสอบรหัสผ่านแอดมิน
router.post('/login', (req: Request, res: Response) => {
  const { password } = req.body;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'secret123';

  if (password === ADMIN_PASSWORD) {
    return res.status(200).json({ success: true, message: 'เข้าสู่ระบบสำเร็จ' });
  } else {
    return res.status(401).json({ success: false, error: 'รหัสผ่านไม่ถูกต้อง' });
  }
});

export default router;