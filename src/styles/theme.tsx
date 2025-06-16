// src/layout/Header.tsx
import React from "react";

type HeaderProps = {
  toggleTheme: () => void;
  currentTheme: "light" | "dark";
};

const Header: React.FC<HeaderProps> = ({ toggleTheme, currentTheme }) => {
  return (
    <header className="bg-white dark:bg-gray-900 p-4 shadow-md flex justify-between items-center">
      <div className="text-xl font-bold text-gray-800 dark:text-gray-100">
        JP Visual & Docs
      </div>
      <button
        onClick={toggleTheme}
        aria-label="Toggle Dark Mode"
        title="Toggle Dark Mode"
        className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        {currentTheme === "light" ? "🌞" : "🌙"}
      </button>
    </header>
  );
};

export default Header;