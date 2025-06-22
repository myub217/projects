import React from "react";
import { Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { motion } from "framer-motion";
import VisitorCount from "@/components/VisitorCount";
import heroBg from "@/assets/hero.webp";

type HeroProps = {
  title?: string;
  subtitle?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
};

const Hero: React.FC<HeroProps> = ({
  title = "JP",
  subtitle = "Visual & Docs",
  description = "ทำให้เรื่องเอกสารและการจัดการระบบของคุณง่ายขึ้น",
  buttonText = "เข้าสู่ระบบลับ",
  buttonLink = "/login",
}) => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("services");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    } else {
      console.warn("ไม่พบ section: #services");
    }
  };

  return (
    <section
      id="hero"
      role="banner"
      aria-label="JP Visual & Docs Hero Section"
      className="relative min-h-[572px] sm:min-h-[75vh] flex items-center justify-center text-white overflow-hidden bg-base-200"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat opacity-20 blur-sm"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: "center top 20%",
        }}
        aria-hidden="true"
      />
      <img
        src={heroBg}
        alt="JP Visual Docs background"
        className="sr-only"
        loading="lazy"
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl px-4 text-center"
      >
        <div className="mb-6">
          <h1 className="text-5xl sm:text-7xl font-extrabold drop-shadow-xl tracking-tight leading-tight text-primary-content">
            {title}
          </h1>
          <p className="text-xl sm:text-2xl text-primary-content/80 tracking-widest font-light uppercase">
            {subtitle}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <p className="mt-1 text-lg sm:text-xl text-primary-content/90 font-light">
            {description}
          </p>
          <p className="mt-2 text-sm sm:text-base text-primary-content/70">
            ศูนย์บริการเอกสาร การเงิน โปรไฟล์ และระบบหลังบ้านครบวงจร
          </p>
        </div>

        <div className="mt-10">
          <Link
            to={buttonLink}
            className="inline-flex items-center gap-2 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200"
          >
            <FaLock className="text-lg" />
            {buttonText}
          </Link>
          <p className="mt-2 text-xs text-white/60">สำหรับผู้ใช้งานพิเศษ</p>
        </div>

        <div className="mt-6">
          <VisitorCount min={1200} max={3000} />
        </div>

        {/* Scroll Down Button */}
        <motion.button
          onClick={scrollToNextSection}
          className="mt-10 btn btn-circle btn-outline text-white hover:text-primary"
          aria-label="เลื่อนไปยังส่วนถัดไป"
          initial={{ y: 0 }}
          animate={{ y: [0, -10, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "easeInOut",
          }}
        >
          ↓
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;