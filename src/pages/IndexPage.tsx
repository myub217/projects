import React, { useState, useEffect, useCallback } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ServicesSection from "../components/ServicesSection";
import About from "../components/About";
import ReviewsSection from "../components/ReviewsSection";
import Footer from "../components/Footer";

const IndexPage: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <>
      {/* แถบนำทางด้านบน */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main className="bg-base-100 text-base-content min-h-screen transition-colors duration-500">
        {/* ส่วน Hero: โลโก้, ปุ่มเข้าสู่ระบบ, ลายเซ็น */}
        <Hero />

        {/* จุดเด่นของบริการ: สรุปจุดขาย */}
        <Features />

        {/* บริการหลักของเรา */}
        <ServicesSection />

        {/* เกี่ยวกับทีมงาน JP - ลายเซ็น, ข้อความเจ้าป่า */}
        <About />

        {/* รีวิวจากลูกค้า */}
        <ReviewsSection />

        {/* ท้ายเว็บไซต์ */}
        <Footer />
      </main>
    </>
  );
};

export default IndexPage;