// src/components/ThemeToggle.tsx
import React, { useEffect, useState } from "react";

const ThemeToggle: React.FC = () => {
  // ดึงค่าเริ่มต้นจาก localStorage หรือ media query
  function getInitialTheme(): "light" | "dark" {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
      if (savedTheme === "light" || savedTheme === "dark") return savedTheme;
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark ? "dark" : "light";
    }
    return "light";
  }

  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="สลับโหมดแสง/มืด"
      className="px-4 py-2 rounded-xl bg-primary text-white hover:bg-primary-dark transition duration-300 font-thai text-sm md:text-base focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      type="button"
    >
      {theme === "light" ? "🌙 โหมดกลางคืน" : "☀️ โหมดกลางวัน"}
    </button>
  );
};

export default ThemeToggle;