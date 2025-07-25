// <src/components/AdminBoard/widgets/UserTable.tsx>
// ✅ ตารางผู้ใช้งานแบบ Responsive พร้อมรองรับ Dark Mode และ Accessibility

import React from 'react';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'admin' | 'moderator' | 'user';
  status: 'active' | 'inactive';
}

const mockUsers: User[] = [
  {
    id: 1,
    name: 'สมชาย ใจดี',
    email: 'somchai@example.com',
    role: 'admin',
    status: 'active',
  },
  {
    id: 2,
    name: 'สมหญิง สวยงาม',
    email: 'somying@example.com',
    role: 'user',
    status: 'active',
  },
  {
    id: 3,
    name: 'จิตรลดา ใจเย็น',
    email: 'jitrada@example.com',
    role: 'user',
    status: 'inactive',
  },
  {
    id: 4,
    name: 'อนันต์ รักงาน',
    email: 'anan@example.com',
    role: 'moderator',
    status: 'active',
  },
];

const roleMap: Record<User['role'], string> = {
  admin: 'ผู้ดูแลระบบ',
  moderator: 'ผู้ตรวจสอบ',
  user: 'ผู้ใช้งานทั่วไป',
};

const statusMap: Record<User['status'], { label: string; badgeClass: string }> = {
  active: {
    label: 'ใช้งานอยู่',
    badgeClass: 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100',
  },
  inactive: {
    label: 'ไม่ใช้งาน',
    badgeClass: 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100',
  },
};

const UserTable: React.FC = () => {
  return (
    <section
      role="region"
      aria-label="ตารางรายชื่อผู้ใช้งานในระบบ"
      className="overflow-x-auto rounded-lg bg-base-200 shadow-sm"
    >
      <table
        className="min-w-full divide-y divide-gray-300 dark:divide-gray-700"
        aria-describedby="user-table-desc"
      >
        <caption id="user-table-desc" className="sr-only">
          รายละเอียดรายชื่อผู้ใช้งานในระบบพร้อมสถานะและสิทธิ์การใช้งาน
        </caption>
        <thead className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-sm font-semibold">
              ชื่อผู้ใช้
            </th>
            <th scope="col" className="px-6 py-3 text-left text-sm font-semibold">
              อีเมล
            </th>
            <th scope="col" className="px-6 py-3 text-left text-sm font-semibold">
              สิทธิ์การใช้งาน
            </th>
            <th scope="col" className="px-6 py-3 text-left text-sm font-semibold">
              สถานะ
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
          {mockUsers.map((user) => {
            const roleLabel = roleMap[user.role];
            const status = statusMap[user.status];

            return (
              <tr
                key={user.id}
                tabIndex={0}
                aria-label={`ชื่อ: ${user.name}, อีเมล: ${user.email}, สิทธิ์: ${roleLabel}, สถานะ: ${status.label}`}
                className="cursor-pointer transition-colors hover:bg-base-300 dark:hover:bg-gray-700"
              >
                <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                  {user.name}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-700 dark:text-gray-300">
                  {user.email}
                </td>
                <td className="whitespace-nowrap px-6 py-4 text-sm capitalize text-gray-700 dark:text-gray-300">
                  {roleLabel}
                </td>
                <td className="whitespace-nowrap px-6 py-4">
                  <span
                    className={`inline-block rounded-full px-2 py-1 text-xs font-semibold ${status.badgeClass}`}
                  >
                    {status.label}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default UserTable;
