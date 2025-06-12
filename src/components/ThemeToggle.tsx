import React from "react";

type ThemeToggleProps = {
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  const isDark = theme === "dark";

  const buttonClass = isDark
    ? "bg-indigo-700 text-white border-indigo-600 hover:bg-indigo-800"
    : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="สลับโหมดธีมระหว่างสว่างและมืด"
      aria-pressed={isDark}
      title="สลับโหมดธีมระหว่างสว่างและมืด"
      className={`
        flex items-center gap-2 px-3 py-1 rounded-md border
        transition-colors duration-300 ease-in-out select-none
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-1
        ${buttonClass}
      `}
    >
      {/* ไอคอนแสดงโหมดธีม */}
      <span aria-hidden="true" className="text-lg">
        {isDark ? "🌙" : "🌞"}
      </span>

      {/* ข้อความแสดงสถานะโหมดธีม */}
      <span className="font-medium">
        {isDark ? "โหมดมืด" : "โหมดสว่าง"}
      </span>
    </button>
  );
};

export default ThemeToggle;