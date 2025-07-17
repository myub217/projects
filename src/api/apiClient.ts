// ✅ src/api/apiClient.ts – API Client: JP Visual & Docs

const API_BASE = import.meta.env.VITE_API_BASE_URL?.trim() || '/api';

type FetchOptions = RequestInit & {
  headers?: Record<string, string>;
};

function buildUrl(endpoint: string): string {
  return `${API_BASE}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
}

/**
 * 🔁 fetch wrapper พร้อม error handling
 */
async function apiFetch<T>(endpoint: string, options?: FetchOptions): Promise<T> {
  const url = buildUrl(endpoint);
  try {
    const res = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...(options?.headers ?? {}),
      },
    });

    if (!res.ok) {
      const errorText = await res.text().catch(() => 'Unknown error');
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
const getCurrentUser = () =>
  apiFetch<{ id: string; name: string; role: string }>('/user');

const getRepoList = () =>
  apiFetch<
    {
      id: number;
      name: string;
      html_url: string;
      description?: string;
      language?: string;
      stargazers_count?: number;
      forks_count?: number;
    }[]
  >('/repos');

const login = (username: string, password: string) =>
  apiFetch<{ token: string }>('/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });

const getRepoSummary = (repo: string) =>
  apiFetch<{ summary: string }>(`/repos/${repo}/summary`);

const triggerSync = () =>
  apiFetch<{ status: string }>('/sync', { method: 'POST' });

const getGithubRawFile = (
  owner: string,
  repo: string,
  path: string,
  branch = 'main'
) =>
  apiFetch<string>(
    `/github/raw?owner=${owner}&repo=${repo}&path=${encodeURIComponent(path)}&branch=${branch}`
  );

/**
 * 📦 Unified Export
 */
const apiClient = {
  apiFetch,
  getCurrentUser,
  getRepoList,
  login,
  getRepoSummary,
  triggerSync,
  getGithubRawFile,
};

export default apiClient;