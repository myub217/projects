// src/pages/IndexPage.tsx

import React, { useState, useEffect, useCallback } from 'react'
import Header from '@components/Header'
import Hero from '@components/Hero'
import Feature from '@components/Feature'
import ServicesSection, { Service } from '@components/ServicesSection'
import About from '@components/About'
import ReviewsSection from '@components/ReviewsSection'
import CTASection from '@components/CTASection'
import Footer from '@components/Footer'

interface IndexPageProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const IndexPage: React.FC<IndexPageProps> = ({ theme, toggleTheme }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedService(null)
    }
    window.addEventListener('keydown', handleEsc)
    return () => window.removeEventListener('keydown', handleEsc)
  }, [])

  useEffect(() => {
    document.body.style.overflow = selectedService ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedService])

  const handleRequestService = useCallback((service: Service) => {
    setSelectedService(service)
  }, [])

  return (
    <div className="min-h-screen flex flex-col font-sans bg-base-100 text-base-content transition-colors duration-300">
      <Header theme={theme} toggleTheme={toggleTheme} />

      <main
        id="main-content"
        role="main"
        aria-label="เนื้อหาหลักของเว็บไซต์"
        className="flex-grow max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-16 space-y-16 sm:space-y-20 md:space-y-24"
      >
        <Hero />
        <Feature />
        <ServicesSection onRequest={handleRequestService} />
        <About />
        <ReviewsSection />
        <CTASection />
      </main>

      <Footer />

      {/* Theme Toggle */}
      <button
        type="button"
        aria-label={`สลับเป็นโหมด ${theme === 'light' ? 'มืด' : 'สว่าง'}`}
        title={`สลับเป็นโหมด ${theme === 'light' ? 'มืด' : 'สว่าง'}`}
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 z-50 rounded-full bg-base-200 p-3 shadow-xl backdrop-blur-md text-base-content transition hover:bg-base-300 dark:bg-neutral dark:text-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
      >
        {theme === 'light' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v1m0 16v1m8.66-11h-1M4.34 12h-1m15.07 6.07l-.7-.7M6.34 6.34l-.7-.7m12.02 12.02l-.7-.7M6.34 17.66l-.7-.7M12 7a5 5 0 000 10 5 5 0 000-10z"
            />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
          </svg>
        )}
      </button>

      {/* Modal */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
          aria-describedby="service-modal-desc"
          tabIndex={-1}
          onClick={() => setSelectedService(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 py-6 md:px-6"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-lg rounded-2xl bg-base-100 dark:bg-gray-900 p-6 shadow-2xl space-y-5 focus:outline-none"
            tabIndex={0}
          >
            <h3 id="service-modal-title" className="text-xl font-bold text-primary">
              ขอใช้บริการจาก JP Visual & Docs
            </h3>

            <div id="service-modal-desc" className="space-y-2 text-sm sm:text-base text-base-content/80">
              <p>
                <strong>บริการที่คุณเลือก:</strong> {selectedService.title}
              </p>
              <p>
                <strong>รายละเอียด:</strong> {selectedService.description}
              </p>
              <p>
                <strong>ค่าบริการ:</strong> {selectedService.price}
              </p>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
                ทีมงานสายทำจริง สไตล์มือโปร — เอกสาร ชัด เป๊ะ ขายงานผ่าน
              </p>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="btn btn-sm border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              >
                ปิด
              </button>
              <a
                href={`https://line.me/ti/p/~jpdocs?text=${encodeURIComponent(
                  `สวัสดีครับ/ค่ะ สนใจใช้บริการ: ${selectedService.title}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSelectedService(null)}
                className="btn btn-sm btn-primary text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              >
                ติดต่อผ่าน LINE
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default IndexPage