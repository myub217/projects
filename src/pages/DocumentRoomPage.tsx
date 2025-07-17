// ✅ src/pages/DocumentRoomPage.tsx – เวอร์ชันสมบูรณ์พร้อมใช้งานจริง รองรับ Theme + Responsive

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
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
  };

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/login', { replace: true });
  };

  return (
    <main className="min-h-screen bg-base-100 text-base-content px-4 py-8 sm:px-6 lg:px-12 transition-colors duration-300">
      <section className="max-w-7xl mx-auto space-y-12">
        {/* 🔹 Header */}
        <header className="text-center space-y-3">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary">
            📄 ห้องขอเอกสารธุรกิจ – JP Visual
          </h1>
          <p className="text-sm sm:text-base text-muted-content max-w-2xl mx-auto">
            สำหรับขอเอกสารที่ออกโดยบริษัท เช่น หนังสือรับรอง รายการจดทะเบียน สัญญาทางธุรกิจ ฯลฯ
          </p>
        </header>

        {/* 🔸 Document Section */}
        <DocumentRoom />

        {/* 🔻 Footer */}
        <footer className="pt-10 border-t border-base-300 text-xs text-muted-content flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>
            © {new Date().getFullYear()} JP Visual & Docs — สำหรับผู้ได้รับสิทธิ์เท่านั้น
          </p>
          <div className="flex items-center gap-4">
            <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
            <button
              onClick={handleLogout}
              className="btn btn-sm btn-error"
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