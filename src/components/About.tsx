import React from "react";
import { motion } from "framer-motion";
import aboutUsImage from "../assets/about-us.jpg";

const About: React.FC = () => {
  return (
    <motion.section
      aria-labelledby="about-title"
      role="region"
      tabIndex={-1}
      className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-12 lg:px-24 py-16 bg-white dark:bg-gray-900"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      {/* ภาพประกอบ */}
      <div
        className="overflow-hidden rounded-3xl shadow-xl max-h-[400px] md:max-h-[520px]"
        role="img"
        aria-label="ภาพทีมงาน JP Visual & Docs กำลังทำงานอย่างมืออาชีพ"
      >
        <img
          src={aboutUsImage}
          alt="ทีมงาน JP Visual & Docs กำลังทำงานอย่างมืออาชีพ"
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out hover:scale-[1.05] focus-visible:outline-pink-500 focus-visible:outline-4"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          width={600}
          height={400}
          sizes="(max-width: 768px) 100vw, 50vw"
          onError={(e) => {
            (e.target as HTMLImageElement).alt =
              "ภาพประกอบทีมงาน JP Visual & Docs";
          }}
        />
        {/* Fallback text for image */}
        <noscript>
          <p className="sr-only">
            ภาพทีมงาน JP Visual & Docs กำลังทำงานอย่างมืออาชีพ
          </p>
        </noscript>
      </div>

      {/* เนื้อหาข้อความ */}
      <article itemScope itemType="https://schema.org/Organization" itemProp="mainEntity">
        <h2
          id="about-title"
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight"
          itemProp="name"
        >
          เกี่ยวกับเรา
        </h2>
        <p
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed"
          itemProp="description"
        >
          JP Visual & Docs คือผู้ให้บริการออกแบบกราฟิกและเอกสารที่ช่วยให้ธุรกิจของคุณดูโดดเด่นและมีความเป็นมืออาชีพ
          ด้วยทีมงานที่มีประสบการณ์ในสายงาน พร้อมให้บริการครบวงจรตั้งแต่การวางแผน ออกแบบ ไปจนถึงการส่งมอบไฟล์คุณภาพสูง
        </p>
        <p className="mt-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          เราใส่ใจในรายละเอียด ความสวยงาม และความชัดเจนของข้อมูล
          เพื่อให้สื่อที่คุณใช้สามารถสื่อสารกับกลุ่มเป้าหมายได้อย่างมีประสิทธิภาพสูงสุด
        </p>
      </article>
    </motion.section>
  );
};

export default About;