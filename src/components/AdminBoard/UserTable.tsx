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
      className="w-full max-w-7xl mx-auto bg-base-100 dark:bg-base-200 border border-border rounded-2xl p-6 shadow-lg"
      aria-label="ตารางรายชื่อผู้ใช้"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl font-bold text-primary flex items-center gap-2">
            <span role="img" aria-label="user icon">👥</span>
            ระบบจัดการผู้ใช้
          </h2>
          <p className="text-sm text-muted-content mt-1">
            ตรวจสอบและจัดการบัญชีผู้ใช้ภายในระบบ
          </p>
        </div>
      </div>

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
        <div className="overflow-auto rounded-lg border border-base-200">
          <table
            className="w-full min-w-[340px] sm:min-w-[600px] table-auto text-sm sm:text-base"
            role="table"
            aria-label="User Table"
          >
            <thead>
              <tr className="bg-base-200 dark:bg-base-300 text-base-content">
                <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">#</th>
                <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">ชื่อ</th>
                <th className="px-4 py-3 text-left font-semibold whitespace-nowrap">บทบาท</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u) => (
                <tr
                  key={u.id}
                  className="even:bg-base-100 dark:even:bg-base-300 hover:bg-base-200 dark:hover:bg-base-100 transition-colors"
                >
                  <td className="px-4 py-3 whitespace-nowrap font-mono text-sm">{u.id}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{u.name}</td>
                  <td className="px-4 py-3 whitespace-nowrap capitalize">{u.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}