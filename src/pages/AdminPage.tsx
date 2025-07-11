import React from "react";
import Dashboard from "../components/AdminBoard/Dashboard";
import UserTable from "../components/AdminBoard/UserTable";
import RepoList from "../components/AdminBoard/RepoList";

// ข้อมูลผู้ใช้จำลอง (mock data)
const usersData = [
  { id: 1, name: "admin", role: "superuser" },
  { id: 2, name: "tester", role: "viewer" },
];

const AdminPage: React.FC = () => {
  return (
    <main
      className="p-6 space-y-6 bg-base-100 min-h-screen"
      aria-label="Admin Control Panel"
      tabIndex={-1}
    >
      <h1 className="text-3xl font-bold text-primary">🛡️ Admin Control Panel</h1>

      <Dashboard />

      {/* ส่งข้อมูล usersData เป็น props ให้ UserTable */}
      <UserTable users={usersData} />

      <RepoList />
    </main>
  );
};

export default AdminPage;