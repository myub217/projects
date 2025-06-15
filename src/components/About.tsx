// src/pages/About.tsx

import React from "react";
import aboutImg from "../assets/images/about-us.jpg";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-black scroll-mt-24 text-gray-100"
      aria-labelledby="about-title"
    >
      {/* Background Noise */}
      <div
        className="absolute inset-0 opacity-10 bg-[url('/src/assets/noise.png')] bg-repeat z-0 pointer-events-none"
        aria-hidden="true"
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-20 lg:px-32">
        <h2
          id="about-title"
          className="text-6xl font-extrabold text-red-600 mb-20 text-center tracking-widest uppercase drop-shadow-2xl"
        >
          JP Visual & Docs
          <span className="block text-xl font-medium text-gray-400 mt-3 tracking-wide">
            ทางออกจริงจังของคุณ ในทุกปัญหาเอกสารและธุรกิจ
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-24 items-center">
          {/* Text Content */}
          <article className="text-lg font-medium space-y-10 tracking-wide leading-relaxed text-gray-300">
            <blockquote className="border-l-6 border-red-600 pl-8 italic text-2xl font-extrabold text-red-400 leading-relaxed drop-shadow-lg">
              “เราไม่ได้มาแค่ทำงาน เรายืนอยู่ตรงนี้เพื่อช่วยให้คุณผ่านทุกปัญหาไปได้จริง ๆ”
            </blockquote>

            <p>
              <strong className="text-red-500">JP Visual & Docs</strong> คือทีมงานที่เข้าใจปัญหาของคุณจริง ๆ ไม่ว่าจะเป็นเรื่องยื่นกู้, วีซ่า, เอกสาร หรือระบบหลังบ้านที่ซับซ้อน เราพร้อมช่วยแก้ไขและเดินเคียงข้างคุณแบบตรงไปตรงมา ให้คุณมั่นใจได้ว่าไม่มีอะไรที่ต้องกังวลอีกต่อไป
            </p>

            <p>
              ไม่ต้องเสียเวลาหาวิธีแก้เอง หรือกลัวเรื่องความยุ่งยาก เราจะช่วยจัดการทุกอย่างให้ “ง่าย” และ “ชัวร์” เพราะเราเคยผ่านสิ่งเหล่านี้มาแล้ว และรู้ว่าคุณต้องการอะไรจริง ๆ
            </p>

            <ul className="list-disc list-inside space-y-3 text-gray-400 text-base marker:text-red-500 font-semibold">
              <li>ช่วยยื่นกู้ตามเงื่อนไขธนาคารจริง แบบชัดเจน ไม่ใช่แค่คำพูด</li>
              <li>ดูแลเรื่องวีซ่าและเอกสารแบบครบถ้วน รวดเร็ว ไม่ต้องกังวลติดขัด</li>
              <li>จัดทำสลิปเงินเดือนและเอกสารการเงินที่ดูสมจริง และตรวจสอบได้จริง</li>
              <li>ผลิตบัตรแข็ง บัตรพนักงาน รวมถึงเอกสารสำคัญแบบมืออาชีพ</li>
              <li>ออกแบบโลโก้ โปรไฟล์ และระบบการตลาดที่ทำให้คุณโดดเด่นเหนือคู่แข่ง</li>
              <li>สร้างระบบหลังบ้านที่ใช้งานง่าย ตอบโจทย์ธุรกิจของคุณจริง ๆ</li>
            </ul>

            <p className="text-red-400 font-extrabold italic tracking-wide drop-shadow-md">
              “สิ่งที่คุณบอกเราคือความลับ เราเก็บมันอย่างเข้มงวดและไม่มีวันปล่อยออกไป”
            </p>

            <p>
              ด้วยประสบการณ์กว่า 10 ปีในวงการนี้ เราเข้าใจทุกความต้องการและความกังวลของคุณ เพราะโลกนี้มันซับซ้อน แต่เราทำให้มันง่ายขึ้นสำหรับคุณ
            </p>

            <div className="mt-12 text-center">
              <a
                href="https://lin.ee/XJZ7H4u"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-700 hover:bg-red-800 text-white px-10 py-4 rounded-full text-xl font-bold shadow-lg transition duration-300 focus:outline-none focus:ring-4 focus:ring-red-600"
                aria-label="ทักแชท LINE กับ JP Visual & Docs"
              >
                📲 ทักแชทหาเราเลย — พร้อมช่วยจริง ไม่มีคำว่าเรื่องเล็ก
              </a>
            </div>
          </article>

          {/* Image */}
          <figure className="overflow-hidden rounded-3xl shadow-[0_35px_70px_-20px_rgba(220,38,38,0.9)] border-6 border-red-700 transition-transform duration-700 hover:scale-[1.1]">
            <img
              src={aboutImg}
              alt="ทีมงาน JP Visual & Docs มืออาชีพ"
              className="w-full object-cover aspect-[4/3]"
              loading="lazy"
              decoding="async"
              draggable={false}
              title="ทีมงานมืออาชีพ JP Visual & Docs"
            />
            <figcaption className="sr-only">ทีมงานมืออาชีพของเรา</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default About;