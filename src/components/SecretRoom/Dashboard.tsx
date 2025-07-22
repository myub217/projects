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
      className="w-full max-w-5xl mx-auto p-6 flex flex-col gap-8 bg-base-200 rounded-xl shadow-lg"
    >
      <HeaderBlock />

      <section
        aria-label="สถานะการตรวจสอบระบบ"
        className="mb-6"
      >
        <SystemCheckCard />
      </section>

      <section
        aria-label="บันทึกการเข้าใช้งาน"
        className="mb-6"
      >
        <AccessLogTable />
      </section>
    </main>
  )
}

export default Dashboard