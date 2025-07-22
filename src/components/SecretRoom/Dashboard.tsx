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
import GoldPriceGraph from './GoldPriceGraph'

const Dashboard: React.FC = () => {
  const username = localStorage.getItem('loggedInUser')?.trim() || 'ไม่ทราบชื่อผู้ใช้'

  const handleFileSelect = useCallback((file: File) => {
    console.log('📁 ไฟล์ที่เลือก:', file)
    // TODO: upload file to backend service
  }, [])

  return (
    <main
      role="main"
      aria-label="แดชบอร์ดควบคุมระบบ"
      className="w-full max-w-7xl mx-auto p-6 sm:p-8 md:p-10 flex flex-col gap-12 bg-base-200 rounded-2xl shadow-xl transition hover:shadow-2xl"
    >
      {/* หัวข้อหลัก */}
      <HeaderBlock />

      {/* ข้อมูลผู้ใช้และแจ้งเตือน */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UserProfileCard username={username} />
        <NotificationsPanel />
      </section>

      {/* สถานะระบบและประสิทธิภาพ */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SystemCheckCard />
        <PerformanceMetrics />
      </section>

      {/* แผนภูมิราคาทองคำ */}
      <section aria-label="ราคาทองคำเรียลไทม์">
        <GoldPriceGraph />
      </section>

      {/* การอัปโหลดไฟล์ */}
      <section
        aria-label="อัปโหลดเอกสารหรือรูปภาพ"
        className="w-full max-w-lg mx-auto bg-base-100 dark:bg-zinc-800 rounded-xl p-6 border border-base-300 dark:border-base-700 shadow-inner"
      >
        <FileUpload
          onFileSelect={handleFileSelect}
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
        />
      </section>

      {/* ตารางการเข้าใช้งานระบบ */}
      <section aria-label="บันทึกการเข้าใช้งานระบบ">
        <AccessLogTable />
      </section>

      {/* ความช่วยเหลือและสนับสนุน */}
      <section
        aria-label="ติดต่อทีมงานและการช่วยเหลือ"
        className="w-full bg-base-100 dark:bg-zinc-800 rounded-xl border border-base-300 dark:border-base-700 p-6 shadow-inner"
      >
        <HelpSupport />
      </section>
    </main>
  )
}

export default Dashboard