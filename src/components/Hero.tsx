// ✅ src/components/Hero.tsx

import React from 'react';
import { FaLock, FaDoorOpen, FaLine, FaFacebookMessenger } from 'react-icons/fa';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero.webp';

type HeroProps = {
  buttonText?: string;
};

const Hero: React.FC<HeroProps> = ({ buttonText = 'เข้าสู่ระบบลับ' }) => {
  const handleLoginClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.location.href = '/login';
  };

  const LINE_URL = 'https://lin.ee/BSkkcTR';
  const MESSENGER_URL = 'https://m.me/JPVisualDocs';

  return (
    <section
      id="hero"
      role="banner"
      aria-label="ส่วนแนะนำหน้าแรก"
      tabIndex={-1}
      className="relative flex items-center justify-center min-h-[576px] sm:min-h-screen overflow-hidden px-6 sm:px-10 lg:px-16 pt-24 sm:pt-32 pb-20 text-white"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.2)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(1.05) contrast(1.15)',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm z-0" />

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="z-10 w-full max-w-3xl text-center"
      >
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white drop-shadow-lg">
          JP Visual & Docs
        </h1>
        <p className="mt-4 text-base sm:text-lg lg:text-xl text-white/85">
          บริการจัดการงานหลังบ้านอย่างมืออาชีพ ครบทุกด้านตั้งแต่เอกสาร ธุรกิจ ไปจนถึงการตลาด
        </p>

        <motion.button
          onClick={handleLoginClick}
          type="button"
          className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-white/90 px-6 py-3 sm:px-8 sm:py-4 font-semibold text-gray-900 shadow-xl backdrop-blur-lg transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <FaLock className="text-xl sm:text-2xl" />
          <span className="text-base sm:text-lg">{buttonText}</span>
          <FaDoorOpen className="text-xl sm:text-2xl opacity-70" />
        </motion.button>
      </motion.div>

      {/* Floating Contact Shortcut */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute bottom-5 right-5 z-20 flex items-center gap-3 sm:gap-4 rounded-xl bg-white/90 px-3 py-2 sm:px-4 sm:py-3 shadow-xl backdrop-blur-md dark:bg-gray-900/70"
      >
        <motion.a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer nofollow"
          title="ติดต่อผ่าน LINE"
          className="rounded-full text-green-600 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 transition-transform"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaLine className="h-6 w-6 sm:h-7 sm:w-7" />
        </motion.a>

        <motion.a
          href={MESSENGER_URL}
          target="_blank"
          rel="noopener noreferrer nofollow"
          title="ติดต่อผ่าน Messenger"
          className="rounded-full text-blue-600 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 transition-transform"
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