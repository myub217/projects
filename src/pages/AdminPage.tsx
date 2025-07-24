// src/pages/AdminPage.tsx
// ✅ หน้าหลักของแอดมิน รวม Dashboard และระบบล็อกอิน (ถ้าจำเป็น)

import React from 'react'
import Dashboard from '@/components/AdminBoard/Dashboard'

const AdminPage: React.FC = () => {
  return (
    <main className="min-h-screen bg-base-100 p-6">
      <Dashboard />
    </main>
  )
}

export default AdminPage
