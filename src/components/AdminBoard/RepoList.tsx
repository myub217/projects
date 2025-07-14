// src/pages/RepoList.tsx

import { useEffect, useState } from "react";
import apiClient from "@/api/apiClient";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description?: string;
  language?: string;
  stargazers_count?: number;
}

function RepoList() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .getRepoList()
      .then((data) => {
        setRepos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("❌ Error fetching repos:", err);
        setError("โหลดข้อมูลไม่สำเร็จ");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="p-4 animate-pulse">🔄 กำลังโหลดข้อมูล...</div>;
  }

  if (error) {
    return <div className="p-4 text-red-600">❌ {error}</div>;
  }

  if (repos.length === 0) {
    return <div className="p-4 text-gray-500">📭 ไม่พบ repository</div>;
  }

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-bold">📦 GitHub Repositories</h2>
      <ul className="space-y-4">
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="rounded-xl border p-4 shadow transition hover:shadow-lg"
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-blue-600 hover:text-blue-800"
            >
              {repo.name}
            </a>
            {repo.description && (
              <p className="mt-1 text-sm text-gray-700">{repo.description}</p>
            )}
            <div className="mt-2 text-sm text-gray-500 flex items-center space-x-4">
              {repo.language && <span>🧠 {repo.language}</span>}
              {typeof repo.stargazers_count === "number" && (
                <span>⭐ {repo.stargazers_count}</span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepoList;