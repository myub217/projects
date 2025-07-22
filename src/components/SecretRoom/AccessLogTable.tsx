// src/components/SecretRoom/AccessLogTable.tsx

import React from 'react'

interface LogEntry {
  timestamp: string
  username: string
  action: string
}

const mockLogs: LogEntry[] = [
  { timestamp: '2025-07-22 10:30:00', username: 'JPKYETONKEY201', action: 'เข้าสู่ระบบ' },
  { timestamp: '2025-07-22 10:32:12', username: 'JPKYETONKEY233', action: 'ดาวน์โหลดเอกสาร' },
  { timestamp: '2025-07-22 10:35:45', username: 'JPKYETONKEY299', action: 'ออกจากระบบ' },
]

const AccessLogTable: React.FC = () => {
  return (
    <section
      aria-label="ตารางบันทึกการเข้าใช้งาน"
      className="overflow-x-auto bg-base-200 rounded-lg shadow p-6 max-w-4xl mx-auto"
    >
      <h3 className="text-xl font-semibold mb-5 text-primary">บันทึกการเข้าใช้งาน</h3>
      <table className="table w-full text-sm md:text-base" role="table">
        <thead className="bg-primary text-primary-content">
          <tr>
            <th scope="col" className="py-3 px-4 text-left">เวลา</th>
            <th scope="col" className="py-3 px-4 text-left">ผู้ใช้งาน</th>
            <th scope="col" className="py-3 px-4 text-left">กิจกรรม</th>
          </tr>
        </thead>
        <tbody>
          {mockLogs.length === 0 ? (
            <tr>
              <td colSpan={3} className="text-center py-6 text-gray-500 dark:text-gray-400">
                ยังไม่มีบันทึกการเข้าใช้งาน
              </td>
            </tr>
          ) : (
            mockLogs.map((log, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? 'bg-base-100' : 'bg-base-300 dark:bg-base-700'}
              >
                <td className="py-2 px-4 whitespace-nowrap" data-label="เวลา">{log.timestamp}</td>
                <td className="py-2 px-4 whitespace-nowrap font-mono" data-label="ผู้ใช้งาน">{log.username}</td>
                <td className="py-2 px-4 whitespace-nowrap" data-label="กิจกรรม">{log.action}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </section>
  )
}

export default AccessLogTable