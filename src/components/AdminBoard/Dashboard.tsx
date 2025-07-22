// src/components/AdminBoard/Dashboard.tsx

import React from 'react'
import StatsPanel from './StatsPanel'
import UserTable from './UserTable'
import CustomerCard from './CustomerCard'
import SalaryCertificate from './SalaryCertificate'

const AdminDashboard: React.FC = () => {
  return (
    <main
      role="main"
      aria-label="แดชบอร์ดผู้ดูแลระบบ"
      className="min-h-screen max-w-7xl mx-auto p-10 bg-base-100 dark:bg-gray-900 text-base-content rounded-3xl shadow-xl transition-shadow duration-300 space-y-20"
    >
      {/* Header */}
      <header className="text-center mb-10 select-text">
        <h1 className="text-5xl font-extrabold text-primary tracking-tight">
          แดชบอร์ดผู้ดูแลระบบ
        </h1>
        <p className="text-lg sm:text-xl text-muted max-w-4xl mx-auto mt-4">
          จัดการข้อมูลและดูสถิติที่สำคัญแบบเรียลไทม์เพื่อเพิ่มประสิทธิภาพการทำงาน
        </p>
      </header>

      {/* Stats Panel */}
      <section
        aria-labelledby="stats-panel-heading"
        className="space-y-10"
        role="region"
      >
        <h2 id="stats-panel-heading" className="sr-only">
          สถิติโดยรวม
        </h2>
        <StatsPanel />
      </section>

      {/* Customer Highlight */}
      <section
        aria-labelledby="customer-card-heading"
        className="space-y-8"
        role="region"
      >
        <h2
          id="customer-card-heading"
          className="text-2xl font-bold text-primary select-text"
        >
          ลูกค้าเด่นประจำวัน
        </h2>
        <CustomerCard />
      </section>

      {/* Users Table */}
      <section
        aria-labelledby="user-table-heading"
        className="space-y-8"
        role="region"
      >
        <h2
          id="user-table-heading"
          className="text-2xl font-bold text-primary select-text"
        >
          รายชื่อผู้ใช้งานในระบบ
        </h2>
        <UserTable />
      </section>

      {/* Salary Certificate Preview */}
      <section
        aria-labelledby="salary-certificate-heading"
        className="space-y-8 flex justify-center print:block"
        role="region"
      >
        <h2
          id="salary-certificate-heading"
          className="text-2xl font-bold text-primary select-text print:hidden"
        >
          ใบรับรองเงินเดือนตัวอย่าง
        </h2>

        <div
          className="w-full max-w-[210mm] bg-white rounded-md shadow-md border border-gray-300 p-10 print:shadow-none print:border-0 print:p-0 print:rounded-none print:bg-white"
          style={{
            minHeight: '297mm',
            boxSizing: 'border-box',
            boxShadow: '0 0 0.5rem rgba(0,0,0,0.1)',
          }}
        >
          <SalaryCertificate />
        </div>
      </section>
    </main>
  )
}

export default AdminDashboard