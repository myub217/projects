import express from "express";
import fetch from "node-fetch"; // ถ้าใช้ Node.js ต้องติดตั้งและ import fetch (node-fetch หรือ cross-fetch)

const router = express.Router();

router.get("/repos/:username", async (req, res) => {
  const username = req.params.username;
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return res.status(500).json({ error: "GitHub token is not set." });
  }

  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos`, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json",
      },
    });

    if (!response.ok) {
      const errorBody = await response.json().catch(() => ({}));
      return res.status(response.status).json({ error: errorBody.message || "GitHub API error." });
    }

    const data = await response.json();
    return res.json(data);
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return res.status(500).json({ error: message });
  }
});

export default router;