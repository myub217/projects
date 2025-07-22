// src/components/AdminBoard/Dashboard.tsx

import React from 'react'
import StatsPanel from './StatsPanel'
import UserTable from './UserTable'
import CustomerCard from './CustomerCard'

const AdminDashboard: React.FC = () => {
  return (
    <main
      role="main"
      aria-label="แดชบอร์ดผู้ดูแลระบบ"
      className="min-h-screen max-w-7xl mx-auto p-8 bg-base-100 dark:bg-gray-900 text-base-content rounded-2xl shadow-lg transition-shadow duration-300 space-y-16"
    >
      {/* Header */}
      <header className="text-center mb-8">
        <h1 className="text-4xl font-extrabold text-primary select-text">
          แดชบอร์ดผู้ดูแลระบบ
        </h1>
        <p className="text-muted mt-3 max-w-3xl mx-auto select-text">
          จัดการข้อมูลและดูสถิติที่สำคัญแบบเรียลไทม์เพื่อเพิ่มประสิทธิภาพการทำงาน
        </p>
      </header>

      {/* Stats Panel */}
      <section aria-labelledby="stats-panel-heading" className="space-y-8">
        <h2 id="stats-panel-heading" className="sr-only">
          สถิติโดยรวม
        </h2>
        <StatsPanel />
      </section>

      {/* Customer Highlight */}
      <section aria-labelledby="customer-card-heading" className="space-y-6">
        <h2
          id="customer-card-heading"
          className="text-xl font-bold text-primary select-text"
        >
          ลูกค้าเด่นประจำวัน
        </h2>
        <CustomerCard />
      </section>

      {/* Users Table */}
      <section aria-labelledby="user-table-heading" className="space-y-6">
        <h2
          id="user-table-heading"
          className="text-xl font-bold text-primary select-text"
        >
          รายชื่อผู้ใช้งานในระบบ
        </h2>
        <UserTable />
      </section>
    </main>
  )
}

export default AdminDashboard