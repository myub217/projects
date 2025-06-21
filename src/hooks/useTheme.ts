import { useEffect, useState } from "react";

type Theme = "light" | "dark";
type StoredTheme = Theme | null;

export const useSystemTheme = () => {
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
    let stored: StoredTheme = null;

    try {
      stored = localStorage?.getItem("theme") as StoredTheme;
    } catch {
      // ป้องกัน error
    }

    if (stored === "light" || stored === "dark") {
      applyTheme(stored);
    } else {
      applyTheme(prefersDark.matches ? "dark" : "light");
    }

    const handleChange = (e: MediaQueryListEvent) => {
      try {
        if (!localStorage.getItem("theme")) {
          applyTheme(e.matches ? "dark" : "light");
        }
      } catch {
        // ป้องกัน error
      }
    };

    prefersDark.addEventListener("change", handleChange);
    return () => prefersDark.removeEventListener("change", handleChange);
  }, []);

  const toggle = () => {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      try {
        localStorage?.setItem("theme", next);
      } catch {
        // fallback no localStorage
      }
      applyTheme(next);
      return next;
    });
  };

  return { theme, toggle };
};