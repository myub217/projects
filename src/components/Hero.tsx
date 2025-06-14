import React from "react";
import jpLogo from "../assets/jp-logo.png";

/**
 * Hero Section สำหรับหน้าแรกของเว็บไซต์ JP Visual & Docs
 * แสดงชื่อแบรนด์ สโลแกน คำอธิบายสั้น ๆ และปุ่ม Call-to-Action พร้อมโลโก้สวย ๆ
 */
const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      role="banner"
      aria-label="ยินดีต้อนรับสู่ JP Visual & Docs"
      className={`
        relative min-h-screen flex items-center justify-center
        px-6 py-20 overflow-hidden
        bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        transition-colors duration-1000
      `}
    >
      {/* Background Glow Animations */}
      <div
        className="
          absolute top-[-10%] left-[-20%] w-[300px] h-[300px]
          bg-pink-400 opacity-30 blur-3xl rounded-full animate-pulse
        "
        aria-hidden="true"
      />
      <div
        className="
          absolute bottom-[-10%] right-[-20%] w-[300px] h-[300px]
          bg-indigo-400 opacity-20 blur-3xl rounded-full animate-pulse
        "
        aria-hidden="true"
      />

      {/* Main Content Container */}
      <div
        className="
          relative z-10 w-full max-w-7xl flex flex-col-reverse lg:flex-row
          items-center gap-12
        "
      >
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1
            className="text-5xl sm:text-6xl font-extrabold text-white leading-tight drop-shadow-xl animate-fade-up"
            tabIndex={0}
          >
            JP Visual & Docs
          </h1>

          <p className="text-lg sm:text-xl text-blue-100 dark:text-gray-300 leading-relaxed animate-fade-up">
            บริการเอกสาร ยื่นกู้ วีซ่า โปรไฟล์ ระบบหลังบ้าน และการตลาดแบบครบวงจร
          </p>

          <p className="text-base text-indigo-200 dark:text-indigo-400 animate-fade-up">
            เราช่วยคุณจัดการเรื่องเอกสาร การเงิน และเทคโนโลยีอย่างมืออาชีพ ครบ จบในที่เดียว
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 animate-fade-up">
            <a
              href="#services"
              className="
                bg-indigo-500 hover:bg-indigo-600 text-white font-semibold
                px-6 py-3 rounded-full shadow-lg transition
              "
              aria-label="ดูบริการทั้งหมด"
            >
              ดูบริการทั้งหมด
            </a>

            <a
              href="https://lin.ee/XJZ7H4u"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center gap-2 border border-green-400 text-green-300
                hover:bg-green-600 hover:text-white font-semibold
                px-6 py-3 rounded-full transition
              "
              aria-label="ติดต่อผ่าน LINE @462FQTFC"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 fill-current"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M21.618 3.46a.5.5 0 0 0-.692-.455L4.977 11.045a.5.5 0 0 0 .042.92l4.083 1.84 2.03 3.615a.5.5 0 0 0 .854.051l7.288-9.832a.5.5 0 0 0-.661-.81L8.783 16.24 6.995 13.08l12.616-7.622a.5.5 0 0 0 .007-.001z" />
              </svg>
              LINE: @462FQTFC
            </a>

            <a
              href="tel:+66912345678"
              className="
                flex items-center gap-2 bg-white text-indigo-700 font-semibold
                px-6 py-3 rounded-full shadow hover:bg-indigo-50 transition
              "
              aria-label="โทร 091-234-5678"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                aria-hidden="true"
                focusable="false"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.494a1 1 0 01-.216 1.09L8.764 11.21a11.042 11.042 0 005.516 5.516l1.942-1.942a1 1 0 011.09-.216l4.494 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C8.82 21 3 15.18 3 8V5z"
                />
              </svg>
              โทร: 091-234-5678
            </a>
          </div>
        </div>

        {/* Logo Section */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="relative group" aria-hidden="true">
            <img
              src={jpLogo}
              alt="โลโก้ JP Visual & Docs"
              className="
                w-40 sm:w-52 lg:w-64 rounded-3xl
                shadow-[0_0_60px_rgba(99,102,241,0.6)]
                group-hover:scale-110 transition-transform duration-700 ease-in-out
              "
              loading="lazy"
              decoding="async"
              width={300}
              height={300}
            />
            <div className="absolute inset-0 rounded-3xl ring-2 ring-indigo-400 opacity-30 blur-md animate-ping group-hover:opacity-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;