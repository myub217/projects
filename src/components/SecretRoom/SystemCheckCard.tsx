// src/components/SecretRoom/SystemCheckCard.tsx

import React from 'react';

const SystemCheckCard: React.FC = () => {
  const systemStatus = [
    { label: 'สถานะ API (JP-Docs)', value: 'ตอบสนองภายใน 123ms', highlight: true },
    { label: 'Token ยืนยันตัวตน', value: 'ยังไม่หมดอายุ' },
    { label: 'ฐานข้อมูลลูกค้า', value: 'MongoDB Atlas (JP-Vault)' },
    { label: 'Session ผู้ใช้', value: 'Active - ปลอดภัย' },
    { label: 'CDN เอกสาร', value: 'Cache เปิดใช้งาน' },
  ];

  return (
    <div className="bg-base-100 rounded-xl p-4 sm:p-6 shadow-sm border border-border w-full h-full">
      <h2 className="text-xl font-semibold text-foreground mb-4">
        🧭 สถานะระบบ JP - Visual & Docs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm">
        {systemStatus.map(({ label, value, highlight }, idx) => (
          <div key={idx} className="flex items-start sm:items-center gap-2">
            <span className="text-success font-bold">✓</span>
            <div>
              <span>{label} </span>
              <span className={highlight ? 'text-primary font-semibold' : 'text-base-content'}>
                {value}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SystemCheckCard;