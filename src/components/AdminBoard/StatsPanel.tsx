// src/components/AdminBoard/StatsPanel.tsx

import React from 'react'

interface StatItem {
  id: number
  title: string
  value: string | number
  icon?: React.ReactNode
  colorClass?: string
}

const statsData: StatItem[] = [
  {
    id: 1,
    title: 'ผู้ใช้งานทั้งหมด',
    value: 1234,
    icon: (
      <svg
        className="w-8 h-8 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M9 20H4v-2a3 3 0 015.356-1.857M15 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
    colorClass: 'bg-primary/10 text-primary',
  },
  {
    id: 2,
    title: 'รายการแจ้งเตือน',
    value: 5,
    icon: (
      <svg
        className="w-8 h-8 text-accent"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
        />
      </svg>
    ),
    colorClass: 'bg-accent/10 text-accent',
  },
  {
    id: 3,
    title: 'สถานะระบบ',
    value: 'ออนไลน์',
    icon: (
      <svg
        className="w-8 h-8 text-green-500"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    ),
    colorClass: 'bg-green-100 text-green-600',
  },
]

const StatsPanel: React.FC = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3 gap-6" role="region" aria-label="สถิติโดยรวม">
      {statsData.map(({ id, title, value, icon, colorClass }) => (
        <article
          key={id}
          className={`card flex items-center gap-4 p-6 rounded-xl shadow-md ${colorClass} select-text`}
          tabIndex={0}
          aria-labelledby={`stat-title-${id} stat-value-${id}`}
        >
          <div className="icon flex-shrink-0" aria-hidden="true">
            {icon}
          </div>
          <div className="text flex flex-col">
            <span id={`stat-title-${id}`} className="text-lg font-semibold">
              {title}
            </span>
            <span id={`stat-value-${id}`} className="text-3xl font-bold">
              {value}
            </span>
          </div>
        </article>
      ))}
    </section>
  )
}

export default StatsPanel