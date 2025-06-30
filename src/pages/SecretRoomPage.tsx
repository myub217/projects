import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import SEOHelmet from "@/components/SEOHelmet";
import { useAuth } from "@/context/AuthContext";

const SecretRoomPage: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const [timeLeft, setTimeLeft] = useState("");
  const [progress, setProgress] = useState(100);

  const salaryRef = useRef<HTMLDivElement>(null);
  const businessRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!currentUser) {
      logout();
      navigate("/login", { replace: true });
      return;
    }

    const expiresAt = (currentUser as any).expiresAt;
    if (expiresAt) {
      const expires = new Date(expiresAt).getTime();
      const now = Date.now();
      const fullDuration = expires - now;

      if (fullDuration <= 0) {
        logout();
        navigate("/login", { replace: true });
        return;
      }

      const updateCountdown = () => {
        const remaining = expires - Date.now();
        if (remaining <= 0) {
          logout();
          navigate("/login", { replace: true });
        } else {
          const minutes = Math.floor(remaining / 60000);
          const seconds = Math.floor((remaining % 60000) / 1000);
          setTimeLeft(`${minutes} นาที ${seconds} วินาที`);
          setProgress(Math.max(0, (remaining / fullDuration) * 100));
        }
      };

      updateCountdown();
      const interval = setInterval(updateCountdown, 1000);
      return () => clearInterval(interval);
    } else {
      setTimeLeft("ไม่จำกัดเวลา");
      setProgress(100);
    }
  }, [currentUser, logout, navigate]);

  const handleDownload = async (
    ref: React.RefObject<HTMLDivElement>,
    type: "png" | "pdf"
  ) => {
    if (!ref.current) return;
    const html2canvas = (await import("html2canvas")).default;
    const jsPDF = (await import("jspdf")).default;

    const canvas = await html2canvas(ref.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: "#fff",
    });

    if (type === "png") {
      const link = document.createElement("a");
      link.download = "document.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    } else {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const ratio = Math.min(pdf.internal.pageSize.getWidth() / canvas.width, pdf.internal.pageSize.getHeight() / canvas.height);
      pdf.addImage(imgData, "PNG", 0, 0, canvas.width * ratio, canvas.height * ratio);
      pdf.save("document.pdf");
    }
  };

  const handlePrint = (ref: React.RefObject<HTMLDivElement>) => {
    if (!ref.current) return;
    const content = ref.current.innerHTML;
    const win = window.open("", "_blank", "width=800,height=1000");
    if (!win) return;

    win.document.open();
    win.document.write(`
      <html lang="th">
        <head>
          <meta charset="UTF-8" />
          <title>พิมพ์เอกสาร</title>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');
            body {
              font-family: 'Sarabun', sans-serif;
              margin: 0;
              padding: 1rem;
              background: #fff;
              color: #000;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
            }
            @page {
              size: A4;
              margin: 10mm;
            }
          </style>
        </head>
        <body>${content}</body>
      </html>
    `);
    win.document.close();
    setTimeout(() => {
      win.print();
      win.close();
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
          {/* Breadcrumb + Logout */}
          <nav className="flex justify-between text-sm text-neutral-600 dark:text-neutral-400">
            <div>
              <a href="/" className="hover:underline">หน้าแรก</a>
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
            >
              ออกจากระบบ
            </button>
          </nav>

          {/* Header */}
          <header className="text-center space-y-3">
            <h1 className="text-3xl sm:text-5xl font-bold text-primary dark:text-accent">
              🔒 ห้องลับเฉพาะสมาชิก
            </h1>
            <p className="text-neutral-800 dark:text-neutral-300">
              ยินดีต้อนรับ <strong>{currentUser?.username}</strong><br />
              บัญชีหมดอายุใน: <strong>{timeLeft}</strong>
            </p>
            <div
              className="h-2 w-full max-w-md mx-auto rounded-full bg-neutral-200 dark:bg-neutral-700"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={100}
              aria-valuenow={progress}
            >
              <div
                className="h-full rounded-full bg-primary dark:bg-accent transition-all"
                style={{ width: `${progress}%` }}
              />
            </div>
          </header>

          {/* Document Sections */}
          <DocumentSection
            title="📄 ใบทะเบียนพาณิชย์"
            iframeSrc="/business-registration.html"
            refElement={businessRef}
            onDownload={handleDownload}
            onPrint={handlePrint}
          />

          <DocumentSection
            title="📄 หนังสือรับรองเงินเดือน"
            iframeSrc="/salary-certificate.html"
            refElement={salaryRef}
            onDownload={handleDownload}
            onPrint={handlePrint}
          />
        </div>
      </main>
    </>
  );
};

type DocProps = {
  title: string;
  iframeSrc: string;
  refElement: React.RefObject<HTMLDivElement>;
  onDownload: (
    ref: React.RefObject<HTMLDivElement>,
    type: "png" | "pdf"
  ) => void;
  onPrint: (ref: React.RefObject<HTMLDivElement>) => void;
};

const DocumentSection: React.FC<DocProps> = ({
  title,
  iframeSrc,
  refElement,
  onDownload,
  onPrint,
}) => (
  <section className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 space-y-4">
    <h3 className="text-xl font-semibold text-primary dark:text-accent">
      {title}
    </h3>
    <div
      ref={refElement}
      className="border rounded bg-white dark:bg-gray-900 flex justify-center overflow-x-auto"
    >
      <iframe
        src={iframeSrc}
        width="794"
        height="1123"
        className="shadow-md"
        title={title}
        sandbox="allow-same-origin allow-scripts allow-forms"
      />
    </div>
    <div className="text-right space-x-2">
      <button className="btn btn-sm" onClick={() => onDownload(refElement, "png")}>
        ดาวน์โหลด PNG
      </button>
      <button className="btn btn-sm btn-outline" onClick={() => onDownload(refElement, "pdf")}>
        ดาวน์โหลด PDF
      </button>
      <button className="btn btn-sm btn-ghost" onClick={() => onPrint(refElement)}>
        พิมพ์เอกสาร
      </button>
    </div>
  </section>
);

export default SecretRoomPage;