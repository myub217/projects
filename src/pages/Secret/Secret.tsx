import React from "react";
import { useAuth } from "@/contexts/AuthContext";

const Secret: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-base-100 p-8">
      <section className="w-full max-w-xl bg-white dark:bg-base-200 rounded-xl shadow-lg p-8 text-center">
        <h1 className="text-4xl font-extrabold mb-4 text-primary select-none">
          สวัสดี, {user?.username ?? "ผู้ใช้"}
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          นี่คือหน้าที่ต้องล็อกอินเข้าใช้งานเท่านั้น
        </p>
        <button
          onClick={logout}
          className="btn btn-error px-6 py-2 rounded-lg font-semibold hover:bg-error/90 transition"
          aria-label="ออกจากระบบ"
        >
          ออกจากระบบ
        </button>
      </section>
    </main>
  );
};

export default Secret;