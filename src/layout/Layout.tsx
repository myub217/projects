// src/layout/Layout.tsx
import React, { ReactNode, useEffect, useState, useCallback } from "react";
import Header from "./Header";
import Footer from "./Footer";

export type Theme = "light" | "dark";

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [userSetTheme, setUserSetTheme] = useState(false);

  // ดึง theme เริ่มต้น
  useEffect(() => {
    const getInitialTheme = (): Theme => {
      try {
        const stored = localStorage.getItem("theme") as Theme | null;
        if (stored === "light" || stored === "dark") return stored;
      } catch {
        // ignore
      }

      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    };

    setTheme(getInitialTheme());
    setUserSetTheme(!!localStorage.getItem("theme"));
  }, []);

  // อัปเดต <html> class
  useEffect(() => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");

    if (userSetTheme) {
      try {
        localStorage.setItem("theme", theme);
      } catch {
        // ignore
      }
    }
  }, [theme, userSetTheme]);

  // ติดตาม system theme หากผู้ใช้ไม่ตั้งเอง
  useEffect(() => {
    if (userSetTheme) return;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) =>
      setTheme(e.matches ? "dark" : "light");

    mq.addEventListener("change", handleChange);
    return () => mq.removeEventListener("change", handleChange);
  }, [userSetTheme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      setUserSetTheme(true);
      try {
        localStorage.setItem("theme", next);
      } catch {
        // ignore
      }
      return next;
    });
  }, []);

  return (
    <>
      {/* Skip to Content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-pink-600 focus:text-white focus:px-4 focus:py-2 focus:rounded z-50"
      >
        ข้ามไปยังเนื้อหาหลัก
      </a>

      <div
        className={`flex flex-col min-h-screen transition-colors duration-300 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 ${className}`}
      >
        <Header theme={theme} toggleTheme={toggleTheme} />

        <main
          id="main-content"
          role="main"
          tabIndex={-1}
          className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10"
        >
          {children}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Layout;