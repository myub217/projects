import React, { useState, useEffect, useCallback } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import ServicesSection from "../components/ServicesSection";
import About from "../components/About";
import ReviewsSection from "../components/ReviewsSection";
import Footer from "../components/Footer";

const IndexPage: React.FC = () => {
  // กำหนดสถานะธีม เริ่มต้นเป็น 'light' เพื่อป้องกัน flicker
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // โหลดค่า theme จาก localStorage หรือระบบ OS (prefers-color-scheme) ตอนแรกโหลดหน้า
  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("theme") as
        | "light"
        | "dark"
        | null;

      if (savedTheme === "light" || savedTheme === "dark") {
        setTheme(savedTheme);
      } else {
        // ถ้าไม่มีค่าใน localStorage ใช้ prefers-color-scheme
        const prefersDark = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches;
        setTheme(prefersDark ? "dark" : "light");
      }
    } catch (error) {
      console.error("Error loading theme:", error);
      setTheme("light");
    }
  }, []);

  // ติดตาม event การเปลี่ยนแปลง prefers-color-scheme เพื่อปรับธีมแบบ realtime (ถ้า user ไม่ได้ตั้งค่าเอง)
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      const savedTheme = localStorage.getItem("theme");
      if (!savedTheme) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    // modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } else if (mediaQuery.addListener) {
      // Safari and older browsers fallback
      mediaQuery.addListener(handleChange);
      return () => mediaQuery.removeListener("change", handleChange);
    }
  }, []);

  // ซิงค์ธีม class กับ <html> และเก็บลง localStorage ทุกครั้งที่ธีมเปลี่ยน
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // ฟังก์ชันสลับธีมแบบ memoized ป้องกัน re-render เกินจำเป็น
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  return (
    <>
      {/* แถบนำทางด้านบน */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* เนื้อหาหลักของหน้า */}
      <main
        id="main-content"
        className="bg-base-100 text-base-content min-h-screen transition-colors duration-500"
        tabIndex={-1} // เพิ่มให้ keyboard focus ได้หลังโหลดหน้า
      >
        {/* ส่วน Hero: โลโก้, ปุ่มเข้าสู่ระบบ, ลายเซ็น */}
        <Hero />

        {/* ส่วนฟีเจอร์หลัก */}
        <Feature />

        {/* ส่วนบริการหลัก */}
        <ServicesSection />

        {/* เกี่ยวกับทีมงาน JP */}
        <About />

        {/* รีวิวจากลูกค้า */}
        <ReviewsSection />

        {/* ส่วนท้ายเว็บไซต์ */}
        <Footer />
      </main>

      {/* ปุ่มลอยสำหรับสลับธีม (Floating Theme Toggle) */}
      <button
        aria-label={`สลับเป็นโหมด ${theme === "light" ? "มืด" : "สว่าง"}`}
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-lg hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
        title={`สลับเป็นโหมด ${theme === "light" ? "มืด" : "สว่าง"}`}
      >
        {theme === "light" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m8.66-11h-1M4.34 12h-1m15.07 6.07l-.7-.7M6.34 6.34l-.7-.7m12.02 12.02l-.7-.7M6.34 17.66l-.7-.7M12 7a5 5 0 000 10 5 5 0 000-10z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            stroke="none"
            aria-hidden="true"
          >
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
          </svg>
        )}
      </button>
    </>
  );
};

export default IndexPage;