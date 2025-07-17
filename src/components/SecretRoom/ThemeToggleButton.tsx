// src/components/SecretRoom/ThemeToggleButton.tsx

import React, { useEffect, useState } from 'react';

type ThemeToggleButtonProps = {
  theme?: 'light' | 'dark';
  toggleTheme?: () => void;
};

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({
  theme: externalTheme,
  toggleTheme: externalToggle,
}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    if (externalTheme) {
      setTheme(externalTheme);
      document.documentElement.setAttribute('data-theme', externalTheme);
      return;
    }

    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
    const initial = storedTheme || (prefersDark ? 'dark' : 'light');

    setTheme(initial);
    document.documentElement.setAttribute('data-theme', initial);
  }, [externalTheme]);

  const internalToggle = () => {
    const next = theme === 'light' ? 'dark' : 'light';
    setTheme(next);
    localStorage.setItem('theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  const toggle = externalToggle || internalToggle;
  const isDark = theme === 'dark';
  const label = isDark ? 'โหมดสว่าง' : 'โหมดมืด';
  const icon = isDark ? '🌞' : '🌙';

  return (
    <button
      onClick={toggle}
      title={`สลับไปยัง ${label}`}
      aria-label={`Toggle theme to ${label}`}
      className="btn btn-primary text-white rounded-xl px-4 sm:px-6 py-2 sm:py-2.5 text-sm sm:text-base font-medium shadow transition-all duration-300 flex items-center gap-2"
    >
      <span className="text-lg sm:text-xl">{icon}</span>
      <span className="hidden sm:inline">{`เปลี่ยนเป็น ${label}`}</span>
      <span className="inline sm:hidden">{label}</span>
    </button>
  );
};

export default ThemeToggleButton;