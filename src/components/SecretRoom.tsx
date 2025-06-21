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
      />
      <Layout>
        <main
          id="secret-room"
          aria-label="หน้าห้องลับ"
          className="min-h-screen"
        >
          <SecretRoom />
        </main>
      </Layout>
    </>
  );
};

export default SecretRoomPage;