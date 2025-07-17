// src/api/apiAdmin.ts
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ status: 'admin api online' });
});

export default router;