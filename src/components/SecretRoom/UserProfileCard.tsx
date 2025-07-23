// src/components/SecretRoom/UserProfileCard.tsx
// ✅ คอมโพเนนต์แสดงข้อมูลบัญชีผู้ใช้พร้อมไอคอนและการจัดการข้อความยาว

import React from 'react'
import { UserIcon } from 'lucide-react'

interface UserProfileCardProps {
  username?: string | null
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ username }) => (
  <section
    aria-label="ข้อมูลบัญชีผู้ใช้งานระบบ"
    className="flex select-none items-center gap-5 rounded-xl bg-base-200 px-6 py-4 shadow-md transition-shadow hover:shadow-lg dark:bg-zinc-800"
  >
    <div
      className="flex shrink-0 items-center justify-center rounded-full bg-primary p-3 text-white shadow-inner"
      aria-hidden="true"
    >
      <UserIcon className="h-6 w-6" />
    </div>
    <div className="flex min-w-0 flex-col overflow-hidden">
      <span
        className="truncate text-sm text-base-content/60 dark:text-gray-400"
        aria-label="ป้ายชื่อ"
      >
        ชื่อผู้ใช้งาน
      </span>
      <strong
        className="select-text truncate text-lg font-semibold text-base-content dark:text-white"
        title={username || 'ไม่ระบุชื่อผู้ใช้งาน'}
        aria-label={`ชื่อผู้ใช้งาน: ${username || 'ไม่ระบุชื่อผู้ใช้งาน'}`}
      >
        {username || 'ไม่ระบุชื่อผู้ใช้งาน'}
      </strong>
    </div>
  </section>
)

export default UserProfileCard
