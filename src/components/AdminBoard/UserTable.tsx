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
    <div className="border rounded p-4 overflow-x-auto">
      <h2 className="text-xl font-semibold mb-2">👥 Users</h2>
      <table className="table-auto w-full min-w-[400px]">
        <thead>
          <tr>
            <th className="text-left px-3 py-2">ID</th>
            <th className="text-left px-3 py-2">Name</th>
            <th className="text-left px-3 py-2">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id} className="border-t even:bg-gray-50 dark:even:bg-gray-700">
              <td className="px-3 py-2">{u.id}</td>
              <td className="px-3 py-2">{u.name}</td>
              <td className="px-3 py-2">{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;