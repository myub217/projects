import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="btn btn-sm btn-ghost"
      aria-label="Toggle Theme"
    >
      {theme === "dark" ? <FaSun className="text-warning" /> : <FaMoon className="text-accent" />}
    </button>
  );
};

export default ThemeToggle;