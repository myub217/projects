import React, { useMemo } from "react";

interface WelcomeBannerProps {
  username: string | null;
}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ username }) => {
  const displayName = username || "ผู้ใช้งาน";

  // Memoize login time to avoid re-evaluation on every render
  const loginTime = useMemo(() => {
    return new Date().toLocaleTimeString("th-TH", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }, []);

  return (
    <header className="mb-6 text-center">
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