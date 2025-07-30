// src/pages/404.tsx
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage: React.FC = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-base-200 px-4">
      <div className="max-w-md text-center p-8 bg-base-100 rounded-lg shadow-lg">
        <h1 className="text-6xl font-extrabold mb-4 text-error">404</h1>
        <h2 className="text-2xl font-semibold mb-2">ขอโทษด้วย, หน้าเว็บนี้ไม่พบ</h2>
        <p className="mb-6 text-base-content/70">
          หน้าที่คุณกำลังค้นหาอาจถูกลบออก หรือคุณอาจพิมพ์ที่อยู่ URL ไม่ถูกต้อง
        </p>
        <Link to="/" className="btn btn-primary">
          กลับสู่หน้าหลัก
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;