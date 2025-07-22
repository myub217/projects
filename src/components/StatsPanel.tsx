// src/components/StatsPanel.tsx

import React from 'react'
import { FaUsers, FaCheckCircle, FaStar } from 'react-icons/fa'

const stats = [
  { label: 'ลูกค้าที่ไว้ใจเรา', value: '2,450+', icon: <FaUsers aria-hidden="true" /> },
  { label: 'งานที่ส่งสำเร็จ', value: '1,200+', icon: <FaCheckCircle aria-hidden="true" /> },
  { label: 'รีวิวเชิงบวก', value: '4.9 / 5.0', icon: <FaStar aria-hidden="true" /> },
]

const StatsPanel: React.FC = () => {
  return (
    <section
      aria-labelledby="stats-heading"
      className="w-full py-16 bg-gradient-to-br from-base-200 to-base-300 text-base-content
                 dark:from-zinc-900 dark:to-zinc-800 transition-colors duration-300"
      role="region"
    >
      <div className="max-w-6xl mx-auto px-4 text-center space-y-10">
        <header>
          <h2
            id="stats-heading"
            className="text-2xl sm:text-3xl font-bold text-primary mb-2 tracking-tight"
          >
            สถิติที่การันตีความไว้วางใจ
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            เราให้บริการลูกค้าอย่างจริงใจ โปร่งใส และส่งมอบงานที่มีคุณภาพเสมอ
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center space-y-3 p-6 rounded-xl bg-white
                         dark:bg-zinc-900 shadow-md hover:scale-105 transition-transform duration-300 ease-in-out"
              role="group"
              aria-label={`${stat.label}: ${stat.value}`}
              tabIndex={0}
            >
              <div className="text-5xl text-primary">{stat.icon}</div>
              <div className="text-4xl font-extrabold text-primary select-text">{stat.value}</div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsPanel