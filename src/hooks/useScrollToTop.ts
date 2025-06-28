import { useEffect, useState } from "react";

type Theme = "light" | "dark";
type StoredTheme = string | null;

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme | undefined>(undefined);

  const applyTheme = (t: Theme) => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.toggle("dark", t === "dark");
      document.documentElement.setAttribute("data-theme", t);
    }
    setTheme(t);
  };

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      applyTheme("light");
      return;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
    let storedTheme: StoredTheme = null;

    try {
      storedTheme = localStorage.getItem("theme");
    } catch {
      // ignore localStorage errors (e.g. incognito mode)
    }

    if (storedTheme === "light" || storedTheme === "dark") {
      applyTheme(storedTheme);
    } else {
      applyTheme(prefersDark.matches ? "dark" : "light");
    }

    const handleSystemChange = (e: MediaQueryListEvent) => {
      try {
        // Only apply system preference if user has not manually set theme
        if (!localStorage.getItem("theme")) {
          applyTheme(e.matches ? "dark" : "light");
        }
      } catch {
        // ignore
      }
    };

    if ("addEventListener" in prefersDark) {
      prefersDark.addEventListener("change", handleSystemChange);
    } else {
      // fallback for older browsers
      prefersDark.addListener(handleSystemChange);
    }

    return () => {
      if ("removeEventListener" in prefersDark) {
        prefersDark.removeEventListener("change", handleSystemChange);
      } else {
        prefersDark.removeListener(handleSystemChange);
      }
    };
  }, []);

  const toggle = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      // fallback: ignore storage errors
    }
    applyTheme(nextTheme);
  };

  return { theme, toggle };
};