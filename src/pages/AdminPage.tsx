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
      className="min-h-screen bg-base-100 px-4 py-8 sm:px-6 lg:px-10"
      aria-label="JP Visual Admin Panel"
      role="main"
      tabIndex={-1}
    >
      <div className="mx-auto max-w-7xl space-y-10">
        {/* 🔹 Page Title */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight">
              🛡️ JP Visual Admin Panel
            </h1>
            <p className="text-sm text-muted-content">
              ระบบบริหารจัดการหลังบ้านสำหรับทีมงาน JP Visual
            </p>
          </div>

          <div className="flex items-center gap-3">
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
        </div>

        {/* 🔸 Dashboard Summary */}
        <section aria-label="ภาพรวมระบบ">
          <Dashboard />
        </section>

        {/* 🔸 User Management */}
        <section aria-label="การจัดการผู้ใช้งาน">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
            <h2 className="text-xl font-semibold text-base-content flex items-center gap-2">
              👥 ผู้ดูแลระบบ
            </h2>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-md bg-primary text-white text-sm font-medium px-4 py-2 shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
            >
              ➕ เพิ่มผู้ดูแล
            </button>
          </div>
          <UserTable />
        </section>

        {/* 🔸 Repo List */}
        <section aria-label="รายการโปรเจกต์">
          <h2 className="text-xl font-semibold text-base-content mb-4 flex items-center gap-2">
            📦 โปรเจกต์ที่ดูแล
          </h2>
          <RepoList />
        </section>
      </div>
    </main>
  );
};

export default AdminPage;