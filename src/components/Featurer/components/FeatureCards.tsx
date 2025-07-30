import React from "react";
import { featureCards } from "@/components/Featurer/data/feature-cards.config";
import type { FeatureCard } from "@/components/Featurer/components/types";

const FeatureCards: React.FC = () => {
  return (
    <section
      aria-labelledby="features-heading"
      className="py-16 bg-base-200 dark:bg-gray-800 text-base-content dark:text-gray-100"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2
          id="features-heading"
          className="text-3xl font-bold mb-12 text-center"
        >
          ฟีเจอร์เด่นที่ลูกค้าไว้วางใจ
        </h2>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {featureCards.map(
            ({ title, description, icon: Icon }: FeatureCard, idx) => (
              <div
                key={idx}
                className="bg-base-100 dark:bg-gray-900 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
              >
                {Icon && (
                  <div className="mb-4 text-primary dark:text-primary-content text-4xl">
                    <Icon />
                  </div>
                )}
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {description}
                </p>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
