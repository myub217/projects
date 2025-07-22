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
      className="w-full max-w-6xl mx-auto p-6 md:p-10 flex flex-col gap-10 bg-base-200 rounded-2xl shadow-xl transition-all"
    >
      {/* ส่วนหัวของแดชบอร์ด */}
      <HeaderBlock />

      {/* การตรวจสอบระบบ */}
      <section
        aria-label="สถานะการตรวจสอบระบบ"
        className="w-full bg-base-100 dark:bg-base-300 p-6 rounded-xl shadow-inner border border-base-300"
      >
        <SystemCheckCard />
      </section>

      {/* บันทึกการเข้าใช้งาน */}
      <section
        aria-label="บันทึกการเข้าใช้งาน"
        className="w-full"
      >
        <AccessLogTable />
      </section>
    </main>
  )
}

export default Dashboard