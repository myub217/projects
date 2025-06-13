import React, { createContext, useState, useContext, useEffect } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * ThemeProvider - บริบทสำหรับจัดการโหมดธีม (แสง/มืด)
 * - อ่านค่าเริ่มต้นจาก localStorage หรือ prefers-color-scheme
 * - อัพเดต class "dark" บน <html> อัตโนมัติ
 */
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const getInitialTheme = (): Theme => {
    if (typeof window !== "undefined" && window.localStorage) {
      const storedTheme = localStorage.getItem("theme") as Theme | null;
      if (storedTheme === "light" || storedTheme === "dark") {
        return storedTheme;
      }
      // ตรวจสอบ prefers-color-scheme หากไม่มีค่าใน localStorage
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return prefersDark ? "dark" : "light";
    }
    // ค่าเริ่มต้น fallback
    return "light";
  };

  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

/**
 * useTheme - Hook สำหรับเข้าถึง context ธีม
 * ต้องใช้ภายใน ThemeProvider เท่านั้น
 */
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme ต้องใช้ภายใน ThemeProvider เท่านั้น");
  }
  return context;
};