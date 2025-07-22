// src/pages/SecretRoomPage.tsx

import React, { useEffect, useState } from 'react'
import Dashboard from '@components/SecretRoom/Dashboard'

const SecretRoomPage: React.FC = () => {
  const [username, setUsername] = useState<string>('ไม่ทราบชื่อผู้ใช้')

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser')
    if (storedUser) setUsername(storedUser)
  }, [])

  return (
    <main
      role="main"
      aria-label="หน้าแสดงข้อมูลห้องลับ"
      className="min-h-screen bg-base-100 text-base-content px-4 py-16 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-12 items-center">
        <header
          tabIndex={-1}
          aria-live="polite"
          aria-atomic="true"
          className="text-center space-y-4 max-w-xl"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
            ยินดีต้อนรับสู่ห้องลับ
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-base-content/80">
            สวัสดี{' '}
            <span
              className="font-semibold text-secondary underline decoration-secondary/70 decoration-2"
              aria-label={`ชื่อผู้ใช้: ${username}`}
            >
              {username}
            </span>{' '}
            👋 <br />
            คุณได้เข้าสู่ระบบสำเร็จ
          </p>
        </header>

        <section
          aria-label="แดชบอร์ดข้อมูลระบบ"
          className="w-full max-w-6xl rounded-xl bg-base-200 dark:bg-zinc-800 shadow-lg p-6 md:p-10"
        >
          <Dashboard />
        </section>
      </div>
    </main>
  )
}

export default SecretRoomPage