// src/components/CustomerCard.tsx
// ✅ Refined CustomerCard with better accessibility, consistent styles, and clearer markup

import React from 'react'
import {
  FaUserCheck,
  FaClock,
  FaTimesCircle,
  FaFileAlt,
  FaCalendarCheck,
} from 'react-icons/fa'
import { CustomerApproval } from '../data/approvedCustomers'

interface CustomerCardProps {
  customer?: CustomerApproval
  loading?: boolean
}

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

const STATUS_STYLES: Record<string, string> = {
  'เสร็จสมบูรณ์':
    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300',
  'กำลังดำเนินการ':
    'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300',
  'ยกเลิกแล้ว':
    'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300',
}

const STATUS_ICONS: Record<string, JSX.Element> = {
  'เสร็จสมบูรณ์': (
    <FaUserCheck className="inline text-green-600 dark:text-green-400" aria-hidden="true" />
  ),
  'กำลังดำเนินการ': (
    <FaClock className="inline text-yellow-500 dark:text-yellow-400" aria-hidden="true" />
  ),
  'ยกเลิกแล้ว': (
    <FaTimesCircle className="inline text-red-500 dark:text-red-400" aria-hidden="true" />
  ),
}

const CustomerCard: React.FC<CustomerCardProps> = ({ customer, loading = false }) => {
  if (loading) {
    return (
      <div
        className="w-full animate-pulse rounded-2xl border border-base-300 bg-base-100 p-6 shadow-md dark:border-zinc-700 dark:bg-zinc-900"
        aria-busy="true"
        aria-label="กำลังโหลดข้อมูลลูกค้า"
      >
        <div className="mb-4 h-6 w-3/4 rounded bg-base-300 dark:bg-zinc-700" />
        <div className="space-y-3">
          <div className="h-4 w-1/2 rounded bg-base-300 dark:bg-zinc-700" />
          <div className="h-4 w-2/3 rounded bg-base-300 dark:bg-zinc-700" />
        </div>
        <div className="mt-5 h-5 w-24 rounded-full bg-base-300 dark:bg-zinc-700" />
      </div>
    )
  }

  if (!customer) return null

  const statusStyle =
    STATUS_STYLES[customer.status] ??
    'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
  const statusIcon = STATUS_ICONS[customer.status] ?? null

  return (
    <article
      className="flex flex-col justify-between rounded-2xl border border-base-300 bg-base-100 p-6 shadow-md transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-zinc-700 dark:bg-base-200"
      role="group"
      aria-label={`ลูกค้า: ${customer.name}, สถานะ: ${customer.status}`}
      tabIndex={0}
    >
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h3
          className="text-lg font-bold text-primary truncate"
          title={customer.name}
        >
          {customer.name}
        </h3>
        <span
          className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold select-none ${statusStyle}`}
          aria-live="polite"
          aria-atomic="true"
          role="status"
        >
          {statusIcon} <span>{customer.status}</span>
        </span>
      </header>

      <section className="mt-5 space-y-4 text-sm text-base-content/80">
        <div className="flex items-start gap-3">
          <FaFileAlt
            className="mt-1 shrink-0 text-blue-500 dark:text-blue-400"
            aria-hidden="true"
          />
          <p className="leading-snug break-words">
            <strong>บริการ:</strong> {customer.documentTitle || 'จัดการเอกสารทั่วไป'}
          </p>
        </div>

        <div className="flex items-start gap-3">
          <FaCalendarCheck
            className="mt-1 shrink-0 text-teal-500 dark:text-teal-400"
            aria-hidden="true"
          />
          <p className="leading-snug break-words">
            <strong>อัปเดตล่าสุด:</strong> {formatDate(customer.receivedDate)}
          </p>
        </div>
      </section>
    </article>
  )
}

export default CustomerCard