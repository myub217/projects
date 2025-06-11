import React from "react";

interface ThemeToggleProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      aria-label="สลับโหมดธีมระหว่างสว่างและมืด"
      title="สลับโหมดธีมระหว่างสว่างและมืด"
      aria-pressed={isDark}
      type="button"
      className={`
        flex items-center gap-2 px-3 py-1 rounded-md border
        transition-colors duration-300
        focus:outline-none focus:ring-2 focus:ring-indigo-500
        ${isDark
          ? "bg-indigo-700 text-white border-indigo-600 hover:bg-indigo-800"
          : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
        }
      `}
    >
      <span aria-hidden="true" role="img" aria-label={isDark ? "โหมดมืด" : "โหมดสว่าง"}>
        {isDark ? "🌙" : "🌞"}
      </span>
      {isDark ? "โหมดมืด" : "โหมดสว่าง"}
    </button>
  );
};

export default ThemeToggle;