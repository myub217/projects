// src/pages/IndexPage.tsx
import React, { useState, useEffect, useCallback } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ServicesSection from "../components/ServicesSection";
import About from "../components/About";
import ReviewsSection from "../components/ReviewsSection";
import Footer from "../components/Footer";

const IndexPage: React.FC = () => {
  // จัดการธีมแบบง่าย (light/dark) พร้อม toggle function
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // toggle theme function
  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  // sync theme class กับ <html> หรือ <body> (optional)
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
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="bg-base-100 text-base-content min-h-screen transition-colors duration-500">
        <Hero />
        <Features />
        <ServicesSection />
        <About />
        <ReviewsSection />
        <Footer />
      </main>
    </>
  );
};

export default IndexPage;