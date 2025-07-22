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
    <main className="min-h-screen flex flex-col items-center justify-center bg-base-100 text-center px-4 gap-10 py-12 max-w-7xl mx-auto">
      <section>
        <h1 className="text-3xl font-bold text-primary mb-6">ยินดีต้อนรับเข้าสู่ Secret Room</h1>
        <p className="text-lg">
          ผู้ใช้ <span className="font-semibold">{username ?? 'ไม่ทราบชื่อผู้ใช้'}</span> ได้เข้าสู่ระบบเรียบร้อยแล้ว
        </p>
      </section>
      <section className="w-full max-w-5xl">
        <Dashboard />
      </section>
    </main>
  )
}

export default SecretRoomPage