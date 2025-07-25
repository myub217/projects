// /src/components/IndustryInsights/IndustryInsightsSection.tsx

import React from 'react';
import { insightArticles } from './data';
import ArticleCard from './ArticleCard';

const IndustryInsightsSection: React.FC = () => {
  return (
    <section
      id="industry-insights"
      className="my-20 px-4 md:px-6 max-w-7xl mx-auto"
      aria-labelledby="industry-insights-title"
      role="region"
    >
      <header className="text-center mb-12">
        <h2
          id="industry-insights-title"
          className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white"
        >
          รู้ทันวงการ
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          บทความสั้น เข้าใจง่าย อัปเดตเทรนด์และกฎหมายแบบไม่ต้องปวดหัว
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {insightArticles.map((article) => (
          <ArticleCard key={article.id} {...article} />
        ))}
      </div>

      <div className="mt-10 text-right">
        <a
          href="/blog"
          className="inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-600 hover:underline font-semibold transition-colors"
          aria-label="อ่านบทความทั้งหมด"
        >
          อ่านบทความทั้งหมด →
        </a>
      </div>
    </section>
  );
};

export default IndustryInsightsSection;
