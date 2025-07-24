// ✅ src/pages/IndexPage.tsx
// ✅ Single Page Layout — Theme toggle, Modal focus trap, Backdrop close, Clean a11y

import React, { useEffect, useState, useCallback, useRef } from 'react'
import HeroSection from '@components/Hero'
import StatsSection from '@components/StatsSection'
import ServicesSectionBlock from '@components/Services/ServicesSectionBlock'
import TestimonialsSection from '@components/TestimonialsSection'
import FAQSection from '@components/FAQSection'
import CTASection from '@components/CTASection'
import Footer from '@components/Footer'
import AboutSection from '@components/AboutSection'
import FeatureSection from '@components/FeatureSection'
import ServiceRequestModal from '@components/Modals/ServiceRequestModal'
import ThemeToggleButton from '@components/common/ThemeToggleButton'

const IndexPage: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    typeof window !== 'undefined'
      ? (localStorage.getItem('theme') as 'light' | 'dark') || 'light'
      : 'light'
  )

  const [modalOpen, setModalOpen] = useState(false)
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null)
  const modalRef = useRef<HTMLDivElement | null>(null)
  const mainRef = useRef<HTMLElement | null>(null)

  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const next = prev === 'light' ? 'dark' : 'light'
      document.documentElement.setAttribute('data-theme', next)
      localStorage.setItem('theme', next)
      return next
    })
  }, [])

  const handleRequestService = useCallback((serviceId: number) => {
    setSelectedServiceId(serviceId)
    setModalOpen(true)
  }, [])

  const handleCloseModal = useCallback(() => {
    setModalOpen(false)
    setSelectedServiceId(null)
    mainRef.current?.focus()
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  useEffect(() => {
    if (!modalOpen || !modalRef.current) return

    const modalElement = modalRef.current
    const focusables = modalElement.querySelectorAll<HTMLElement>(
      'a[href], area[href], input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex]:not([tabindex="-1"]), [contenteditable]'
    )

    const elements = Array.from(focusables).filter(el => el.offsetParent !== null)

    if (elements.length === 0) {
      modalElement.focus()
      return
    }

    const first = elements[0]
    const last = elements[elements.length - 1]

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      } else if (e.key === 'Escape') {
        e.preventDefault()
        handleCloseModal()
      }
    }

    modalElement.addEventListener('keydown', trapFocus)
    first.focus()

    return () => {
      modalElement.removeEventListener('keydown', trapFocus)
    }
  }, [modalOpen, handleCloseModal])

  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === modalRef.current) {
        handleCloseModal()
      }
    },
    [handleCloseModal]
  )

  return (
    <main
      ref={mainRef}
      tabIndex={-1}
      role="main"
      aria-hidden={modalOpen}
      className="min-h-screen bg-base-100 text-base-content transition-colors duration-300"
    >
      <HeroSection onRequestService={handleRequestService} />
      <FeatureSection />
      <AboutSection />
      <StatsSection />
      <ServicesSectionBlock onRequestService={handleRequestService} />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />

      <ThemeToggleButton
        theme={theme}
        toggleTheme={toggleTheme}
        aria-label={`สลับธีมเป็น ${theme === 'dark' ? 'สว่าง' : 'มืด'}`}
      />

      {modalOpen && (
        <div
          ref={modalRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-request-modal-title"
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <ServiceRequestModal serviceId={selectedServiceId} onClose={handleCloseModal} />
        </div>
      )}
    </main>
  )
}

export default IndexPage
