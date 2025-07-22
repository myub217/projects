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
      className="w-full max-w-5xl mx-auto bg-base-200 rounded-xl shadow-md p-6 md:p-8 space-y-6"
    >
      <header className="space-y-1">
        <h2 className="text-2xl md:text-3xl font-bold text-primary">บันทึกการเข้าใช้งานระบบ</h2>
        <p className="text-sm md:text-base text-base-content/70">
          รายละเอียดกิจกรรมล่าสุดของผู้ใช้งานในระบบ Secret Room
        </p>
      </header>

      <div className="overflow-x-auto rounded-lg border border-base-300 dark:border-base-700 shadow-inner">
        <table
          role="table"
          className="table w-full text-sm md:text-base border-collapse"
        >
          <thead className="bg-primary text-primary-content select-none">
            <tr>
              <th scope="col" className="text-left py-3 px-4">เวลา</th>
              <th scope="col" className="text-left py-3 px-4">ผู้ใช้งาน</th>
              <th scope="col" className="text-left py-3 px-4">กิจกรรม</th>
            </tr>
          </thead>
          <tbody aria-live="polite" aria-relevant="additions removals">
            {mockLogs.length === 0 ? (
              <tr>
                <td colSpan={3} className="text-center py-6 text-gray-500 dark:text-gray-400">
                  ยังไม่มีบันทึกการเข้าใช้งาน
                </td>
              </tr>
            ) : (
              mockLogs.map((log, idx) => (
                <tr
                  key={`${log.timestamp}-${log.username}`}
                  className={`transition-colors duration-200 ${
                    idx % 2 === 0 ? 'bg-base-100' : 'bg-base-300 dark:bg-base-700'
                  }`}
                >
                  <td scope="row" className="py-3 px-4 whitespace-nowrap text-base-content/90">{log.timestamp}</td>
                  <td className="py-3 px-4 whitespace-nowrap font-mono text-base-content">{log.username}</td>
                  <td className="py-3 px-4 whitespace-nowrap text-base-content/90">{log.action}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default AccessLogTable