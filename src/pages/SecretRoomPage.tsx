import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { motion } from "framer-motion";

const SecretRoomPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [authChecked, setAuthChecked] = useState(false);
  const [username, setUsername] = useState<string | null>(null);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("authUser");
    localStorage.removeItem("authRole");
    navigate("/login");
  }, [navigate]);

  useEffect(() => {
    const authUser = localStorage.getItem("authUser");

    if (!authUser) {
      navigate("/login");
      return;
    }

    setUsername(authUser);

    const loadData = async () => {
      // จำลองโหลดข้อมูล
      await new Promise((res) => setTimeout(res, 1000));
      setLoading(false);
    };
    loadData();

    setAuthChecked(true);

    const timeout = setTimeout(() => {
      alert("หมดเวลาการใช้งาน");
      handleLogout();
    }, 1000 * 60 * 10);

    return () => clearTimeout(timeout);
  }, [navigate, handleLogout]);

  if (!authChecked) return null;

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
        <p className="text-gray-900 dark:text-white text-lg font-medium">
          กำลังโหลด...
        </p>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 shadow-lg rounded-xl max-w-lg w-full p-10 flex flex-col items-center text-center"
      >
        <header className="mb-6 w-full">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            ยินดีต้อนรับสู่ห้องลับ
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            คุณเข้าสู่ระบบในชื่อ <strong>{username}</strong>
          </p>
        </header>

        <section className="mb-10 w-full">
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            ตัวอย่าง: ข้อความต้อนรับเพิ่มเติม หรือข้อมูลแนะนำผู้ใช้
          </p>

          <div className="mt-6 bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              ตัวอย่าง: ส่วนนี้อาจใส่ข่าวสารสำคัญ หรือปุ่มลิงก์อื่น ๆ
            </p>
          </div>
        </section>

        <footer className="w-full">
          <button
            onClick={handleLogout}
            className="w-full inline-flex justify-center items-center gap-2 bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-400 text-white font-semibold px-6 py-3 rounded-lg transition shadow-md"
            aria-label="ออกจากระบบ"
          >
            <FiLogOut size={20} />
            ออกจากระบบ
          </button>
        </footer>
      </motion.section>
    </main>
  );
};

export default SecretRoomPage;