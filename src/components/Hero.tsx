import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import VisitorCount from "./VisitorCount";
import heroBg from "../assets/hero.jpg";

const Hero: React.FC = () => {
  return (
    <header
      id="hero"
      role="banner"
      aria-labelledby="hero-heading"
      aria-describedby="hero-desc"
      className="relative flex flex-col items-center justify-center min-h-[85vh] bg-black text-white overflow-hidden px-6 sm:px-10 scroll-mt-16"
    >
      <Helmet>
        <title>JP Visual & Docs - บริการเอกสารครบวงจร</title>
        <meta
          name="description"
          content="บริการออกแบบและจัดทำเอกสารมืออาชีพ ครบวงจรสำหรับธุรกิจของคุณ"
        />
        <meta property="og:title" content="JP Visual & Docs" />
        <meta
          property="og:description"
          content="บริการออกแบบและจัดทำเอกสารมืออาชีพ ครบวงจรสำหรับธุรกิจของคุณ"
        />
        <meta property="og:image" content="/og.image.png" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#FF77E9" />
      </Helmet>

      {/* 🔥 Background image (decorative) */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-80 -z-10 select-none pointer-events-none"
      />

      {/* 🔥 Dark overlay for readability */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent dark:from-black/90 dark:via-black/70 -z-10"
        aria-hidden="true"
      />

      {/* 💎 Main content with animation */}
      <motion.div
        className="relative z-10 text-center w-full max-w-3xl mx-auto"
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

        <p
          id="hero-desc"
          className="mt-4 text-lg sm:text-xl text-gray-200 leading-relaxed drop-shadow-sm"
        >
          บริการออกแบบและจัดทำเอกสารมืออาชีพ
          <br className="hidden sm:inline" />
          ครบวงจรสำหรับธุรกิจของคุณ
        </p>

        {/* ✨ CTA Button */}
        <motion.a
          href="#contact"
          role="button"
          tabIndex={0}
          aria-label="ติดต่อเรา"
          className="btn btn-primary mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg shadow-lg transition-transform
            focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pink-500
            dark:focus-visible:ring-pink-400"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.currentTarget.click();
            }
          }}
        >
          ติดต่อเรา
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </motion.a>

        {/* 👥 Visitor Count */}
        <div className="mt-10">
          <VisitorCount
            min={500}
            max={3000}
            updateInterval={10000}
            className="text-xl font-semibold text-white/90"
          />
        </div>
      </motion.div>
    </header>
  );
};

export default Hero;