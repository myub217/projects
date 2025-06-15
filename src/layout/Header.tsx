import React from "react";

type HeaderProps = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  return (
    <header className="p-4 shadow-md bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">JP Visual & Docs</h1>
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded bg-blue-600 text-white"
          aria-label="Toggle theme"
        >
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </header>
  );
};

export default Header;