import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services, Service } from "../data/services";
import ServiceCard from "./ServiceCard";

// Animation variants สำหรับการแสดงการ์ดแต่ละใบ พร้อม delay index
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
  exit: {
    opacity: 0,
    y: 10,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const ServicesSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // จำลองการโหลดข้อมูลด้วย timeout 600ms
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.section
      id="services"
      role="region"
      aria-labelledby="services-title"
      aria-label="บริการที่เรามีให้เลือก"
      aria-busy={isLoading}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* หัวข้อ */}
      <motion.h2
        id="services-title"
        className="text-3xl sm:text-4xl font-bold text-center text-base-content mb-14 drop-shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        บริการของเรา
        <span className="block mt-2 text-base text-base-content/70 font-normal">
          สำรวจบริการที่เราพร้อมให้คำปรึกษาและดำเนินการให้คุณครบวงจร
        </span>
      </motion.h2>

      {/* รายการบริการในรูปแบบกริด */}
      <div
        role="list"
        aria-live={isLoading ? "polite" : "off"}
        className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10"
      >
        <AnimatePresence>
          {isLoading ? (
            // Skeleton Loader แทนการ์ดจริงระหว่างโหลด
            Array.from({ length: 4 }).map((_, idx) => (
              <motion.div
                key={`skeleton-${idx}`}
                role="listitem"
                aria-label="กำลังโหลดข้อมูลบริการ"
                tabIndex={-1}
                className="animate-pulse bg-base-300 h-72 rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            ))
          ) : services.length > 0 ? (
            // แสดง ServiceCard ทีละรายการพร้อม animation delay
            services.map((service: Service, index: number) => (
              <motion.div
                key={service.id}
                role="listitem"
                layout
                custom={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <ServiceCard service={service} />
              </motion.div>
            ))
          ) : (
            // กรณีไม่มีบริการให้แสดง
            <motion.div
              className="col-span-full text-center text-base-content/70"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              layout
            >
              ไม่มีบริการที่จะแสดงในขณะนี้
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default ServicesSection;