import React from "react";
import { motion } from "framer-motion";
import { SEOHelmet } from "./SEOHelmet";
import VisitorCount from "./VisitorCount";
import heroBg from "../assets/hero.jpg";

type CallToActionButtonProps = {
  href: string;
  label: string;
  icon?: React.ReactNode;
  isCurrent?: boolean;
  external?: boolean;
};

const CallToActionButton: React.FC<CallToActionButtonProps> = ({
  href,
  label,
  icon,
  isCurrent,
  external = false,
}) => {
  // ตรวจสอบว่าเป็นลิงก์ภายนอกหรือไม่
  const isExternal = external || /^https?:\/\//.test(href);

  return (
    <motion.a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`btn btn-primary mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-lg shadow-lg
                  transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
                  focus-visible:ring-pink-500 dark:focus-visible:ring-pink-400
                  ${isCurrent ? "aria-current" : ""}`}
      aria-current={isCurrent ? "page" : undefined}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {label}
      {icon && (
        <span aria-hidden="true" className="flex-shrink-0">
          {icon}
        </span>
      )}
    </motion.a>
  );
};

const Hero: React.FC = () => {
  const contactHref = "#contact";

  // ตรวจสอบว่าหน้าเพจนี้เป็นปัจจุบันที่ลิงก์นี้หรือไม่
  const isCurrentPage =
    typeof window !== "undefined" && window.location.hash === contactHref;

  return (
    <header
      id="hero"
      role="banner"
      aria-labelledby="hero-heading"
      aria-describedby="hero-desc"
      className="relative flex flex-col items-center justify-center min-h-[85vh] bg-black text-white
                 overflow-hidden px-6 sm:px-10 scroll-mt-16"
    >
      {/* SEO Metadata */}
      <SEOHelmet
        title="JP Visual & Docs - วางแผน โปรไฟล์ เอกสารครบวงจร"
        description="เราดูแลเอกสารสำคัญ วางแผนธุรกิจ และสร้างภาพลักษณ์อย่างมืออาชีพ สำหรับทุกการยื่นกู้ วีซ่า และโปรไฟล์ธุรกิจ"
        image="/og.image.png"
        url="https://jp-visual-docs.com"
      />

      {/* Background Image */}
      <img
        src={heroBg}
        alt="ภาพพื้นหลังแสดงความเป็นมืออาชีพของ JP Visual & Docs"
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-80 -z-10 select-none pointer-events-none dark:opacity-90"
        draggable={false}
      />
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent
                   dark:from-black/90 dark:via-black/70 -z-10"
        aria-hidden="true"
      />

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center w-full max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 60, damping: 12, staggerChildren: 0.2 },
          },
        }}
      >
        <motion.h1
          id="hero-heading"
          className="text-4xl sm:text-5xl font-extrabold tracking-tight
                     drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)]"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          JP Visual & Docs
        </motion.h1>

        <motion.p
          id="hero-desc"
          className="mt-4 text-lg sm:text-xl text-gray-200 leading-relaxed drop-shadow-sm"
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
        >
          ดูแลเอกสารสำคัญ ยื่นกู้ วีซ่า และวางแผนโปรไฟล์<br />
          ครบทุกขั้นตอน พร้อมระบบธุรกิจและการตลาดครบวงจร
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4 mt-6"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          {/* ปุ่มติดต่อเรา - ลิงก์ภายใน */}
          <CallToActionButton
            href={contactHref}
            label="ติดต่อเรา"
            isCurrent={isCurrentPage}
            icon={
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
            }
          />

          {/* ปุ่ม LINE (ลิงก์ภายนอก) */}
          <CallToActionButton
            href="https://lin.ee/XJZ7H4u"
            label="แชทผ่าน LINE"
            external
            icon={
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M20.666 3.999C18.486 2.053 15.42.933 12 .933c-7.177 0-13 4.698-13 10.495 0 3.594 2.096 6.79 5.486 8.61.2.102.42.17.65.205v3.05c0 .437.536.658.823.34l3.06-3.51c1.476.26 3.01.31 4.548.144 5.455-.59 8.984-4.523 8.984-9.223 0-1.862-.686-3.498-1.792-4.623z" />
              </svg>
            }
          />

          {/* ปุ่ม Instagram */}
          <CallToActionButton
            href="https://www.instagram.com/jp.visual.docs"
            label="Instagram"
            external
            icon={
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.206.056 2.017.246 2.49.413a4.92 4.92 0 011.675 1.01 4.92 4.92 0 011.01 1.675c.167.473.357 1.284.413 2.49.058 1.266.07 1.645.07 4.85s-.012 3.584-.07 4.85c-.056 1.206-.246 2.017-.413 2.49a4.92 4.92 0 01-1.01 1.675 4.92 4.92 0 01-1.675 1.01c-.473.167-1.284.357-2.49.413-1.266.058-1.645.07-4.85.07s-3.584-.012-4.85-.07c-1.206-.056-2.017-.246-2.49-.413a4.92 4.92 0 01-1.675-1.01 4.92 4.92 0 01-1.01-1.675c-.167-.473-.357-1.284-.413-2.49-.058-1.266-.07-1.645-.07-4.85s.012-3.584.07-4.85c.056-1.206.246-2.017.413-2.49a4.92 4.92 0 011.01-1.675 4.92 4.92 0 011.675-1.01c.473-.167 1.284-.357 2.49-.413 1.266-.058 1.645-.07 4.85-.07zm0-2.163C8.741 0 8.332.012 7.052.07 5.72.13 4.5.38 3.468.83 2.428 1.293 1.5 2.221 1.037 3.261c-.45 1.032-.7 2.252-.76 3.584C.012 8.332 0 8.741 0 12c0 3.259.012 3.668.07 4.948.06 1.332.31 2.552.76 3.584.463 1.04 1.391 1.969 2.431 2.432 1.032.45 2.252.7 3.584.76 1.28.058 1.689.07 4.948.07s3.668-.012 4.948-.07c1.332-.06 2.552-.31 3.584-.76 1.04-.463 1.969-1.391 2.432-2.431.45-1.032.7-2.252.76-3.584.058-1.28.07-1.689.07-4.948s-.012-3.668-.07-4.948c-.06-1.332-.31-2.552-.76-3.584-.463-1.04-1.391-1.969-2.431-2.432-1.032-.45-2.252-.7-3.584-.76C15.668.012 15.259 0 12 0z" />
                <circle cx="18.406" cy="5.594" r="1.44" />
              </svg>
            }
          />

          {/* ปุ่ม TikTok */}
          <CallToActionButton
            href="https://www.tiktok.com/@jp.visual.docs"
            label="TikTok"
            external
            icon={
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M9.5 3.2c0-1.2 1.3-2.1 2.6-1.6 1.4.5 2.5 2.1 2.5 4.3v9.7a5.8 5.8 0 01-5.5-5.7v-5.7H9.5z" />
              </svg>
            }
          />
        </motion.div>

        {/* Visitor count */}
        <motion.div
          className="mt-10"
          aria-live="polite"
          aria-atomic="true"
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
        >
          <VisitorCount
            min={500}
            max={3000}
            updateInterval={10000}
            className="text-xl font-semibold text-white/90"
          />
        </motion.div>
      </motion.div>

      {/* Navigation links บนขวา */}
      <nav
        aria-label="เมนูนำทางหลัก"
        className="absolute top-6 right-6 flex gap-3 z-20"
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