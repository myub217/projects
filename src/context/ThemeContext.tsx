import React from "react";

interface ThemeToggleProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";

  return (
    <button
      type="button"
      role="switch"
      aria-checked={!isLight}
      onClick={toggleTheme}
      aria-label={`สลับเป็นโหมด ${isLight ? "มืด" : "สว่าง"}`}
      title="สลับโหมดธีม"
      className="
        p-2 rounded 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        transition-colors duration-300
        bg-gray-200 dark:bg-gray-700
        hover:bg-gray-300 dark:hover:bg-gray-600
        "
    >
      {isLight ? (
        // ไอคอนดวงอาทิตย์ (Sun icon) สำหรับโหมดสว่าง
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m8.485-8.485h1M3 12H2m15.364 6.364l.707.707M6.343 6.343l-.707-.707m12.728 0l-.707-.707M6.343 17.657l-.707.707M12 7a5 5 0 100 10 5 5 0 000-10z"
          />
        </svg>
      ) : (
        // ไอคอนพระจันทร์ (Moon icon) สำหรับโหมดมืด
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
          />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;