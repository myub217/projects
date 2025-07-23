// src/pages/SecretRoomPage.tsx
// Secure dashboard with theme toggle, user profile summary, full accessibility, and clean, responsive layout

import React, { useEffect, useState, useCallback } from 'react'
import Dashboard from '@components/SecretRoom/Dashboard'
import ThemeToggleButton from '@components/SecretRoom/ThemeToggleButton'
import UserProfileCard from '@components/SecretRoom/UserProfileCard'

const SecretRoomPage: React.FC = () => {
  const [username, setUsername] = useState('กำลังโหลด...')
  const [theme, setTheme] = useState<'light' | 'dark'>(() =>
    document.documentElement.classList.contains('dark') ? 'dark' : 'light'
  )

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser')?.trim()
    setUsername(storedUser || 'ไม่ทราบชื่อผู้ใช้')
  }, [])

  const toggleTheme = useCallback(() => {
    const root = document.documentElement
    const isDark = root.classList.contains('dark')
    const newTheme = isDark ? 'light' : 'dark'
    root.classList.toggle('dark', !isDark)
    localStorage.setItem('theme', newTheme)
    setTheme(newTheme)
  }, [])

  return (
    <main
      role="main"
      aria-label="แดชบอร์ดระบบรักษาความปลอดภัย"
      className="relative min-h-screen px-4 py-16 bg-base-100 text-base-content transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100"
    >
      {/* Theme Toggle Button */}
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
        <h1
          className="text-4xl sm:text-5xl font-extrabold tracking-tight text-primary"
          tabIndex={0}
        >
          ยินดีต้อนรับสู่ระบบ
        </h1>
        <p className="text-lg sm:text-xl text-base-content/80 leading-relaxed">
          สวัสดีคุณ{' '}
          <span
            className="font-semibold text-secondary underline underline-offset-4 decoration-secondary/60"
            aria-label={`ชื่อผู้ใช้: ${username}`}
            tabIndex={0}
          >
            {username}
          </span>{' '}
          👋<br />
          คุณเข้าสู่ระบบเรียบร้อยแล้ว
        </p>
      </section>

      {/* User Profile Summary */}
      <section
        aria-label="สรุปข้อมูลผู้ใช้งาน"
        className="mt-10 max-w-md mx-auto"
        tabIndex={-1}
      >
        <UserProfileCard username={username} />
      </section>

      {/* Dashboard Section */}
      <section
        aria-label="แดชบอร์ดข้อมูลและระบบ"
        className="mt-12 w-full max-w-7xl mx-auto p-6 sm:p-10 bg-base-200 dark:bg-zinc-800 rounded-2xl shadow-xl transition-shadow duration-300 hover:shadow-2xl focus-within:shadow-2xl outline-none"
        tabIndex={-1}
      >
        <Dashboard />
      </section>
    </main>
  )
}

export default SecretRoomPage