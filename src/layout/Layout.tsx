import React, { ReactNode, useEffect, useState, useCallback } from "react";

import Header from "./Header";
import Footer from "./Footer";

export type Theme = "light" | "dark";

export interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [userSetTheme, setUserSetTheme] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const storedTheme = localStorage.getItem("theme") as Theme | null;
      if (storedTheme === "light" || storedTheme === "dark") {
        setTheme(storedTheme);
        setUserSetTheme(true);
      } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(prefersDark ? "dark" : "light");
        setUserSetTheme(false);
      }
    } catch {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      setUserSetTheme(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    if (userSetTheme) {
      try {
        localStorage.setItem("theme", theme);
      } catch {
        // localStorage may not be available in some environments
      }
    }
  }, [theme, userSetTheme]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (userSetTheme) return;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    if (mq.addEventListener) {
      mq.addEventListener("change", handler);
    } else {
      // For Safari and older browsers
      // @ts-ignore
      mq.addListener(handler);
    }

    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener("change", handler);
      } else {
        // @ts-ignore
        mq.removeListener(handler);
      }
    };
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
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-pink-600 focus:text-white focus:px-4 focus:py-2 focus:rounded z-50"
      >
        ข้ามไปยังเนื้อหาหลัก
      </a>

      <div
        aria-live="polite"
        role="application"
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