import React from 'react';
import { FaLock, FaDoorOpen, FaLine, FaFacebookMessenger } from 'react-icons/fa';
import { motion } from 'framer-motion';
import heroBg from '@/assets/hero.webp';

const LINE_URL = 'https://lin.ee/BSkkcTR';
const MESSENGER_URL = 'https://m.me/JPVisualDocs';

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
      className="relative flex min-h-[576px] items-center justify-center overflow-hidden px-6 pb-20 pt-24 text-white sm:min-h-screen sm:px-10 sm:pt-32 lg:px-16"
      style={{
        backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.65), rgba(0,0,0,0.2)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(1.05) contrast(1.15)',
      }}
    >
      {/* Overlay Blur */}
      <div className="absolute inset-0 z-0 bg-black/40 backdrop-blur-sm" />

      {/* Main Text */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="z-10 w-full max-w-3xl text-center"
      >
        <h1 className="select-text text-3xl font-extrabold leading-tight drop-shadow-xl sm:text-5xl lg:text-6xl">
          JP Visual & Docs
        </h1>
        <p className="mx-auto mt-4 max-w-xl select-text text-base text-white/85 sm:text-lg lg:text-xl">
          บริการช่วยจัดการเบื้องหลังทุกเรื่องที่คุณไม่อยากวุ่น — เอกสาร ธุรกิจ
          และการตลาด พร้อมทำจริง จบไว
        </p>

        {/* CTA Button */}
        <motion.button
          onClick={handleLoginClick}
          type="button"
          className="mt-8 inline-flex items-center justify-center gap-3 rounded-full bg-white/90 px-6 py-3 font-semibold text-gray-900 shadow-xl backdrop-blur-lg transition-all duration-300 hover:scale-105 focus:outline-none focus-visible:ring-4 focus-visible:ring-gray-300 sm:px-8 sm:py-4"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          aria-label="เข้าสู่ระบบ"
        >
          <FaLock className="text-xl sm:text-2xl" aria-hidden="true" />
          <span className="text-base sm:text-lg">{buttonText}</span>
          <FaDoorOpen className="text-xl opacity-70 sm:text-2xl" aria-hidden="true" />
        </motion.button>
      </motion.div>

      {/* Chat Shortcuts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute bottom-4 right-4 z-20 flex items-center gap-3 rounded-xl bg-white/90 px-3 py-2 shadow-xl backdrop-blur-md dark:bg-gray-900/80 sm:gap-4 sm:px-4 sm:py-3"
      >
        <motion.a
          href={LINE_URL}
          target="_blank"
          rel="noopener noreferrer"
          title="ติดต่อผ่าน LINE"
          className="rounded-full text-green-600 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="ติดต่อผ่าน LINE"
        >
          <FaLine className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
        </motion.a>

        <motion.a
          href={MESSENGER_URL}
          target="_blank"
          rel="noopener noreferrer"
          title="ติดต่อผ่าน Messenger"
          className="rounded-full text-blue-600 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="ติดต่อผ่าน Messenger"
        >
          <FaFacebookMessenger className="h-6 w-6 sm:h-7 sm:w-7" aria-hidden="true" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
