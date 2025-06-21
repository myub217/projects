import React from "react";
import aboutImage from "../assets/images/about-us.jpg";

const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* รูปภาพประกอบ */}
        <div className="md:w-1/2 w-full">
          <img
            src={aboutImage}
            alt="ทีมงานของเราและบริการของศูนย์ JP"
            loading="lazy"
            decoding="async"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
        </div>

        {/* เนื้อหา */}
        <div className="md:w-1/2 w-full">
          <h2
            id="about-title"
            className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mb-6"
          >
            เกี่ยวกับเรา
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            เราคือศูนย์บริการเอกสารและให้คำปรึกษาด้านสินเชื่อ การตลาด และงานเอกสารทุกรูปแบบ
            ดำเนินการโดยทีมงานมืออาชีพมากประสบการณ์ พร้อมให้บริการด้วยความจริงใจ
            มั่นใจได้ในคุณภาพและความรวดเร็ว
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;