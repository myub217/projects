// src/components/Hero.tsx

import React from "react";
import { FaLock, FaDoorOpen, FaLine, FaFacebookMessenger } from "react-icons/fa";
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
      {/* กลุ่ม action ด้านล่างขวา */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="fixed bottom-4 right-4 flex flex-col items-end gap-3 sm:gap-4 z-50 max-w-[90vw]"
      >
        {/* ลายเซ็น */}
        <motion.img
          src={signature}
          alt="ลายเซ็นเจ้าป่า"
          loading="lazy"
          draggable={false}
          className="select-none pointer-events-none w-20 sm:w-36"
          style={{
            filter: `
              brightness(2.2)
              contrast(1.9)
              drop-shadow(0 0 3px rgba(255,255,255,0.5))
              drop-shadow(0 0 4px rgba(255,255,255,0.25))
            `,
          }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5 }}
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />

        {/* ปุ่มเข้าสู่ระบบลับ */}
        <motion.button
          onClick={handleLoginClick}
          aria-label="เข้าสู่ระบบลับ"
          title="เข้าสู่พื้นที่เฉพาะสมาชิก"
          type="button"
          className="inline-flex items-center gap-2 sm:gap-3 bg-white/90 text-gray-900 font-semibold
            px-4 py-2 sm:px-8 sm:py-2.5 rounded-full shadow-xl backdrop-blur
            hover:bg-white transition duration-300 ease-out
            focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-400"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <FaLock className="text-base sm:text-xl" />
          <span className="text-sm sm:text-base">{buttonText}</span>
          <FaDoorOpen className="text-sm sm:text-lg opacity-70" />
        </motion.button>

        {/* Contact Action Group */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex items-center gap-3 sm:gap-4 bg-white/80 dark:bg-gray-900/70 backdrop-blur-md px-3 py-2 sm:px-4 sm:py-3 rounded-xl shadow-lg"
        >
          <motion.a
            href="https://lin.ee/BSkkcTR"
            target="_blank"
            rel="noopener noreferrer nofollow"
            role="link"
            aria-label="ติดต่อผ่าน LINE"
            title="LINE @462FQTFC"
            className="text-green-600 hover:scale-110 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLine className="w-6 h-6 sm:w-7 sm:h-7" />
          </motion.a>

          <motion.a
            href="https://m.me/JPVisualDocs"
            target="_blank"
            rel="noopener noreferrer nofollow"
            role="link"
            aria-label="ติดต่อผ่าน Messenger"
            title="Facebook Messenger"
            className="text-blue-600 hover:scale-110 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 rounded-full"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaFacebookMessenger className="w-6 h-6 sm:w-7 sm:h-7" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;