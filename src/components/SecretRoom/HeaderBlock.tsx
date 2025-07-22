// src/components/SecretRoom/HeaderBlock.tsx

import React, { useEffect, useState } from 'react'

const HeaderBlock: React.FC = () => {
  const [username, setUsername] = useState<string>('ไม่ระบุชื่อ')

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser')?.trim()
    setUsername(storedUser && storedUser.length > 0 ? storedUser : 'ไม่ระบุชื่อ')
  }, [])

  return (
    <header
      role="banner"
      aria-label="ส่วนหัวของแดชบอร์ดผู้ใช้"
      className="w-full bg-primary text-primary-content p-6 rounded-lg shadow-md text-center select-none transition-colors duration-300"
    >
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-wide leading-tight">
        แดชบอร์ดของผู้ใช้
      </h2>
      <p className="mt-3 text-sm sm:text-base opacity-90 max-w-lg mx-auto">
        คุณ{' '}
        <span
          className="font-bold underline decoration-2 decoration-primary/80 cursor-default"
          aria-label={`ชื่อผู้ใช้: ${username}`}
        >
          {username}
        </span>{' '}
        ได้รับสิทธิเข้าถึง <em className="italic not-italic font-semibold">ห้องลับ</em> เรียบร้อยแล้ว
      </p>
    </header>
  )
}

export default HeaderBlock