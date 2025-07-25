// /src/components/IndustryInsights/ArticleCard.tsx

import React from 'react';

export interface ArticleCardProps {
  title: string;
  summary: string;
  date: string;
  link: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ title, summary, date, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block p-6 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 hover:shadow-xl transition-shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label={`อ่านบทความ: ${title}`}
    >
      <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100 group-hover:underline line-clamp-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
        {summary}
      </p>
      <time
        dateTime={new Date(date).toISOString()}
        className="text-xs text-gray-500 dark:text-gray-400"
      >
        {date}
      </time>
    </a>
  );
};

export default ArticleCard;
