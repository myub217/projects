// src/pages/AdminPage.tsx

import React from 'react'

const AdminPage: React.FC = () => {
  const username = localStorage.getItem('loggedInUser')

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 text-center px-4">
      <h1 className="text-3xl font-bold text-primary mb-4">แผงควบคุมผู้ดูแลระบบ</h1>
      <p className="text-lg">ยินดีต้อนรับคุณ <span className="font-semibold">{username}</span></p>
    </div>
  )
}

export default AdminPage