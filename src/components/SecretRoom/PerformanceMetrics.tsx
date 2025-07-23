import React from 'react'
import {
  CpuIcon,
  GaugeIcon,
  HardDriveIcon,
  ActivityIcon,
} from 'lucide-react'

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
      icon: <CpuIcon className="w-6 h-6" aria-hidden="true" />,
      color: 'text-rose-500',
    },
    {
      id: 'memory',
      label: 'การใช้ RAM',
      value: '68%',
      icon: <GaugeIcon className="w-6 h-6" aria-hidden="true" />,
      color: 'text-blue-500',
    },
    {
      id: 'storage',
      label: 'พื้นที่ใช้งาน',
      value: '140GB / 250GB',
      icon: <HardDriveIcon className="w-6 h-6" aria-hidden="true" />,
      color: 'text-green-600',
    },
    {
      id: 'uptime',
      label: 'ระยะเวลาทำงาน',
      value: '3 วัน 4 ชม.',
      icon: <ActivityIcon className="w-6 h-6" aria-hidden="true" />,
      color: 'text-yellow-500',
    },
  ]

  return (
    <section
      aria-label="สถิติประสิทธิภาพระบบ"
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
    >
      {metrics.map(({ id, label, value, icon, color }) => (
        <div
          key={id}
          className="bg-base-200 dark:bg-zinc-800 p-5 rounded-xl shadow transition-shadow hover:shadow-lg"
          aria-label={`${label}: ${value}`}
        >
          <div className={`flex items-center gap-3 mb-2 ${color}`} aria-hidden="true">
            {icon}
            <span className="font-medium">{label}</span>
          </div>
          <p className="text-xl font-bold text-base-content dark:text-white">{value}</p>
        </div>
      ))}
    </section>
  )
}

export default PerformanceMetrics