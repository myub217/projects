import express, { Request, Response } from "express";

const router = express.Router();

// ตรวจสอบว่า API ยังออนไลน์หรือไม่
router.get("/status", (_req: Request, res: Response) => {
  res.json({
    success: true,
    message: "API is online ✅",
    time: new Date().toISOString(),
  });
});

// Mock login API (admin / 1234)
router.post("/login", (req: Request, res: Response) => {
  const { username, password } = req.body;

  if (username === "admin" && password === "1234") {
    res.json({
      success: true,
      token: "mock-token-abc123",
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Invalid credentials",
    });
  }
});

export default router;