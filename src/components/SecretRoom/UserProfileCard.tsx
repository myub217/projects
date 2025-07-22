// src/components/SecretRoom/UserProfileCard.tsx

import React from 'react'
import { UserIcon } from 'lucide-react'

interface UserProfileCardProps {
  username?: string | null
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ username }) => (
  <section
    aria-label="ข้อมูลบัญชีผู้ใช้งานระบบ"
    className="rounded-xl bg-base-200 dark:bg-zinc-800 px-6 py-4 shadow-md transition-shadow hover:shadow-lg flex items-center gap-5 select-none"
  >
    <div
      className="bg-primary text-white p-3 rounded-full shadow-inner shrink-0 flex items-center justify-center"
      aria-hidden="true"
    >
      <UserIcon className="w-6 h-6" />
    </div>
    <div className="flex flex-col overflow-hidden">
      <span
        className="text-sm text-base-content/60 dark:text-gray-400 truncate"
        aria-label="ป้ายชื่อ"
      >
        ชื่อผู้ใช้งาน
      </span>
      <strong
        className="text-lg font-semibold text-base-content dark:text-white truncate select-text"
        title={username || 'ไม่ระบุชื่อผู้ใช้งาน'}
        aria-label={`ชื่อผู้ใช้งาน: ${username || 'ไม่ระบุชื่อผู้ใช้งาน'}`}
      >
        {username || 'ไม่ระบุชื่อผู้ใช้งาน'}
      </strong>
    </div>
  </section>
)

export default UserProfileCard