// src/components/AdminBoard/RepoList.tsx

import { useEffect, useState, useMemo } from 'react';
import apiClient from '@/api/apiClient';

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description?: string;
  language?: string;
  stargazers_count?: number;
  forks_count?: number;
}

const repoName = import.meta.env.VITE_GITHUB_REPO_NAME || 'myub217/projects';
const githubUsername = repoName.split('/')[0];

export default function RepoList() {
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
    <section className="p-4 md:p-8 max-w-7xl mx-auto" aria-label="GitHub Repositories Section">
      <h2 className="mb-6 text-2xl font-bold text-primary flex items-center gap-2">
        <span role="img" aria-label="package">
          📦
        </span>{' '}
        GitHub Repositories
      </h2>

      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <input
          type="search"
          placeholder="🔎 ค้นหา repository..."
          className="input input-bordered w-full md:w-1/2 rounded-md bg-base-100 text-foreground px-4 py-2"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="ค้นหา repository"
          spellCheck={false}
        />
        <select
          className="select select-bordered w-full md:w-48 rounded-md bg-base-100 text-foreground px-4 py-2"
          value={languageFilter}
          onChange={(e) => setLanguageFilter(e.target.value)}
          aria-label="กรองตามภาษาโปรแกรม"
        >
          {languages.map((lang) => (
            <option key={lang} value={lang}>
              {lang === 'All' ? '🌐 ทุกภาษา' : lang}
            </option>
          ))}
        </select>
      </div>

      {loading && (
        <p className="animate-pulse text-center text-muted">🔄 กำลังโหลดข้อมูล...</p>
      )}

      {error && (
        <p className="text-center text-error font-semibold">{error}</p>
      )}

      {!loading && !error && filteredRepos.length === 0 && (
        <p className="text-center text-muted">📭 ไม่พบ repository ที่ตรงกับเงื่อนไข</p>
      )}

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredRepos.map((repo) => (
          <li
            key={repo.id}
            className="rounded-xl border border-border p-5 bg-base-100 shadow-md hover:shadow-lg transition-all"
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-primary hover:underline break-words"
            >
              {repo.name}
            </a>
            {repo.description && (
              <p className="mt-2 text-sm text-muted line-clamp-3">
                {repo.description}
              </p>
            )}
            <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted">
              {repo.language && (
                <span className="flex items-center gap-1">
                  🧠 {repo.language}
                </span>
              )}
              {typeof repo.stargazers_count === 'number' && (
                <span className="flex items-center gap-1">
                  ⭐ {repo.stargazers_count}
                </span>
              )}
              {typeof repo.forks_count === 'number' && (
                <span className="flex items-center gap-1">
                  🍴 {repo.forks_count}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}