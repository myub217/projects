// src/components/Hero.tsx

import React from 'react';
import { FaLock, FaDoorOpen, FaLine, FaFacebookMessenger } from 'react-icons/fa';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero.webp';
import signature from '@/assets/signature.webp';

type HeroProps = {
  buttonText?: string;
};

const Hero: React.FC<HeroProps> = ({ buttonText = 'เข้าสู่ระบบลับ' }) => {
  const handleLoginClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = '/login';
  };

  return (
    <section
      id="hero"
      role="banner"
      aria-label="ส่วนแนะนำหน้าแรก"
      tabIndex={-1}
      className="relative flex min-h-[576px] items-center justify-center overflow-hidden bg-gray-900 px-6 pb-20 pt-24 text-white sm:min-h-screen sm:px-12 sm:pt-32"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.3), rgba(0,0,0,0.08)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
        boxShadow: 'inset 0 0 100px rgba(0, 0, 0, 0.5)',
        filter: 'brightness(1.15) contrast(1.1)',
      }}
    >
      {/* 🧠 กล่องข้อความกลางจอ */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="z-10 max-w-3xl text-center"
      >
        <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
          บริการเอกสารครบวงจร <span className="text-primary">ที่คุณเชื่อใจได้</span>
        </h1>
        <p className="mb-8 text-base text-white/80 sm:text-lg">
          ไม่ว่าจะเป็นยื่นวีซ่า ทำบัตร แก้เอกสาร หรือระบบหลังบ้าน — เราดูแลครบ จบในที่เดียว
        </p>

        {/* ✅ ปุ่มเข้าสู่ระบบลับ */}
        <motion.button
          onClick={handleLoginClick}
          className="inline-flex items-center gap-3 rounded-full bg-white/90 px-6 py-3 font-semibold text-gray-900 shadow-xl backdrop-blur transition hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-400"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <FaLock className="text-xl" />
          <span className="text-base sm:text-lg">{buttonText}</span>
          <FaDoorOpen className="text-xl opacity-70" />
        </motion.button>

        {/* ✅ ลายเซ็น (ด้านล่าง) */}
        <motion.div
          className="mt-8 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5 }}
        >
          <img
            src={signature}
            alt="ลายเซ็นเจ้าป่า"
            loading="lazy"
            draggable={false}
            className="w-28 sm:w-40 pointer-events-none select-none"
            style={{
              filter: `
                brightness(2.2)
                contrast(1.9)
                drop-shadow(0 0 3px rgba(255,255,255,0.5))
                drop-shadow(0 0 4px rgba(255,255,255,0.25))
              `,
            }}
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
        </motion.div>
      </motion.div>

      {/* ✅ Contact Action Group */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-4 right-4 z-50 flex items-center gap-3 rounded-xl bg-white/80 px-3 py-2 shadow-lg backdrop-blur-md dark:bg-gray-900/70 sm:gap-4 sm:px-4 sm:py-3"
      >
        <motion.a
          href="https://lin.ee/BSkkcTR"
          target="_blank"
          rel="noopener noreferrer nofollow"
          role="link"
          aria-label="ติดต่อผ่าน LINE"
          title="LINE @462FQTFC"
          className="rounded-full text-green-600 transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaLine className="h-6 w-6 sm:h-7 sm:w-7" />
        </motion.a>

        <motion.a
          href="https://m.me/JPVisualDocs"
          target="_blank"
          rel="noopener noreferrer nofollow"
          role="link"
          aria-label="ติดต่อผ่าน Messenger"
          title="Facebook Messenger"
          className="rounded-full text-blue-600 transition-transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaFacebookMessenger className="h-6 w-6 sm:h-7 sm:w-7" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;