// src/components/SecretRoom/AccessLogTable.tsx

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
  <div className="bg-base-100 rounded-xl p-4 sm:p-6 shadow-sm border border-border w-full">
    <h2 className="text-xl font-semibold text-foreground mb-4">📂 การเข้าถึงล่าสุด</h2>
    <div className="overflow-x-auto">
      <table className="table table-xs sm:table-sm">
        <thead>
          <tr className="text-muted">
            <th>User</th>
            <th>Action</th>
            <th>Date</th>
            <th>IP Address</th>
          </tr>
        </thead>
        <tbody>
          {accessLogs.map((log, i) => (
            <tr key={i}>
              <td>{log.user}</td>
              <td>{log.action}</td>
              <td>{log.date}</td>
              <td>{log.ip || '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default AccessLogTable;