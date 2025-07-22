// src/components/SecretRoom/HeaderBlock.tsx

import React from 'react'

const HeaderBlock: React.FC = () => {
  const username = localStorage.getItem('loggedInUser')

  return (
    <div className="w-full bg-primary text-primary-content p-4 rounded-lg shadow-md text-center">
      <h2 className="text-2xl font-semibold">แดชบอร์ดของผู้ใช้</h2>
      <p className="mt-2">คุณ <span className="font-bold">{username}</span> ได้รับสิทธิเข้าถึงห้องลับ</p>
    </div>
  )
}

export default HeaderBlock