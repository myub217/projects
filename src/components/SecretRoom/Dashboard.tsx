// src/components/SecretRoom/Dashboard.tsx

import React from 'react'
import AccessLogTable from './AccessLogTable'
import SystemCheckCard from './SystemCheckCard'
import HeaderBlock from './HeaderBlock'

const Dashboard: React.FC = () => {
  return (
    <main
      role="main"
      aria-label="แดชบอร์ดข้อมูลและสถานะระบบ"
      className="w-full max-w-6xl mx-auto p-6 md:p-10 flex flex-col gap-10 bg-base-200 rounded-2xl shadow-xl transition-shadow hover:shadow-2xl"
    >
      {/* Header Section */}
      <HeaderBlock />

      {/* System Health Check */}
      <section
        aria-label="สถานะการตรวจสอบระบบ"
        className="w-full bg-base-100 dark:bg-base-300 p-6 rounded-xl shadow-inner border border-base-300 dark:border-base-700 transition-colors"
      >
        <SystemCheckCard />
      </section>

      {/* Access Logs */}
      <section aria-label="บันทึกการเข้าใช้งาน" className="w-full">
        <AccessLogTable />
      </section>
    </main>
  )
}

export default Dashboard