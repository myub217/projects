// src/components/SecretRoom/HeaderBlock.tsx
// Accessible header with user greeting, semantic roles, responsive styling, and smooth UX

import React, { useEffect, useState } from 'react'

const HeaderBlock: React.FC = () => {
  const [username, setUsername] = useState('ไม่ระบุชื่อ')

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser')?.trim()
    setUsername(storedUser && storedUser !== '' ? storedUser : 'ไม่ระบุชื่อ')
  }, [])

  return (
    <header
      role="banner"
      aria-label="ส่วนหัวของแดชบอร์ดผู้ใช้งานระบบ"
      className="w-full rounded-xl bg-primary p-6 text-center text-primary-content shadow-lg transition-colors duration-300 sm:p-8"
    >
      <h2 className="text-2xl font-bold leading-tight tracking-wide sm:text-3xl">
        แดชบอร์ดของผู้ใช้งาน
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed sm:text-base">
        คุณ{' '}
        <strong
          className="underline decoration-primary-content/50 decoration-2 underline-offset-4"
          aria-label={`ชื่อผู้ใช้งาน: ${username}`}
        >
          {username}
        </strong>{' '}
        ได้รับสิทธิเข้าถึง <span className="font-medium italic">ห้องลับ</span> แล้ว
      </p>
    </header>
  )
}

export default HeaderBlock
