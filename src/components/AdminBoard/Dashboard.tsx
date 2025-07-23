// src/components/AdminBoard/Dashboard.tsx

import React from 'react'
import StatsPanel from './StatsPanel'
import UserTable from './UserTable'
import CustomerCard from './CustomerCard'
import SalaryCertificate, { Employee } from './SalaryCertificate'

const AdminDashboard: React.FC = () => {
  const sampleEmployee: Employee = {
    fullName: 'นายสมชาย ใจดี',
    position: 'วิศวกรซอฟต์แวร์',
    department: 'ฝ่ายพัฒนาระบบ',
    salaryAmount: 45000,
    salaryMonth: 'กรกฎาคม 2568',
    issueDate: new Date('2025-07-22'),
  }

  return (
    <main
      role="main"
      aria-label="แดชบอร์ดผู้ดูแลระบบ"
      className="mx-auto min-h-screen max-w-7xl space-y-20 rounded-3xl bg-base-100 p-10 text-base-content shadow-xl"
    >
      {/* Header */}
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-primary">แดชบอร์ดผู้ดูแลระบบ</h1>
        <p className="mx-auto mt-4 max-w-4xl text-lg text-muted sm:text-xl">
          จัดการข้อมูลและดูสถิติที่สำคัญแบบเรียลไทม์เพื่อเพิ่มประสิทธิภาพการทำงาน
        </p>
      </header>

      {/* Stats Section */}
      <section role="region" aria-labelledby="stats-panel-heading" className="space-y-10">
        <h2 id="stats-panel-heading" className="sr-only">
          สถิติโดยรวม
        </h2>
        <StatsPanel />
      </section>

      {/* Customer Highlight Section */}
      <section role="region" aria-labelledby="customer-card-heading" className="space-y-8">
        <h2 id="customer-card-heading" className="text-2xl font-bold text-primary">
          ลูกค้าเด่นประจำวัน
        </h2>
        <CustomerCard
          loading={false}
          customer={{
            id: 'featured-001',
            name: 'บริษัท ลูกค้า VIP จำกัด',
            status: 'เสร็จสมบูรณ์',
            documentTitle: 'บริการตรวจสอบเอกสาร',
            receivedDate: new Date().toISOString(),
          }}
        />
      </section>

      {/* User Table Section */}
      <section role="region" aria-labelledby="user-table-heading" className="space-y-8">
        <h2 id="user-table-heading" className="text-2xl font-bold text-primary">
          รายชื่อผู้ใช้งานในระบบ
        </h2>
        <UserTable />
      </section>

      {/* Salary Certificate Section */}
      <section
        role="region"
        aria-labelledby="salary-certificate-heading"
        className="flex justify-center space-y-8 print:block"
      >
        <h2
          id="salary-certificate-heading"
          className="text-2xl font-bold text-primary print:hidden"
        >
          ใบรับรองเงินเดือนตัวอย่าง
        </h2>
        <div
          className="w-full max-w-[210mm] rounded-md border border-gray-300 bg-white p-10 shadow-md print:rounded-none print:border-0 print:p-0 print:shadow-none"
          style={{
            minHeight: '297mm',
            fontFamily: "'TH Sarabun New', serif",
            color: '#1f2937',
            boxSizing: 'border-box',
          }}
        >
          <SalaryCertificate employee={sampleEmployee} />
        </div>
      </section>
    </main>
  )
}

export default AdminDashboard
