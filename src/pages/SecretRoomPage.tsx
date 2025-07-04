// src/pages/SecretRoomPage.tsx
import React, { useEffect, useState, useCallback } from "react";
import { useNavigate, Link } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";

interface SecretRoomPageProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const LOGOUT_TIMEOUT_MS = 1000 * 60 * 10; // 10 นาที

const SecretRoomPage: React.FC<SecretRoomPageProps> = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<string | null>(null);
  const [report, setReport] = useState({
    documentCount: 0,
    submittedForms: 0,
    pendingRequests: 0,
    lastDocumentStatus: "รอตรวจสอบ",
  });
  const [logs, setLogs] = useState<
    { id: number; detail: string; time: string }[]
  >([]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("authUser");
    localStorage.removeItem("authRole");
    navigate("/login");
  }, [navigate]);

  useEffect(() => {
    const user = localStorage.getItem("authUser");
    if (!user) {
      navigate("/login");
      return;
    }

    setUsername(user);

    const fetchData = async () => {
      await new Promise((res) => setTimeout(res, 500)); // simulate delay

      setReport({
        documentCount: 0,
        submittedForms: 0,
        pendingRequests: 0,
        lastDocumentStatus: "กำลังตรวจสอบ",
      });

      const now = new Date().toLocaleTimeString("th-TH", {
        hour: "2-digit",
        minute: "2-digit",
      });

      setLogs([
        { id: 1, detail: "• รอแอดมินนำเข้าระบบ", time: now },
        { id: 2, detail: "• ระบบกำลังจัดเตรียมเอกสาร", time: now },
        { id: 3, detail: "• รอการยืนยันขั้นสุดท้าย", time: now },
      ]);

      setLoading(false);
    };

    fetchData();

    const timeout = setTimeout(() => {
      alert("หมดเวลาการใช้งาน");
      handleLogout();
    }, LOGOUT_TIMEOUT_MS);

    return () => clearTimeout(timeout);
  }, [navigate, handleLogout]);

  if (loading) {
    return (
      <>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
          <p className="text-gray-800 dark:text-white text-lg font-medium">
            กำลังโหลดข้อมูล...
          </p>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-800 shadow-lg rounded-xl max-w-2xl w-full p-8 sm:p-10"
        >
          {/* Header Section */}
          <header className="mb-6 text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              ยินดีต้อนรับคุณ {username}
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              เข้าระบบเมื่อ{" "}
              {new Date().toLocaleTimeString("th-TH", {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </p>
          </header>

          {/* รายงานสรุป */}
          <section
            className="grid sm:grid-cols-2 gap-4 mb-8"
            aria-label="รายงานสรุป"
          >
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md shadow">
              <h2 className="font-semibold text-sm text-gray-800 dark:text-white mb-2">
                📊 รายงานสรุปผลการดำเนินงาน
              </h2>
              <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>
                  จำนวนเอกสารทั้งหมด: {report.documentCount || "ไม่มีข้อมูล"}
                </li>
                <li>
                  แบบฟอร์มที่ได้ส่งแล้ว: {report.submittedForms || "ไม่มีข้อมูล"}
                </li>
                <li>
                  คำขอที่รอดำเนินการ: {report.pendingRequests || "ไม่มีข้อมูล"}
                </li>
                <li>สถานะล่าสุดของเอกสาร: {report.lastDocumentStatus}</li>
              </ul>
            </div>

            {/* ลิงก์ด่วน */}
            <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md shadow">
              <h2 className="font-semibold text-sm text-gray-800 dark:text-white mb-2">
                🔗 ลิงก์ด่วน
              </h2>
              <ul className="list-disc list-inside text-sm space-y-1">
                <li>
                  <Link
                    to="/profile"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    aria-label="ไปยังหน้าจัดการโปรไฟล์"
                  >
                    จัดการโปรไฟล์
                  </Link>
                </li>
                <li>
                  <Link
                    to="/documents"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    aria-label="ไปยังหน้าเอกสารของฉัน"
                  >
                    เอกสารของฉัน
                  </Link>
                </li>
                <li>
                  <Link
                    to="/forms/request"
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    aria-label="ไปยังหน้าส่งคำขอใหม่"
                  >
                    ส่งคำขอใหม่
                  </Link>
                </li>
              </ul>
            </div>
          </section>

          {/* กิจกรรมล่าสุด */}
          <section className="mb-8" aria-label="กิจกรรมล่าสุด">
            <h2 className="font-semibold text-sm text-gray-800 dark:text-white mb-2">
              🕒 กิจกรรมล่าสุด
            </h2>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
              {logs.map((log) => (
                <li key={log.id}>
                  {log.detail}{" "}
                  <span className="text-xs text-gray-500">({log.time})</span>
                </li>
              ))}
            </ul>
          </section>

          {/* ปุ่มออกจากระบบ */}
          <footer>
            <button
              type="button"
              onClick={handleLogout}
              className="w-full flex justify-center items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
              aria-label="ออกจากระบบ"
            >
              <FiLogOut size={20} />
              ออกจากระบบ
            </button>
          </footer>
        </motion.section>
      </main>
      <Footer />
    </>
  );
};

export default SecretRoomPage;