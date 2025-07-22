// src/pages/SecretRoomPage.tsx

import React, { useEffect, useState } from 'react'
import Dashboard from '@components/SecretRoom/Dashboard'

const SecretRoomPage: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser')
    setUsername(storedUser)
  }, [])

  return (
    <main className="min-h-screen bg-base-100 text-base-content px-4 py-12">
      <div className="max-w-7xl mx-auto flex flex-col gap-10 items-center">
        <section className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">ยินดีต้อนรับเข้าสู่ Secret Room</h1>
          <p className="text-lg md:text-xl">
            ผู้ใช้ <span className="font-semibold">{username ?? 'ไม่ทราบชื่อผู้ใช้'}</span> ได้เข้าสู่ระบบเรียบร้อยแล้ว
          </p>
        </section>
        <section className="w-full max-w-5xl">
          <Dashboard />
        </section>
      </div>
    </main>
  )
}

export default SecretRoomPage