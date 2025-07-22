// src/pages/AdminPage.tsx

import React, { useEffect, useState } from 'react'

const AdminPage: React.FC = () => {
  const [username, setUsername] = useState<string>('ผู้ใช้ระบบ')

  useEffect(() => {
    const storedUser = localStorage.getItem('loggedInUser')?.trim()
    setUsername(storedUser && storedUser.length > 0 ? storedUser : 'ผู้ใช้ระบบ')
  }, [])

  return (
    <main
      role="main"
      aria-label="แผงควบคุมผู้ดูแลระบบ"
      className="min-h-screen flex flex-col items-center justify-center bg-base-100 text-center px-4 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100"
    >
      <h1 className="text-3xl sm:text-4xl font-extrabold text-primary mb-6">
        แผงควบคุมผู้ดูแลระบบ
      </h1>
      <p className="text-lg sm:text-xl max-w-xl">
        ยินดีต้อนรับคุณ{' '}
        <span
          className="font-semibold underline decoration-primary decoration-2"
          aria-label={`ชื่อผู้ใช้: ${username}`}
        >
          {username}
        </span>
      </p>
    </main>
  )
}

export default AdminPage