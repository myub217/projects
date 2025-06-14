// src/App.tsx
import React, { useEffect, useLayoutEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import ReviewsSection from "./components/ReviewsSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { FaFacebookSquare, FaLine } from "react-icons/fa";

const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // TODO: แก้เป็นจริงก่อน deploy

// Hook สำหรับโหลด Google Analytics script (แบบปลอดภัย และเช็คซ้ำ)
function useGoogleAnalytics(id: string) {
  useEffect(() => {
    if (!id) return;
    if (typeof window === "undefined") return;
    if (document.getElementById("ga-script")) return;

    // โหลด GA script
    const script1 = document.createElement("script");
    script1.id = "ga-script";
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
    document.head.appendChild(script1);

    // สคริปต์ config
    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${id}', { anonymize_ip: true });
    `;
    document.head.appendChild(script2);

    return () => {
      // Clean up scripts ถ้าต้องการ (optional)
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, [id]);
}

// Component สำหรับปุ่มแชร์ Social Media
const SocialShare: React.FC = () => {
  // กำหนดลิงก์สำหรับแชร์ (รองรับ SSR)
  const shareUrl =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.href)
      : encodeURIComponent("https://applicationlubmobile.vercel.app");

  const shareText = encodeURIComponent(
    "บริการยื่นกู้ วีซ่า เอกสาร JP Visual & Docs"
  );

  return (
    <section
      aria-label="แชร์ลิงก์เว็บไซต์บนโซเชียลมีเดีย"
      className="flex justify-center space-x-10 my-10"
    >
      {/* Facebook Share */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareText}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="แชร์บน Facebook"
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors font-semibold text-lg"
      >
        <FaFacebookSquare className="w-7 h-7" />
        <span className="underline decoration-blue-400 decoration-2 hover:decoration-blue-600">
          Facebook
        </span>
      </a>

      {/* LINE Share */}
      <a
        href={`https://line.me/R/msg/text/?${shareText}%0A${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="แชร์บน LINE"
        className="flex items-center space-x-2 text-green-600 hover:text-green-800 transition-colors font-semibold text-lg"
      >
        <FaLine className="w-7 h-7" />
        <span className="underline decoration-green-400 decoration-2 hover:decoration-green-600">
          LINE
        </span>
      </a>
    </section>
  );
};

const App: React.FC = () => {
  // เก็บสถานะธีมแบบ light/dark
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // โหลด Google Analytics
  useGoogleAnalytics(GA_MEASUREMENT_ID);

  // โหลดธีมจาก localStorage หรือ system preference ตอนเริ่มต้น (ก่อน render)
  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");
    setTheme(initialTheme);

    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // สลับธีมและเก็บค่าใน localStorage
  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);

    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", nextTheme);
  };

  return (
    <div
      className={`
        bg-gradient-to-br from-white via-gray-100 to-gray-200
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        text-gray-900 dark:text-gray-100
        min-h-screen flex flex-col font-sans scroll-smooth
        transition-colors duration-500
      `}
    >
      <Helmet>
        <title>JP Visual & Docs | บริการยื่นกู้ วีซ่า เอกสาร</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="บริการครบวงจร ยื่นกู้ วีซ่า เอกสาร โปรไฟล์ พร้อมความลับที่ปลอดภัย มืออาชีพจริงใจ"
        />
        <meta
          name="keywords"
          content="JP Visual & Docs, ยื่นกู้, วีซ่า, เอกสาร, โปรไฟล์, ระบบหลังบ้าน"
        />
        <meta name="author" content="JP Visual & Docs" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="JP Visual & Docs | ยื่นกู้ วีซ่า เอกสารครบวงจร"
        />
        <meta
          property="og:description"
          content="ดูแลทุกขั้นตอนของการยื่นกู้ วีซ่า เอกสาร การเงิน พร้อมระบบหลังบ้านแบบมืออาชีพ"
        />
        <meta property="og:image" content="/og-image.png" />
        <meta
          property="og:url"
          content="https://applicationlubmobile.vercel.app"
        />
        <meta property="og:locale" content="th_TH" />
        <meta property="og:site_name" content="JP Visual & Docs" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="JP Visual & Docs | ยื่นกู้ วีซ่า เอกสารครบวงจร"
        />
        <meta
          name="twitter:description"
          content="บริการครบวงจร ยื่นกู้ วีซ่า เอกสาร การเงิน พร้อมระบบหลังบ้านแบบมืออาชีพ"
        />
        <meta name="twitter:image" content="/og-image.png" />

        {/* Theme color */}
        <meta
          name="theme-color"
          content={theme === "dark" ? "#111827" : "#ffffff"}
        />

        {/* SEO & PWA */}
        <link rel="canonical" href="https://applicationlubmobile.vercel.app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
      </Helmet>

      {/* Google Tag Manager fallback for no-JS */}
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${GA_MEASUREMENT_ID}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="google-tag-manager"
        />
      </noscript>

      {/* Header พร้อมปุ่ม toggle ธีม */}
      <Header toggleTheme={toggleTheme} currentTheme={theme} />

      {/* Main content */}
      <main
        role="main"
        className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <Hero />

        <section
          id="about"
          className="bg-white dark:bg-gray-900 rounded-xl shadow-lg py-16 px-8 my-12 transition-colors duration-500"
        >
          <About />
        </section>

        <section
          id="services"
          className="py-16 px-4 sm:px-6 lg:px-8 my-12"
          aria-label="บริการ"
        >
          <ServicesSection />
        </section>

        <section
          id="portfolio"
          className="bg-white dark:bg-gray-900 rounded-xl shadow-lg py-16 px-8 my-12 transition-colors duration-500"
          aria-label="ผลงาน"
        >
          <PortfolioSection />
        </section>

        <section
          id="reviews"
          className="py-16 px-4 sm:px-6 lg:px-8 my-12"
          aria-label="รีวิวจากลูกค้า"
        >
          <ReviewsSection />
        </section>

        {/* ปุ่มแชร์ Social */}
        <SocialShare />

        {/* ห้องลับ Coming Soon */}
        <section
          className="bg-white dark:bg-gray-900 rounded-xl shadow-inner py-10 px-6 my-12 transition-colors duration-500"
          aria-live="polite"
          aria-atomic="true"
        >
          <p className="text-center text-lg text-gray-400 dark:text-gray-500 italic">
            👀 ห้องลับจะมาเร็ว ๆ นี้...
          </p>
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* ปุ่ม ScrollToTop */}
      <ScrollToTop lineUrl="https://line.me/ti/p/@462FQTFC" />
    </div>
  );
};

export default App;