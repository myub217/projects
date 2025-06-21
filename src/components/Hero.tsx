// src/components/Hero.tsx
import React from "react";
import jpLogo from "../assets/images/jp-logo.png";
import { Button } from "@/components/ui/button";
import { Link as ScrollLink } from "react-scroll";

const Hero: React.FC = () => {
  return (
    <section
      className="text-center py-20 bg-gradient-to-br from-blue-50 via-white to-gray-100 
                 dark:from-gray-800 dark:via-gray-900 dark:to-black 
                 rounded-xl shadow-md transition-colors duration-500"
      aria-labelledby="hero-title"
    >
      <div className="max-w-4xl mx-auto px-4">
        <img
          src={jpLogo}
          alt="โลโก้ JP Center"
          className="w-24 h-24 mx-auto mb-6"
          loading="lazy"
          decoding="async"
          width={96}
          height={96}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/fallback-image.png";
          }}
        />

        <h1
          id="hero-title"
          className="text-2xl sm:text-4xl font-extrabold mb-4 text-gray-800 dark:text-white leading-snug"
        >
          ศูนย์บริการครบวงจร <br />
          เอกสาร สินเชื่อ และการตลาด
        </h1>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-8">
          ให้บริการโดยทีมงานมืออาชีพ พร้อมให้คำปรึกษาทุกขั้นตอน
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          {/* ปุ่ม ดูบริการของเรา */}
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
          >
            <Button
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-6 py-3 text-base font-semibold"
              aria-label="ดูบริการของเรา"
            >
              ดูบริการของเรา
            </Button>
          </ScrollLink>

          {/* ปุ่ม ติดต่อเรา */}
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-80}
            className="cursor-pointer"
          >
            <Button
              className="border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/10 rounded-xl px-6 py-3 text-base font-semibold"
              aria-label="ติดต่อเรา"
            >
              ติดต่อเรา
            </Button>
          </ScrollLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;