// src/pages/AdminPage.tsx
// ✅ แผงควบคุมผู้ดูแลระบบ พร้อมต้อนรับและแสดงแดชบอร์ดอย่างเป็นระบบ

import React, { useEffect, useState } from 'react'
import AdminDashboard from '@components/AdminBoard/Dashboard'

const AdminPage: React.FC = () => {
  const [username, setUsername] = useState<string>('ผู้ใช้ระบบ')

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser')?.trim()
    if (storedUser) setUsername(storedUser)
  }, [])

  return (
    <main
      role="main"
      aria-label="แผงควบคุมผู้ดูแลระบบ"
      className="flex min-h-screen flex-col items-center bg-base-100 px-6 py-12 text-base-content transition-colors duration-300 dark:bg-gray-900"
      tabIndex={-1}
    >
      {/* Header */}
      <header className="mb-10 w-full max-w-xl text-center" aria-live="polite" aria-atomic="true">
        <h1 className="mb-3 text-2xl font-bold text-primary sm:text-3xl md:text-4xl" tabIndex={0}>
          แผงควบคุมผู้ดูแลระบบ
        </h1>
        <p className="text-base text-muted sm:text-lg">
          ยินดีต้อนรับคุณ{' '}
          <span
            className="font-semibold underline decoration-primary decoration-2 underline-offset-4"
            aria-label={`ชื่อผู้ใช้: ${username}`}
            tabIndex={0}
          >
            {username}
          </span>
        </p>
      </header>

      {/* Dashboard Section */}
      <section className="w-full max-w-7xl" tabIndex={-1} aria-label="แดชบอร์ดผู้ดูแลระบบ">
        <AdminDashboard />
      </section>
    </main>
  )
}

export default AdminPage
