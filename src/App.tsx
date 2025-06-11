import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ServicesSection from "./components/ServicesSection";
import ReviewsSection from "./components/ReviewsSection";
import Portfolio from "./components/Portfolio";
import JoinButtons from "./components/JoinButtons";
import ScrollToTop from "./components/ScrollToTop";
import ThemeToggle from "./components/ThemeToggle";

const App: React.FC = () => {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content transition-colors duration-500">
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

      <ScrollToTop />
    </div>
  );
};

export default App;