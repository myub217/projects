import React from "react";
import { motion } from "framer-motion";
import jpLogo from "../assets/jp-logo.png";

const Hero: React.FC = () => {
  return (
    <header
      id="hero"
      role="banner"
      aria-labelledby="hero-heading"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-tr from-blue-950 via-indigo-900 to-blue-800 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 px-4 sm:px-8"
    >
      <motion.div
        className="text-center max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        tabIndex={-1} // ให้ keyboard focus ได้
      >
        <motion.img
          src={jpLogo}
          alt="โลโก้ JP Visual & Docs"
          className="w-24 h-24 mx-auto mb-6 rounded-full shadow-xl border-4 border-white dark:border-gray-700"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />

        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-xl leading-tight"
        >
          JP Visual & Docs
        </h1>

        <p className="mt-4 text-lg sm:text-xl text-white/90 max-w-xl mx-auto leading-relaxed">
          บริการออกแบบและจัดทำเอกสารมืออาชีพ
          <br className="hidden sm:inline" />
          ครบวงจรสำหรับธุรกิจของคุณ
        </p>

        <motion.a
          href="#contact"
          className="mt-10 inline-block btn-primary text-lg px-8 py-3 shadow-md focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-primary dark:focus:ring-white transition-transform rounded-md"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="ติดต่อเรา"
        >
          ติดต่อเรา
        </motion.a>
      </motion.div>
    </header>
  );
};

export default Hero;