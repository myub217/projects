import React, { useMemo } from "react";

interface WelcomeBannerProps {
  username: string | null;
}

const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ username }) => {
  const displayName = username || "ผู้ใช้งาน";

  const loginTime = useMemo(() => {
    return new Date().toLocaleTimeString("th-TH", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }, []);

  return (
    <header
      className="mb-8 text-center animate-fade-in"
      aria-label="ยินดีต้อนรับผู้ใช้งาน"
    >
      <div className="inline-flex items-center gap-3 justify-center px-5 py-3 bg-primary/10 rounded-xl shadow-sm">
        <svg
          className="w-6 h-6 text-primary"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.121 17.804A13.937 13.937 0 0112 15c2.092 0 4.064.478 5.879 1.328M15 10a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 3.75L20.25 4.5M16.5 6.75L17.25 7.5M3.75 4.5L4.5 3.75"
          />
        </svg>
        <div className="text-left">
          <h1 className="text-2xl font-semibold text-primary">
            ยินดีต้อนรับคุณ {displayName}
          </h1>
          <p className="text-xs text-muted-foreground mt-1">
            เข้าระบบเมื่อ {loginTime}
          </p>
        </div>
      </div>
    </header>
  );
};

export default WelcomeBanner;