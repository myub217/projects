// src/components/Hero/Hero.tsx
import React from "react";
import heroImage from "@/assets/hero.webp";

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gray-100 dark:bg-gray-900 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
            ทำธุรกิจสีเทาให้ดูโปรฯ <br />
            และน่าเชื่อถือด้วย JP Visual & Docs
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-xl mx-auto md:mx-0">
            รวมทีมมืออาชีพที่พร้อมช่วยสร้างภาพลักษณ์และมาตรฐาน
            เพื่อธุรกิจของคุณในโลกดิจิทัลยุคใหม่
          </p>
          <a
            href="#services"
            className="inline-block bg-primary hover:bg-primary-focus text-white font-semibold py-3 px-8 rounded-lg transition"
          >
            ดูบริการของเรา
          </a>
        </div>

        <div className="flex-1 max-w-md md:max-w-lg mx-auto">
          <img
            src={heroImage}
            alt="JP Visual & Docs Hero"
            className="w-full rounded-lg shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
