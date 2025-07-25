// src/components/StatsSection.tsx
import React from 'react';

const stats = [
  { id: 1, label: 'ลูกค้าพึงพอใจ', value: '1,200+' },
  { id: 2, label: 'งานสำเร็จ', value: '3,500+' },
  { id: 3, label: 'ปีที่ดำเนินการ', value: '5 ปี' },
];

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="mb-8 text-3xl font-bold text-primary">สถิติสำคัญ</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map(({ id, label, value }) => (
            <div key={id} className="rounded-lg bg-base-200 p-8 shadow-md">
              <div className="text-4xl font-extrabold text-secondary">{value}</div>
              <div className="mt-2 text-lg font-medium text-gray-700">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
