// src/layout/Header.tsx
import React from "react";

type HeaderProps = {
  toggleTheme: () => void;
  currentTheme: "light" | "dark";
};

const Header: React.FC<HeaderProps> = ({ toggleTheme, currentTheme }) => {
  return (
    <header className="bg-white dark:bg-gray-900 p-4 shadow-md flex justify-between items-center">
      <div>JP Visual & Docs</div>
      <button onClick={toggleTheme} aria-label="Toggle Dark Mode">
        {currentTheme === "light" ? "🌞" : "🌙"}
      </button>
    </header>
  );
};

export default Header;