import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

// Layout & Components (ปรับ path ตามโปรเจกต์จริง)
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import ReviewsSection from "./components/ReviewsSection";
import JoinButtons from "./components/JoinButtons";
import ScrollToTop from "./components/ScrollToTop";

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // โหลด theme จาก localStorage หรือ fallback ไปใช้ system preference
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.classList.toggle("dark", storedTheme === "dark");
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }

    // ฟัง event เมื่อ system theme เปลี่ยน (ถ้า user ไม่ได้ตั้งเอง ให้เปลี่ยนตามระบบ)
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
        document.documentElement.classList.toggle("dark", e.matches);
      }
    };
    mediaQuery.addEventListener("change", handler);

    // Cleanup listener เมื่อ component unmount
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // ฟังก์ชันสลับ theme และบันทึกใน localStorage
  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return newTheme;
    });
  };

  return (
    <HelmetProvider>
      <div
        className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300"
        lang="th"
      >
        {/* SEO + Open Graph meta */}
        <Helmet>
          <html lang="th" />
          <title>JP Visual & Docs</title>
          <meta name="description" content="บริการออกแบบและเอกสารครบวงจร JP Visual & Docs" />
          <meta name="theme-color" content={theme === "dark" ? "#0f172a" : "#ffffff"} />
          <meta property="og:title" content="JP Visual & Docs" />
          <meta property="og:description" content="รับออกแบบเว็บไซต์ เอกสาร และแบรนด์ครบวงจร" />
          <meta property="og:image" content="/assets/og-banner.png" />
          <meta property="og:url" content="https://yourdomain.com" />
          <meta name="twitter:card" content="summary_large_image" />
        </Helmet>

        {/* Header + Theme toggle */}
        <Header theme={theme} toggleTheme={toggleTheme} />

        {/* Main content */}
        <main
          role="main"
          id="main-content"
          className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
          aria-label="Main Content"
        >
          <Hero />

          <section id="about" className="my-16" aria-labelledby="about-title">
            <About />
          </section>

          <section id="services" className="my-16" aria-labelledby="services-title">
            <ServicesSection />
          </section>

          <section id="portfolio" className="my-16" aria-labelledby="portfolio-title">
            <PortfolioSection />
          </section>

          <section id="reviews" className="my-16" aria-labelledby="reviews-title">
            <ReviewsSection />
          </section>

          <section id="contact" className="my-16" aria-labelledby="contact-title">
            <JoinButtons />
          </section>
        </main>

        {/* Footer */}
        <Footer />

        {/* Scroll To Top Button */}
        <ScrollToTop />
      </div>
    </HelmetProvider>
  );
};

export default App;