import React, { useEffect, useState, useRef } from "react"; import { useNavigate } from "react-router-dom"; import SEOHelmet from "@/components/SEOHelmet"; import { useAuth } from "@/context/AuthContext";

interface ApiCheckKeyResponse { success: boolean; message?: string; }

const SecretRoomPage: React.FC = () => { const { currentUser, logout } = useAuth(); const navigate = useNavigate();

const [timeLeft, setTimeLeft] = useState(""); const [progress, setProgress] = useState(100); const [accessKey, setAccessKey] = useState(""); const [isUnlocked, setIsUnlocked] = useState(false); const [loadingKeyCheck, setLoadingKeyCheck] = useState(false);

const salaryRef = useRef<HTMLDivElement>(null); const businessRef = useRef<HTMLDivElement>(null);

useEffect(() => { if (!currentUser || !currentUser.expiresAt) { navigate("/login"); return; }

const expires = new Date(currentUser.expiresAt).getTime();
const now = Date.now();
const duration = expires - now;

if (duration <= 0) {
  logout();
  navigate("/login");
  return;
}

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
    setProgress(Math.max(0, (diff / duration) * 100));
  }
};

updateTimeLeft();
const interval = setInterval(updateTimeLeft, 1000);
return () => clearInterval(interval);

}, [currentUser, logout, navigate]);

const handleKeySubmit = async () => { if (!accessKey.trim()) { alert("กรุณากรอกรหัสปลดล็อก"); return; }

setLoadingKeyCheck(true);
try {
  const res = await fetch("/api/check-access-key", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${currentUser?.token}`,
    },
    body: JSON.stringify({ accessKey }),
  });

  const data: ApiCheckKeyResponse = await res.json();

  if (res.ok && data.success) {
    setIsUnlocked(true);
    alert("ปลดล็อกสำเร็จ! คุณสามารถเข้าถึงฟีเจอร์พิเศษได้แล้ว");
  } else {
    alert(data.message || "รหัสปลดล็อกไม่ถูกต้อง");
  }
} catch (error) {
  console.error("Error checking access key:", error);
  alert("เกิดข้อผิดพลาดในการตรวจสอบรหัส");
} finally {
  setLoadingKeyCheck(false);
}

};

const handleDownload = async ( ref: React.RefObject<HTMLDivElement>, type: "png" | "pdf" ) => { if (!ref.current) return;

try {
  const html2canvas = (await import("html2canvas")).default;
  const jsPDF = (await import("jspdf")).default;

  const canvas = await html2canvas(ref.current, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff",
  });

  if (type === "png") {
    const link = document.createElement("a");
    link.download = "document.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  } else {
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const ratio = Math.min(210 / canvas.width, 297 / canvas.height);
    const imgWidth = canvas.width * ratio;
    const imgHeight = canvas.height * ratio;

    pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    pdf.save("document.pdf");
  }
} catch (error) {
  console.error("Error capturing document:", error);
  alert("ไม่สามารถดาวน์โหลดเอกสารได้");
}

};

if (!currentUser) return null;

return ( <> <SEOHelmet
title="Secret Room | JP Visual & Docs"
description="พื้นที่พิเศษสำหรับสมาชิกที่ได้รับอนุญาต"
url="https://applicationlubmobile.vercel.app/secret"
/>

<main className="min-h-screen bg-gradient-to-b from-base-100 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto space-y-12">
      <nav className="flex justify-between text-sm text-neutral-600 dark:text-neutral-400">
        <div>
          <a href="/" className="hover:underline">
            หน้าแรก
          </a>{" "}/ <span className="text-primary dark:text-accent">ห้องลับ</span>
        </div>
        <button
          onClick={() => {
            if (window.confirm("ต้องการออกจากระบบ?")) {
              logout();
              navigate("/login");
            }
          }}
          className="btn btn-sm btn-outline"
        >
          ออกจากระบบ
        </button>
      </nav>

      <header className="text-center space-y-3">
        <h1 className="text-3xl sm:text-5xl font-bold text-primary dark:text-accent">
          🔒 ห้องลับเฉพาะสมาชิก
        </h1>
        <p className="text-neutral-800 dark:text-neutral-300">
          ยินดีต้อนรับ <strong>{currentUser.username}</strong>
          <br />บัญชีหมดอายุใน: <strong>{timeLeft}</strong>
        </p>
        <div className="h-2 w-full max-w-md mx-auto rounded-full bg-neutral-200 dark:bg-neutral-700">
          <div
            className="h-full rounded-full bg-primary dark:bg-accent transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </header>

      <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 space-y-6">
        <h2 className="text-xl font-semibold text-primary dark:text-accent">
          สิทธิพิเศษสำหรับสมาชิก
        </h2>

        {!isUnlocked && (
          <div className="flex gap-2">
            <input
              type="text"
              value={accessKey}
              onChange={(e) => setAccessKey(e.target.value)}
              className="input input-sm input-bordered w-64"
              placeholder="กรอกรหัสจากแอดมิน"
            />
            <button
              onClick={handleKeySubmit}
              className="btn btn-sm btn-primary"
              disabled={loadingKeyCheck}
            >
              {loadingKeyCheck ? "กำลังตรวจสอบ..." : "ปลดล็อก"}
            </button>
          </div>
        )}

        {isUnlocked && (
          <div className="text-green-500">
            ✅ ปลดล็อกแล้ว! สามารถใช้งานฟีเจอร์ทั้งหมดได้
          </div>
        )}
      </section>

      {isUnlocked && (
        <>
          <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-primary dark:text-accent">
              📄 ใบทะเบียนพาณิชย์
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              เอกสารแสดงการจดทะเบียนบริษัทอย่างเป็นทางการ
            </p>
            <div
              ref={businessRef}
              className="border rounded overflow-auto flex justify-center bg-white dark:bg-gray-900"
            >
              <iframe
                src="/business-registration.html"
                width="794"
                height="1123"
                className="w-[794px] max-w-full shadow-md"
                title="ใบทะเบียนพาณิชย์"
                sandbox="allow-same-origin allow-scripts allow-forms"
              />
            </div>
            <div className="text-right space-x-2">
              <button
                className="btn btn-sm"
                onClick={() => handleDownload(businessRef, "png")}
              >
                ดาวน์โหลด PNG
              </button>
              <button
                className="btn btn-sm btn-outline"
                onClick={() => handleDownload(businessRef, "pdf")}
              >
                ดาวน์โหลด PDF
              </button>
            </div>
          </section>

          <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 space-y-4">
            <h3 className="text-xl sm:text-2xl font-semibold text-primary dark:text-accent">
              📄 หนังสือรับรองเงินเดือน
            </h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              เอกสารสำหรับยืนยันสถานภาพและรายได้พนักงาน
            </p>
            <div
              ref={salaryRef}
              className="border rounded overflow-auto flex justify-center bg-white dark:bg-gray-900"
            >
              <iframe
                src="/salary-certificate.html"
                width="794"
                height="1123"
                className="w-[794px] max-w-full shadow-md"
                title="หนังสือรับรองเงินเดือน"
                sandbox="allow-same-origin allow-scripts allow-forms"
              />
            </div>
            <div className="text-right space-x-2">
              <button
                className="btn btn-sm"
                onClick={() => handleDownload(salaryRef, "png")}
              >
                ดาวน์โหลด PNG
              </button>
              <button
                className="btn btn-sm btn-outline"
                onClick={() => handleDownload(salaryRef, "pdf")}
              >
                ดาวน์โหลด PDF
              </button>
            </div>
          </section>
        </>
      )}
    </div>
  </main>
</>

); };

export default SecretRoomPage;