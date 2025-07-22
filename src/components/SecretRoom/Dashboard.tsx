// src/components/SecretRoom/Dashboard.tsx

import React, { useCallback } from 'react'
import AccessLogTable from './AccessLogTable'
import SystemCheckCard from './SystemCheckCard'
import HeaderBlock from './HeaderBlock'
import UserProfileCard from './UserProfileCard'
import NotificationsPanel from './NotificationsPanel'
import PerformanceMetrics from './PerformanceMetrics'
import HelpSupport from './HelpSupport'
import FileUpload from './FileUpload'

const Dashboard: React.FC = () => {
  const username = localStorage.getItem('loggedInUser')?.trim() || 'ไม่ทราบชื่อผู้ใช้'

  const handleFileSelect = useCallback((file: File) => {
    console.log('ไฟล์ที่เลือกสำหรับอัปโหลด:', file)
    // TODO: ส่งไฟล์ไป backend หรือ upload service
  }, [])

  return (
    <main
      role="main"
      aria-label="แดชบอร์ดข้อมูลและสถานะระบบ"
      className="w-full max-w-7xl mx-auto p-6 sm:p-8 md:p-10 flex flex-col gap-12 bg-base-200 rounded-2xl shadow-xl transition hover:shadow-2xl"
    >
      {/* ส่วนหัว */}
      <HeaderBlock />

      {/* ข้อมูลโปรไฟล์และการแจ้งเตือน */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UserProfileCard username={username} />
        <NotificationsPanel />
      </section>

      {/* สถานะระบบและประสิทธิภาพ */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SystemCheckCard />
        <PerformanceMetrics />
      </section>

      {/* อัปโหลดไฟล์ */}
      <section
        aria-label="อัปโหลดเอกสาร"
        className="w-full max-w-lg mx-auto bg-base-100 dark:bg-zinc-800 rounded-xl p-6 border border-base-300 dark:border-base-700 shadow-inner"
      >
        <FileUpload
          onFileSelect={handleFileSelect}
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
        />
      </section>

      {/* ตารางบันทึกการใช้งาน */}
      <section aria-label="บันทึกการเข้าใช้งาน">
        <AccessLogTable />
      </section>

      {/* ส่วนช่วยเหลือ */}
      <section
        aria-label="ความช่วยเหลือและการติดต่อทีมงาน"
        className="w-full bg-base-100 dark:bg-zinc-800 rounded-xl border border-base-300 dark:border-base-700 p-6 shadow-inner"
      >
        <HelpSupport />
      </section>
    </main>
  )
}

export default Dashboard