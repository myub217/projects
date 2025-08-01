// src/components/Sections/StatsSection.tsx
// ✅ Stats section: responsive, professional style with Tailwind + React TS

import React from 'react';

const stats = [
  { id: 1, label: 'ลูกค้าพึงพอใจ', value: '1,200+' },
  { id: 2, label: 'งานสำเร็จ', value: '3,500+' },
  { id: 3, label: 'ปีที่ดำเนินการ', value: '5 ปี' },
];

const StatsSection: React.FC = () => {
  return (
    <section
      id="stats"
      aria-label="สถิติสำคัญของ JP Visual & Docs"
      className="py-16 bg-base-100"
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-8 text-3xl font-bold text-primary">สถิติสำคัญ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map(({ id, label, value }) => (
            <div
              key={id}
              className="rounded-lg bg-base-200 p-8 shadow-md transition-colors duration-300 hover:bg-base-300"
              role="region"
              aria-labelledby={`stat-label-${id}`}
              tabIndex={0}
            >
              <div
                className="text-4xl font-extrabold text-secondary"
                id={`stat-value-${id}`}
              >
                {value}
              </div>
              <div
                id={`stat-label-${id}`}
                className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-300"
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
