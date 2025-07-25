// src/pages/IndexPage.tsx
// ✨ Single Page — Full Sections Layout with ThemeToggle, Modal (FocusTrap), Accessibility

import React, { useEffect, useState, useCallback, useRef } from 'react';

import HeroSection from '@components/Hero';
import FeatureSection from '@components/FeatureSection';
import AboutSection from '@components/AboutSection';
import StatsSection from '@components/StatsSection';
import ServicesSectionBlock from '@components/Services/ServicesSectionBlock';
import IndustryInsightsSection from '@components/IndustryInsights/IndustryInsightsSection';
import TestimonialsSection from '@components/TestimonialsSection';
import FAQSection from '@components/FAQSection';
import CTASection from '@components/CTASection';
import Footer from '@components/Footer';
import ServiceRequestModal from '@components/Modals/ServiceRequestModal';
import ThemeToggleButton from '@components/common/ThemeToggleButton';
import HomeContent from '@components/HomeContent';

const IndexPage: React.FC = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      return saved === 'dark' || saved === 'light' ? saved : 'light';
    }
    return 'light';
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<number | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);

  // Toggle theme and sync attribute + storage
  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      return next;
    });
  }, []);

  // Open modal for a service
  const openServiceModal = useCallback((serviceId: number) => {
    setSelectedServiceId(serviceId);
    setModalOpen(true);
  }, []);

  // Close modal and restore focus
  const closeServiceModal = useCallback(() => {
    setModalOpen(false);
    setSelectedServiceId(null);
    mainRef.current?.focus();
  }, []);

  // Apply theme on mount & theme changes
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Focus trap for modal + ESC key closes modal
  useEffect(() => {
    if (!modalOpen || !modalRef.current) return;

    const modal = modalRef.current;
    const focusableSelectors = [
      'a[href]',
      'area[href]',
      'input:not([disabled]):not([type="hidden"])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'button:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
      '[contenteditable]',
    ];
    const focusableElements = Array.from(
      modal.querySelectorAll<HTMLElement>(focusableSelectors.join(',')),
    ).filter((el) => el.offsetParent !== null);

    if (focusableElements.length === 0) {
      modal.focus();
      return;
    }

    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        closeServiceModal();
      }
    };

    modal.addEventListener('keydown', handleKeyDown);
    first.focus();

    return () => modal.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, closeServiceModal]);

  // Click outside modal content closes modal
  const handleBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === modalRef.current) {
        closeServiceModal();
      }
    },
    [closeServiceModal],
  );

  return (
    <main
      ref={mainRef}
      tabIndex={-1}
      role="main"
      aria-hidden={modalOpen}
      className="min-h-screen bg-base-100 text-base-content transition-colors duration-300"
    >
      {/* Home Content Section (static intro and overview) */}
      <HomeContent />

      {/* Core Sections */}
      <HeroSection onRequestService={openServiceModal} />
      <FeatureSection />
      <AboutSection />
      <StatsSection />
      <ServicesSectionBlock onRequestService={openServiceModal} />
      <IndustryInsightsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />

      {/* Theme Toggle Button */}
      <ThemeToggleButton
        theme={theme}
        toggleTheme={toggleTheme}
        aria-label={`สลับธีมเป็น ${theme === 'dark' ? 'สว่าง' : 'มืด'}`}
      />

      {/* Service Request Modal */}
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
          <ServiceRequestModal
            serviceId={selectedServiceId}
            onClose={closeServiceModal}
          />
        </div>
      )}
    </main>
  );
};

export default IndexPage;
