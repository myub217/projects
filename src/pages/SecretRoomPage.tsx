import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SecretRoomPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const authUser = localStorage.getItem("authUser");
    if (!authUser) {
      // ถ้าไม่เจอสถานะล็อกอิน ให้กลับไปหน้า login
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    localStorage.removeItem("authRole");
    navigate("/login");
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <h1 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
        ยินดีต้อนรับสู่ห้องลับ
      </h1>

      <p className="mb-8 text-gray-700 dark:text-gray-300">
        คุณเข้าสู่ระบบเรียบร้อยแล้ว
      </p>

      <button
        onClick={handleLogout}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md focus:outline-none focus:ring-4 focus:ring-red-400 transition"
      >
        ออกจากระบบ
      </button>
    </main>
  );
};

export default SecretRoomPage;