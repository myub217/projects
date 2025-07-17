import React from 'react'
import { Navigate } from 'react-router-dom'
import { users } from '@data/users'

const AdminPage: React.FC = () => {
  const currentUser = localStorage.getItem('user') || ''
  const isAdmin = users[currentUser]?.role === 'admin'

  if (!isAdmin) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="p-8 text-center">
      <h1 className="text-2xl font-bold text-primary">Admin Access</h1>
      <p className="mt-4">ยินดีต้อนรับคุณ {currentUser}</p>
    </div>
  )
}

export default AdminPage