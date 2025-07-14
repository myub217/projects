// src/components/CTASection.tsx

import React from "react";
import { useNavigate } from "react-router-dom";

interface CTASectionProps {
  heading?: string;
  subheading?: string;
  buttonText?: string;
  buttonHref?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  heading = "พร้อมเริ่มต้นใช้งานหรือยัง?",
  subheading = "เลือกบริการที่เหมาะกับคุณ แล้วให้เราช่วยดูแลทุกขั้นตอน",
  buttonText = "ดูบริการทั้งหมด",
  buttonHref = "#services",
}) => {
  const navigate = useNavigate();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonHref.startsWith("#")) {
      const id = buttonHref.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(buttonHref);
    }
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] py-24 text-center text-white transition-colors duration-500"
      aria-labelledby="cta-section"
      role="region"
    >
      {/* Background decorative circles */}
      <div className="pointer-events-none absolute -left-12 -top-12 h-48 w-48 rounded-full bg-white opacity-10 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white opacity-10 blur-3xl"></div>

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
          className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-[var(--color-primary)] shadow-xl transition-transform hover:bg-gray-100 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-white focus:ring-offset-2 active:scale-95"
          aria-label={buttonText}
        >
          {buttonText}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="ml-3 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            focusable="false"
            role="img"
          >
            <path d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default CTASection;