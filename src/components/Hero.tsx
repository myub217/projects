import React from "react";
import Logo from "./Logo";
import JoinButtons from "./JoinButtons";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      role="banner"
      aria-label="JP Visual & Docs - บริการเอกสารครบวงจร"
      className="
        relative min-h-screen flex items-center justify-center px-6 py-24
        bg-gradient-to-br from-blue-900 via-indigo-800 to-purple-900
        dark:from-gray-900 dark:via-gray-800 dark:to-black
        text-white overflow-hidden transition-colors duration-1000
        selection:bg-indigo-500 selection:text-white
      "
    >
      {/* ฉากหลังแสง */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-pink-500 opacity-20 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-indigo-400 opacity-20 blur-[120px] rounded-full animate-ping" />
      </div>

      {/* เนื้อหา */}
      <div className="relative z-10 max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-16 px-4 sm:px-6 lg:px-8">
        {/* ด้านข้อความ */}
        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
          <h1
            tabIndex={0}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight leading-tight text-white drop-shadow-lg selection:bg-indigo-600"
          >
            JP Visual & Docs
          </h1>
          <p className="text-xl sm:text-2xl text-indigo-200 font-light leading-relaxed max-w-lg mx-auto lg:mx-0">
            บริการเอกสารครบวงจร ยื่นกู้ วีซ่า การเงิน โปรไฟล์ และระบบหลังบ้าน
          </p>
          <p className="text-md sm:text-lg text-indigo-300 max-w-md mx-auto lg:mx-0">
            วางแผนอย่างมืออาชีพ ดูแลทุกขั้นตอน ด้วยความลับและความเข้าใจ
          </p>

          {/* ปุ่มเข้าร่วม */}
          <JoinButtons className="flex justify-center lg:justify-start gap-4 pt-6 flex-wrap" />
        </div>

        {/* โลโก้ */}
        <div className="lg:w-1/2 flex justify-center items-center">
          <div className="relative group">
            <Logo
              className="w-48 sm:w-60 lg:w-72 rounded-3xl shadow-xl transition-transform duration-700 ease-in-out group-hover:scale-105 select-none"
              aria-label="โลโก้ JP Visual & Docs"
              role="img"
              draggable={false}
            />
            <div
              className="absolute inset-0 rounded-3xl ring-2 ring-indigo-400 opacity-20 blur-md animate-ping group-hover:opacity-40 pointer-events-none"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;