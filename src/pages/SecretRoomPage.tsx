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

const LOGOUT_TIMEOUT_MS = 10 * 60 * 1000; // 10 minutes

/**
 * useAuthTimeout hook
 * - Manages a countdown timer for automatic logout on inactivity.
 * - Resets timer on user activity.
 * - Calls onTimeout callback when timer reaches zero.
 */
function useAuthTimeout(onTimeout: () => void, initialTimeout = LOGOUT_TIMEOUT_MS) {
  const [timeLeft, setTimeLeft] = useState(initialTimeout);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeout();
      return;
    }
    const intervalId = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1000 : 0));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, onTimeout]);

  // Reset timer to initialTimeout; stable with useCallback
  const reset = useCallback(() => setTimeLeft(initialTimeout), [initialTimeout]);

  return { timeLeft, reset };
}

/**
 * useFetchUserData hook
 * - Simulates fetching user authentication, report data, and activity logs.
 * - Provides loading state.
 * - Gracefully handles missing authUser.
 */
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
      setLoading(false);
      setUsername(null);
      return;
    }
    setUsername(user);

    async function fetchData() {
      // Simulate API delay for realistic loading UX
      await new Promise((r) => setTimeout(r, 500));
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

    fetchData();
  }, []);

  return { loading, username, report, logs };
}

/**
 * formatTime
 * @param ms time in milliseconds
 * @returns string in mm:ss format, zero padded
 */
const formatTime = (ms: number) => {
  const totalSeconds = Math.floor(ms / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

const SecretRoomPage: React.FC<SecretRoomPageProps> = ({ theme, toggleTheme }) => {
  const navigate = useNavigate();

  const { loading, username, report, logs } = useFetchUserData();

  // Clear authentication and redirect to login
  const handleLogout = useCallback(() => {
    localStorage.removeItem("authUser");
    localStorage.removeItem("authRole");
    navigate("/login");
  }, [navigate]);

  // Manage automatic logout timeout & reset on user activity
  const { timeLeft, reset } = useAuthTimeout(handleLogout);

  // Display loading screen during data fetch
  if (loading) {
    return (
      <>
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6" aria-busy="true" aria-live="polite">
          <p className="text-gray-800 dark:text-white text-lg font-medium">กำลังโหลดข้อมูล...</p>
        </main>
        <Footer />
      </>
    );
  }

  // Redirect unauthenticated users to login
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
        tabIndex={-1} // Make keyboard events catchable even if not focused
        aria-label="หน้าหลักของระบบ"
        role="main"
      >
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 sm:p-10 space-y-6"
          aria-live="polite"
          aria-label="ข้อมูลหน้าหลัก"
        >
          {/* Personalized greeting */}
          <WelcomeBanner username={username} />

          {/* Summary and quick action grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DocumentSummaryPanel report={report} />
            <QuickActions />
          </div>

          {/* Activity log and system notes */}
          <div className="space-y-4">
            <RecentActivityLog logs={logs} />
            <SystemNote message="ระบบกำลังอยู่ในช่วงทดสอบ โปรดตรวจสอบข้อมูลอย่างละเอียด" />
          </div>

          {/* Core document components */}
          <DocumentCert />
          <SalaryCertDocument />

          {/* Logout timer and button */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
            <div
              className="text-center text-sm text-gray-500 dark:text-gray-400 mb-4"
              role="timer"
              aria-live="off"
              aria-atomic="true"
            >
              ⏳ ระบบจะออกจากระบบในอีก{" "}
              <span className="font-semibold" aria-live="polite" aria-atomic="true">
                {formatTime(timeLeft)}
              </span>
            </div>
            <button
              type="button"
              onClick={handleLogout}
              className="w-full flex justify-center items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg shadow transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              aria-label="ออกจากระบบ"
            >
              <FiLogOut size={20} />
              ออกจากระบบ
            </button>
          </div>
        </motion.section>
      </main>

      {/* Modal or UI component to warn user before auto logout */}
      <AccessTimeout timeLeft={timeLeft} onTimeoutConfirm={handleLogout} />

      <Footer />
    </>
  );
};

export default SecretRoomPage;