// src/components/SecretRoom/Dashboard.tsx
// Accessible, responsive dashboard with optimized hooks, semantic roles, consistent styling, maintainability, and online status awareness

import React, { useCallback, useMemo } from 'react'
import HeaderBlock from './HeaderBlock'
import UserProfileCard from './UserProfileCard'
import NotificationsPanel from './NotificationsPanel'
import SystemCheckCard from './SystemCheckCard'
import PerformanceMetrics from './PerformanceMetrics'
import FileUpload from './FileUpload'
import AccessLogTable from './AccessLogTable'
import HelpSupport from './HelpSupport'
import CustomerLoanProgressGraph from './CustomerLoanProgressGraph'
import { useOnlineStatus } from '@/hooks/useOnlineStatus'

const Dashboard: React.FC = () => {
  const isOnline = useOnlineStatus()

  const username = useMemo(() => {
    const stored = localStorage.getItem('loggedInUser')
    return stored?.trim() || 'ไม่ทราบชื่อผู้ใช้'
  }, [])

  const handleFileSelect = useCallback((files: File | File[]) => {
    const fileNames = Array.isArray(files) ? files.map(file => file.name).join(', ') : files.name
    console.log('📁 ไฟล์ที่เลือก:', fileNames)
    // TODO: Integrate backend upload API here
  }, [])

  return (
    <main
      role="main"
      aria-label="แดชบอร์ดควบคุมระบบ"
      tabIndex={-1}
      className="mx-auto flex max-w-7xl flex-col gap-12 rounded-2xl bg-base-200 p-6 shadow-xl outline-none transition-shadow duration-300 ease-in-out hover:shadow-2xl focus-visible:ring-2 focus-visible:ring-primary sm:p-8 md:p-10"
    >
      {/* Header */}
      <HeaderBlock />

      {/* Online Status Indicator */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className={`select-none self-end rounded-full px-3 py-1 text-sm font-semibold ${
          isOnline ? 'bg-success text-success-content' : 'bg-error text-error-content'
        }`}
      >
        {isOnline ? 'ออนไลน์' : 'ออฟไลน์'}
      </div>

      {/* User Profile & Notifications */}
      <section
        aria-label="ข้อมูลผู้ใช้และการแจ้งเตือน"
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        <UserProfileCard username={username} />
        <NotificationsPanel />
      </section>

      {/* System Status & Performance */}
      <section
        aria-label="สถานะระบบและประสิทธิภาพ"
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        <SystemCheckCard />
        <PerformanceMetrics />
      </section>

      {/* Loan Progress Graph */}
      <section
        aria-label="สถานะสินเชื่อ"
        tabIndex={-1}
        className="rounded-xl border border-base-300 bg-base-100 p-6 shadow-lg dark:border-zinc-700 dark:bg-zinc-900"
      >
        <CustomerLoanProgressGraph />
      </section>

      {/* File Upload Section */}
      <section
        aria-label="อัปโหลดเอกสาร"
        tabIndex={-1}
        className="dark:border-base-700 mx-auto max-w-lg rounded-xl border border-base-300 bg-base-100 p-6 shadow-inner dark:bg-zinc-800"
      >
        <FileUpload
          onFileSelect={handleFileSelect}
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          multiple
          disabled={!isOnline}
          aria-disabled={!isOnline}
        />
        {!isOnline && (
          <p className="mt-2 select-none text-sm text-error" role="alert">
            ไม่สามารถอัปโหลดเอกสารได้ ขณะออฟไลน์
          </p>
        )}
      </section>

      {/* Access Log Table */}
      <section
        aria-label="ประวัติการใช้งานระบบ"
        tabIndex={-1}
        className="rounded-xl border border-base-300 bg-base-100 p-4 shadow dark:border-zinc-700 dark:bg-zinc-900"
      >
        <AccessLogTable />
      </section>

      {/* Help & Support */}
      <section
        aria-label="ศูนย์ช่วยเหลือและการติดต่อ"
        tabIndex={-1}
        className="rounded-xl border border-base-300 bg-base-100 p-6 shadow-inner dark:border-zinc-700 dark:bg-zinc-800"
      >
        <HelpSupport />
      </section>
    </main>
  )
}

export default Dashboard
