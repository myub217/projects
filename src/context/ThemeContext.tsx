import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";

type Theme = "light" | "dark";

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

  // ฟังก์ชันตั้ง theme ทั้งบน state และ attribute html
  const applyTheme = useCallback((newTheme: Theme) => {
    setTheme(newTheme);
    if (typeof document !== "undefined") {
      document.documentElement.setAttribute("data-theme", newTheme);
    }
  }, []);

  // โหลดธีมจาก localStorage หรือระบบปฏิบัติการ เมื่อ component mount
  useEffect(() => {
    if (typeof window === "undefined") return;

    const savedTheme = localStorage.getItem("theme") as Theme | null;

    if (savedTheme === "light" || savedTheme === "dark") {
      applyTheme(savedTheme);
    } else {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      applyTheme(mediaQuery.matches ? "dark" : "light");

      // ติดตั้ง listener กรณีระบบเปลี่ยน theme แบบ realtime
      const listener = (e: MediaQueryListEvent) => {
        applyTheme(e.matches ? "dark" : "light");
      };

      if ("addEventListener" in mediaQuery) {
        mediaQuery.addEventListener("change", listener);
      } else {
        // สำหรับ browser เก่า
        mediaQuery.addListener(listener);
      }

      return () => {
        if ("removeEventListener" in mediaQuery) {
          mediaQuery.removeEventListener("change", listener);
        } else {
          mediaQuery.removeListener(listener);
        }
      };
    }
  }, [applyTheme]);

  // เมื่อ theme เปลี่ยน ให้เก็บลง localStorage
  useEffect(() => {
    if (typeof window === "undefined") return;
    localStorage.setItem("theme", theme);
  }, [theme]);

  // toggle theme แบบใช้ useCallback เพื่อประสิทธิภาพ
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};