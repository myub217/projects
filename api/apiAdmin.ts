import express, { Request, Response, Router } from "express";

const router: Router = express.Router();

router.get("/status", (_req: Request, res: Response) => {
  res.json({ success: true, message: "API is online ✅", time: new Date().toISOString() });
});

router.post("/login", (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (username === "admin" && password === "1234") {
    res.json({ success: true, token: "mock-token-abc123" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// ✅ ใช้ export default
export default router;