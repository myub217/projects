// <src/components/AdminBoard/widgets/CustomerCard.tsx>
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
  const { name, avatarUrl, email, lastOrderDate, totalSpent } = featuredCustomer

  return (
    <article
      role="region"
      aria-label={`ข้อมูลลูกค้าเด่น: ${name}`}
      className="dark:border-base-700 flex items-center gap-6 rounded-xl border border-base-300 bg-base-200 p-6 shadow-md"
      tabIndex={0}
    >
      <img
        src={avatarUrl}
        alt={`รูปโปรไฟล์ของลูกค้า ${name}`}
        className="h-20 w-20 flex-shrink-0 rounded-full border-2 border-primary object-cover"
        loading="lazy"
        width={80}
        height={80}
        decoding="async"
        fetchPriority="low"
      />
      <div className="flex-1 space-y-1 overflow-hidden">
        <h3 className="select-text truncate text-2xl font-semibold text-primary">{name}</h3>
        <p className="select-text truncate text-sm text-muted">{email}</p>
        <p className="text-sm">
          สั่งซื้อครั้งล่าสุด:{' '}
          <time
            dateTime={lastOrderDate}
            aria-label={`สั่งซื้อครั้งล่าสุดเมื่อวันที่ ${lastOrderDate}`}
          >
            {new Date(lastOrderDate).toLocaleDateString('th-TH', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        </p>
        <p className="mt-2 text-sm font-medium">
          ยอดรวมการใช้จ่าย:{' '}
          <span className="text-accent">
            {totalSpent.toLocaleString('th-TH', {
              style: 'currency',
              currency: 'THB',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </p>
      </div>
    </article>
  )
}

export default CustomerCard
