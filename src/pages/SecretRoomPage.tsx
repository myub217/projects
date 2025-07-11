import React, { useCallback, useEffect, useState } from "react";
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
import SalaryCertDocument from "./SecretRoomPageComponents/SalaryCertDocument";
import LayeredDocBlender from "./SecretRoomPageComponents/Features/Feature1";

interface SecretRoomPageProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

interface LogEntry {
  id: number;
  detail: string;
  time: string;
}

interface Report {
  documentCount: number;
  submittedForms: number;
  pendingRequests: number;
  lastDocumentStatus: string;
}

const LOGOUT_TIMEOUT_MS = 10 * 60 * 1000; // 10 นาที

function useAuthTimeout(onTimeout: () => void, initialTimeout = LOGOUT_TIMEOUT_MS) {
  const [timeLeft, setTimeLeft] = useState(initialTimeout);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeout();
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((prev) => Math.max(prev - 1000, 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft, onTimeout]);

  const reset = useCallback(() => {
    setTimeLeft(initialTimeout);
  }, [initialTimeout]);

  return { timeLeft, reset };
}

function useFetchUserData() {
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState<string | null>(null);
  const [report, setReport] = useState<Report>({
    documentCount: 0,
    submittedForms: 0,
    pendingRequests: 0,
    lastDocumentStatus: "รอตรวจสอบ",
  });
  const [logs, setLogs] = useState<LogEntry[]>([]);

  useEffect(() => {
    const user = localStorage.getItem("authUser");
    if (!user) {
      setUsername(null);
      setLoading(false);
      return;
    }

    setUsername(user);

    async function simulateFetch() {
      await new Promise((r) => setTimeout(r, 500)); // ดีเลย์จำลอง

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
    }

    simulateFetch();
  }, []);

  return { loading, username, report, logs };
}

const formatTime = (ms: number): string => {
  const m = Math.floor(ms / 60000);
  const s = Math.floor((ms % 60000) / 1000);
  return `${m}:${s.toString().padStart(2, "0")}`;
};

const SecretRoomPage: React.FC<SecretRoomPageProps> = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();
  const { loading, username, report, logs } = useFetchUserData();

  const handleLogout = useCallback(() => {
    localStorage.removeItem("authUser");
    localStorage.removeItem("authRole");
    navigate("/login");
  }, [navigate]);

  const { timeLeft, reset } = useAuthTimeout(handleLogout);

  if (loading) {
    return (
      <>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main
          className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6"
          aria-busy="true"
          aria-live="polite"
        >
          <p className="text-lg font-medium text-gray-800 dark:text-white">กำลังโหลดข้อมูล...</p>
        </main>
        <Footer />
      </>
    );
  }

  if (!username) {
    navigate("/login");
    return null;
  }

  return (
    <>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <main
        className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 sm:p-6"
        onMouseMove={reset}
        onKeyDown={reset}
        tabIndex={-1}
        role="main"
        aria-label="หน้าหลักของระบบ"
      >
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-10 space-y-8"
        >
          <WelcomeBanner username={username} />

          {/* แสดงรายงานเอกสารและการกระทำด่วนใน grid 2 คอลัมน์ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <DocumentSummaryPanel report={report} />
            <QuickActions />
          </div>

          {/* บันทึกกิจกรรมล่าสุดและหมายเหตุระบบ */}
          <div className="space-y-6">
            <RecentActivityLog logs={logs} />
            <SystemNote message="ระบบกำลังอยู่ในช่วงทดสอบ โปรดตรวจสอบข้อมูลอย่างละเอียด" />
          </div>

          {/* เอกสารหลัก */}
          <DocumentCert />
          <SalaryCertDocument />

          {/* ฟีเจอร์เสริม */}
          <LayeredDocBlender />

          {/* Section ออกจากระบบ พร้อมแสดงนับถอยหลัง */}
          <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
            <div
              className="text-center text-sm text-gray-500 dark:text-gray-400 mb-5"
              role="timer"
              aria-live="polite"
            >
              ⏳ ระบบจะออกจากระบบในอีก{" "}
              <span className="font-semibold">{formatTime(timeLeft)}</span>
            </div>

            <button
              onClick={handleLogout}
              className="w-full flex items-center justify-center gap-3 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow-lg transition focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-red-500"
              aria-label="ออกจากระบบ"
            >
              <FiLogOut size={24} />
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