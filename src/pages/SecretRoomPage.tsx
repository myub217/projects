// src/pages/SecretRoomPage.tsx
// Secure dashboard page with theme toggle, user greeting, full accessibility, and clean responsive layout

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

    // Sync theme from localStorage on mount
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme === 'dark' || storedTheme === 'light') {
      setTheme(storedTheme)
      document.documentElement.classList.toggle('dark', storedTheme === 'dark')
    }
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
      className="relative min-h-screen bg-base-100 px-4 py-16 text-base-content transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100"
    >
      {/* Theme Toggle Button */}
      <div className="fixed right-4 top-4 z-50">
        <ThemeToggleButton theme={theme} toggleTheme={toggleTheme} />
      </div>

      {/* Welcome Section */}
      <section
        aria-label="ข้อความต้อนรับผู้ใช้งาน"
        tabIndex={0}
        aria-live="polite"
        aria-atomic="true"
        className="mx-auto max-w-2xl space-y-4 text-center"
      >
        <h1
          className="text-4xl font-extrabold tracking-tight text-primary sm:text-5xl"
          tabIndex={0}
        >
          ยินดีต้อนรับสู่ระบบ
        </h1>
        <p className="text-lg leading-relaxed text-base-content/80 sm:text-xl">
          สวัสดีคุณ{' '}
          <span
            className="font-semibold text-secondary underline decoration-secondary/60 underline-offset-4"
            aria-label={`ชื่อผู้ใช้: ${username}`}
            tabIndex={0}
          >
            {username}
          </span>{' '}
          👋
          <br />
          คุณเข้าสู่ระบบเรียบร้อยแล้ว
        </p>
      </section>

      {/* User Profile Summary */}
      <section aria-label="สรุปข้อมูลผู้ใช้งาน" className="mx-auto mt-10 max-w-md" tabIndex={-1}>
        <UserProfileCard username={username} />
      </section>

      {/* Dashboard Section */}
      <section
        aria-label="แดชบอร์ดข้อมูลและระบบ"
        className="mx-auto mt-12 w-full max-w-7xl rounded-2xl bg-base-200 p-6 shadow-xl outline-none transition-shadow duration-300 focus-within:shadow-2xl hover:shadow-2xl dark:bg-zinc-800 sm:p-10"
        tabIndex={-1}
      >
        <Dashboard />
      </section>
    </main>
  )
}

export default SecretRoomPage
