import React from "react";
import { motion } from "framer-motion";

const portfolioImages = [
  "/images/portfolio-loan-success.jpg",
  "/images/portfolio-loan-success1.jpg",
  "/images/portfolio-loan-success2.jpg",
  "/images/portfolio-loan-success3.jpg",
  "/images/portfolio-loan-success4.jpg",
];

const PortfolioSection: React.FC = () => {
  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-title"
      className="max-w-6xl mx-auto"
    >
      <motion.h2
        id="portfolio-title"
        className="text-3xl font-bold text-center mb-6 text-primary dark:text-accent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        ผลงานของเรา
      </motion.h2>

      <motion.p
        className="text-center max-w-2xl mx-auto text-gray-700 dark:text-gray-300 mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        เราได้ร่วมออกแบบแบรนด์ <strong>ALONDER</strong> ตั้งแต่การวางคอนเซ็ปต์แบรนด์ การวิเคราะห์ฐานลูกค้า การสร้าง Moodboard และ Brand Book จนถึงการนำเสนอพร้อม Workshop ถ่ายทอดสู่ทีมงานอย่างครบวงจร
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolioImages.map((img, idx) => (
          <motion.div
            key={idx}
            className="overflow-hidden rounded-lg shadow-md bg-white dark:bg-gray-900"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
          >
            <img
              src={img}
              alt={`ภาพประกอบผลงาน ${idx + 1}`}
              className="w-full h-56 object-cover"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;