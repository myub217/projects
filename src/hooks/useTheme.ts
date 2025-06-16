import { useEffect, useState } from "react";

export const useSystemTheme = () => {
  // เริ่มต้นด้วย undefined เพื่อแสดงสถานะกำลังโหลด (loading)
  const [theme, setTheme] = useState<"light" | "dark" | undefined>(undefined);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) {
      // ถ้าไม่รองรับ window หรือ matchMedia ให้ตั้งเป็น light เป็น default
      setTheme("light");
      return;
    }

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

    // อ่านค่า theme จาก localStorage อย่างปลอดภัย
    let stored: "light" | "dark" | null = null;
    try {
      stored = localStorage.getItem("theme") as "light" | "dark" | null;
    } catch {
      stored = null;
    }

    // ฟังก์ชันเปลี่ยน theme
    const apply = (t: "light" | "dark") => {
      document.documentElement.classList.toggle("dark", t === "dark");
      setTheme(t);
    };

    // ถ้ามีค่าใน localStorage ใช้ค่านั้น, ถ้าไม่ใช้ system preference
    if (stored === "light" || stored === "dark") {
      apply(stored);
    } else {
      apply(prefersDark.matches ? "dark" : "light");
    }

    // ฟัง event system theme change
    const handleChange = (e: MediaQueryListEvent) => {
      // ถ้า user ไม่ได้ตั้งค่าเองใน localStorage
      try {
        if (!localStorage.getItem("theme")) {
          apply(e.matches ? "dark" : "light");
        }
      } catch {
        // ป้องกัน error
      }
    };

    prefersDark.addEventListener("change", handleChange);

    return () => {
      prefersDark.removeEventListener("change", handleChange);
    };
  }, []);

  const toggle = () => {
    setTheme((prev) => {
      // fallback กรณี undefined เป็น light ก่อน
      const next = prev === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("theme", next);
      } catch {
        // ป้องกัน error localStorage
      }
      document.documentElement.classList.toggle("dark", next === "dark");
      return next;
    });
  };

  return { theme, toggle };
};