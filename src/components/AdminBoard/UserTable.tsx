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

  useEffect(() => {
    apiClient
      .getUsers()
      .then((res) => {
        setUsers(res || []);
      })
      .catch((err) => {
        console.error('Failed to load users:', err);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="overflow-x-auto rounded-xl border p-4 shadow-sm bg-white dark:bg-gray-900">
      <h2 className="mb-3 text-xl font-bold text-gray-800 dark:text-gray-100">
        👥 User Management
      </h2>

      {loading ? (
        <p className="text-gray-500 dark:text-gray-400">Loading users...</p>
      ) : users.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No users found.</p>
      ) : (
        <table
          className="w-full min-w-[500px] table-auto text-sm"
          role="table"
          aria-label="User List"
        >
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
              <th className="px-4 py-2 text-left font-semibold" scope="col">
                ID
              </th>
              <th className="px-4 py-2 text-left font-semibold" scope="col">
                Name
              </th>
              <th className="px-4 py-2 text-left font-semibold" scope="col">
                Role
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr
                key={u.id}
                className="border-t even:bg-gray-50 dark:even:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
                role="row"
              >
                <td className="px-4 py-2" role="cell">
                  {u.id}
                </td>
                <td className="px-4 py-2" role="cell">
                  {u.name}
                </td>
                <td className="px-4 py-2" role="cell">
                  {u.role}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
