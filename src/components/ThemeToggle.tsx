import React from "react";

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="btn btn-sm btn-outline btn-primary"
      aria-label="Toggle theme"
      title="Toggle light/dark theme"
    >
      {theme === "light" ? "🌞 Light" : "🌙 Dark"}
    </button>
  );
};

export default ThemeToggle;