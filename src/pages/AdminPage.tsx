// src/pages/AdminPage.tsx
// แผงควบคุมผู้ดูแลระบบ พร้อมต้อนรับผู้ใช้และแสดงแดชบอร์ดอย่างมีประสิทธิภาพ

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
      className="min-h-screen bg-base-100 text-base-content dark:bg-gray-900 px-6 py-12 transition-colors duration-300 flex flex-col items-center"
    >
      {/* Header ต้อนรับผู้ใช้ */}
      <header
        className="mb-10 max-w-xl w-full text-center select-text"
        tabIndex={-1}
        aria-live="polite"
        aria-atomic="true"
      >
        <h1
          className="text-3xl sm:text-4xl font-extrabold text-primary mb-3 tracking-tight"
          tabIndex={0}
        >
          แผงควบคุมผู้ดูแลระบบ
        </h1>
        <p className="text-lg sm:text-xl text-muted">
          ยินดีต้อนรับคุณ{' '}
          <span
            className="font-semibold underline decoration-primary decoration-2"
            aria-label={`ชื่อผู้ใช้: ${username}`}
            tabIndex={0}
          >
            {username}
          </span>
        </p>
      </header>

      {/* แดชบอร์ดผู้ดูแลระบบ */}
      <section
        className="w-full max-w-7xl"
        tabIndex={-1}
        aria-label="แดชบอร์ดผู้ดูแลระบบ"
      >
        <AdminDashboard />
      </section>
    </main>
  )
}

export default AdminPage