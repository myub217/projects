import React, { useEffect, useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import ReviewsSection from "./components/ReviewsSection";
import Portfolio from "./components/Portfolio";
import JoinButtons from "./components/JoinButtons";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ThemeToggle from "./components/ThemeToggle";

const App: React.FC = () => {
  // ฟังก์ชันอ่านค่า theme จาก localStorage หรือ fallback เป็น light
  const getInitialTheme = (): "light" | "dark" => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme === "light" || savedTheme === "dark") {
        return savedTheme;
      }
    }
    return "light";
  };

  const [theme, setTheme] = useState<"light" | "dark">(getInitialTheme);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // เปลี่ยน attribute และ class ตาม theme
    document.documentElement.setAttribute("data-theme", theme);

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content transition-colors duration-500 font-kanit">
      <Header>
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </Header>

      <main
        role="main"
        className="flex-grow w-full px-4 sm:px-6 md:px-8 py-8 sm:py-10 space-y-16 max-w-screen-xl mx-auto"
      >
        <Hero />
        <ServicesSection />
        <ReviewsSection />
        <Portfolio />
        <JoinButtons />
      </main>

      <Footer />
      <ScrollToTop theme={theme} />
    </div>
  );
};

export default App;