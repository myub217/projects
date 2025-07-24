// src/pages/AdminPage.tsx
// ✅ หน้าหลักของผู้ดูแลระบบ พร้อมโครงสร้างรองรับ accessibility และ responsive layout

import React from 'react'
import Dashboard from '@components/AdminBoard/Dashboard'

const AdminPage: React.FC = () => {
  return (
    <main
      role="main"
      aria-label="แดชบอร์ดผู้ดูแลระบบ"
      tabIndex={-1}
      className="min-h-screen bg-base-100 px-4 py-10 sm:px-6 lg:px-8"
    >
      <Dashboard />
    </main>
  )
}

export default AdminPage
