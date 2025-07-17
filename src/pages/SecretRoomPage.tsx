// src/pages/SecretRoomPage.tsx

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeaderBlock from '@components/SecretRoom/HeaderBlock';
import AccessLogTable from '@components/SecretRoom/AccessLogTable';
import SystemCheckCard from '@components/SecretRoom/SystemCheckCard';
import ThemeToggleButton from '@components/SecretRoom/ThemeToggleButton';
import DocumentCard from '@components/DocumentRoom/DocumentCard';
import { documentsList } from '@data/documentsList';

const SecretRoomPage: React.FC = () => {
  const navigate = useNavigate();
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [authUser, setAuthUser] = useState<string | null>(null);
  const [authRole, setAuthRole] = useState<string | null>(null);

  useEffect(() => {
    const user = localStorage.getItem('authUser');
    const role = localStorage.getItem('authRole');
    if (!user || !role) {
      navigate('/login', { replace: true });
    } else {
      setAuthUser(user);
      setAuthRole(role);
    }

    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, [navigate]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
  };

  if (!authUser || !authRole) return null;

  return (
    <main className="min-h-screen px-4 py-6 bg-base-100 text-base-content sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-10 rounded-xl bg-base-200 p-5 sm:p-8 shadow-xl transition-colors duration-300">
        {/* 🔹 Header Block */}
        <HeaderBlock />

        {/* 🔸 Welcome Message */}
        <section className="space-y-4 text-sm sm:text-base text-muted-content">
          <p>
            👋 ยินดีต้อนรับ <span className="font-semibold text-primary">{authUser}</span>
          </p>
          <p>
            คุณกำลังอยู่ในพื้นที่ลับของ{' '}
            <span className="font-bold text-secondary">JP - Visual & Docs</span>
            <br />
            ตรวจสอบระบบ บันทึกการเข้าถึง และเอกสารภายในได้จากด้านล่างนี้
          </p>
        </section>

        {/* 🔸 System Monitor */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SystemCheckCard />
          <AccessLogTable />
        </div>

        {/* 🔸 Document Section */}
        <section className="space-y-4 pt-8">
          <h2 className="text-lg font-bold text-primary">📄 เอกสารที่มีในระบบ</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {documentsList.map((doc) => (
              <DocumentCard key={doc.id} {...doc} />
            ))}
          </div>
        </section>

        {/* 🔸 Footer */}
        <footer className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-base-300">
          <p className="text-xs text-muted-content">
            © {new Date().getFullYear()} JP - Visual & Docs. Internal Use Only.
          </p>

          <div className="flex items-center gap-4">
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
        </footer>
      </div>
    </main>
  );
};

export default SecretRoomPage;