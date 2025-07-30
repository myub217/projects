import React from "react";
import { stats } from "@/components/Featurer/data/stats.config";
import type { StatItem } from "@/components/Featurer/components/types";

const Stats: React.FC = () => {
  return (
    <section
      aria-labelledby="stats-heading"
      className="py-16 bg-primary/5 dark:bg-primary/10 text-primary dark:text-primary-content"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 id="stats-heading" className="text-3xl font-bold mb-10">
          ความเชื่อมั่นจากลูกค้า
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map(({ label, value }: StatItem, i) => (
            <div key={i}>
              <p className="text-4xl font-extrabold">{value}</p>
              <p className="mt-2 text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
