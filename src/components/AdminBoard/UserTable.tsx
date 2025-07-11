import React from "react";

// กำหนด interface สำหรับ User เพื่อความชัดเจนและใช้ใน TypeScript
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
    <div className="border rounded p-4">
      <h2 className="text-xl font-semibold mb-2">👥 Users</h2>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="text-left">ID</th>
            <th className="text-left">Name</th>
            <th className="text-left">Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.name}</td>
              <td>{u.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;