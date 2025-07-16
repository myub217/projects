// src/components/CTASection.tsx

import React from 'react';
import { useNavigate } from 'react-router-dom';

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  buttonText?: string;
  buttonHref?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  heading = 'บริการของเราพร้อมดูแลคุณ',
  subheading = 'เลือกบริการที่ตรงใจ แล้วเริ่มต้นความสะดวกกับทีมงานมืออาชีพ',
  buttonText = 'สำรวจบริการทั้งหมด',
  buttonHref = '#services',
}) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonHref.startsWith('#')) {
      const id = buttonHref.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate(buttonHref);
    }
  };

  return (
    <section
      role="region"
      aria-labelledby="cta-section"
      className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary py-24 text-center text-white"
    >
      {/* 🎯 BG Circles */}
      <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full bg-white opacity-10 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-white opacity-10 blur-3xl"></div>

      {/* 💬 Content */}
      <div className="relative z-10 mx-auto max-w-3xl px-6 sm:px-8 lg:px-12">
        <h2
          id="cta-section"
          className="mb-6 text-4xl font-extrabold drop-shadow-md sm:text-5xl"
        >
          {heading}
        </h2>
        <p className="mx-auto mb-10 max-w-xl text-xl opacity-95 drop-shadow-sm sm:text-2xl">
          {subheading}
        </p>

        <button
          type="button"
          onClick={handleClick}
          className="inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-bold text-primary shadow-xl transition hover:scale-105 hover:bg-gray-100 hover:shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 active:scale-95"
          aria-label={buttonText}
        >
          {buttonText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            focusable="false"
          >
            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default CTASection;