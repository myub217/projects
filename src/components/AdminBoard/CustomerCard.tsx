// src/components/AdminBoard/CustomerCard.tsx

import React from 'react'

interface Customer {
  id: number
  name: string
  avatarUrl?: string
  email: string
  lastOrderDate: string
  totalSpent: number
}

const featuredCustomer: Customer = {
  id: 101,
  name: 'สมชาย ใจดี',
  avatarUrl: 'https://i.pravatar.cc/150?img=3',
  email: 'somchai@example.com',
  lastOrderDate: '2025-07-15',
  totalSpent: 15800,
}

const CustomerCard: React.FC = () => {
  return (
    <article
      role="region"
      aria-label={`ข้อมูลลูกค้าเด่น: ${featuredCustomer.name}`}
      className="flex items-center gap-6 p-6 bg-base-200 rounded-xl shadow-md border border-base-300 dark:border-base-700"
    >
      <img
        src={featuredCustomer.avatarUrl}
        alt={`รูปโปรไฟล์ของลูกค้า ${featuredCustomer.name}`}
        className="w-20 h-20 rounded-full object-cover border-2 border-primary"
        loading="lazy"
        width={80}
        height={80}
      />
      <div className="flex-1 space-y-1">
        <h3 className="text-2xl font-semibold text-primary select-text">{featuredCustomer.name}</h3>
        <p className="text-sm text-muted select-text">{featuredCustomer.email}</p>
        <p className="text-sm">
          สั่งซื้อครั้งล่าสุด: <time dateTime={featuredCustomer.lastOrderDate}>{featuredCustomer.lastOrderDate}</time>
        </p>
        <p className="text-sm font-medium mt-2">
          ยอดรวมการใช้จ่าย: <span className="text-accent">{featuredCustomer.totalSpent.toLocaleString()} บาท</span>
        </p>
      </div>
    </article>
  )
}

export default CustomerCard