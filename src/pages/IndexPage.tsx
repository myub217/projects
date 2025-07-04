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

    // โหลดธีมจาก localStorage หรือใช้ค่าจาก system preference
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as
            | "light"
            | "dark"
            | null;

        if (savedTheme === "light" || savedTheme === "dark") {
            setTheme(savedTheme);
        } else {
            const prefersDark = window.matchMedia(
                "(prefers-color-scheme: dark)"
            ).matches;
            setTheme(prefersDark ? "dark" : "light");
        }
    }, []);

    // ฟังการเปลี่ยนแปลง prefers-color-scheme realtime
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

    // ซิงค์ class .dark และเก็บธีมลง localStorage
    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    // สลับธีมเมื่อกด toggle
    const toggleTheme = useCallback(() => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    }, []);

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
