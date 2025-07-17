// src/components/AdminBoard/UserTable.tsx

import React, { useEffect, useState } from 'react';
import apiClient from '@/api/apiClient';

interface User {
  id: number;
  name: string;
  role: string;
}

export default function UserTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    apiClient
      .getUsers()
      .then((res) => {
        setUsers(res ?? []);
        setError(null);
      })
      .catch((err) => {
        console.error('❌ Failed to load users:', err);
        setError('เกิดข้อผิดพลาดในการโหลดข้อมูลผู้ใช้');
        setUsers([]);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section
      className="overflow-x-auto rounded-2xl border border-border bg-white dark:bg-base-200 p-6 shadow-lg max-w-7xl mx-auto"
      aria-label="ตารางรายชื่อผู้ใช้"
    >
      <h2 className="mb-6 text-2xl font-bold text-primary flex items-center gap-2">
        <span role="img" aria-label="user icon">👥</span>
        ระบบจัดการผู้ใช้
      </h2>

      {loading ? (
        <p className="text-center text-gray-500 dark:text-gray-400 animate-pulse">
          🔄 กำลังโหลดข้อมูลผู้ใช้...
        </p>
      ) : error ? (
        <p className="text-center text-red-600 dark:text-red-400 font-medium">
          {error}
        </p>
      ) : users.length === 0 ? (
        <p className="text-center text-gray-500 dark:text-gray-400">
          📭 ยังไม่มีผู้ใช้ในระบบ
        </p>
      ) : (
        <div className="overflow-auto rounded-lg">
          <table
            className="w-full min-w-[340px] md:min-w-[600px] table-auto text-sm sm:text-base"
            role="table"
            aria-label="User Table"
          >
            <thead>
              <tr className="bg-base-100 dark:bg-base-300 text-base-content">
                <th className="px-4 py-3 text-left font-semibold">#</th>
                <th className="px-4 py-3 text-left font-semibold">ชื่อ</th>
                <th className="px-4 py-3 text-left font-semibold">บทบาท</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr
                  key={u.id}
                  className="even:bg-base-100 dark:even:bg-base-300 hover:bg-base-200 dark:hover:bg-base-100 transition-colors"
                >
                  <td className="px-4 py-3 whitespace-nowrap text-sm font-mono">{u.id}</td>
                  <td className="px-4 py-3">{u.name}</td>
                  <td className="px-4 py-3 capitalize">{u.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}