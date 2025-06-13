// src/components/SecretRoom.tsx
import React from "react";

const SecretRoom: React.FC = () => {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 p-6 text-center text-gray-900 dark:text-gray-100 transition-colors duration-300"
      role="main"
      aria-label="พื้นที่ส่วนตัวสำหรับจัดการข้อมูลลับ"
    >
      <h1 className="text-3xl font-bold mb-4">ยินดีต้อนรับสู่แอปลับ</h1>
      <p className="mb-6 max-w-md">
        นี่คือพื้นที่ส่วนตัวของคุณ สามารถจัดการข้อมูลหรือดูเนื้อหาลับได้ที่นี่
      </p>
      <a
        href="https://line.me/ti/p/@jpdocs"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="ติดต่อเจ้าป่า ผ่าน LINE"
        className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 rounded text-white font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        ติดต่อเจ้าป่า
      </a>
    </main>
  );
};

export default SecretRoom;