// src/components/SecretRoom/Dashboard.tsx

import React, { useCallback } from 'react'
import HeaderBlock from './HeaderBlock'
import UserProfileCard from './UserProfileCard'
import NotificationsPanel from './NotificationsPanel'
import SystemCheckCard from './SystemCheckCard'
import PerformanceMetrics from './PerformanceMetrics'
import FileUpload from './FileUpload'
import AccessLogTable from './AccessLogTable'
import HelpSupport from './HelpSupport'
import CustomerLoanProgressGraph from './CustomerLoanProgressGraph'

const Dashboard: React.FC = () => {
  const username = localStorage.getItem('loggedInUser')?.trim() || 'ไม่ทราบชื่อผู้ใช้'

  const handleFileSelect = useCallback(
    (files: File | File[]) => {
      if (Array.isArray(files)) {
        console.log('📁 ไฟล์ที่เลือก:', files.map((f) => f.name).join(', '))
      } else {
        console.log('📁 ไฟล์ที่เลือก:', files.name)
      }
      // TODO: เชื่อมต่อ backend เพื่ออัปโหลดไฟล์
    },
    []
  )

  return (
    <main
      role="main"
      aria-label="แดชบอร์ดควบคุมระบบ"
      className="w-full max-w-7xl mx-auto p-6 sm:p-8 md:p-10 flex flex-col gap-12 bg-base-200 rounded-2xl shadow-xl transition-shadow duration-300 ease-in-out hover:shadow-2xl"
    >
      {/* ส่วนหัวของ Dashboard */}
      <HeaderBlock />

      {/* ผู้ใช้ & แจ้งเตือน */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UserProfileCard username={username} />
        <NotificationsPanel />
      </section>

      {/* สถานะระบบ & ประสิทธิภาพ */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SystemCheckCard />
        <PerformanceMetrics />
      </section>

      {/* กราฟสถานะสินเชื่อ */}
      <section
        aria-label="สถานะสินเชื่อ"
        className="rounded-xl bg-base-100 dark:bg-zinc-900 border border-base-300 dark:border-zinc-700 shadow-lg p-6"
      >
        <CustomerLoanProgressGraph />
      </section>

      {/* อัปโหลดเอกสาร */}
      <section
        aria-label="อัปโหลดเอกสาร"
        className="w-full max-w-lg mx-auto bg-base-100 dark:bg-zinc-800 rounded-xl p-6 border border-base-300 dark:border-base-700 shadow-inner"
      >
        <FileUpload
          onFileSelect={handleFileSelect}
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          multiple={true}
        />
      </section>

      {/* ตารางประวัติการเข้าใช้งาน */}
      <section
        aria-label="ประวัติการใช้งานระบบ"
        className="bg-base-100 dark:bg-zinc-900 rounded-xl p-4 border border-base-300 dark:border-zinc-700 shadow"
      >
        <AccessLogTable />
      </section>

      {/* ศูนย์ช่วยเหลือและติดต่อ */}
      <section
        aria-label="ศูนย์ช่วยเหลือและการติดต่อ"
        className="w-full bg-base-100 dark:bg-zinc-800 rounded-xl border border-base-300 dark:border-zinc-700 p-6 shadow-inner"
      >
        <HelpSupport />
      </section>
    </main>
  )
}

export default Dashboard