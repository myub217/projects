// src/components/AdminBoard/StatsPanel.tsx
import React from 'react'

interface StatItem {
  label: string
  value: number | string
  icon?: React.ReactNode
}

interface StatsPanelProps {
  stats: StatItem[]
}

const StatsPanel: React.FC<StatsPanelProps> = ({ stats }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-4">
      {stats.map(({ label, value, icon }, idx) => (
        <div key={idx} className="bg-base-200 p-4 rounded-lg shadow flex items-center space-x-4">
          {icon && <div className="text-primary text-3xl">{icon}</div>}
          <div>
            <p className="text-sm text-muted">{label}</p>
            <p className="text-2xl font-semibold">{value}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default StatsPanel