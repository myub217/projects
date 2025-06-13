import React from "react";
import aboutImg from "../assets/about-us.jpg";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-black scroll-mt-24 text-gray-100"
      aria-labelledby="about-title"
    >
      {/* ลวดลายพื้นหลัง */}
      <div className="absolute inset-0 opacity-10 bg-[url('/src/assets/noise.png')] bg-repeat z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-16">
        <h2
          id="about-title"
          className="text-5xl font-extrabold text-red-600 mb-16 text-center tracking-widest uppercase drop-shadow-2xl"
        >
          JP Visual & Docs
          <span className="block text-lg font-medium text-gray-400 mt-2 tracking-wide">
            กุญแจปลดล็อกทุกข้อจำกัดของคุณ
          </span>
        </h2>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <article className="text-lg font-medium space-y-8 tracking-wide leading-relaxed">
            <blockquote className="border-l-4 border-red-500 pl-6 italic text-xl font-medium text-red-300 leading-relaxed">
              “เราไม่ได้ให้แค่บริการ — เราให้ทางออกในสิ่งที่ไม่มีใครกล้าทำ”
            </blockquote>

            <p>
              <strong className="text-red-500">JP Visual & Docs</strong> คือทีมเบื้องหลังที่เชี่ยวชาญระบบสีเทา พร้อมพาคุณผ่านปัญหาทางเอกสาร การเงิน วีซ่า และระบบธุรกิจอย่างปลอดภัย
            </p>

            <ul className="list-disc list-inside space-y-2 text-gray-300 text-base marker:text-red-500">
              <li>ยื่นกู้ตามเงื่อนไขธนาคารจริง</li>
              <li>จัดการวีซ่าเอกสารครบวงจร</li>
              <li>สลิป-บัญชี-โอนเงิน ที่สมจริง</li>
              <li>บัตรแข็ง บัตรพนักงาน ฯลฯ</li>
              <li>โลโก้ โปรไฟล์ ระบบการตลาด</li>
              <li>ระบบหลังบ้านครบวงจร</li>
            </ul>

            <p className="text-red-400 font-semibold italic">
              “ความลับของลูกค้า คือกฎเหล็กสูงสุดของเรา”
            </p>

            <div className="mt-10 text-center">
              <a
                href="https://lin.ee/XJZ7H4u"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-red-700 transition duration-300"
              >
                📲 ทักแชทหาเราเลย
              </a>
            </div>
          </article>

          <figure className="overflow-hidden rounded-3xl shadow-[0_30px_60px_-15px_rgba(220,38,38,0.8)] border-4 border-red-700 transition-transform duration-700 hover:scale-[1.07]">
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