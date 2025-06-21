import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../layout/Layout";
import SEOHelmet from "../components/SEOHelmet";

const SecretRoomPage: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem("auth") === "true";
    if (!isAuth) {
      navigate("/login", { replace: true });
    }
  }, [navigate]);

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
          หน้านี้อยู่ระหว่างพัฒนา หากคุณเห็นหน้านี้ แสดงว่าระบบห้องลับยังไม่เปิดใช้งาน
          โปรดกลับมาใหม่เร็ว ๆ นี้
        </p>

        <div className="max-w-xl mx-auto bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md">
          <p className="text-lg text-gray-700 dark:text-gray-300">
            🛠️ ฟีเจอร์นี้กำลังอยู่ในช่วงทดสอบภายในและจะเปิดใช้งานเร็ว ๆ นี้
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default SecretRoomPage;