// src/api/apiClient.ts

/**
 * ✅ API Client: JP Visual & Docs
 * - ใช้งานร่วมกับ Express backend (/api)
 * - รองรับ fetch wrapper พร้อม error handling
 * - Export function สำหรับแต่ละ endpoint
 */

const API_BASE = import.meta.env.VITE_API_BASE_URL || "/api"; // ใช้จาก .env หรือ fallback เป็น relative path

type FetchOptions = RequestInit & {
  headers?: Record<string, string>;
};

/**
 * 🔁 Wrapper สำหรับ fetch พร้อม error handling
 */
async function apiFetch<T>(endpoint: string, options?: FetchOptions = {}): Promise<T> {
  const url = `${API_BASE}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;

  const res = await fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  if (!res.ok) {
    let errorText = "";
    try {
      errorText = await res.text();
    } catch {
      errorText = "Unknown error";
    }
    throw new Error(`API Error: ${res.status} ${res.statusText} - ${errorText}`);
  }

  return res.json();
}

/**
 * 📌 Get current user info
 */
export const getCurrentUser = () =>
  apiFetch<{ id: string; name: string; role: string }>("/user");

/**
 * 📌 Get list of repositories
 */
export const getRepoList = () =>
  apiFetch<{ id: string; name: string; url: string }[]>("/repos");

/**
 * 📌 Login endpoint
 */
export const login = (username: string, password: string) =>
  apiFetch<{ token: string }>("/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });

/**
 * 📌 Example: Get repository summary by repo name
 */
export const getRepoSummary = (repo: string) =>
  apiFetch(`/repos/${repo}/summary`);

/**
 * 📌 Example: Trigger manual sync
 */
export const triggerSync = () =>
  apiFetch<{ status: string }>("/sync", { method: "POST" });

/**
 * 📌 Example: Get GitHub raw content
 */
export const getGithubRawFile = (owner: string, repo: string, path: string, branch = "main") =>
  apiFetch(`/github/raw?owner=${owner}&repo=${repo}&path=${encodeURIComponent(path)}&branch=${branch}`);

/**
 * 📦 Export API
 */
const apiClient = {
  getCurrentUser,
  getRepoList,
  login,
  getRepoSummary,
  triggerSync,
  getGithubRawFile,
};

export default apiClient;