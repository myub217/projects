import React from "react";
import jpLogo from "../assets/jp-logo.png"; // ปรับ path ให้ตรง

const Hero: React.FC = () => {
  // TODO: เปลี่ยนลิงก์ LINE ให้เป็นลิงก์จริงของคุณ
  const ctaLink = "https://lin.ee/xxxxx";
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
          <img
            src={jpLogo}
            alt={logoAlt}
            loading="lazy"
            decoding="async"
            width={224}
            height={224}
            className="w-32 sm:w-48 lg:w-56 rounded-3xl shadow-glow hover:scale-105 transition-transform duration-400 ease-in-out"
          />
        </div>

        {/* เนื้อหา */}
        <div className="text-center lg:text-left lg:w-1/2">
          {/* หัวเรื่อง */}
          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-xl mb-6 tracking-wide font-kanit"
          >
            JP Visual & Docs
          </h1>

          {/* คำอธิบายสั้น */}
          <p
            id="hero-description"
            className="text-gray-300 dark:text-gray-400 text-base sm:text-lg leading-relaxed whitespace-pre-line mb-6 font-light"
          >
            เราให้บริการครบวงจรด้านยื่นกู้ วีซ่า เอกสารธุรกิจ โปรไฟล์บริษัท และระบบหลังบ้าน
            {"\n"}ด้วยทีมงานมืออาชีพ พร้อมดูแลทุกขั้นตอนและให้คำปรึกษาแบบส่วนตัว
            {"\n"}เพื่อช่วยให้คุณประสบความสำเร็จและมั่นใจในทุกการตัดสินใจ
          </p>

          {/* รายละเอียดจุดเด่น */}
          <ul className="text-sm sm:text-base text-gray-200 dark:text-gray-400 mb-10 space-y-2 list-disc list-inside font-light max-w-md mx-auto lg:mx-0">
            <li>✅ บริการยื่นกู้ส่วนบุคคลและธุรกิจ SME ด้วยการวิเคราะห์การเงินอย่างละเอียด</li>
            <li>✅ ให้คำปรึกษาด้านวีซ่า เอกสารแปล และจัดเตรียมเอกสารครบถ้วน</li>
            <li>✅ ออกแบบและพัฒนาระบบหลังบ้าน เช่น CRM, ใบเสนอราคา และโปรไฟล์บริษัท</li>
            <li>✅ บริการด่วน พร้อมตอบกลับผ่าน LINE ทุกวัน</li>
          </ul>

          {/* ปุ่ม CTA */}
          <div className="flex justify-center lg:justify-start">
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-3 px-7 py-3 rounded-xl bg-accent text-white font-semibold text-lg shadow-md hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-accent/50 focus:ring-offset-2"
              aria-label="ติดต่อเราผ่าน LINE เพื่อขอคำปรึกษาฟรี"
            >
              📲 ติดต่อผ่าน LINE
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;