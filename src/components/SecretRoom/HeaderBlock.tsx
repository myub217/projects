// src/components/SecretRoom/HeaderBlock.tsx

import React, { useEffect, useState } from 'react'

const HeaderBlock: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser')
    setUsername(storedUser)
  }, [])

  return (
    <header
      className="w-full bg-primary text-primary-content p-6 rounded-lg shadow-md text-center select-none"
      role="banner"
      aria-label="ส่วนหัวของแดชบอร์ดผู้ใช้"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide">แดชบอร์ดของผู้ใช้</h2>
      <p className="mt-3 text-sm sm:text-base opacity-90">
        คุณ{' '}
        <span className="font-bold underline decoration-2 decoration-primary/80">
          {username ?? 'ไม่ระบุชื่อ'}
        </span>{' '}
        ได้รับสิทธิเข้าถึง <span className="italic">ห้องลับ</span> เรียบร้อยแล้ว
      </p>
    </header>
  )
}

export default HeaderBlock