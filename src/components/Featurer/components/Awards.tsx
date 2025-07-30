// src/components/Featurer/components/Awards.tsx
import React from "react";
import { awards } from "../data/awards.config";
import { resolveIcon } from "./utils/iconResolver";

const Awards: React.FC = () => {
  return (
    <section className="py-16 bg-base-200 dark:bg-gray-900 text-base-content dark:text-gray-100">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">
          รางวัลและมาตรฐานของเรา
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {awards.map(({ title, description, icon }, idx) => (
            <div
              key={idx}
              className="bg-base-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start gap-4"
            >
              <div className="text-primary dark:text-primary-content w-10 h-10">
                {resolveIcon(icon, "w-10 h-10")}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Awards;
