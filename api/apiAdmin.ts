import express from "express";

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
      return res.status(response.status).json({ error: "GitHub API error." });
    }

    const data = await response.json();
    return res.json(data);
  } catch (err) {
    // err อาจไม่ใช่ Error object เสมอไป จึง cast และ fallback message
    const message = err instanceof Error ? err.message : "Unknown error";
    return res.status(500).json({ error: message });
  }
});

export default router;