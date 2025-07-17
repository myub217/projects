// src/components/SecretRoom/HeaderBlock.tsx

import React from 'react';

const HeaderBlock: React.FC = () => (
  <header className="w-full text-center sm:text-left">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h1 className="text-3xl sm:text-4xl font-bold font-heading text-primary mb-2 sm:mb-0 leading-tight">
          🛡️ เข้าถึงพื้นที่ลับ (Secret Room)
        </h1>
        <p className="text-base sm:text-lg text-muted-content max-w-xl">
          สำหรับผู้มีสิทธิ์เท่านั้น การดำเนินการทั้งหมดถูกบันทึกไว้เพื่อตรวจสอบความปลอดภัย
        </p>
      </div>
      <div className="hidden sm:block">
        <span className="badge badge-primary text-xs px-4 py-2 rounded-full shadow-sm">
          Secure Zone
        </span>
      </div>
    </div>
  </header>
);

export default HeaderBlock;