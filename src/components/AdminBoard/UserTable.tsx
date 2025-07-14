// src/components/AdminBoard/UserTable.tsx

import React from "react";

interface User {
  id: number;
  name: string;
  role: string;
}

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <div className="overflow-x-auto rounded-xl border p-4 shadow-sm bg-white dark:bg-gray-900">
      <h2 className="mb-3 text-xl font-bold text-gray-800 dark:text-gray-100">
        👥 User Management
      </h2>
      <table
        className="w-full min-w-[500px] table-auto text-sm"
        role="table"
        aria-label="User List"
      >
        <thead>
          <tr className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
            <th className="px-4 py-2 text-left font-semibold" scope="col">ID</th>
            <th className="px-4 py-2 text-left font-semibold" scope="col">Name</th>
            <th className="px-4 py-2 text-left font-semibold" scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr
              key={u.id}
              className="border-t even:bg-gray-50 dark:even:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700"
              role="row"
            >
              <td className="px-4 py-2" role="cell">{u.id}</td>
              <td className="px-4 py-2" role="cell">{u.name}</td>
              <td className="px-4 py-2" role="cell">{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;