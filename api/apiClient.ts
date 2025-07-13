// apiClient.ts
/**
 * ✅ API Client: JP Visual & Docs
 * - ใช้งานร่วมกับ Express backend (/api)
 * - รองรับ fetch wrapper พร้อม error handling
 * - Export function สำหรับแต่ละ endpoint
 */

const API_BASE = "/api"; // ใช้ relative path สำหรับ frontend

type FetchOptions = RequestInit & {
  headers?: Record<string, string>;
};

/**
 * 🔁 Wrapper สำหรับ fetch พร้อม error handling
 */
async function apiFetch<T>(endpoint: string, options?: FetchOptions): Promise<T> {
  const res = await fetch(`${API_BASE}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers || {}),
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
 * 📌 Example: Get current user info
 */
export const getCurrentUser = (): Promise<{ id: string; name: string; role: string }> =>
  apiFetch("/user");

/**
 * 📌 Example: Get repository list
 */
export const getRepoList = (): Promise<{ id: string; name: string; url: string }[]> =>
  apiFetch("/repos");

/**
 * 📌 Example: Login
 */
export const login = (
  username: string,
  password: string
): Promise<{ token: string }> =>
  apiFetch("/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });

export default {
  getCurrentUser,
  getRepoList,
  login,
};