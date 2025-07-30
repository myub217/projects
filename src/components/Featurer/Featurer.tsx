// src/components/Featurer/Featurer.tsx

import React from "react";
import FeatureCards from "./components/FeatureCards";
import HowItWorks from "./components/HowItWorks";
import Stats from "./components/Stats";
import Awards from "./components/Awards";
import FAQ from "./components/FAQ";

/**
 * รวมฟีเจอร์เด่นทั้งหมดของ JP Visual & Docs
 * ใช้ในหน้า Landing / Home
 */
const Featurer: React.FC = () => {
  return (
    <section
      aria-label="รวมบริการและฟีเจอร์เด่นของ JP Visual & Docs"
      className="bg-base-100 dark:bg-gray-900 text-base-content dark:text-gray-100 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-20">
        {/* หมวด: ฟีเจอร์ไฮไลต์ */}
        <FeatureCards />

        {/* หมวด: ขั้นตอนการทำงาน */}
        <HowItWorks />

        {/* หมวด: สถิติและความสำเร็จ */}
        <Stats />

        {/* หมวด: รางวัลหรือผลงานเด่น */}
        <Awards />

        {/* หมวด: คำถามที่พบบ่อย */}
        <FAQ />
      </div>
    </section>
  );
};

export default Featurer;
