// src/pages/SecretRoomPage.tsx
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SEOHelmet from "@/components/SEOHelmet";
import { useAuth } from "@/context/AuthContext";

const ADMIN_USERNAME = "admin";

const SecretRoomPage: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState("");
  const [progress, setProgress] = useState(100);

  const salaryRef = useRef<HTMLDivElement>(null);
  const businessRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (
      !currentUser ||
      currentUser.username.toLowerCase() !== ADMIN_USERNAME.toLowerCase() ||
      !currentUser.expiresAt
    ) {
      navigate("/login", { replace: true });
      return;
    }

    const expires = new Date(currentUser.expiresAt).getTime();
    const now = Date.now();
    const duration = expires - now;

    if (duration <= 0) {
      logout();
      navigate("/login", { replace: true });
      return;
    }

    const updateTimeLeft = () => {
      const now = Date.now();
      const diff = expires - now;

      if (diff <= 0) {
        logout();
        navigate("/login", { replace: true });
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

  const handleDownload = async (
    ref: React.RefObject<HTMLDivElement>,
    type: "png" | "pdf"
  ) => {
    if (!ref.current) return;

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
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = pdf.internal.pageSize.getHeight();
        const ratio = Math.min(pdfWidth / canvas.width, pdfHeight / canvas.height);

        pdf.addImage(
          imgData,
          "PNG",
          0,
          0,
          canvas.width * ratio,
          canvas.height * ratio
        );
        pdf.save("document.pdf");
      }
    } catch (error) {
      console.error("Error capturing document:", error);
      alert("ไม่สามารถดาวน์โหลดเอกสารได้");
    }
  };

  const handlePrint = (ref: React.RefObject<HTMLDivElement>) => {
    if (!ref.current) return;
    const content = ref.current.innerHTML;
    const printWindow = window.open("", "_blank", "width=800,height=1000");
    if (!printWindow) return;

    printWindow.document.open();
    printWindow.document.write(`
      <html lang="th">
        <head>
          <meta charset="UTF-8" />
          <title>พิมพ์เอกสาร</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');
            body {
              margin: 0;
              padding: 1rem;
              font-family: 'Sarabun', sans-serif;
              background: #fff;
              color: #000;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            @page {
              size: A4;
              margin: 10mm;
            }
            img, iframe {
              max-width: 100%;
              height: auto;
            }
          </style>
        </head>
        <body>${content}</body>
      </html>
    `);
    printWindow.document.close();
    printWindow.focus();
    setTimeout(() => {
      printWindow.print();
      printWindow.close();
    }, 500);
  };

  return (
    <>
      <SEOHelmet
        title="Secret Room | JP Visual & Docs"
        description="พื้นที่พิเศษสำหรับสมาชิกที่ได้รับอนุญาต"
      />

      <main className="min-h-screen bg-gradient-to-b from-base-100 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-16 px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <nav className="flex justify-between text-sm text-neutral-600 dark:text-neutral-400">
            <div>
              <a href="/" className="hover:underline">
                หน้าแรก
              </a>
              <span className="text-primary dark:text-accent"> / ห้องลับ</span>
            </div>
            <button
              onClick={() => {
                if (window.confirm("ต้องการออกจากระบบ?")) {
                  logout();
                  navigate("/login", { replace: true });
                }
              }}
              className="btn btn-sm btn-outline"
              type="button"
              aria-label="ออกจากระบบ"
            >
              ออกจากระบบ
            </button>
          </nav>

          <header className="text-center space-y-3">
            <h1 className="text-3xl sm:text-5xl font-bold text-primary dark:text-accent">
              🔒 ห้องลับเฉพาะสมาชิก
            </h1>
            <p className="text-neutral-800 dark:text-neutral-300" tabIndex={0}>
              ยินดีต้อนรับ <strong>{currentUser?.username}</strong>
              <br />
              บัญชีหมดอายุใน: <strong>{timeLeft}</strong>
            </p>
            <div
              className="h-2 w-full max-w-md mx-auto rounded-full bg-neutral-200 dark:bg-neutral-700"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progress}
              aria-label="แถบแสดงเวลาที่เหลือของบัญชี"
            >
              <div
                className="h-full rounded-full bg-primary dark:bg-accent transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </header>

          {/* ทะเบียนพาณิชย์ */}
          <section
            className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 space-y-4"
            aria-label="ใบทะเบียนพาณิชย์"
          >
            <h3 className="text-xl font-semibold text-primary dark:text-accent">
              📄 ใบทะเบียนพาณิชย์
            </h3>
            <div
              ref={businessRef}
              className="border rounded bg-white dark:bg-gray-900 flex justify-center overflow-x-auto"
            >
              <iframe
                src="/business-registration.html"
                width="794"
                height="1123"
                className="shadow-md"
                title="ใบทะเบียนพาณิชย์"
                sandbox="allow-same-origin allow-scripts allow-forms"
              />
            </div>
            <div className="text-right space-x-2">
              <button className="btn btn-sm" onClick={() => handleDownload(businessRef, "png")}>
                ดาวน์โหลด PNG
              </button>
              <button className="btn btn-sm btn-outline" onClick={() => handleDownload(businessRef, "pdf")}>
                ดาวน์โหลด PDF
              </button>
              <button className="btn btn-sm btn-ghost" onClick={() => handlePrint(businessRef)}>
                พิมพ์เอกสาร
              </button>
            </div>
          </section>

          {/* หนังสือรับรองเงินเดือน */}
          <section
            className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 space-y-4"
            aria-label="หนังสือรับรองเงินเดือน"
          >
            <h3 className="text-xl font-semibold text-primary dark:text-accent">
              📄 หนังสือรับรองเงินเดือน
            </h3>
            <div
              ref={salaryRef}
              className="border rounded bg-white dark:bg-gray-900 flex justify-center overflow-x-auto"
            >
              <iframe
                src="/salary-certificate.html"
                width="794"
                height="1123"
                className="shadow-md"
                title="หนังสือรับรองเงินเดือน"
                sandbox="allow-same-origin allow-scripts allow-forms"
              />
            </div>
            <div className="text-right space-x-2">
              <button className="btn btn-sm" onClick={() => handleDownload(salaryRef, "png")}>
                ดาวน์โหลด PNG
              </button>
              <button className="btn btn-sm btn-outline" onClick={() => handleDownload(salaryRef, "pdf")}>
                ดาวน์โหลด PDF
              </button>
              <button className="btn btn-sm btn-ghost" onClick={() => handlePrint(salaryRef)}>
                พิมพ์เอกสาร
              </button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default SecretRoomPage;