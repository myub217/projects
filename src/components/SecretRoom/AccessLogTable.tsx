// src/components/SecretRoom/AccessLogTable.tsx

import React from 'react';

export interface AccessLog {
  id: string;
  user: string;
  action: string;
  timestamp: string; // ISO string or formatted date
  ipAddress?: string;
}

interface AccessLogTableProps {
  logs: AccessLog[];
}

const AccessLogTable: React.FC<AccessLogTableProps> = ({ logs }) => {
  return (
    <div className="overflow-x-auto rounded-lg border border-base-300 bg-base-200 shadow-md">
      <table className="min-w-full divide-y divide-base-300 text-sm">
        <thead className="bg-base-300">
          <tr>
            <th className="px-4 py-2 text-left font-semibold">#</th>
            <th className="px-4 py-2 text-left font-semibold">ผู้ใช้</th>
            <th className="px-4 py-2 text-left font-semibold">การกระทำ</th>
            <th className="px-4 py-2 text-left font-semibold">เวลา</th>
            <th className="px-4 py-2 text-left font-semibold">IP</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-base-300">
          {logs.length === 0 && (
            <tr>
              <td colSpan={5} className="px-4 py-4 text-center text-muted">
                ไม่มีบันทึกการเข้าใช้งาน
              </td>
            </tr>
          )}
          {logs.map(({ id, user, action, timestamp, ipAddress }, idx) => (
            <tr key={id} className="hover:bg-base-300 transition-colors">
              <td className="px-4 py-2">{idx + 1}</td>
              <td className="px-4 py-2">{user}</td>
              <td className="px-4 py-2">{action}</td>
              <td className="px-4 py-2">{new Date(timestamp).toLocaleString()}</td>
              <td className="px-4 py-2">{ipAddress ?? '-'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccessLogTable;