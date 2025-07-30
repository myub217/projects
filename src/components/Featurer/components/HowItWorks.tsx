// src/components/Featurer/components/HowItWorks.tsx
import React from "react";
import { steps } from "@/components/Featurer/data/how-it-works"; // ✅ แก้ชื่อไฟล์ให้ Vite resolve ได้
import type { Step } from "@/components/Featurer/components/types";
import { resolveIcon } from "@/components/Featurer/components/utils/iconResolver"; // ✅ ใช้ absolute path เพื่อหลีกเลี่ยง relative resolve error

const HowItWorks: React.FC = () => {
  return (
    <section
      aria-labelledby="how-it-works-heading"
      className="py-16 bg-base-100 dark:bg-gray-900 text-base-content dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 id="how-it-works-heading" className="text-3xl font-bold mb-12">
          ขั้นตอนการทำงานของเรา
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {steps.map(({ icon, title, description }: Step, idx) => (
            <div
              key={idx}
              className="bg-base-200 dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
            >
              <div className="text-primary dark:text-primary-content mb-4 w-12 h-12">
                {resolveIcon(icon, "w-12 h-12")}
              </div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
