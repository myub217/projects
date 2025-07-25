// src/pages/IndexPage.tsx
// ✨ Single Page — Full Sections Layout with ThemeToggle, Modal (FocusTrap), Accessibility

import React, { useEffect, useState, useCallback, useRef } from 'react';

import HeroSection from '@components/Sections/HeroSection';
import FeatureSection from '@components/Sections/FeatureSection';
import AboutSection from '@components/Sections/AboutSection';
import StatsSection from '@components/Sections/StatsSection';
import ServicesSectionBlock from '@components/Sections/ServicesSectionBlock';
import IndustryInsightsSection from '@components/IndustryInsights/IndustryInsightsSection';
import TestimonialsSection from '@components/Sections/TestimonialsSection';
import FAQSection from '@components/Sections/FAQSection';
import CTASection from '@components/Sections/CTASection';
import Footer from '@components/Footer';
import ServiceRequestModal from '@components/Modals/ServiceRequestModal';
import ThemeToggleButton from '@components/common/ThemeToggleButton';
import HomeContent from '@components/HomeContent';

import type { Service } from '@types/service';
import servicesData from '@data/services';

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

  // Find selected service by id
  const selectedService =
    selectedServiceId !== null
      ? servicesData.find((s: Service) => s.id === selectedServiceId) || null
      : null;

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
      {modalOpen && selectedService && (
        <div
          ref={modalRef}
          tabIndex={-1}
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-request-modal-title"
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={handleBackdropClick}
        >
          <ServiceRequestModal service={selectedService} onClose={closeServiceModal} />
        </div>
      )}
    </main>
  );
};

export default IndexPage;
