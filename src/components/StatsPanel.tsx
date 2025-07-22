// src/components/StatsPanel.tsx – Customer Trust Metrics Section

import React from 'react'
import { FaUsers, FaCheckCircle, FaStar } from 'react-icons/fa'

const stats = [
  { label: 'ลูกค้าที่ไว้วางใจ', value: '2,450+', icon: <FaUsers aria-hidden="true" /> },
  { label: 'โปรเจกต์ที่ส่งมอบสำเร็จ', value: '1,200+', icon: <FaCheckCircle aria-hidden="true" /> },
  { label: 'คะแนนรีวิวเฉลี่ย', value: '4.9 / 5.0', icon: <FaStar aria-hidden="true" /> },
]

const StatsPanel: React.FC = () => {
  return (
    <section
      role="region"
      aria-labelledby="stats-title"
      className="w-full py-16 bg-gradient-to-br from-base-200 to-base-300 text-base-content
                 dark:from-zinc-900 dark:to-zinc-800 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 text-center space-y-10">
        <header>
          <h2
            id="stats-title"
            className="text-2xl sm:text-3xl font-bold tracking-tight text-primary mb-2"
          >
            สถิติที่สร้างความมั่นใจ
          </h2>
          <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
            เรามุ่งเน้นการให้บริการอย่างมีมาตรฐาน โปร่งใส และสร้างผลงานที่เชื่อถือได้
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              role="group"
              tabIndex={0}
              aria-label={`${stat.label} จำนวน ${stat.value}`}
              className="flex flex-col items-center justify-center space-y-3 p-6 rounded-xl bg-white
                         dark:bg-zinc-900 shadow-lg hover:scale-[1.03] transition-transform duration-300 ease-in-out"
            >
              <div className="text-5xl text-primary">{stat.icon}</div>
              <div className="text-4xl font-bold text-primary select-text">{stat.value}</div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsPanel