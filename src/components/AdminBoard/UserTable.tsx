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
    <div className="overflow-x-auto rounded border p-4">
      <h2 className="mb-2 text-xl font-semibold">👥 Users</h2>
      <table
        className="w-full min-w-[400px] table-auto"
        role="table"
        aria-label="User List"
      >
        <thead>
          <tr>
            <th className="px-3 py-2 text-left" scope="col">
              ID
            </th>
            <th className="px-3 py-2 text-left" scope="col">
              Name
            </th>
            <th className="px-3 py-2 text-left" scope="col">
              Role
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <tr
              key={u.id}
              className="border-t even:bg-gray-50 dark:even:bg-gray-700"
              role="row"
            >
              <td className="px-3 py-2" role="cell">
                {u.id}
              </td>
              <td className="px-3 py-2" role="cell">
                {u.name}
              </td>
              <td className="px-3 py-2" role="cell">
                {u.role}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;