// src/pages/IndexPage.tsx
// ✅ Accessible homepage with smooth UX, focus management, theme toggle, modular sections, and ARIA best practices

import React, { useState, useEffect, useCallback, useRef } from 'react'

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
import NotificationBanner from '@components/NotificationBanner'
import Button from '@components/common/Button'
import { Check } from 'lucide-react'

interface IndexPageProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const IndexPage: React.FC<IndexPageProps> = ({ theme, toggleTheme }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null)
  const [showBanner, setShowBanner] = useState(true)
  const mainContentRef = useRef<HTMLElement>(null)

  // Close modal on Escape key only when modal is open
  useEffect(() => {
    if (!selectedService) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedService(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedService])

  // Manage scroll lock and aria-hidden on modal open/close
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = 'hidden'
      if (mainContentRef.current) {
        mainContentRef.current.setAttribute('aria-hidden', 'true')
        mainContentRef.current.blur()
      }
    } else {
      document.body.style.overflow = ''
      if (mainContentRef.current) {
        mainContentRef.current.removeAttribute('aria-hidden')
        mainContentRef.current.focus()
      }
    }
  }, [selectedService])

  const onRequestService = useCallback((service: Service) => {
    setSelectedService(service)
  }, [])

  return (
    <div
      data-theme={theme}
      className="flex min-h-screen flex-col bg-base-100 font-sans text-base-content transition-colors duration-300"
    >
      <div className="mx-auto flex w-full max-w-screen-xl flex-grow flex-col px-4 sm:px-6 lg:px-16">
        {/* Notification Banner */}
        {showBanner && (
          <NotificationBanner
            message="อัปเดตสำเร็จ"
            type="success"
            icon={<Check className="h-4 w-4" />}
            dismissible
            className="my-4"
            onDismiss={() => setShowBanner(false)}
          />
        )}

        <Header theme={theme} toggleTheme={toggleTheme} />

        <main
          id="main-content"
          ref={mainContentRef}
          role="main"
          aria-label="เนื้อหาหลักของเว็บไซต์"
          tabIndex={-1}
          className="flex-grow space-y-16 py-10 outline-none sm:space-y-20 md:space-y-24"
        >
          <Hero />
          <Feature />
          <StatsPanel />
          <ServicesSection onRequest={onRequestService} />
          <About />
          <ReviewsSection />
          <CTASection />
        </main>

        <Footer />
      </div>

      {/* Floating Theme Toggle Button */}
      <button
        type="button"
        aria-label={`สลับเป็นโหมด ${theme === 'light' ? 'มืด' : 'สว่าง'}`}
        title={`สลับเป็นโหมด ${theme === 'light' ? 'มืด' : 'สว่าง'}`}
        onClick={toggleTheme}
        className="fixed bottom-4 right-4 z-50 rounded-full bg-base-200 p-3 text-base-content shadow-xl backdrop-blur-md transition hover:bg-base-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:bg-neutral dark:text-gray-200 dark:hover:bg-gray-700"
      >
        {theme === 'light' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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
            className="h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
          </svg>
        )}
      </button>

      {/* Service Request Modal */}
      <ServiceRequestModal service={selectedService} onClose={() => setSelectedService(null)} />
    </div>
  )
}

export default IndexPage
