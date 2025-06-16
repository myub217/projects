// src/components/ServicesSection.tsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "../data/services";
import ServiceCard from "./ServiceCard";

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

  // Simulate loading
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

      <div
        className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 sm:gap-10"
        aria-live="polite"
      >
        <AnimatePresence>
          {isLoading ? (
            // Skeleton loader while loading
            Array.from({ length: 4 }).map((_, index) => (
              <motion.div
                key={`skeleton-${index}`}
                className="animate-pulse bg-base-300 h-72 rounded-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              />
            ))
          ) : services.length > 0 ? (
            services.map((service, index) => (
              <motion.div
                key={service.id}
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