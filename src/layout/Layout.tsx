// src/components/Layout.tsx
import React, {
  ReactNode,
  useEffect,
  useState,
  useCallback,
} from "react";
import Header from "./Header";
import Footer from "./Footer";
import VisitorCount from "@/components/VisitorCount";

export type Theme = "light" | "dark";

type LayoutProps = {
  children: ReactNode;
  className?: string;
};

const Layout: React.FC<LayoutProps> = ({ children, className = "" }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [userSetTheme, setUserSetTheme] = useState(false);

  // ดึงธีมเริ่มต้นจาก localStorage หรือ system preference
  useEffect(() => {
    const getInitialTheme = (): Theme => {
      try {
        const stored = localStorage.getItem("theme") as Theme | null;
        if (stored === "light" || stored === "dark") return stored;
      } catch {
        // ในกรณี localStorage ไม่พร้อม
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    };

    setTheme(getInitialTheme());
    setUserSetTheme(!!localStorage.getItem("theme"));
  }, []);

  // ซิงก์ theme กับ class บน <html>
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    if (userSetTheme) {
      try {
        localStorage.setItem("theme", theme);
      } catch {
        // fallback: ไม่สามารถบันทึก theme
      }
    }
  }, [theme, userSetTheme]);

  // ตรวจจับ system theme auto เปลี่ยน ถ้า user ยังไม่ตั้งค่าเอง
  useEffect(() => {
    if (userSetTheme) return;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) =>
      setTheme(e.matches ? "dark" : "light");

    if (mq.addEventListener) {
      mq.addEventListener("change", handleChange);
      return () => mq.removeEventListener("change", handleChange);
    } else if (mq.addListener) {
      // fallback สำหรับ Safari
      mq.addListener(handleChange);
      return () => mq.removeListener(handleChange);
    }
  }, [userSetTheme]);

  // toggle theme แบบ user interaction
  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      setUserSetTheme(true);
      try {
        localStorage.setItem("theme", next);
      } catch {
        // fallback
      }
      return next;
    });
  }, []);

  return (
    <>
      {/* Accessibility: Skip to Content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:bg-pink-600 focus:text-white focus:px-4 focus:py-2 focus:rounded z-50"
        aria-label="ข้ามไปยังเนื้อหาหลัก"
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

        {/* แสดงจำนวนผู้เยี่ยมชมที่มุมขวาล่าง */}
        <VisitorCount
          min={1000}
          max={3200}
          className="!static sm:!fixed bottom-4 right-4 z-40 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md px-4 py-2 rounded shadow-lg text-sm"
        />
      </div>
    </>
  );
};

export default Layout;