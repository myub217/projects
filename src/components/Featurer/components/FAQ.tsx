import React from "react";
import { faqs } from "@/components/Featurer/data/faqs.config";
import type { FAQ } from "@/components/Featurer/components/types";

const FAQ: React.FC = () => {
  return (
    <section
      aria-labelledby="faq-heading"
      className="py-16 bg-base-100 dark:bg-gray-900 text-base-content dark:text-gray-100"
    >
      <div className="max-w-5xl mx-auto px-4">
        <h2 id="faq-heading" className="text-3xl font-bold mb-12 text-center">
          คำถามที่พบบ่อย
        </h2>

        <div className="space-y-6 divide-y divide-base-300 dark:divide-gray-700">
          {faqs.map(({ question, answer }: FAQ, idx) => (
            <div key={idx} className="pt-6">
              <h3 className="text-lg font-medium">{question}</h3>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                {answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
