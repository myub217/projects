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
      className={`
        btn btn-sm btn-outline transition-colors duration-300 ease-in-out
        ${isDark ? "btn-primary" : "btn-neutral"}
      `}
    >
      <span aria-hidden="true" className="text-lg">
        {isDark ? <FaMoon /> : <FaSun />}
      </span>
      <span className="font-medium">
        {isDark ? "โหมดมืด" : "โหมดสว่าง"}
      </span>
    </button>
  );
};

export default ThemeToggle;