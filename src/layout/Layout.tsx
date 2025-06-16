import React, { ReactNode, useEffect, useState, useCallback } from "react";

import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  // Theme state: "light" or "dark"
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Track if user explicitly set theme
  const [userSetTheme, setUserSetTheme] = useState(false);

  // On mount: load theme from localStorage or system preference
  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      const storedTheme = localStorage.getItem("theme") as
        | "light"
        | "dark"
        | null;

      if (storedTheme === "light" || storedTheme === "dark") {
        setTheme(storedTheme);
        setUserSetTheme(true);
      } else {
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        setTheme(prefersDark ? "dark" : "light");
        setUserSetTheme(false);
      }
    } catch {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setTheme(prefersDark ? "dark" : "light");
      setUserSetTheme(false);
    }
  }, []);

  // Sync <html> class and localStorage when theme or userSetTheme changes
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
        // localStorage may not work (private mode)
      }
    }
  }, [theme, userSetTheme]);

  // Listen to system theme changes if user hasn't explicitly set theme
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (userSetTheme) return;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");

    const handler = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? "dark" : "light");
    };

    mq.addEventListener("change", handler);

    return () => {
      mq.removeEventListener("change", handler);
    };
  }, [userSetTheme]);

  // Toggle theme and mark as user set
  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      setUserSetTheme(true);
      try {
        localStorage.setItem("theme", next);
      } catch {
        // fallback no-op
      }
      return next;
    });
  }, []);

  return (
    <div
      aria-live="polite"
      role="application"
      className={`flex flex-col min-h-screen transition-colors duration-300 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 ${className}`}
    >
      {/* Header */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Main content area with skip-to-main keyboard focus */}
      <main
        role="main"
        tabIndex={-1}
        className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10"
      >
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;