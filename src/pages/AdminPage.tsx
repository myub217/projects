// src/pages/AdminPage.tsx

import React from 'react'

const AdminPage: React.FC = () => {
  const username = localStorage.getItem('loggedInUser') || 'ผู้ใช้ระบบ'

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 text-center px-4 dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
        แผงควบคุมผู้ดูแลระบบ
      </h1>
      <p className="text-lg sm:text-xl">
        ยินดีต้อนรับคุณ <span className="font-semibold">{username}</span>
      </p>
    </div>
  )
}

export default AdminPage