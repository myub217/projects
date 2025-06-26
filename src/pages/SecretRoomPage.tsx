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
        className="min-h-screen py-16 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
        aria-labelledby="secret-room-title"
      >
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <nav className="text-sm mb-6 text-gray-500 dark:text-gray-400">
            <a href="/" className="hover:underline">หน้าแรก</a> / ห้องลับ
          </nav>

          {/* Header */}
          <div className="text-center">
            <h1
              id="secret-room-title"
              className="text-4xl sm:text-5xl font-extrabold text-primary dark:text-accent mb-6"
            >
              🔒 ยินดีต้อนรับสู่ห้องลับ
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              คุณได้เข้าสู่พื้นที่พิเศษที่สงวนไว้สำหรับสมาชิกที่ผ่านการยืนยันตัวตนแล้วเท่านั้น
              กรุณาใช้งานข้อมูลและฟีเจอร์ที่นี่อย่างมีความรับผิดชอบ
            </p>
          </div>

          {/* Feature Content */}
          <section className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-primary dark:text-accent">
              ฟีเจอร์พิเศษสำหรับคุณ
            </h2>

            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 text-left">
              <li>📄 ดาวน์โหลดเอกสารที่เกี่ยวข้อง</li>
              <li>📊 รายงานความคืบหน้าของงานบริการ</li>
              <li>🔧 ฟอร์มร้องขอเฉพาะสำหรับสมาชิกเท่านั้น</li>
              <li>🧠 ระบบติดต่อด่วนถึงเจ้าหน้าที่ (Coming soon)</li>
            </ul>

            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                หากคุณมีคำถามหรือข้อเสนอแนะ โปรดติดต่อทีม JP ผ่าน LINE
                หรือช่องทางที่คุณสะดวก
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default SecretRoomPage;