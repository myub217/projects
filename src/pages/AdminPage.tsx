// src/pages/AdminPage.tsx

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from '@/components/AdminBoard/Dashboard';
import UserTable from '@/components/AdminBoard/UserTable';
import RepoList from '@/components/AdminBoard/RepoList';
import ThemeToggleButton from '@components/SecretRoom/ThemeToggleButton';

const AdminPage: React.FC = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const user = localStorage.getItem('authUser');
    const role = localStorage.getItem('authRole');
    if (!user || role !== 'admin') navigate('/login', { replace: true });

    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
  }, [navigate]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  return (
    <main
      className="min-h-screen bg-base-100 px-4 py-6 sm:px-6 lg:px-10 text-base-content transition-colors duration-300"
      aria-label="JP Visual Admin Panel"
      role="main"
      tabIndex={-1}
    >
      <div className="mx-auto max-w-7xl space-y-10">
        {/* 🔹 Header */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
              🛡️ JP Visual Admin Panel
            </h1>
            <p className="text-sm text-muted-content leading-snug">
              ระบบบริหารจัดการหลังบ้านสำหรับทีมงาน JP Visual
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
            <button
              className="btn btn-sm btn-error"
              onClick={() => {
                localStorage.removeItem('authUser');
                localStorage.removeItem('authRole');
                navigate('/login');
              }}
            >
              🚪 ออกจากระบบ
            </button>
          </div>
        </header>

        {/* 🔸 Dashboard Summary */}
        <section aria-label="ภาพรวมระบบ" className="rounded-xl bg-base-200 p-5 shadow-md">
          <Dashboard />
        </section>

        {/* 🔸 User Management */}
        <section aria-label="การจัดการผู้ใช้งาน" className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <h2 className="text-xl font-bold text-base-content flex items-center gap-2">
              👥 ผู้ดูแลระบบ
            </h2>
            <button
              type="button"
              className="btn btn-sm btn-primary"
            >
              ➕ เพิ่มผู้ดูแล
            </button>
          </div>
          <div className="overflow-x-auto bg-base-200 rounded-xl p-4 shadow-sm">
            <UserTable />
          </div>
        </section>

        {/* 🔸 Repo List */}
        <section aria-label="รายการโปรเจกต์" className="space-y-4">
          <h2 className="text-xl font-bold text-base-content flex items-center gap-2">
            📦 โปรเจกต์ที่ดูแล
          </h2>
          <div className="overflow-x-auto bg-base-200 rounded-xl p-4 shadow-sm">
            <RepoList />
          </div>
        </section>
      </div>
    </main>
  );
};

export default AdminPage;