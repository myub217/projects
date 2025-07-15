// src/pages/IndexPage.tsx

import React, { useState, useEffect, useCallback } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import ServicesSection, { Service } from '../components/ServicesSection';
import About from '../components/About';
import ReviewsSection from '../components/ReviewsSection';
import CTASection from '../components/CTASection';
import Footer from '../components/Footer';

interface IndexPageProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const IndexPage: React.FC<IndexPageProps> = ({ theme, toggleTheme }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  // Escape key to close modal
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  // Prevent scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedService ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedService]);

  const handleRequestService = useCallback((service: Service) => {
    setSelectedService(service);
  }, []);

  const handleThemeToggle = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

  return (
    <>
      <Header theme={theme} toggleTheme={handleThemeToggle} />
      <main
        id="main-content"
        className="min-h-screen bg-base-100 font-sans text-base-content transition-colors duration-500"
        role="main"
        aria-label="เนื้อหาหลักของเว็บไซต์"
      >
        <Hero />
        <Feature />
        <ServicesSection onRequest={handleRequestService} />
        <About />
        <ReviewsSection />
        <CTASection />
        <Footer />
      </main>

      {/* Theme Toggle Button */}
      <button
        type="button"
        aria-label={`สลับเป็นโหมด ${theme === 'light' ? 'มืด' : 'สว่าง'}`}
        title={`สลับเป็นโหมด ${theme === 'light' ? 'มืด' : 'สว่าง'}`}
        onClick={handleThemeToggle}
        className="fixed bottom-6 right-6 z-40 rounded-full bg-gray-200 p-3 text-gray-800 shadow-lg transition hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700 md:bottom-8 md:right-8"
      >
        {theme === 'light' ? (
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

      {/* Modal: Request Service */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          aria-describedby="service-modal-desc"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 md:p-6"
          onClick={() => setSelectedService(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl dark:bg-gray-900 md:max-w-lg md:p-8"
            tabIndex={0}
          >
            <h3 id="service-modal-title" className="mb-4 text-lg font-bold text-primary md:text-xl">
              ขอใช้บริการ
            </h3>
            <p id="service-modal-desc" className="text-sm text-base-content md:text-base">
              บริการที่เลือก: <strong>{selectedService.title}</strong>
            </p>
            <div className="mt-6 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="rounded bg-gray-300 px-4 py-2 text-sm hover:bg-gray-400"
              >
                ปิด
              </button>
              <button
                type="button"
                onClick={() => {
                  alert(`ขอใช้บริการ: ${selectedService.title}`);
                  setSelectedService(null);
                }}
                className="rounded bg-primary px-4 py-2 text-sm text-white hover:bg-primary/90"
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
