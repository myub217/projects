// ✅ src/components/SecretRoom/HeaderBlock.tsx – เวอร์ชันสมบูรณ์ พร้อมใช้งานจริง

import React from 'react';

const HeaderBlock: React.FC = () => {
  return (
    <header className="w-full text-center sm:text-left mb-6 sm:mb-10 px-3 sm:px-0">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 sm:gap-4">
        <div className="space-y-1.5">
          <h1 className="text-2xl sm:text-4xl font-heading font-bold text-primary leading-snug tracking-tight">
            🛡️ เข้าถึงพื้นที่ลับ (Secret Room)
          </h1>
          <p className="text-sm sm:text-base text-base-content/70 max-w-2xl">
            พื้นที่นี้สำหรับผู้มีสิทธิ์เข้าถึงเท่านั้น การดำเนินการทั้งหมดมีการบันทึกเพื่อตรวจสอบความปลอดภัยอย่างละเอียด
          </p>
        </div>

        <div className="flex justify-center sm:justify-end">
          <span className="badge badge-primary text-xs sm:text-sm px-4 py-1.5 rounded-full shadow-md uppercase tracking-wide">
            Secure Zone
          </span>
        </div>
      </div>
    </header>
  );
};

export default HeaderBlock;