// src/components/SecretRoom/PerformanceMetrics.tsx
// ✅ แสดงสถิติประสิทธิภาพระบบในรูปแบบการ์ดที่เข้าถึงง่าย รองรับ keyboard focus และสีสวยงาม

import React from 'react'
import { CpuIcon, GaugeIcon, HardDriveIcon, ActivityIcon } from 'lucide-react'

interface Metric {
  id: string
  label: string
  value: string
  icon: React.ReactElement
  color: string
}

const PerformanceMetrics: React.FC = () => {
  const metrics: Metric[] = [
    {
      id: 'cpu',
      label: 'การใช้ CPU',
      value: '32%',
      icon: <CpuIcon className="h-6 w-6" aria-hidden="true" focusable="false" />,
      color: 'text-rose-500',
    },
    {
      id: 'memory',
      label: 'การใช้ RAM',
      value: '68%',
      icon: <GaugeIcon className="h-6 w-6" aria-hidden="true" focusable="false" />,
      color: 'text-blue-500',
    },
    {
      id: 'storage',
      label: 'พื้นที่ใช้งาน',
      value: '140GB / 250GB',
      icon: <HardDriveIcon className="h-6 w-6" aria-hidden="true" focusable="false" />,
      color: 'text-green-600',
    },
    {
      id: 'uptime',
      label: 'ระยะเวลาทำงาน',
      value: '3 วัน 4 ชม.',
      icon: <ActivityIcon className="h-6 w-6" aria-hidden="true" focusable="false" />,
      color: 'text-yellow-500',
    },
  ]

  return (
    <section
      aria-label="สถิติประสิทธิภาพระบบ"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      {metrics.map(({ id, label, value, icon, color }) => (
        <article
          key={id}
          tabIndex={0}
          role="region"
          aria-label={`${label}: ${value}`}
          className="rounded-xl bg-base-200 p-5 shadow outline-none transition-shadow duration-200 focus-within:shadow-lg hover:shadow-lg dark:bg-zinc-800"
        >
          <div className={`mb-2 flex items-center gap-3 ${color}`} aria-hidden="true">
            {icon}
            <span className="select-text font-medium">{label}</span>
          </div>
          <p className="select-text text-xl font-bold text-base-content dark:text-white">{value}</p>
        </article>
      ))}
    </section>
  )
}

export default PerformanceMetrics
