import React, { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { FiLogOut } from "react-icons/fi";
import { motion } from "framer-motion";

import Header from "../components/Header";
import Footer from "../components/Footer";

import WelcomeBanner from "./SecretRoomPageComponents/WelcomeBanner";
import DocumentSummaryPanel from "./SecretRoomPageComponents/DocumentSummaryPanel";
import QuickActions from "./SecretRoomPageComponents/QuickActions";
import RecentActivityLog from "./SecretRoomPageComponents/RecentActivityLog";
import SystemNote from "./SecretRoomPageComponents/SystemNote";
import AccessTimeout from "./SecretRoomPageComponents/AccessTimeout";

import { DocumentCert } from "./SecretRoomPageComponents/DocumentCert";

interface SecretRoomPageProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

interface LogEntry {
  id: number;
  detail: string;
  time: string;
}

const LOGOUT_TIMEOUT_MS = 1000 * 60 * 10; // 10 นาที

const SecretRoomPage: React.FC<SecretRoomPageProps> = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(LOGOUT_TIMEOUT_MS);

  const [report, setReport] = useState({
    documentCount: 0,
    submittedForms: 0,
    pendingRequests: 0,
    lastDocumentStatus: "รอตรวจสอบ",
  });

  const [logs, setLogs] = useState<LogEntry[]>([]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("authUser");
    localStorage.removeItem("authRole");
    navigate("/login");
  }, [navigate]);

  const formatTime = (ms: number): string => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

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
        documentCount: 42,
        submittedForms: 10,
        pendingRequests: 5,
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

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1000) {
          clearInterval(interval);
          alert("หมดเวลาการใช้งาน");
          handleLogout();
          return 0;
        }
        return prev - 1000;
      });
    }, 1000);

    return () => clearInterval(interval);
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
      <main className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 sm:p-6">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 sm:p-10 space-y-6"
        >
          {/* Welcome Message */}
          <WelcomeBanner username={username} />

          {/* Summary + Quick Actions (2-cols on md+) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DocumentSummaryPanel report={report} />
            <QuickActions />
          </div>

          {/* Activity & Notes */}
          <div className="space-y-4">
            <RecentActivityLog logs={logs} />
            <SystemNote message="ระบบกำลังอยู่ในช่วงทดสอบ โปรดตรวจสอบข้อมูลอย่างละเอียด" />
          </div>

          {/* เอกสารใบทะเบียนพาณิชย์ */}
          <DocumentCert />

          {/* Countdown & Logout */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              ⏳ ระบบจะออกจากระบบในอีก{" "}
              <span className="font-semibold">{formatTime(timeLeft)}</span>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="w-full flex justify-center items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition"
              aria-label="ออกจากระบบ"
            >
              <FiLogOut size={20} />
              ออกจากระบบ
            </button>
          </div>
        </motion.section>
      </main>

      <AccessTimeout timeLeft={timeLeft} onTimeoutConfirm={handleLogout} />

      <Footer />
    </>
  );
};

export default SecretRoomPage;