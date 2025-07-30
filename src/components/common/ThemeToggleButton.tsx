import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggleButton = () => {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark";
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    const newTheme = isDark ? "dark" : "light";

    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-circle btn-ghost"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-400" />
      ) : (
        <Moon className="h-5 w-5 text-gray-800" />
      )}
    </button>
  );
};

export default ThemeToggleButton;
