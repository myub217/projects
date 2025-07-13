// src/pages/IndexPage.tsx

import React, { useState, useEffect, useCallback } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Feature from "../components/Feature";
import ServicesSection, { Service } from "../components/ServicesSection";
import About from "../components/About";
import ReviewsSection from "../components/ReviewsSection";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

interface IndexPageProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const IndexPage: React.FC<IndexPageProps> = ({ theme, toggleTheme }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedService(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = selectedService ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedService]);

  const handleRequestService = useCallback((service: Service) => {
    setSelectedService(service);
  }, []);

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main
        id="main-content"
        className="bg-base-100 text-base-content min-h-screen transition-colors duration-500 font-sans"
        role="main"
      >
        <Hero />
        <Feature />
        <ServicesSection onRequest={handleRequestService} />
        <About />
        <ReviewsSection />
        <CTASection />
        <Footer />
      </main>

      {/* Toggle Theme Floating Button */}
      <button
        aria-label={`สลับเป็นโหมด ${theme === "light" ? "มืด" : "สว่าง"}`}
        onClick={toggleTheme}
        className="fixed bottom-6 right-6 md:bottom-8 md:right-8 p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 shadow-lg hover:bg-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition z-40"
        title={`สลับเป็นโหมด ${theme === "light" ? "มืด" : "สว่าง"}`}
        type="button"
      >
        {theme === "light" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m8.66-11h-1M4.34 12h-1m15.07 6.07l-.7-.7M6.34 6.34l-.7-.7m12.02 12.02l-.7-.7M6.34 17.66l-.7-.7M12 7a5 5 0 000 10 5 5 0 000-10z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
          </svg>
        )}
      </button>

      {/* Modal Service Request */}
      {selectedService && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          aria-describedby="service-modal-desc"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white dark:bg-gray-900 p-6 md:p-8 rounded-xl w-full max-w-md md:max-w-lg shadow-xl"
            onClick={(e) => e.stopPropagation()}
            tabIndex={0}
          >
            <h3
              id="service-modal-title"
              className="text-lg md:text-xl font-bold text-primary mb-4"
            >
              ขอใช้บริการ
            </h3>
            <p
              id="service-modal-desc"
              className="text-base-content text-sm md:text-base"
            >
              บริการที่เลือก: <strong>{selectedService.title}</strong>
            </p>
            <div className="mt-6 flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-sm rounded"
                onClick={() => setSelectedService(null)}
                type="button"
              >
                ปิด
              </button>
              <button
                className="px-4 py-2 bg-primary text-white hover:bg-primary/90 text-sm rounded"
                onClick={() => {
                  alert(`ขอใช้บริการ: ${selectedService.title}`);
                  setSelectedService(null);
                }}
                type="button"
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