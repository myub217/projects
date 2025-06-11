import React from "react";
import jpLogo from "../assets/jp-logo.png"; // ปรับ path ตามจริง

const Hero: React.FC = () => {
  const ctaLink = "https://lin.ee/xxxxx"; // TODO: เปลี่ยนเป็นลิงก์จริง
  const logoAlt = "โลโก้ของ JP Visual & Docs - บริการด้านเอกสารและธุรกิจ";

  return (
    <section
      id="hero"
      className="hero min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 flex items-center"
      aria-labelledby="hero-title"
      aria-describedby="hero-description"
      role="region"
    >
      <div className="hero-content flex flex-col-reverse lg:flex-row-reverse container mx-auto px-6 py-16 gap-8 items-center">
        {/* โลโก้ JP */}
        <div className="flex justify-center">
          <img
            src={jpLogo}
            alt={logoAlt}
            loading="lazy"
            decoding="async"
            width={192}
            height={192}
            className="w-32 sm:w-48 lg:w-56 rounded shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out"
          />
        </div>

        {/* เนื้อหาหลัก */}
        <div className="text-center lg:text-left max-w-2xl text-white">
          {/* หัวข้อ */}
          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight drop-shadow-lg tracking-wide"
          >
            JP Visual & Docs
          </h1>

          {/* คำบรรยาย */}
          <p
            id="hero-description"
            className="mb-8 text-base sm:text-lg text-gray-300 leading-relaxed whitespace-pre-line"
          >
            บริการยื่นกู้ วีซ่า เอกสาร และระบบสนับสนุนธุรกิจแบบครบวงจร
            {"\n"}เราดูแลทุกขั้นตอน พร้อมให้คำปรึกษาฟรีโดยทีมงานมืออาชีพ
          </p>

          {/* CTA */}
          <div className="flex justify-center lg:justify-start">
            <a
              href={ctaLink}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn btn-accent btn-lg hover:scale-105 transition-transform duration-300 focus:outline-none focus:ring-4 focus:ring-pink-400 focus:ring-offset-2 rounded"
              aria-label="ติดต่อเราผ่าน LINE"
            >
              ติดต่อเรา
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;