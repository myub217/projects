import React, { useState, useCallback, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const portfolioImages = [
  "/images/portfolio-loan-success.jpg",
  "/images/portfolio-loan-success1.jpg",
  "/images/portfolio-loan-success2.jpg",
  "/images/portfolio-loan-success3.jpg",
  "/images/portfolio-loan-success4.jpg",
];

const fallbackImg = "/images/fallback-image.png";

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 0.8 },
};

const lightboxVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1 },
};

const PortfolioSection: React.FC = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;

      switch (e.key) {
        case "Escape":
          e.preventDefault();
          setLightboxIndex(null);
          break;
        case "ArrowLeft":
          e.preventDefault();
          setLightboxIndex((prev) =>
            prev !== null
              ? (prev + portfolioImages.length - 1) % portfolioImages.length
              : null
          );
          break;
        case "ArrowRight":
          e.preventDefault();
          setLightboxIndex((prev) =>
            prev !== null ? (prev + 1) % portfolioImages.length : null
          );
          break;
        case "Tab":
          if (!lightboxRef.current) return;
          const focusableEls = lightboxRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (!focusableEls.length) return;
          const first = focusableEls[0];
          const last = focusableEls[focusableEls.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === first) {
              e.preventDefault();
              last.focus();
            }
          } else {
            if (document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
          break;
      }
    },
    [lightboxIndex]
  );

  useEffect(() => {
    if (lightboxIndex !== null) {
      window.addEventListener("keydown", onKeyDown);
      document.body.style.overflow = "hidden";
      setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 0);

      const next = (lightboxIndex + 1) % portfolioImages.length;
      new Image().src = portfolioImages[next];
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, onKeyDown]);

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <motion.h2
        id="portfolio-title"
        className="text-3xl font-extrabold text-center mb-6 text-primary dark:text-accent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        ผลงานของเรา
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-10 leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        เราได้ร่วมออกแบบแบรนด์ <strong>ALONDER</strong> ตั้งแต่การวางคอนเซ็ปต์แบรนด์
        การวิเคราะห์ฐานลูกค้า การสร้าง Moodboard และ Brand Book จนถึงการนำเสนอพร้อม Workshop ถ่ายทอดสู่ทีมงานอย่างครบวงจร
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        role="list"
      >
        {portfolioImages.map((img, idx) => (
          <motion.div
            key={idx}
            role="listitem"
            tabIndex={0}
            aria-label={`ผลงานภาพที่ ${idx + 1}`}
            className="overflow-hidden rounded-lg shadow-md bg-white dark:bg-gray-900 cursor-pointer transform transition-transform duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/50 dark:focus:ring-accent/60"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => setLightboxIndex(idx)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setLightboxIndex(idx);
              }
            }}
          >
            <img
              src={img}
              alt={`ภาพประกอบผลงาน ลำดับที่ ${idx + 1}`}
              onError={(e) =>
                ((e.target as HTMLImageElement).src = fallbackImg)
              }
              loading="lazy"
              className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-lg"
              draggable={false}
            />
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <>
            <motion.div
              className="fixed inset-0 bg-black z-40"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={overlayVariants}
              onClick={() => setLightboxIndex(null)}
              aria-hidden="true"
            />
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={lightboxVariants}
              role="dialog"
              aria-modal="true"
              aria-labelledby="lightbox-label"
              aria-describedby="lightbox-desc"
              tabIndex={-1}
              ref={lightboxRef}
            >
              <div className="relative max-w-5xl w-full bg-white dark:bg-gray-900 rounded-lg shadow-xl max-h-[90vh] overflow-auto">
                {/* ปุ่มปิด */}
                <button
                  onClick={() => setLightboxIndex(null)}
                  aria-label="ปิดหน้าต่างแสดงภาพ"
                  className="absolute top-3 right-3 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent rounded p-1"
                  ref={closeButtonRef}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                {/* ปุ่มก่อนหน้า */}
                <button
                  onClick={() =>
                    setLightboxIndex((prev) =>
                      prev !== null
                        ? (prev + portfolioImages.length - 1) %
                          portfolioImages.length
                        : null
                    )
                  }
                  aria-label="ภาพก่อนหน้า"
                  className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* ปุ่มถัดไป */}
                <button
                  onClick={() =>
                    setLightboxIndex((prev) =>
                      prev !== null
                        ? (prev + 1) % portfolioImages.length
                        : null
                    )
                  }
                  aria-label="ภาพถัดไป"
                  className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* ภาพหลัก */}
                <img
                  src={portfolioImages[lightboxIndex]}
                  alt={`ภาพผลงานขยายลำดับที่ ${lightboxIndex + 1}`}
                  loading="eager"
                  className="block mx-auto max-h-[80vh] w-auto select-none"
                  draggable={false}
                  onError={(e) => ((e.target as HTMLImageElement).src = fallbackImg)}
                  id="lightbox-label"
                />

                <p id="lightbox-desc" className="sr-only">
                  ภาพผลงานขยายลำดับที่ {lightboxIndex + 1} จากทั้งหมด {portfolioImages.length} ภาพ
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;