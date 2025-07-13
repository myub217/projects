// src/components/Hero.tsx

import React from "react";
import { FaLock, FaDoorOpen } from "react-icons/fa";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero.webp";
import signature from "@/assets/signature.webp";

type HeroProps = {
  buttonText?: string;
};

const Hero: React.FC<HeroProps> = ({ buttonText = "เข้าสู่ระบบลับ" }) => {
  const handleLoginClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = "/login";
  };

  return (
    <section
      id="hero"
      role="banner"
      aria-label="ส่วนแนะนำหน้าแรก"
      tabIndex={-1}
      className="relative min-h-[576px] sm:min-h-screen bg-gray-900 text-white overflow-hidden flex items-center justify-center px-6 sm:px-12 pt-24 sm:pt-32 pb-20"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.08)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        boxShadow: "inset 0 0 100px rgba(0, 0, 0, 0.5)",
        filter: "brightness(1.15) contrast(1.1)",
      }}
    >
      {/* ปุ่มและลายเซ็นลอยด้านล่างขวา */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="fixed bottom-4 right-4 flex flex-col items-center gap-1 sm:gap-2.5 z-50"
      >
        <motion.img
          src={signature}
          alt="ลายเซ็นเจ้าป่า"
          loading="lazy"
          draggable={false}
          className="select-none pointer-events-none w-20 sm:w-40 translate-y-2 sm:translate-y-1"
          style={{
            filter: `
              brightness(2.2)
              contrast(1.9)
              drop-shadow(0 0 3px rgba(255,255,255,0.5))
              drop-shadow(0 0 4px rgba(255,255,255,0.25))
            `,
            marginBottom: "-0.25rem",
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5 }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />

        <motion.button
          onClick={handleLoginClick}
          aria-label="เข้าสู่ระบบลับ"
          title="เข้าสู่พื้นที่เฉพาะสมาชิก"
          type="button"
          className="inline-flex items-center gap-1.5 sm:gap-3 bg-white bg-opacity-90 text-gray-900 font-semibold
            px-4 py-1.5 sm:px-9 sm:py-3 rounded-full shadow-md
            hover:bg-opacity-100 hover:scale-105 hover:shadow-lg
            transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-gray-400"
          style={{ boxShadow: "0 2px 10px rgba(0,0,0,0.15)" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <FaLock className="text-base sm:text-xl" aria-hidden="true" />
          <span className="text-xs sm:text-base whitespace-nowrap">{buttonText}</span>
          <FaDoorOpen className="text-sm sm:text-lg opacity-70" aria-hidden="true" />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;