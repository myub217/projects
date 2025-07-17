// ✅ src/pages/SecretRoomPage.tsx – เวอร์ชันสมบูรณ์ พร้อมใช้งานจริง (Dev Partner Mode)

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
  const [authUser, setAuthUser] = useState('');
  const [authRole, setAuthRole] = useState('');
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem('authUser');
    const role = localStorage.getItem('authRole');

    if (!user || !role) {
      navigate('/login', { replace: true });
      return;
    }

    setAuthUser(user);
    setAuthRole(role);

    const savedTheme = localStorage.getItem('app-theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    setTheme(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme === 'dark');
    document.documentElement.setAttribute(
      'data-theme',
      initialTheme === 'dark' ? 'business-dark' : 'business'
    );

    setReady(true);
  }, [navigate]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('app-theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    document.documentElement.setAttribute(
      'data-theme',
      newTheme === 'dark' ? 'business-dark' : 'business'
    );
  };

  if (!ready) return null;

  return (
    <main className="min-h-screen bg-base-100 text-base-content">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        {/* 🔷 Header */}
        <div className="bg-base-200 p-6 rounded-xl shadow-xl">
          <HeaderBlock />
        </div>

        {/* 👋 Greeting */}
        <section className="bg-base-100 p-6 rounded-xl shadow-md space-y-3">
          <h1 className="text-2xl font-bold text-primary">👋 สวัสดี {authUser}</h1>
          <p className="text-base-content">
            คุณอยู่ใน <span className="text-secondary font-semibold">Secret Room</span> ของ JP - Visual & Docs
          </p>
          <p className="text-sm text-muted">
            เข้าถึงข้อมูลระบบ เอกสาร และบันทึกการใช้งานภายในด้านล่าง
          </p>
        </section>

        {/* 📊 Status */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SystemCheckCard />
          <AccessLogTable />
        </section>

        {/* 📄 Documents */}
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-primary">📄 เอกสารในระบบ</h2>
            <button
              onClick={() => navigate('/documents')}
              className="btn btn-sm btn-outline btn-primary"
            >
              ดูทั้งหมด
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {documentsList?.length > 0 ? (
              documentsList.slice(0, 6).map((doc) => (
                <DocumentCard
                  key={doc.id}
                  id={doc.id}
                  title={doc.title}
                  description={doc.description}
                  url={doc.url}
                  tags={doc.tags}
                />
              ))
            ) : (
              <div className="col-span-full text-center text-sm text-muted">
                ❌ ไม่มีข้อมูลเอกสาร
              </div>
            )}
          </div>
        </section>

        {/* ⚙️ Footer */}
        <footer className="border-t border-base-300 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-content">
          <p>© {new Date().getFullYear()} JP - Visual & Docs. Internal Use Only.</p>
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