import React, { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const portfolioImages = [
  "/images/portfolio-loan-success.jpg",
  "/images/portfolio-loan-success1.jpg",
  "/images/portfolio-loan-success2.jpg",
  "/images/portfolio-loan-success3.jpg",
  "/images/portfolio-loan-success4.jpg",
];

const fallbackImg = "/images/fallback-image.png"; // รูปภาพสำรอง กรณีโหลดไม่สำเร็จ

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

  // ปิด Lightbox เมื่อกด Escape และเลื่อนภาพด้วย Arrow Keys
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape" && lightboxIndex !== null) {
        setLightboxIndex(null);
      }
      if (e.key === "ArrowLeft" && lightboxIndex !== null) {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + portfolioImages.length - 1) % portfolioImages.length
        );
      }
      if (e.key === "ArrowRight" && lightboxIndex !== null) {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev + 1) % portfolioImages.length
        );
      }
    },
    [lightboxIndex]
  );

  useEffect(() => {
    if (lightboxIndex !== null) {
      window.addEventListener("keydown", onKeyDown);
    } else {
      window.removeEventListener("keydown", onKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [lightboxIndex, onKeyDown]);

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      {/* หัวข้อ */}
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

      {/* คำอธิบาย */}
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

      {/* กริดแสดงภาพผลงาน */}
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
              alt={`ภาพประกอบผลงานของเรา ลำดับที่ ${idx + 1}`}
              loading="lazy"
              draggable={false}
              className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-lg"
              onError={(e) => {
                (e.target as HTMLImageElement).src = fallbackImg;
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black z-40"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={overlayVariants}
              onClick={() => setLightboxIndex(null)}
              aria-hidden="true"
            />

            {/* Lightbox Container */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 p-4"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={lightboxVariants}
              role="dialog"
              aria-modal="true"
              aria-label={`ภาพผลงานลำดับที่ ${lightboxIndex + 1} แบบขยายเต็มจอ`}
              tabIndex={-1}
            >
              <div className="relative max-w-4xl max-h-full w-full rounded-lg overflow-hidden bg-white dark:bg-gray-900 shadow-lg">
                <button
                  onClick={() => setLightboxIndex(null)}
                  aria-label="ปิดหน้าต่างแสดงภาพ"
                  className="absolute top-3 right-3 text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent rounded p-1"
                >
                  {/* ไอคอนปิด */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>

                <img
                  src={portfolioImages[lightboxIndex]}
                  alt={`ภาพผลงานขยายลำดับที่ ${lightboxIndex + 1}`}
                  className="max-h-[80vh] w-auto mx-auto block select-none"
                  draggable={false}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = fallbackImg;
                  }}
                />
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;