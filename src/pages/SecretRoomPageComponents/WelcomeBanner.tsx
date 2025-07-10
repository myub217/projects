import React, { useMemo } from "react";

interface WelcomeBannerProps {
  username: string | null;
}

/**
 * WelcomeBanner Component
 * แสดงข้อความต้อนรับผู้ใช้งาน พร้อมระบุเวลาที่เข้าสู่ระบบ
 * - ใช้ useMemo เพื่อให้เวลาเข้าสู่ระบบคงที่ไม่เปลี่ยนระหว่างการ re-render
 * - รองรับ dark mode และ fallback ชื่อผู้ใช้เป็น "ผู้ใช้งาน" หากไม่มีข้อมูล
 */
const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ username }) => {
  const displayName = username || "ผู้ใช้งาน";

  // memoize loginTime เพื่อไม่ให้เวลาเปลี่ยนทุกครั้งที่ component render
  const loginTime = useMemo(() => {
    return new Date().toLocaleTimeString("th-TH", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }, []);

  return (
    <header className="mb-6 text-center" aria-label="ยินดีต้อนรับ">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        ยินดีต้อนรับคุณ {displayName}
      </h1>
      <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
        เข้าระบบเมื่อ {loginTime}
      </p>
    </header>
  );
};

export default WelcomeBanner;