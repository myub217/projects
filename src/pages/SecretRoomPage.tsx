import React from "react";
import SEOHelmet from "@/components/SEOHelmet";

const SecretRoomPage: React.FC = () => {
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
            className="text-sm text-neutral-600 dark:text-neutral-400"
            aria-label="breadcrumb"
          >
            <a href="/" className="hover:underline">
              หน้าแรก
            </a>{" "}
            / <span className="text-primary dark:text-accent">ห้องลับ</span>
          </nav>

          {/* Page Header */}
          <header className="text-center px-2 sm:px-0">
            <h1
              id="secret-room-title"
              className="text-3xl sm:text-5xl font-extrabold text-primary dark:text-accent mb-3 sm:mb-4"
            >
              🔒 ห้องลับเฉพาะสมาชิก
            </h1>
            <p className="text-base sm:text-lg text-neutral-800 dark:text-neutral-300 max-w-2xl mx-auto leading-relaxed">
              ยินดีต้อนรับเข้าสู่พื้นที่พิเศษสำหรับสมาชิกที่ได้รับอนุญาต
              เข้าถึงฟีเจอร์เฉพาะทางและข้อมูลเชิงลึกได้ที่นี่
            </p>
          </header>

          {/* Features */}
          <section className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 sm:p-8 md:p-10 space-y-6">
            <h2 className="text-xl sm:text-2xl font-semibold text-primary dark:text-accent">
              สิทธิพิเศษสำหรับสมาชิก
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 text-left text-neutral-700 dark:text-neutral-200">
              <div className="flex items-start gap-3">
                <span className="text-2xl" aria-hidden="true">
                  📄
                </span>
                <span>ดาวน์โหลดเอกสารที่เกี่ยวข้อง</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl" aria-hidden="true">
                  📊
                </span>
                <span>ดูรายงานความคืบหน้าของงานบริการ</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl" aria-hidden="true">
                  🔧
                </span>
                <span>เข้าถึงฟอร์มร้องขอเฉพาะสมาชิก</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl" aria-hidden="true">
                  🧠
                </span>
                <span>ระบบติดต่อเจ้าหน้าที่โดยตรง (เร็วๆ นี้)</span>
              </div>
            </div>
            <div className="pt-6 border-t border-gray-200 dark:border-gray-600">
              <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
                หากคุณมีคำถามเพิ่มเติม โปรดติดต่อทีมงานผ่าน LINE @462FQTFC
                หรือผ่านช่องทางที่คุณสะดวก
              </p>
            </div>
          </section>

          {/* Embedded Salary Certificate with exact A4 size */}
          <section
            aria-label="เอกสารหนังสือรับรองเงินเดือนตัวอย่าง"
            className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-4 sm:p-6 flex justify-center"
          >
            <div
              className="rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden"
              style={{
                width: 794, // 210mm in px
                height: 1123, // 297mm in px
                boxShadow:
                  "0 0 15px rgba(0,0,0,0.2)",
              }}
            >
              <iframe
                src="/salary-certificate.html"
                title="หนังสือรับรองเงินเดือน"
                aria-label="หนังสือรับรองเงินเดือนตัวอย่าง"
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