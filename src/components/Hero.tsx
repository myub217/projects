import React from "react";
import { motion } from "framer-motion";
import { SEOHelmet } from "./SEOHelmet";
import VisitorCount from "./VisitorCount";
import heroBg from "../assets/hero.jpg";

type CallToActionButtonProps = {
  href: string;
  isCurrent: boolean;
  onKeyDown: (e: React.KeyboardEvent<HTMLAnchorElement>) => void;
};

const CallToActionButton: React.FC<CallToActionButtonProps> = ({
  href,
  isCurrent,
  onKeyDown,
}) => (
  <motion.a
    href={href}
    tabIndex={0}
    role="button"
    aria-label="ติดต่อเรา"
    aria-current={isCurrent ? "page" : undefined}
    className="btn btn-primary mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg shadow-lg transition-transform
      focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink-500
      dark:focus-visible:ring-pink-400"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onKeyDown={onKeyDown}
  >
    ติดต่อเรา
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    </svg>
  </motion.a>
);

const Hero: React.FC = () => {
  const contactHref = "#contact";

  // จัดการกดปุ่ม Enter หรือ Space เพื่อความเข้ากันได้กับคีย์บอร์ด
  const handleKeyDown = (e: React.KeyboardEvent<HTMLAnchorElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      e.currentTarget.click();
    }
  };

  // ตรวจสอบว่า URL ปัจจุบันมี hash ตรงกับ contactHref หรือไม่ (ใน client เท่านั้น)
  const isCurrentPage =
    typeof window !== "undefined" && window.location.hash === contactHref;

  return (
    <header
      id="hero"
      role="banner"
      aria-labelledby="hero-heading"
      aria-describedby="hero-desc"
      className="relative flex flex-col items-center justify-center min-h-[85vh] bg-black text-white overflow-hidden px-6 sm:px-10 scroll-mt-16"
    >
      {/* SEO Meta Tags */}
      <SEOHelmet
        title="JP Visual & Docs - บริการเอกสารครบวงจร"
        description="บริการออกแบบและจัดทำเอกสารมืออาชีพ ครบวงจรสำหรับธุรกิจของคุณ"
        image="/og.image.png"
        url="https://jp-visual-docs.com"
      />

      {/* Background Image */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-80 -z-10 select-none pointer-events-none
          dark:opacity-90"
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent dark:from-black/90 dark:via-black/70 -z-10"
        aria-hidden="true"
      />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center w-full max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.3, ease: "easeOut", duration: 0.8 },
          },
        }}
      >
        {/* ชื่อเว็บไซต์ */}
        <motion.h1
          id="hero-heading"
          className="text-4xl sm:text-5xl font-extrabold tracking-tight drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)]"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          JP Visual & Docs
        </motion.h1>

        {/* คำอธิบาย */}
        <motion.p
          id="hero-desc"
          className="mt-4 text-lg sm:text-xl text-gray-200 leading-relaxed drop-shadow-sm"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          บริการออกแบบและจัดทำเอกสารมืออาชีพ
          <br className="hidden sm:inline" />
          ครบวงจรสำหรับธุรกิจของคุณ
        </motion.p>

        {/* ปุ่ม Call To Action */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          <CallToActionButton
            href={contactHref}
            isCurrent={isCurrentPage}
            onKeyDown={handleKeyDown}
          />
        </motion.div>

        {/* Visitor Count */}
        <motion.div
          className="mt-10"
          aria-live="polite"
          aria-atomic="true"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          <VisitorCount
            min={500}
            max={3000}
            updateInterval={10000}
            className="text-xl font-semibold text-white/90"
          />
        </motion.div>
      </motion.div>

      {/* เมนูนำทาง */}
      <nav
        aria-label="เมนูนำทางหลัก"
        className="absolute top-6 right-6 flex gap-4 z-20"
      >
        <a
          href="/"
          className="btn btn-outline px-4 py-2 rounded hover:bg-white hover:text-indigo-900 transition"
        >
          หน้าแรก
        </a>
        <a
          href="/secret"
          className="btn btn-primary px-4 py-2 rounded shadow-lg hover:scale-105 transition-transform"
          aria-label="ไปยังห้องลับ Secret Room"
        >
          ห้องลับ (Secret Room)
        </a>
      </nav>
    </header>
  );
};

export default Hero;