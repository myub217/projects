import express from 'express';
import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config(); // ✅ Load env before accessing process.env

const router = express.Router();

// ================================
// 🔗 GitHub API - Fetch User Repos
// ================================
/**
 * @route   GET /api/repos/:username
 * @desc    Fetch public GitHub repos of a user using PAT (Bearer Token)
 * @env     Requires GITHUB_TOKEN in .env
 */
router.get('/repos/:username', async (req, res) => {
  const { username } = req.params;
  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return res.status(500).json({ error: 'GitHub token is not set in environment.' });
  }

  try {
    const ghUrl = `https://api.github.com/users/${username}/repos`;
    const response = await fetch(ghUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
        Accept: 'application/vnd.github+json',
        'User-Agent': 'modular-onepage',
      },
    });

    if (!response.ok) {
      let errorMessage = `GitHub API Error: ${response.status}`;
      try {
        const errorData = await response.json();
        if (errorData?.message) errorMessage = errorData.message;
      } catch {
        // JSON parse error
      }
      return res.status(response.status).json({ error: errorMessage });
    }

    const repos = await response.json();
    return res.status(200).json(repos);
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Unknown server error';
    return res.status(500).json({ error: message });
  }
});

// ===========================
// 🧑 Admin: Get List of Users
// ===========================
/**
 * @route   GET /api/users
 * @desc    Return mock user list (replace with real DB logic as needed)
 */
router.get('/users', (req, res) => {
  const users = [
    { id: 1, name: 'Alice', role: 'admin' },
    { id: 2, name: 'Bob', role: 'editor' },
    { id: 3, name: 'Charlie', role: 'viewer' },
    { id: 4, name: 'Diana', role: 'contributor' },
  ];
  res.status(200).json(users);
});

export default router;
