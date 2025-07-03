import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";

const SecretRoomPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const authUser = localStorage.getItem("authUser");
    const authRole = localStorage.getItem("authRole");

    if (!authUser) {
      navigate("/login");
    } else if (authRole !== "admin") {
      alert("คุณไม่มีสิทธิ์เข้าถึงหน้านี้");
      navigate("/login");
    } else {
      setLoading(false);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    localStorage.removeItem("authRole");
    navigate("/login");
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
        <p className="text-gray-900 dark:text-white text-lg font-medium">กำลังโหลด...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <section className="bg-white dark:bg-gray-800 shadow-lg rounded-xl max-w-lg w-full p-10 flex flex-col items-center text-center">

        {/* Header Section */}
        <header className="mb-6 w-full">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
            ยินดีต้อนรับสู่ห้องลับ
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            ตัวอย่าง: ที่นี่เป็นส่วนต้อนรับหรือสโลแกนสั้น ๆ
          </p>
        </header>

        {/* Main Content Section */}
        <section className="mb-10 w-full">
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            ตัวอย่าง: ข้อความต้อนรับเพิ่มเติม หรือข้อมูลแนะนำผู้ใช้
          </p>

          {/* ตัวอย่าง: เพิ่มส่วนแสดงข้อมูลอื่น ๆ เช่น สถิติ, ลิงก์, รายละเอียดเพิ่มเติม */}
          <div className="mt-6 bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              ตัวอย่าง: ส่วนนี้อาจใส่ข่าวสารสำคัญ หรือปุ่มลิงก์อื่น ๆ
            </p>
          </div>
        </section>

        {/* Logout Button Section */}
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
      </section>
    </main>
  );
};

export default SecretRoomPage;