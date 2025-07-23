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
    const fileNames = Array.isArray(files)
      ? files.map((file) => file.name).join(', ')
      : files.name
    console.log('📁 ไฟล์ที่เลือก:', fileNames)
    // TODO: Integrate backend upload API here
  }, [])

  return (
    <main
      role="main"
      aria-label="แดชบอร์ดควบคุมระบบ"
      tabIndex={-1}
      className="max-w-7xl mx-auto p-6 sm:p-8 md:p-10 flex flex-col gap-12 bg-base-200 rounded-2xl shadow-xl transition-shadow duration-300 ease-in-out hover:shadow-2xl outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      {/* Header */}
      <HeaderBlock />

      {/* Online Status Indicator */}
      <div
        role="status"
        aria-live="polite"
        aria-atomic="true"
        className={`self-end px-3 py-1 rounded-full text-sm font-semibold select-none ${
          isOnline
            ? 'bg-success text-success-content'
            : 'bg-error text-error-content'
        }`}
      >
        {isOnline ? 'ออนไลน์' : 'ออฟไลน์'}
      </div>

      {/* User Profile & Notifications */}
      <section
        aria-label="ข้อมูลผู้ใช้และการแจ้งเตือน"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <UserProfileCard username={username} />
        <NotificationsPanel />
      </section>

      {/* System Status & Performance */}
      <section
        aria-label="สถานะระบบและประสิทธิภาพ"
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        <SystemCheckCard />
        <PerformanceMetrics />
      </section>

      {/* Loan Progress Graph */}
      <section
        aria-label="สถานะสินเชื่อ"
        tabIndex={-1}
        className="rounded-xl bg-base-100 dark:bg-zinc-900 border border-base-300 dark:border-zinc-700 shadow-lg p-6"
      >
        <CustomerLoanProgressGraph />
      </section>

      {/* File Upload Section */}
      <section
        aria-label="อัปโหลดเอกสาร"
        tabIndex={-1}
        className="max-w-lg mx-auto bg-base-100 dark:bg-zinc-800 rounded-xl p-6 border border-base-300 dark:border-base-700 shadow-inner"
      >
        <FileUpload
          onFileSelect={handleFileSelect}
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          multiple
          disabled={!isOnline}
          aria-disabled={!isOnline}
        />
        {!isOnline && (
          <p className="mt-2 text-sm text-error select-none" role="alert">
            ไม่สามารถอัปโหลดเอกสารได้ ขณะออฟไลน์
          </p>
        )}
      </section>

      {/* Access Log Table */}
      <section
        aria-label="ประวัติการใช้งานระบบ"
        tabIndex={-1}
        className="bg-base-100 dark:bg-zinc-900 rounded-xl p-4 border border-base-300 dark:border-zinc-700 shadow"
      >
        <AccessLogTable />
      </section>

      {/* Help & Support */}
      <section
        aria-label="ศูนย์ช่วยเหลือและการติดต่อ"
        tabIndex={-1}
        className="bg-base-100 dark:bg-zinc-800 rounded-xl border border-base-300 dark:border-zinc-700 p-6 shadow-inner"
      >
        <HelpSupport />
      </section>
    </main>
  )
}

export default Dashboard