// src/main.tsx

import React, { useState, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/global.css'; // Tailwind + custom vars

import IndexPage from './pages/IndexPage';
import LoginPage from './pages/LoginPage';
import SecretRoomPage from './pages/SecretRoomPage';

// Constants
const THEME_KEY = 'app-theme';
export type ThemeMode = 'light' | 'dark';

// Main App Component
const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>('light');

  const applyTheme = useCallback((mode: ThemeMode) => {
    const root = document.documentElement;
    const isDark = mode === 'dark';

    root.classList.toggle('dark', isDark);
    root.setAttribute('data-theme', isDark ? 'bluewhite-dark' : 'bluewhite');

    localStorage.setItem(THEME_KEY, mode);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY) as ThemeMode | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme: ThemeMode =
      stored === 'dark' || (!stored && prefersDark) ? 'dark' : 'light';

    setTheme(initialTheme);
    applyTheme(initialTheme);
  }, [applyTheme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next: ThemeMode = prev === 'light' ? 'dark' : 'light';
      applyTheme(next);
      return next;
    });
  }, [applyTheme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage theme={theme} toggleTheme={toggleTheme} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/secret"
          element={<SecretRoomPage theme={theme} toggleTheme={toggleTheme} />}
        />
        <Route
          path="*"
          element={<div className="p-8 text-center text-xl text-red-600">404 - Not Found</div>}
        />
      </Routes>
    </BrowserRouter>
  );
};

// Mount App
const rootEl = document.getElementById('root');

if (rootEl) {
  ReactDOM.createRoot(rootEl).render(<App />);
} else {
  console.error('⚠️ Root element not found: #root');
}
