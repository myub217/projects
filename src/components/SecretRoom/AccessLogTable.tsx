// ✅ src/components/SecretRoom/AccessLogTable.tsx – เวอร์ชันสมบูรณ์ พร้อมใช้งานจริง

import React from 'react';

interface AccessLog {
  user: string;
  action: string;
  date: string;
  ip?: string;
}

const accessLogs: AccessLog[] = [
  { user: 'admin001', action: 'เข้าสู่ระบบ', date: '17 ก.ค. 2025', ip: '192.168.1.10' },
  { user: 'dev_hush', action: 'อัปเดต config', date: '16 ก.ค. 2025', ip: '192.168.1.22' },
  { user: 'audit_23', action: 'ส่งออก Log', date: '15 ก.ค. 2025', ip: '192.168.1.45' },
];

const AccessLogTable: React.FC = () => (
  <div className="bg-base-100 rounded-xl p-4 sm:p-6 shadow border border-border w-full">
    <h2 className="text-xl font-semibold text-primary-content mb-4">📂 การเข้าถึงล่าสุด</h2>
    <div className="overflow-x-auto">
      <table className="table table-zebra text-sm sm:text-base">
        <thead>
          <tr className="bg-base-200 text-base-content/60 uppercase text-xs sm:text-sm">
            <th className="px-3 py-2 whitespace-nowrap">👤 ผู้ใช้</th>
            <th className="px-3 py-2 whitespace-nowrap">⚙️ การกระทำ</th>
            <th className="px-3 py-2 whitespace-nowrap">🗓️ วันที่</th>
            <th className="px-3 py-2 whitespace-nowrap">🌐 IP Address</th>
          </tr>
        </thead>
        <tbody>
          {accessLogs.map((log, i) => (
            <tr key={i} className="hover">
              <td className="px-3 py-2 font-medium text-base-content">{log.user}</td>
              <td className="px-3 py-2">{log.action}</td>
              <td className="px-3 py-2">{log.date}</td>
              <td className="px-3 py-2">{log.ip || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default AccessLogTable;