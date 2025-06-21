import React from "react";
import Layout from "../layout/Layout";
import SEOHelmet from "../components/SEOHelmet";
import SecretRoom from "../components/SecretRoom";

const SecretRoomPage: React.FC = () => {
  return (
    <Layout>
      <SEOHelmet title="Secret Room" />
      <section
        className="py-12 px-4 text-center bg-base-100 dark:bg-gray-950"
        aria-labelledby="secret-room-title"
      >
        <h1
          id="secret-room-title"
          className="text-3xl sm:text-4xl font-bold text-primary dark:text-accent mb-4"
        >
          🔒 ห้องลับสำหรับผู้ได้รับอนุญาต
        </h1>
        <p className="text-base text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          เนื้อหานี้สำหรับผู้ใช้งานที่ผ่านการยืนยันสิทธิ์เท่านั้น หากคุณเห็นหน้านี้
          แสดงว่าคุณได้รับอนุญาตแล้ว
        </p>
        <div className="max-w-3xl mx-auto">
          <SecretRoom />
        </div>
      </section>
    </Layout>
  );
};

export default SecretRoomPage;