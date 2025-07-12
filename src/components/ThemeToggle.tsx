import React, { useEffect, useState } from "react";

const THEME_KEY = "app-theme";
type Theme = "platinum" | "platinum-dark";

// ดึง theme เริ่มต้นจาก localStorage หรือ system preference
const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "platinum";
  const stored = localStorage.getItem(THEME_KEY);
  if (stored === "platinum" || stored === "platinum-dark") {
    return stored as Theme;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "platinum-dark"
    : "platinum";
};

// ตั้งค่า theme: class + data-theme
const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  root.setAttribute("data-theme", theme);
  root.classList.toggle("dark", theme === "platinum-dark");
};

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    applyTheme(theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "platinum" ? "platinum-dark" : "platinum"));
  };

  const isLight = theme === "platinum";

  return (
    <button
      onClick={toggleTheme}
      aria-label={`เปลี่ยนเป็นโหมด${isLight ? "มืด" : "สว่าง"}`}
      title={`สลับเป็นโหมด${isLight ? "มืด" : "สว่าง"}`}
      type="button"
      className="p-2 rounded-full transition-colors duration-300 bg-base-200 hover:bg-base-300 text-base-content focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      {isLight ? (
        // ☀️ Light Mode Icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95-6.95l-1.414 1.414M6.464 17.536l-1.414 1.414m12.728 0l-1.414-1.414M6.464 6.464L5.05 5.05" />
        </svg>
      ) : (
        // 🌙 Dark Mode Icon
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;