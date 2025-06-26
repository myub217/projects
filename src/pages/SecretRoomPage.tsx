import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import SEOHelmet from "@/components/SEOHelmet";
import { useAuth } from "@/context/AuthContext";

const SecretRoomPage: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [timeLeft, setTimeLeft] = useState<string>("");
  const [progress, setProgress] = useState<number>(100); // 100% at start
  const [totalDuration, setTotalDuration] = useState<number>(0); // ms

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
      return;
    }

    const expires = new Date(currentUser.expiresAt).getTime();
    const now = Date.now();
    const duration = expires - now;
    setTotalDuration(duration);

    const updateTimeLeft = () => {
      const now = Date.now();
      const diff = expires - now;

      if (diff <= 0) {
        logout();
        navigate("/login");
      } else {
        const minutes = Math.floor(diff / 60000);
        const seconds = Math.floor((diff % 60000) / 1000);
        setTimeLeft(`${minutes} นาที ${seconds} วินาที`);

        const remainingPercent = Math.max(0, (diff / duration) * 100);
        setProgress(remainingPercent);
      }
    };

    updateTimeLeft();
    const interval = setInterval(updateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [currentUser, logout, navigate]);

  if (!currentUser) return null;

  return (
    <>
      <SEOHelmet
        title="Secret Room | JP Visual & Docs"
        description="พื้นที่พิเศษสำหรับสมาชิกที่ได้รับอนุญาต"
        url="https://applicationlubmobile.vercel.app/secret"
      />

      <main
        className="min-h-screen bg-gradient-to-b from-base-100 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300 py-16 px-4 sm:py-20 sm:px-6 lg:px-8"
        aria-labelledby="secret-room-title"
      >
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Breadcrumb */}
          <nav
            className="text-sm text-neutral-600 dark:text-neutral-400 flex justify-between items-center"
            aria-label="breadcrumb"
          >
            <div>
              <a href="/" className="hover:underline">
                หน้าแรก
              </a>{" "}
              / <span className="text-primary dark:text-accent">ห้องลับ</span>
            </div>
            <button
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="btn btn-sm btn-outline text-sm"
              aria-label="ออกจากระบบ"
            >
              ออกจากระบบ
            </button>
          </nav>

          {/* Page Header */}
          <header className="text-center px-2 sm:px-0 space-y-3">
            <h1
              id="secret-room-title"
              className="text-3xl sm:text-5xl font-extrabold text-primary dark:text-accent"
            >
              🔒 ห้องลับเฉพาะสมาชิก
            </h1>
            <p className="text-base sm:text-lg text-neutral-800 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              ยินดีต้อนรับ <strong>{currentUser.username}</strong> เข้าสู่พื้นที่พิเศษสำหรับสมาชิก
              <br />
              บัญชีของคุณจะหมดอายุใน: <strong>{timeLeft}</strong>
            </p>
            <div className="w-full max-w-lg mx-auto h-2 rounded-full bg-neutral-200 dark:bg-neutral-700">
              <div
                className="h-full rounded-full bg-primary dark:bg-accent transition-all duration-300"
                style={{ width: `${progress}%` }}
                aria-label={`เหลือเวลา ${progress.toFixed(0)}%`}
              />
            </div>
          </header>

          {/* Features Section */}
          <section className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 sm:p-8 md:p-10 space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary dark:text-accent">
              สิทธิพิเศษสำหรับสมาชิก
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 text-left text-neutral-700 dark:text-neutral-200">
              <div className="flex items-start gap-3">
                <span className="text-2xl">📄</span>
                <span>ดาวน์โหลดเอกสารที่เกี่ยวข้อง</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📊</span>
                <span>ดูรายงานความคืบหน้าของงานบริการ</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔧</span>
                <span>เข้าถึงฟอร์มร้องขอเฉพาะสมาชิก</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🧠</span>
                <span>ระบบติดต่อเจ้าหน้าที่โดยตรง (เร็วๆ นี้)</span>
              </div>
            </div>
            <div className="pt-6 border-t border-gray-200 dark:border-gray-600">
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                หากคุณมีคำถามเพิ่มเติม โปรดติดต่อทีมงานผ่าน LINE @462FQTFC หรือผ่านช่องทางที่คุณสะดวก
              </p>
            </div>
          </section>

          {/* Example Document */}
          <section
            aria-label="เอกสารหนังสือรับรองเงินเดือนตัวอย่าง"
            className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-4 sm:p-6 flex justify-center"
          >
            <div
              className="rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden"
              style={{
                width: 794,
                height: 1123,
                boxShadow: "0 0 15px rgba(0,0,0,0.2)",
              }}
            >
              <iframe
                src="/salary-certificate.html"
                title="หนังสือรับรองเงินเดือน"
                width="794"
                height="1123"
                style={{ border: "none", display: "block" }}
                loading="lazy"
                sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
              >
                ขอโทษครับ, เบราว์เซอร์ของคุณไม่รองรับการแสดง iframe.
              </iframe>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default SecretRoomPage;