// src/pages/SecretRoomPage.tsx – Secure Authenticated Dashboard Page

import React, { useEffect, useState, useCallback } from 'react'
import Dashboard from '@components/SecretRoom/Dashboard'
import ThemeToggleButton from '@components/SecretRoom/ThemeToggleButton'
import UserProfileCard from '@components/SecretRoom/UserProfileCard'

const SecretRoomPage: React.FC = () => {
  const [username, setUsername] = useState<string>('กำลังโหลด...')
  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  )

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser')?.trim()
    setUsername(storedUser && storedUser.length > 0 ? storedUser : 'ไม่ทราบชื่อผู้ใช้')
  }, [])

  const toggleTheme = useCallback(() => {
    const root = document.documentElement
    if (root.classList.contains('dark')) {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setTheme('light')
    } else {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setTheme('dark')
    }
  }, [])

  return (
    <main
      role="main"
      aria-label="หน้าแดชบอร์ดผู้ใช้งาน"
      className="relative min-h-screen bg-base-100 text-base-content px-4 py-16 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100"
    >
      {/* Theme Toggle */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
      </div>

      {/* Welcome Section */}
      <section
        aria-label="ข้อความต้อนรับผู้ใช้งาน"
        tabIndex={0}
        aria-live="polite"
        className="max-w-2xl mx-auto text-center space-y-4"
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary select-text">
          ยินดีต้อนรับสู่ระบบ
        </h1>
        <p className="text-lg sm:text-xl text-base-content/80">
          สวัสดีคุณ{' '}
          <span
            className="font-semibold text-secondary underline underline-offset-4 decoration-secondary/60 select-text"
            aria-label={`ชื่อผู้ใช้: ${username}`}
          >
            {username}
          </span>{' '}
          👋
          <br />
          คุณเข้าสู่ระบบเรียบร้อยแล้ว
        </p>
      </section>

      {/* User Profile Summary */}
      <section
        aria-label="สรุปข้อมูลผู้ใช้งาน"
        className="mt-8 max-w-sm mx-auto"
      >
        <UserProfileCard username={username} />
      </section>

      {/* Dashboard Panel */}
      <section
        aria-label="แดชบอร์ดระบบ"
        className="mt-12 w-full max-w-6xl mx-auto rounded-2xl bg-base-200 dark:bg-zinc-800 shadow-xl p-6 sm:p-10 transition-shadow hover:shadow-2xl focus-within:shadow-2xl"
      >
        <Dashboard />
      </section>
    </main>
  )
}

export default SecretRoomPage