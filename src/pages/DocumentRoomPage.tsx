// src/pages/DocumentRoomPage.tsx

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DocumentRoom from '@components/DocumentRoom';
import ThemeToggleButton from '@components/SecretRoom/ThemeToggleButton';

const DocumentRoomPage: React.FC = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const raw = localStorage.getItem('auth');
    if (!raw) {
      navigate('/login', { replace: true });
      return;
    }

    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, [navigate]);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/login', { replace: true });
  };

  return (
    <main className="min-h-screen bg-base-100 text-base-content px-4 py-8 sm:px-6 lg:px-10 transition-colors duration-300">
      <section className="max-w-6xl mx-auto space-y-10">
        {/* 🔹 Header */}
        <header className="text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            📄 ห้องขอเอกสารธุรกิจ – JP Visual
          </h1>
          <p className="text-sm sm:text-base text-muted-content">
            สำหรับขอเอกสารที่ออกโดยบริษัท เช่น หนังสือรับรอง, รายการจดทะเบียน, สัญญาทางธุรกิจ ฯลฯ
          </p>
        </header>

        {/* 🔸 Document Section */}
        <DocumentRoom />

        {/* 🔸 Footer */}
        <footer className="pt-10 flex flex-col sm:flex-row justify-between items-center gap-4 border-t border-base-300 text-xs text-muted-content">
          <p>
            © {new Date().getFullYear()} JP Visual & Docs — ข้อมูลภายใน ใช้เฉพาะผู้ได้รับอนุญาต
          </p>
          <div className="flex items-center gap-4">
            <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
            <button
              className="btn btn-sm btn-error"
              onClick={handleLogout}
              aria-label="Logout"
            >
              🚪 ออกจากระบบ
            </button>
          </div>
        </footer>
      </section>
    </main>
  );
};

export default DocumentRoomPage;