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
      return () => mediaQuery.removeListener(handleChange);
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
    </>
  );
};

export default IndexPage;