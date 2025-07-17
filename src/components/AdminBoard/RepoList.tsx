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
    <section className="p-4 md:p-8 max-w-7xl mx-auto" aria-label="GitHub Repositories Section">
      <h2 className="mb-6 text-2xl font-bold text-primary flex items-center gap-2">
        <span role="img" aria-label="package">
          📦
        </span>{' '}
        GitHub Repositories
      </h2>

      {/* 🔍 Search & Filter */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <input
          type="search"
          placeholder="🔎 ค้นหา repository..."
          className="input input-bordered w-full sm:w-1/2 rounded-md border border-border bg-base-100 text-foreground placeholder:text-muted px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          aria-label="ค้นหา repository"
          spellCheck={false}
        />
        <select
          className="select select-bordered w-full sm:w-44 rounded-md border border-border bg-base-100 text-foreground px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary transition"
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
        <p className="animate-pulse text-center text-muted">
          🔄 กำลังโหลดข้อมูล...
        </p>
      )}

      {error && (
        <p className="text-center text-error font-semibold">{error}</p>
      )}

      {!loading && !error && filteredRepos.length === 0 && (
        <p className="text-center text-muted">📭 ไม่พบ repository ที่ตรงกับเงื่อนไข</p>
      )}

      {/* 📃 Repo List */}
      <ul className="space-y-4">
        {filteredRepos.map((repo) => (
          <li
            key={repo.id}
            className="rounded-xl border border-border p-5 shadow-sm bg-base-100 dark:bg-base-200 transition hover:shadow-md"
          >
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-primary hover:underline transition"
            >
              {repo.name}
            </a>
            {repo.description && (
              <p className="mt-1 text-sm text-muted line-clamp-3">
                {repo.description}
              </p>
            )}
            <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-muted">
              {repo.language && (
                <span className="flex items-center gap-1">
                  <span role="img" aria-label="language">
                    🧠
                  </span>{' '}
                  {repo.language}
                </span>
              )}
              {typeof repo.stargazers_count === 'number' && (
                <span className="flex items-center gap-1">
                  <span role="img" aria-label="stars">
                    ⭐
                  </span>{' '}
                  {repo.stargazers_count}
                </span>
              )}
              {typeof repo.forks_count === 'number' && (
                <span className="flex items-center gap-1">
                  <span role="img" aria-label="forks">
                    🍴
                  </span>{' '}
                  {repo.forks_count}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default RepoList;