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
      // ignore
    }

    if (storedTheme === "light" || storedTheme === "dark") {
      applyTheme(storedTheme);
    } else {
      applyTheme(prefersDark.matches ? "dark" : "light");
    }

    const handleSystemChange = (e: MediaQueryListEvent) => {
      try {
        if (!localStorage.getItem("theme")) {
          applyTheme(e.matches ? "dark" : "light");
        }
      } catch {
        // ignore
      }
    };

    prefersDark.addEventListener("change", handleSystemChange);
    return () => prefersDark.removeEventListener("change", handleSystemChange);
  }, []);

  const toggle = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem("theme", nextTheme);
    } catch {
      // fallback: no storage
    }
    applyTheme(nextTheme);
  };

  return { theme, toggle };
};