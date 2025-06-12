import React from "react";
import jpLogo from "../assets/jp-logo.png";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      aria-label="ยินดีต้อนรับสู่ JP Visual & Docs"
      className="relative min-h-screen flex items-center px-6 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 transition-colors duration-1000 overflow-hidden"
    >
      {/* Animated Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 opacity-30 animate-animate-gradient rounded-xl blur-3xl pointer-events-none"></div>

      <div className="container mx-auto max-w-7xl flex flex-col-reverse lg:flex-row items-center gap-12 relative z-10">
        {/* ข้อความหลัก */}
        <div className="lg:w-1/2 max-w-xl text-center lg:text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white drop-shadow-lg leading-tight">
            <span className="block animate-fade-in-up delay-100">ยินดีต้อนรับสู่</span>
            <span className="block text-indigo-400 animate-fade-in-up delay-300">JP Visual & Docs</span>
          </h1>

          <p className="text-lg text-blue-100 dark:text-gray-300 leading-relaxed animate-fade-in-up delay-500">
            บริการเอกสารครบวงจร ยื่นกู้ วีซ่า โปรไฟล์ การเงิน และระบบหลังบ้าน พร้อมดูแลคุณทุกขั้นตอน
          </p>

          {/* ข้อความเสริม */}
          <p className="text-base text-indigo-200 dark:text-indigo-400 leading-relaxed max-w-md animate-fade-in-up delay-600">
            เราช่วยคุณจัดการเอกสารสำคัญและขั้นตอนที่ซับซ้อนอย่างมืออาชีพ ให้คุณมั่นใจได้ว่าทุกเรื่องจะผ่านไปอย่างราบรื่นและรวดเร็ว
          </p>

          {/* ปุ่ม Call to Action */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 animate-fade-in-up delay-700">
            <a
              href="#services"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition"
              aria-label="ดูบริการทั้งหมดของ JP Visual & Docs"
            >
              ดูบริการทั้งหมด
            </a>
            <a
              href="https://lin.ee/XJZ7H4u"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-indigo-500 text-indigo-300 hover:text-white hover:bg-indigo-600 font-semibold px-6 py-3 rounded-xl transition"
              aria-label="ปรึกษาฟรีผ่าน LINE JP Visual & Docs"
            >
              {/* ไอคอน LINE */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
                stroke="none"
                role="img"
                aria-hidden="true"
              >
                <path d="M21.618 3.46a.5.5 0 0 0-.692-.455L4.977 11.045a.5.5 0 0 0 .042.92l4.083 1.84 2.03 3.615a.5.5 0 0 0 .854.051l7.288-9.832a.5.5 0 0 0-.661-.81L8.783 16.24 6.995 13.08l12.616-7.622a.5.5 0 0 0 .007-.001z" />
              </svg>
              ปรึกษาฟรีผ่าน LINE
            </a>
            <a
              href="tel:+66912345678"
              className="flex items-center gap-2 bg-white text-indigo-700 font-semibold px-6 py-3 rounded-xl shadow hover:bg-indigo-50 transition"
              aria-label="โทรติดต่อ JP Visual & Docs"
            >
              {/* ไอคอนโทรศัพท์ */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                role="img"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.494a1 1 0 01-.216 1.09L8.764 11.21a11.042 11.042 0 005.516 5.516l1.942-1.942a1 1 0 011.09-.216l4.494 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C8.82 21 3 15.18 3 8V5z" />
              </svg>
              โทรหาเรา
            </a>
          </div>
        </div>

        {/* โลโก้ */}
        <div
          className="flex flex-col items-center justify-center lg:w-1/2"
          aria-hidden="true"
          tabIndex={-1}
        >
          <img
            src={jpLogo}
            alt="โลโก้ JP Visual & Docs"
            loading="lazy"
            width={280}
            height={280}
            className="w-40 sm:w-56 lg:w-64 rounded-3xl shadow-[0_0_30px_8px_rgba(99,102,241,0.7)] hover:scale-110 transition-transform duration-500 ease-in-out"
          />
        </div>
      </div>

      {/* Tailwind keyframes animation */}
      <style jsx>{`
        @keyframes animate-gradient {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-animate-gradient {
          background-size: 200% 200%;
          animation: animate-gradient 15s ease infinite;
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.7s ease forwards;
          opacity: 0;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-600 {
          animation-delay: 0.6s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </section>
  );
};

export default Hero;