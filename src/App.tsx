import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

// Components
import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import ReviewsSection from "./components/ReviewsSection";
import Portfolio from "./components/Portfolio";
import JoinButtons from "./components/JoinButtons";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ThemeToggle from "./components/ThemeToggle";

const getInitialTheme = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light";
  try {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) return "dark";
  } catch {}
  return "light";
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };
    mediaQuery.addEventListener("change", onChange);
    return () => mediaQuery.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));

  return (
    <>
      <Helmet>
        <html lang="th" />
        <title>JP Visual & Docs - บริการยื่นกู้ วีซ่า เอกสาร การเงิน</title>
        <meta
          name="description"
          content="บริการครบวงจรสำหรับการยื่นกู้ วีซ่า เอกสาร การเงิน โปรไฟล์ และระบบหลังบ้าน"
        />
        <meta name="theme-color" content={theme === "dark" ? "#1E1E1E" : "#ffffff"} />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="JP Visual & Docs - บริการครบวงจร" />
        <meta
          property="og:description"
          content="บริการครบวงจรสำหรับการยื่นกู้ วีซ่า เอกสาร การเงิน โปรไฟล์ และระบบหลังบ้าน"
        />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://applicationlub.vercel.app" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="JP Visual & Docs - บริการครบวงจร" />
        <meta name="twitter:description" content="บริการครบวงจรสำหรับการยื่นกู้ วีซ่า เอกสาร การเงิน โปรไฟล์ และระบบหลังบ้าน" />
        <meta name="twitter:image" content="/og-image.jpg" />
      </Helmet>

      <div className="min-h-screen flex flex-col font-kanit bg-base-100 text-base-content transition-colors duration-500">
        <Header>
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </Header>

        <main className="flex-grow w-full max-w-screen-xl mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 space-y-16">
          <Hero />
          <ServicesSection />
          <ReviewsSection />
          <Portfolio />
          <JoinButtons />
        </main>

        <Footer />
        <ScrollToTop theme={theme} />
      </div>
    </>
  );
};

export default App;