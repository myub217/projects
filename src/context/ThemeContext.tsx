// src/context/ThemeContext.tsx
import React, {
  createContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
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

  const applyTheme = useCallback((newTheme: Theme) => {
    setTheme(newTheme);

    const root = document.documentElement;
    root.setAttribute("data-theme", newTheme);

    if (newTheme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const savedTheme = localStorage.getItem("theme") as Theme | null;

    if (savedTheme === "light" || savedTheme === "dark") {
      applyTheme(savedTheme);
      return;
    }

    // ถ้าไม่มี saved theme ให้ใช้ prefers-color-scheme
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    applyTheme(prefersDark.matches ? "dark" : "light");

    const listener = (e: MediaQueryListEvent) => {
      applyTheme(e.matches ? "dark" : "light");
    };

    // รองรับ browser เก่าและใหม่
    if ("addEventListener" in prefersDark) {
      prefersDark.addEventListener("change", listener);
    } else {
      prefersDark.addListener(listener);
    }

    return () => {
      if ("removeEventListener" in prefersDark) {
        prefersDark.removeEventListener("change", listener);
      } else {
        prefersDark.removeListener(listener);
      }
    };
  }, [applyTheme]);

  useEffect(() => {
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // ป้องกัน error เช่น incognito mode
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};