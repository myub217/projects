import React, { ReactNode, useEffect, useState, useCallback } from "react";
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

  // ดึงธีมเริ่มต้นจาก localStorage หรือระบบปฏิบัติการ
  useEffect(() => {
    const getInitialTheme = (): Theme => {
      try {
        const stored = localStorage.getItem("theme") as Theme | null;
        if (stored === "light" || stored === "dark") return stored;
      } catch {
        // localStorage อาจไม่พร้อมใช้งาน
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    };

    setTheme(getInitialTheme());
    setUserSetTheme(!!localStorage.getItem("theme"));
  }, []);

  // ซิงก์ theme กับ class บน <html> และเก็บ localStorage หาก user ตั้งค่าเอง
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    if (userSetTheme) {
      try {
        localStorage.setItem("theme", theme);
      } catch {
        // localStorage อาจไม่พร้อมใช้งาน
      }
    }
  }, [theme, userSetTheme]);

  // ฟัง event เปลี่ยนธีมระบบ (เช่น user เปลี่ยน dark/light mode บน OS)
  useEffect(() => {
    if (userSetTheme) return;

    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => setTheme(e.matches ? "dark" : "light");

    // Modern browsers
    if (mq.addEventListener) {
      mq.addEventListener("change", handleChange);
      return () => mq.removeEventListener("change", handleChange);
    } 
    // Fallback สำหรับบาง browser เก่า (เช่น Safari)
    else if (mq.addListener) {
      mq.addListener(handleChange);
      return () => mq.removeListener(handleChange);
    }
  }, [userSetTheme]);

  // ฟังก์ชัน toggle ธีม (เรียกจากปุ่ม toggle ใน Header)
  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      setUserSetTheme(true);
      try {
        localStorage.setItem("theme", next);
      } catch {
        // localStorage อาจไม่พร้อมใช้งาน
      }
      return next;
    });
  }, []);

  return (
    <>
      {/* Skip Link เพื่อช่วยการเข้าถึง (Accessibility) */}
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

        {/* Visitor Count แสดงมุมขวาล่าง */}
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