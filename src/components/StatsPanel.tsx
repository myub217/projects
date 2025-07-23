// src/components/StatsPanel.tsx – Customer Trust Metrics Section

import React from 'react'
import { FaUsers, FaCheckCircle, FaStar } from 'react-icons/fa'

const stats = [
  {
    label: 'ลูกค้าที่ไว้วางใจ',
    value: '2,450+',
    icon: <FaUsers aria-hidden="true" className="text-primary" />,
  },
  {
    label: 'โปรเจกต์ที่ส่งมอบสำเร็จ',
    value: '1,200+',
    icon: <FaCheckCircle aria-hidden="true" className="text-primary" />,
  },
  {
    label: 'คะแนนรีวิวเฉลี่ย',
    value: '4.9 / 5.0',
    icon: <FaStar aria-hidden="true" className="text-primary" />,
  },
]

const StatsPanel: React.FC = () => (
  <section
    role="region"
    aria-labelledby="stats-title"
    className="w-full bg-gradient-to-br from-base-200 to-base-300 py-16 text-base-content transition-colors duration-300 dark:from-zinc-900 dark:to-zinc-800"
  >
    <div className="mx-auto max-w-6xl space-y-10 px-4 text-center">
      <header>
        <h2
          id="stats-title"
          className="mb-2 select-text text-2xl font-bold tracking-tight text-primary sm:text-3xl"
        >
          สถิติที่สร้างความมั่นใจ
        </h2>
        <p className="mx-auto max-w-xl select-text text-sm text-zinc-600 dark:text-zinc-400 sm:text-base">
          เรามุ่งเน้นการให้บริการอย่างมีมาตรฐาน โปร่งใส และสร้างผลงานที่เชื่อถือได้
        </p>
      </header>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
        {stats.map(({ label, value, icon }, i) => (
          <article
            key={i}
            role="group"
            tabIndex={0}
            aria-label={`${label} จำนวน ${value}`}
            className="flex flex-col items-center justify-center space-y-3 rounded-xl bg-white p-6 shadow-lg outline-none transition-transform duration-300 ease-in-out hover:scale-105 focus:scale-105 focus:outline focus:outline-primary dark:bg-zinc-900"
          >
            <div className="text-5xl">{icon}</div>
            <div className="select-text text-4xl font-extrabold text-primary">{value}</div>
            <p className="select-text text-sm text-zinc-500 dark:text-zinc-400">{label}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default StatsPanel
