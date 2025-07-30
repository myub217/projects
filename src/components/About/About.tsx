// src/components/About/About.tsx
import React from "react";

const About: React.FC = () => {
  return (
    <section className="max-w-5xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md text-gray-900 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-center">JP Visual & Docs</h1>

      <p className="mb-4 text-lg leading-relaxed">
        “ทำธุรกิจสีเทาให้ดูโปรฯ และน่าเชื่อถือ”
        รวมทีมมืออาชีพที่พร้อมช่วยสร้างภาพลักษณ์และมาตรฐาน
        เพื่อธุรกิจของคุณในโลกดิจิทัลยุคใหม่
      </p>

      <p className="mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
        Application Mobile lub By. เจ้าป่า่ ทำธุรกิจสีเทาให้มีความมือชีพ
        มาตราฐาน แต่ก็ยังผิดกฎหมายอยู่ดี บางอย่าง ที่ Google และ YouTube
        ไม่มีสอน หาไม่ได้ที่มีแน่นอน แต่ก็โขว์หมดไม่ได้ อ๊า ๆ
      </p>

      <p className="mb-10 italic text-sm text-gray-600 dark:text-gray-400 text-center">
        ผมไม่ใช่คนเก่งแต่ทีมงานผมเก่งแน่นอน
      </p>

      <div className="flex justify-center">
        <img
          src="/assets/signature.webp" // ใช้ path URL ตรงนี้ เพราะอยู่ใน public/assets
          alt="Signature of เจ้าป่า่"
          className="h-24 w-auto object-contain"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default About;
