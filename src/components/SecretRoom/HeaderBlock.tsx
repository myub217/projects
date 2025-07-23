import React, { useEffect, useState } from 'react'

const HeaderBlock: React.FC = () => {
  const [username, setUsername] = useState('ไม่ระบุชื่อ')

  useEffect(() => {
    const raw = localStorage.getItem('loggedInUser')?.trim()
    setUsername(raw && raw !== '' ? raw : 'ไม่ระบุชื่อ')
  }, [])

  return (
    <header
      role="banner"
      aria-label="ส่วนหัวของแดชบอร์ดผู้ใช้งานระบบ"
      className="w-full bg-primary text-primary-content p-6 sm:p-8 rounded-xl shadow-lg text-center transition-colors duration-300"
    >
      <h2 className="text-2xl sm:text-3xl font-bold tracking-wide leading-tight">
        แดชบอร์ดของผู้ใช้งาน
      </h2>
      <p className="mt-3 text-sm sm:text-base max-w-xl mx-auto">
        คุณ{' '}
        <strong
          className="underline decoration-primary-content/50 decoration-2 underline-offset-4"
          aria-label={`ชื่อผู้ใช้งาน: ${username}`}
        >
          {username}
        </strong>{' '}
        ได้รับสิทธิเข้าถึง <span className="italic font-medium">ห้องลับ</span> แล้ว
      </p>
    </header>
  )
}

export default HeaderBlock