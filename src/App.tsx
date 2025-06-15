import React, { useState } from "react";
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

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div
      className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300"
      aria-live="polite"
      data-theme={theme} // ถ้าต้องการใช้ theme ใน CSS หรือ Tailwind
    >
      {/* Header Navigation */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* Main Content Area */}
      <main
        role="main"
        className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <section id="about" className="my-12">
          <About />
        </section>

        {/* Services Offered */}
        <section id="services" className="my-12">
          <ServicesSection />
        </section>

        {/* Portfolio / Work Examples */}
        <section id="portfolio" className="my-12">
          <PortfolioSection />
        </section>

        {/* Customer Reviews */}
        <section id="reviews" className="my-12">
          <ReviewsSection />
        </section>

        {/* Contact & Call to Action */}
        <section id="contact" className="my-12">
          <JoinButtons />
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  );
};

export default App;