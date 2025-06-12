import React from "react";
import jpLogo from "../assets/jp-logo.png";

const Hero: React.FC = () => {
  const lineLink = "https://lin.ee/XJZ7H4u";
  const lineId = "@462FQTFC";
  const facebookLink = "https://www.facebook.com/khaphcea.mi.nam.wa.cea.pa?mibextid=ZbWKwL";
  const facebookPage = "JP Visual & Docs By. เจ้าป่า";
  const logoAlt = "โลโก้ JP Visual & Docs - บริการยื่นกู้ วีซ่า เอกสาร โปรไฟล์ และระบบธุรกิจครบวงจร";

  return (
    <section
      id="hero"
      role="region"
      aria-labelledby="hero-title"
      aria-describedby="hero-description"
      className="min-h-screen flex items-center bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-black dark:via-gray-900 dark:to-gray-800 transition-colors duration-700"
    >
      <div className="container mx-auto px-6 py-20 flex flex-col-reverse lg:flex-row-reverse items-center gap-12 animate-fade-in">
        {/* โลโก้ */}
        <div className="flex justify-center lg:w-1/2" aria-hidden="true">
          <picture>
            <source srcSet="/src/assets/jp-logo.webp" type="image/webp" />
            <img
              src={jpLogo}
              alt={logoAlt}
              loading="lazy"
              decoding="async"
              width={224}
              height={224}
              className="w-32 sm:w-48 lg:w-56 rounded-3xl shadow-glow hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </picture>
        </div>

        {/* เนื้อหา */}
        <div className="text-center lg:text-left lg:w-1/2 max-w-xl">
          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-xl mb-6 tracking-wide font-kanit"
          >
            JP Visual & Docs
          </h1>

          <p
            id="hero-description"
            className="text-gray-300 dark:text-gray-400 text-base sm:text-lg leading-relaxed whitespace-pre-line mb-6 font-light"
          >
            ผู้เชี่ยวชาญด้าน{" "}
            <span className="font-semibold text-white">ยื่นกู้</span> วีซ่า เอกสารธุรกิจ
            โปรไฟล์บริษัท และระบบหลังบ้าน{"\n"}
            พร้อมดูแลทุกขั้นตอนด้วยทีมงานมืออาชีพ{"\n"}
            เพื่อให้คุณสำเร็จในทุกการตัดสินใจทางธุรกิจและการเงิน
          </p>

          <ul className="text-sm sm:text-base text-gray-200 dark:text-gray-400 mb-10 space-y-3 list-disc list-inside font-light max-w-md mx-auto lg:mx-0">
            <li>✅ บริการยื่นกู้สำหรับบุคคลทั่วไปและ SME พร้อมวิเคราะห์และวางแผนการเงิน</li>
            <li>✅ ให้คำปรึกษาวีซ่า แปลเอกสาร และจัดเตรียมเอกสารครบถ้วน</li>
            <li>✅ พัฒนาระบบธุรกิจ เช่น CRM, ใบเสนอราคา และโปรไฟล์บริษัท</li>
            <li>✅ ตอบกลับรวดเร็วผ่าน LINE ทุกวัน เพื่อความสะดวก</li>
            <li>✅ มีผลงานจริงและลูกค้าจำนวนมากให้ความไว้วางใจ</li>
          </ul>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 justify-center lg:justify-start">
            <a
              href={lineLink}
              target="_blank"
              rel="noopener noreferrer"
              title="ติดต่อเราผ่าน LINE"
              className="inline-flex items-center gap-3 px-7 py-3 mb-4 sm:mb-0 rounded-xl bg-[#00C300] hover:bg-[#00a000] text-white font-semibold text-lg shadow-md hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-green-400/50 focus:ring-offset-2"
              aria-label={`ติดต่อผ่าน LINE (ID: ${lineId}) เพื่อขอคำปรึกษาฟรี`}
            >
              <span aria-hidden="true">📲</span> ติดต่อผ่าน LINE {lineId}
            </a>

            <a
              href={facebookLink}
              target="_blank"
              rel="noopener noreferrer"
              title={`เยี่ยมชม Facebook Page ของ ${facebookPage}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow-md hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400/50 focus:ring-offset-2"
              aria-label={`เยี่ยมชม Facebook Page: ${facebookPage}`}
            >
              <span aria-hidden="true">👍</span> Facebook Page
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;