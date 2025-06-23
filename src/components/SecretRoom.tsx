// src/pages/SecretRoomPage.tsx
import React from "react";
import Layout from "../layout/Layout";
import SecretRoom from "../components/SecretRoom";
import SEOHelmet from "../components/SEOHelmet";

const SecretRoomPage: React.FC = () => {
  return (
    <>
      <SEOHelmet
        title="Secret Room | JP Service"
        description="พื้นที่ลับสำหรับบริการพิเศษเฉพาะสมาชิกเท่านั้น"
        url="https://yourdomain.com/secret-room"
        // เพิ่มเติมถ้าต้องการ keywords, og:image หรืออื่น ๆ ใน SEOHelmet component
      />
      <Layout>
        <main
          id="secret-room"
          aria-label="หน้าห้องลับ"
          className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
        >
          <SecretRoom />
        </main>
      </Layout>
    </>
  );
};

export default SecretRoomPage;