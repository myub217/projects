// src/context/ThemeContext.tsx
import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";

export type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  // ฟังก์ชันตั้งธีมบน state และ attribute ของ <html>
  const applyTheme = useCallback((newTheme: Theme) => {
    setTheme(newTheme);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", newTheme);
      // หรือถ้าคุณใช้ tailwind dark mode class-based ให้ใช้ root.classList
      if (newTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }
  }, []);

  // โหลดธีมจาก localStorage หรือ prefers-color-scheme และตั้ง listener เปลี่ยนธีมอัตโนมัติ
  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedTheme = localStorage.getItem("theme") as Theme | null;

    if (savedTheme === "light" || savedTheme === "dark") {
      applyTheme(savedTheme);
    } else {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      applyTheme(mediaQuery.matches ? "dark" : "light");

      const listener = (e: MediaQueryListEvent) => {
        applyTheme(e.matches ? "dark" : "light");
      };

      if ("addEventListener" in mediaQuery) {
        mediaQuery.addEventListener("change", listener);
      } else {
        // สำหรับ browser เก่า
        mediaQuery.addListener(listener);
      }

      // cleanup function
      return () => {
        if ("removeEventListener" in mediaQuery) {
          mediaQuery.removeEventListener("change", listener);
        } else {
          mediaQuery.removeListener(listener);
        }
      };
    }
  }, [applyTheme]);

  // เมื่อ theme state เปลี่ยน ให้บันทึกลง localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // อาจเกิด error ในบาง environment เช่น private mode
    }
  }, [theme]);

  // ฟังก์ชัน toggle ธีม
  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      if (typeof window !== "undefined") {
        try {
          localStorage.setItem("theme", next);
        } catch {
          // ignore error
        }
      }
      if (typeof document !== "undefined") {
        if (next === "dark") {
          document.documentElement.classList.add("dark");
          document.documentElement.setAttribute("data-theme", "dark");
        } else {
          document.documentElement.classList.remove("dark");
          document.documentElement.setAttribute("data-theme", "light");
        }
      }
      return next;
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};