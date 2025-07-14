// api/apiAdmin.ts

import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config(); // ✅ โหลด .env ให้พร้อมใช้ก่อนเรียก process.env

const router = express.Router();

/**
 * @route GET /api/repos/:username
 * @desc ดึงรายการ public repos จาก GitHub โดยใช้ Bearer Token
 * @env ต้องตั้งค่า GITHUB_TOKEN ใน .env
 */

router.get("/repos/:username", async (req, res) => {
  const { username } = req.params;
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return res.status(500).json({ error: "GitHub token is not set." });
  }

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
        "User-Agent": "modular-onepage",
      },
    });

    if (!response.ok) {
      let errorMessage = `GitHub API returned ${response.status}`;
      try {
        const errorBody: unknown = await response.json();
        if (
          typeof errorBody === "object" &&
          errorBody !== null &&
          "message" in errorBody &&
          typeof (errorBody as any).message === "string"
        ) {
          errorMessage = (errorBody as any).message;
        }
      } catch {
        // fallback
      }
      return res.status(response.status).json({ error: errorMessage });
    }

    const data = await response.json();
    return res.json(data);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return res.status(500).json({ error: message });
  }
});

export default router;