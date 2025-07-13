import React from "react";
import Dashboard from "../components/AdminBoard/Dashboard";
import UserTable from "../components/AdminBoard/UserTable";
import RepoList from "../components/AdminBoard/RepoList";

type User = {
  id: number;
  name: string;
  role: string;
};

const usersData: User[] = [
  { id: 1, name: "admin", role: "admin" },
  { id: 2, name: "tester", role: "user" },
];

const AdminPage: React.FC = () => {
  return (
    <main
      className="p-6 space-y-6 bg-base-100 min-h-screen"
      aria-label="Admin Control Panel"
      tabIndex={-1}
      role="main"
    >
      <h1 className="text-3xl font-bold text-primary">🛡️ Admin Control Panel</h1>

      <Dashboard />

      <UserTable users={usersData} />

      <RepoList />
    </main>
  );
};

export default AdminPage;