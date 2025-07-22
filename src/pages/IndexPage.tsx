// src/pages/IndexPage.tsx

import React, { useState, useEffect, useCallback } from 'react'
import Header from '@components/Header'
import Hero from '@components/Hero'
import Feature from '@components/Feature'
import StatsPanel from '@components/StatsPanel'
import ServicesSection, { Service } from '@components/ServicesSection'
import About from '@components/About'
import ReviewsSection from '@components/ReviewsSection'
import CTASection from '@components/CTASection'
import Footer from '@components/Footer'
import ServiceRequestModal from '@components/common/ServiceRequestModal'

interface IndexPageProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const IndexPage: React.FC<IndexPageProps> = ({ theme, toggleTheme }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null)

  useEffect(() => {
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedService(null)
    }
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
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
    <div
      data-theme={theme}
      className="flex flex-col min-h-screen bg-base-100 text-base-content font-sans transition-colors duration-300"
    >
      <div className="w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-16 flex flex-col flex-grow">
        <Header theme={theme} toggleTheme={toggleTheme} />

        <main
          id="main-content"
          role="main"
          aria-label="เนื้อหาหลักของเว็บไซต์"
          className="flex-grow py-10 space-y-16 sm:space-y-20 md:space-y-24"
          tabIndex={-1} // for keyboard focus after modal closes
        >
          <Hero />
          <Feature />
          <StatsPanel />
          <ServicesSection onRequest={handleRequestService} />
          <About />
          <ReviewsSection />
          <CTASection />
        </main>

        <Footer />
      </div>

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
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3v1m0 16v1m8.66-11h-1M4.34 12h-1m15.07 6.07l-.7-.7M6.34 6.34l-.7-.7m12.02 12.02l-.7-.7M6.34 17.66l-.7-.7M12 7a5 5 0 000 10 5 5 0 000-10z" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
          </svg>
        )}
      </button>

      {/* Service Request Modal */}
      <ServiceRequestModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />
    </div>
  )
}

export default IndexPage