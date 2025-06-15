import React from "react";
import { motion } from "framer-motion";
import aboutUsImage from "../assets/about-us.jpg";

const About: React.FC = () => {
  return (
    <motion.section
      aria-labelledby="about-title"
      className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center px-4 md:px-8 lg:px-16 py-12 bg-white dark:bg-gray-900"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      tabIndex={-1} // เพื่อให้ focus ได้เมื่อใช้ keyboard navigation
    >
      {/* Image */}
      <div>
        <img
          src={aboutUsImage}
          alt="ภาพแสดงการทำงานและทีมงานของ JP Visual & Docs"
          className="rounded-2xl shadow-lg w-full object-cover max-h-[400px] md:max-h-[500px]"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
      </div>

      {/* Text Content */}
      <div>
        <h2
          id="about-title"
          className="text-3xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight"
        >
          เกี่ยวกับเรา
        </h2>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          JP Visual & Docs คือผู้ให้บริการออกแบบกราฟิกและเอกสาร
          ที่ช่วยให้ธุรกิจของคุณดูโดดเด่นและมีความเป็นมืออาชีพ ด้วยทีมงานที่มีประสบการณ์ในสายงาน
          พร้อมให้บริการครบวงจรตั้งแต่การวางแผน ออกแบบ ไปจนถึงการส่งมอบไฟล์คุณภาพสูง
        </p>
        <p className="mt-5 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          เราใส่ใจในรายละเอียด ความสวยงาม และความชัดเจนของข้อมูล
          เพื่อให้สื่อที่คุณใช้สามารถสื่อสารกับกลุ่มเป้าหมายได้อย่างมีประสิทธิภาพสูงสุด
        </p>
      </div>
    </motion.section>
  );
};

export default About;