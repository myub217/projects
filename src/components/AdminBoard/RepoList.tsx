import { useEffect, useState, useMemo } from 'react';
import apiClient from '@/api/apiClient';

/**
 * ✅ Repo Interface
 */
interface Repo {
  id: number;
  name: string;
  html_url: string;
  description?: string;
  language?: string;
  stargazers_count?: number;
  forks_count?: number;
}

/**
 * ✅ GitHub username & repo name from env
 */
const repoName = import.meta.env.VITE_GITHUB_REPO_NAME || 'myub217/projects';
const githubUsername = repoName.split('/')[0];

/**
 * ✅ RepoList Component
 */
function RepoList() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [languageFilter, setLanguageFilter] = useState('All');

  useEffect(() => {
    apiClient
      .getRepoList(githubUsername)
      .then((data: any[]) => {
        const formatted = data.map((r) => ({
          id: r.id,
          name: r.name,
          html_url: r.html_url || r.url,
          description: r.description,
          language: r.language,
          stargazers_count: r.stargazers_count,
          forks_count: r.forks_count,
        }));
        setRepos(formatted);
      })
      .catch((err) => {
        console.error('❌ Error fetching repos:', err);
        setError('เกิดข้อผิดพลาดในการโหลดข้อมูล');
      })
      .finally(() => setLoading(false));
  }, []);

  const languages = useMemo(() => {
    const set = new Set<string>();
    repos.forEach((r) => r.language && set.add(r.language));
    return ['All', ...Array.from(set).sort()];
  }, [repos]);

  const filteredRepos = useMemo(() => {
    return repos.filter((repo) => {
      const matchLang = languageFilter === 'All' || repo.language === languageFilter;
      const matchSearch = repo.name.toLowerCase().includes(search.toLowerCase());
      return matchLang && matchSearch;
    });
  }, [repos, search, languageFilter]);

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-bold">📦 GitHub Repositories</h2>

      {/* 🔍 Search & Filter */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <input
          type="text"
          placeholder="🔎 ค้นหา repository..."
          className="input input-bordered w-full sm:w-1/2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="select select-bordered w-full sm:w-40"
          value={languageFilter}
          onChange={(e) => setLanguageFilter(e.target.value)}
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang === 'All' ? '🌐 ทุกภาษา' : lang}
            </option>
          ))}
        </select>
      </div>

      {loading && <div className="animate-pulse">🔄 กำลังโหลดข้อมูล...</div>}
      {error && <div className="text-red-600">❌ {error}</div>}
      {!loading && !error && filteredRepos.length === 0 && (
        <div className="text-gray-500">📭 ไม่พบ repository ที่ตรงกับเงื่อนไข</div>
      )}

      {/* ✅ Repo List */}
      <ul className="space-y-4">
        {filteredRepos.map((repo) => (
          <li key={repo.id} className="rounded-xl border p-4 shadow transition hover:shadow-lg">
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-blue-600 hover:text-blue-800"
            >
              {repo.name}
            </a>
            {repo.description && <p className="mt-1 text-sm text-gray-700">{repo.description}</p>}
            <div className="mt-2 text-sm text-gray-500 flex flex-wrap items-center gap-4">
              {repo.language && <span>🧠 {repo.language}</span>}
              {typeof repo.stargazers_count === 'number' && <span>⭐ {repo.stargazers_count}</span>}
              {typeof repo.forks_count === 'number' && <span>🍴 {repo.forks_count}</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepoList;
