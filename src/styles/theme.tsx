import React from "react";

type HeaderProps = {
  toggleTheme: () => void;
  currentTheme: "light" | "dark";
};

const Header: React.FC<HeaderProps> = ({ toggleTheme, currentTheme }) => {
  return (
    <header
      className="bg-white dark:bg-gray-900 shadow-md p-4 flex items-center justify-between"
      role="banner"
    >
      <h1 className="text-xl font-bold text-gray-800 dark:text-gray-100 tracking-tight">
        JP Visual & Docs
      </h1>

      <button
        onClick={toggleTheme}
        aria-label={`สลับโหมด ${currentTheme === "light" ? "กลางคืน" : "กลางวัน"}`}
        title={`สลับโหมด ${currentTheme === "light" ? "กลางคืน" : "กลางวัน"}`}
        className="p-2 rounded-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary"
      >
        <span className="text-xl" aria-hidden="true">
          {currentTheme === "light" ? "🌞" : "🌙"}
        </span>
      </button>
    </header>
  );
};

export default Header;