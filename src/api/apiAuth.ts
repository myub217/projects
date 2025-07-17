// ✅ src/api/apiAuth.ts — สมบูรณ์ พร้อมใช้งาน (Login + JWT Middleware)

import express, { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
export const authRouter = express.Router();

const JWT_SECRET = process.env.JWT_SECRET || 'changeme';
const USERS = [
  { id: 1, username: 'admin', password: '123456' },
  { id: 2, username: 'client', password: 'abc123' },
];

// 🔐 POST /api/auth/login — Login & Get Token
authRouter.post('/login', (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = USERS.find((u) => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ error: 'Invalid credentials' });

  const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '1h' });
  return res.status(200).json({ token });
});

// 🔐 Middleware: verifyToken — ใช้ใน route ที่ต้องการ auth
export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'Token not provided' });

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: 'Invalid token' });
    req.user = decoded; // @ts-ignore
    next();
  });
};