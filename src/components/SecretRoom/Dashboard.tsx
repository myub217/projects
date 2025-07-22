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
    // Implement real upload logic here or dispatch to API
    console.log('ไฟล์ที่เลือกสำหรับอัปโหลด:', file)
  }, [])

  return (
    <main
      role="main"
      aria-label="แดชบอร์ดข้อมูลและสถานะระบบ"
      className="w-full max-w-6xl mx-auto p-6 md:p-10 flex flex-col gap-10 bg-base-200 rounded-2xl shadow-xl transition-shadow duration-300 hover:shadow-2xl"
    >
      {/* Header */}
      <HeaderBlock />

      {/* Profile & Notifications */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UserProfileCard username={username} />
        <NotificationsPanel />
      </section>

      {/* System Health & Performance Metrics */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <SystemCheckCard />
        <PerformanceMetrics />
      </section>

      {/* File Upload */}
      <section
        aria-label="อัปโหลดเอกสาร"
        className="w-full max-w-md mx-auto"
      >
        <FileUpload
          onFileSelect={handleFileSelect}
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
        />
      </section>

      {/* Access Logs */}
      <section
        aria-label="บันทึกการเข้าใช้งาน"
        className="w-full overflow-auto rounded-lg border border-base-300 dark:border-base-700 bg-base-100 dark:bg-zinc-800 shadow-inner"
      >
        <AccessLogTable />
      </section>

      {/* Help & Support */}
      <section
        aria-label="ความช่วยเหลือและการติดต่อทีมงาน"
        className="w-full mt-6 rounded-lg bg-base-100 dark:bg-zinc-800 border border-base-300 dark:border-base-700 p-6 shadow-inner"
      >
        <HelpSupport />
      </section>
    </main>
  )
}

export default Dashboard