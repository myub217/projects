import React, { useState, useEffect, useCallback } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from "../components/Feature"; // ตรงกับชื่อไฟล์จริง Feature.tsx
import ServicesSection from "../components/ServicesSection";
import About from "../components/About";
import ReviewsSection from "../components/ReviewsSection";
import Footer from "../components/Footer";

const IndexPage: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // โหลดธีมจาก localStorage หรือจาก system preference หากไม่มีค่าใน localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

    if (savedTheme === "light" || savedTheme === "dark") {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
    }
  }, []);

  // ฟัง event เปลี่ยน prefers-color-scheme แบบ realtime หาก user ไม่ได้ตั้งธีมเอง
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e: MediaQueryListEvent) => {
      const savedTheme = localStorage.getItem("theme");
      if (!savedTheme) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // ซิงค์ class .dark กับ document root และเก็บค่า theme ลง localStorage ทุกครั้งที่ theme เปลี่ยน
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  // ฟังก์ชันสลับธีมเมื่อกดปุ่ม toggle
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  return (
    <>
      {/* แถบนำทางด้านบน */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* เนื้อหาหลักของหน้า */}
      <main className="bg-base-100 text-base-content min-h-screen transition-colors duration-500">
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