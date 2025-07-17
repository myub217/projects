// src/components/SecretRoom/ThemeToggleButton.tsx

import React, { useEffect, useState } from 'react';

const ThemeToggleButton: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    const initial = stored || (prefersDark ? 'dark' : 'light');
    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  const isDark = theme === 'dark';
  const label = isDark ? 'โหมดสว่าง' : 'โหมดมืด';
  const icon = isDark ? '🌞' : '🌙';

  return (
    <button
      onClick={toggleTheme}
      title={`สลับไปยัง ${label}`}
      className="btn bg-primary text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg font-medium text-sm sm:text-base shadow-md hover:shadow-lg transition duration-300 flex items-center gap-2"
    >
      <span>{icon}</span>
      <span className="hidden sm:inline">{`เปลี่ยนเป็น ${label}`}</span>
      <span className="inline sm:hidden">{label}</span>
    </button>
  );
};

export default ThemeToggleButton;