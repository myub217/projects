// src/components/AdminBoard/UserTable.tsx
import React from 'react'

interface User {
  id: string
  username: string
  role: string
  status: 'active' | 'inactive'
}

interface UserTableProps {
  users: User[]
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="table w-full table-zebra">
        <thead>
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={3} className="text-center py-4">
                ไม่มีข้อมูลผู้ใช้
              </td>
            </tr>
          ) : (
            users.map(({ id, username, role, status }) => (
              <tr key={id}>
                <td>{username}</td>
                <td>{role}</td>
                <td>
                  <span
                    className={`badge ${
                      status === 'active' ? 'badge-success' : 'badge-warning'
                    }`}
                  >
                    {status}
                  </span>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default UserTable