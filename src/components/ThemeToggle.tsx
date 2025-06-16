import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

type ThemeToggleProps = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="สลับโหมดธีมระหว่างสว่างและมืด"
      aria-pressed={isDark}
      title={`โหมด${isDark ? "มืด" : "สว่าง"}`}
      data-theme={theme}
      className={`
        btn btn-sm btn-outline flex items-center gap-2
        transition-all duration-300 ease-in-out
        ${isDark ? "btn-primary text-white bg-gray-800" : "btn-neutral text-gray-900 bg-white"}
        focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
        focus-visible:ring-indigo-500 dark:focus-visible:ring-indigo-400
        dark:focus-visible:ring-offset-gray-900
      `}
    >
      <span
        aria-hidden="true"
        className="text-lg transition-transform duration-300 ease-in-out transform hover:rotate-12"
      >
        {isDark ? <FaMoon /> : <FaSun />}
      </span>
      <span className="font-medium select-none">
        {isDark ? "โหมดมืด" : "โหมดสว่าง"}
      </span>
    </button>
  );
};

export default ThemeToggle;