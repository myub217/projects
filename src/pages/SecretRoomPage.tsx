// src/pages/SecretRoomPage.tsx
import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { motion } from "framer-motion";

type ReportSummary = {
  documentCount: number;
  submittedForms: number;
  pendingRequests: number;
  lastDocumentStatus: string;
};

type ActivityLog = {
  id: number;
  detail: string;
  time: string;
};

const SecretRoomPage: React.FC = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<string | null>(null);
  const [report, setReport] = useState<ReportSummary>({
    documentCount: 0,
    submittedForms: 0,
    pendingRequests: 0,
    lastDocumentStatus: "รอตรวจสอบ",
  });
  const [logs, setLogs] = useState<ActivityLog[]>([]);

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

      setLogs([
        { id: 1, detail: "• รอแอดมินนำเข้าระบบ", time: "" },
        { id: 2, detail: "• รอแอดมินนำเข้าระบบ", time: "" },
        { id: 3, detail: "• รอแอดมินนำเข้าระบบ", time: "" },
      ]);

      setLoading(false);
    };

    fetchData();

    const timeout = setTimeout(() => {
      alert("หมดเวลาการใช้งาน");
      handleLogout();
    }, 1000 * 60 * 10);

    return () => clearTimeout(timeout);
  }, [navigate, handleLogout]);

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
        <p className="text-gray-800 dark:text-white text-lg font-medium">
          กำลังโหลดข้อมูล...
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
        className="bg-white dark:bg-gray-800 shadow-lg rounded-xl max-w-2xl w-full p-8 sm:p-10"
      >
        {/* Header */}
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            ยินดีต้อนรับคุณ {username}
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
            เข้าระบบเมื่อ {new Date().toLocaleTimeString()}
          </p>
        </header>

        {/* Summary Section */}
        <section className="grid sm:grid-cols-2 gap-4 mb-8">
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md shadow">
            <h2 className="font-semibold text-sm text-gray-800 dark:text-white mb-2">
              📊 รายงานสรุปผลการดำเนินงาน
            </h2>
            <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
              <li>
                จำนวนเอกสารทั้งหมด:{" "}
                {report.documentCount > 0 ? `${report.documentCount} รายการ` : ""}
              </li>
              <li>
                แบบฟอร์มที่ได้ดำเนินการส่งแล้ว:{" "}
                {report.submittedForms > 0 ? `${report.submittedForms} รายการ` : ""}
              </li>
              <li>
                คำขอที่กำลังรอดำเนินการ:{" "}
                {report.pendingRequests > 0 ? `${report.pendingRequests} รายการ` : ""}
              </li>
              <li>สถานะล่าสุดของเอกสาร: {report.lastDocumentStatus}</li>
            </ul>
          </div>

          {/* Navigation Links */}
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md shadow">
            <h2 className="font-semibold text-sm text-gray-800 dark:text-white mb-2">
              🔗 ลิงก์ด่วน
            </h2>
            <ul className="list-disc list-inside text-sm text-blue-600 dark:text-blue-400 space-y-1">
              <li>
                <a href="/profile" className="hover:underline">
                  จัดการโปรไฟล์
                </a>
              </li>
              <li>
                <a href="/documents" className="hover:underline">
                  เอกสารของฉัน
                </a>
              </li>
              <li>
                <a href="/forms/request" className="hover:underline">
                  ส่งคำขอใหม่
                </a>
              </li>
            </ul>
          </div>
        </section>

        {/* Activity Logs */}
        <section className="mb-8">
          <h2 className="font-semibold text-sm text-gray-800 dark:text-white mb-2">
            🕒 กิจกรรมล่าสุด
          </h2>
          <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
            {logs.map((log) => (
              <li key={log.id}>{log.detail}</li>
            ))}
          </ul>
        </section>

        {/* Logout Button */}
        <footer>
          <button
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
  );
};

export default SecretRoomPage;