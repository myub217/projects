// src/pages/AdminDashboard/AdminDashboard.tsx
import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Navigate } from "react-router-dom";

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();

  if (!user || user.role !== "admin") {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="min-h-screen p-6 bg-base-200">
      <section className="max-w-6xl mx-auto bg-base-100 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold mb-4">แดชบอร์ดผู้ดูแลระบบ</h1>

        <div className="text-sm text-base-content/80 mb-6">
          สวัสดีคุณ <span className="font-semibold">{user.username}</span> 👋<br />
          บทบาทของคุณคือ: <span className="badge badge-primary">{user.role}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h2 className="card-title">การจัดการผู้ใช้</h2>
              <p>ดูและจัดการบัญชีผู้ใช้งานทั้งหมด</p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm btn-outline btn-primary">
                  เข้าสู่การจัดการ
                </button>
              </div>
            </div>
          </div>

          <div className="card bg-base-100 border border-base-300">
            <div className="card-body">
              <h2 className="card-title">รายงานระบบ</h2>
              <p>ดูการแจ้งเตือนและสถานะระบบ</p>
              <div className="card-actions justify-end">
                <button className="btn btn-sm btn-outline btn-secondary">
                  ดูรายงาน
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AdminDashboard;