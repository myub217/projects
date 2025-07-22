// src/components/AdminBoard/UserTable.tsx

import React from 'react'

interface User {
  id: number
  name: string
  email: string
  role: 'admin' | 'moderator' | 'user'
  status: 'active' | 'inactive'
}

const mockUsers: User[] = [
  { id: 1, name: 'สมชาย ใจดี', email: 'somchai@example.com', role: 'admin', status: 'active' },
  { id: 2, name: 'สมหญิง สวยงาม', email: 'somying@example.com', role: 'user', status: 'active' },
  { id: 3, name: 'จิตรลดา ใจเย็น', email: 'jitrada@example.com', role: 'user', status: 'inactive' },
  { id: 4, name: 'อนันต์ รักงาน', email: 'anan@example.com', role: 'moderator', status: 'active' },
]

const UserTable: React.FC = () => {
  return (
    <section
      role="region"
      aria-label="ตารางรายชื่อผู้ใช้งานในระบบ"
      className="overflow-x-auto rounded-lg shadow-md bg-base-200"
    >
      <table
        className="min-w-full divide-y divide-gray-300 dark:divide-gray-700"
        aria-describedby="user-table-desc"
      >
        <caption id="user-table-desc" className="sr-only">
          รายละเอียดรายชื่อผู้ใช้งานในระบบพร้อมสถานะและสิทธิ์การใช้งาน
        </caption>
        <thead className="bg-gray-100 dark:bg-gray-800 select-none">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              ชื่อผู้ใช้
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              อีเมล
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              สิทธิ์การใช้งาน
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-sm font-semibold text-gray-700 dark:text-gray-300"
            >
              สถานะ
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {mockUsers.map(user => (
            <tr
              key={user.id}
              tabIndex={0}
              aria-label={`${user.name}, อีเมล: ${user.email}, สิทธิ์: ${user.role}, สถานะ: ${
                user.status === 'active' ? 'ใช้งานอยู่' : 'ไม่ใช้งาน'
              }`}
              className="hover:bg-base-300 dark:hover:bg-gray-700 transition-colors cursor-pointer"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">
                {user.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                {user.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm capitalize text-gray-700 dark:text-gray-300">
                {user.role}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span
                  className={`inline-block px-2 py-1 rounded-full text-xs font-semibold select-text ${
                    user.status === 'active'
                      ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                      : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
                  }`}
                >
                  {user.status === 'active' ? 'ใช้งานอยู่' : 'ไม่ใช้งาน'}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default UserTable