import React, { useState, useEffect, useCallback } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import ServicesSection, { Service } from "../components/ServicesSection";
import About from "../components/About";
import ReviewsSection from "../components/ReviewsSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

const IndexPage: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme") as "light" | "dark" | null;
      if (saved === "light" || saved === "dark") {
        setTheme(saved);
      } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        setTheme(prefersDark ? "dark" : "light");
      }
    } catch {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      const saved = localStorage.getItem("theme");
      if (!saved) setTheme(e.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener?.("change", handleChange);
    return () => mediaQuery.removeEventListener?.("change", handleChange);
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }, []);

  const handleRequestService = useCallback((service: Service) => {
    setSelectedService(service);
  }, []);

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main
        id="main-content"
        className="bg-base-100 text-base-content min-h-screen transition-colors duration-500"
        tabIndex={-1}
        role="main"
      >
        <Hero />
        <Feature />
        <ServicesSection id="services" onRequest={handleRequestService} />
        <About />
        <ReviewsSection />
        <CTASection />
        <Footer />
      </main>

      <button
        aria-label={`สลับเป็นโหมด ${theme === "light" ? "มืด" : "สว่าง"}`}
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-lg hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition"
        title={`สลับเป็นโหมด ${theme === "light" ? "มืด" : "สว่าง"}`}
        type="button"
      >
        {theme === "light" ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-11h-1M4.34 12h-1m15.07 6.07l-.7-.7M6.34 6.34l-.7-.7m12.02 12.02l-.7-.7M6.34 17.66l-.7-.7M12 7a5 5 0 000 10 5 5 0 000-10z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="none" aria-hidden="true">
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
          </svg>
        )}
      </button>

      {selectedService && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          aria-describedby="service-modal-desc"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white dark:bg-gray-900 p-6 rounded-xl max-w-md w-full shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 id="service-modal-title" className="text-lg font-bold text-primary mb-4">
              ขอใช้บริการ
            </h3>
            <p id="service-modal-desc" className="text-base-content">
              บริการที่เลือก: <strong>{selectedService.title}</strong>
            </p>
            <div className="mt-6 flex justify-end">
              <button
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-sm rounded mr-2"
                onClick={() => setSelectedService(null)}
              >
                ปิด
              </button>
              <button
                className="px-4 py-2 bg-primary text-white hover:bg-primary/90 text-sm rounded"
                onClick={() => {
                  alert(`ขอใช้บริการ: ${selectedService.title}`);
                  setSelectedService(null);
                }}
              >
                ยืนยัน
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default IndexPage;