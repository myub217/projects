import React from "react";
import { motion } from "framer-motion";
import heroBg from "../assets/hero.jpg";

const Hero: React.FC = () => {
  return (
    <header
      id="hero"
      role="banner"
      aria-labelledby="hero-heading"
      className="relative flex items-center justify-center min-h-[80vh] bg-black text-white overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: `url(${heroBg})` }}
        aria-hidden="true"
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-black/60 to-transparent dark:from-black/90 dark:via-black/70" aria-hidden="true" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 sm:px-10 max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl font-extrabold tracking-tight drop-shadow-[0_3px_8px_rgba(0,0,0,0.8)]"
        >
          JP Visual & Docs
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-gray-200 leading-relaxed drop-shadow-sm">
          บริการออกแบบและจัดทำเอกสารมืออาชีพ
          <br className="hidden sm:inline" />
          ครบวงจรสำหรับธุรกิจของคุณ
        </p>

        <motion.a
          href="#contact"
          role="button"
          aria-label="ติดต่อเรา"
          className="btn-primary mt-8 inline-flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          ติดต่อเรา
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </motion.a>
      </motion.div>
    </header>
  );
};

export default Hero;