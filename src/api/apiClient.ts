// src/api/apiClient.ts

/**
 * ✅ API Client: JP Visual & Docs
 * - ใช้งานร่วมกับ Express backend (/api)
 * - รองรับ fetch wrapper พร้อม error handling
 */

const API_BASE = import.meta.env.VITE_API_BASE_URL?.trim() || "/api";

type FetchOptions = RequestInit & {
  headers?: Record<string, string>;
};

function buildUrl(endpoint: string): string {
  return `${API_BASE}${endpoint.startsWith("/") ? endpoint : `/${endpoint}`}`;
}

/**
 * 🔁 Wrapper สำหรับ fetch พร้อม error handling
 */
async function apiFetch<T>(endpoint: string, options?: FetchOptions): Promise<T> {
  const url = buildUrl(endpoint);

  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(options?.headers ?? {}),
      },
    });

    if (!res.ok) {
      const errorText = await res.text().catch(() => "Unknown error");
      throw new Error(`API Error: ${res.status} ${res.statusText} - ${errorText}`);
    }

    return await res.json();
  } catch (err: any) {
    throw new Error(`Network Error: ${err.message || err}`);
  }
}

/**
 * 📌 API Endpoints
 */
export const getCurrentUser = () =>
  apiFetch<{ id: string; name: string; role: string }>("/user");

export const getRepoList = () =>
  apiFetch<{ id: string; name: string; url: string }[]>("/repos");

export const login = (username: string, password: string) =>
  apiFetch<{ token: string }>("/login", {
    method: "POST",
    body: JSON.stringify({ username, password }),
  });

export const getRepoSummary = (repo: string) =>
  apiFetch(`/repos/${repo}/summary`);

export const triggerSync = () =>
  apiFetch<{ status: string }>("/sync", { method: "POST" });

export const getGithubRawFile = (
  owner: string,
  repo: string,
  path: string,
  branch = "main"
) =>
  apiFetch(
    `/github/raw?owner=${owner}&repo=${repo}&path=${encodeURIComponent(path)}&branch=${branch}`
  );

/**
 * 📦 Unified Export
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