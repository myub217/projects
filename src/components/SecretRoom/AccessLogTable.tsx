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
      className="w-full max-w-6xl mx-auto bg-base-200 rounded-2xl shadow-xl p-6 sm:p-8 space-y-6"
    >
      <header className="space-y-1 text-center sm:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary tracking-tight">
          บันทึกการเข้าใช้งานระบบ
        </h2>
        <p className="text-sm sm:text-base text-base-content/70">
          กิจกรรมล่าสุดของผู้ใช้งานในระบบ <em className="font-semibold">Secret Room</em>
        </p>
      </header>

      <div className="overflow-x-auto rounded-xl border border-base-300 dark:border-base-700 shadow-inner">
        <table
          role="table"
          className="table w-full text-sm sm:text-base border-collapse"
        >
          <thead className="bg-primary text-primary-content">
            <tr>
              <th scope="col" className="text-left py-3 px-4 whitespace-nowrap">เวลา</th>
              <th scope="col" className="text-left py-3 px-4 whitespace-nowrap">ผู้ใช้งาน</th>
              <th scope="col" className="text-left py-3 px-4 whitespace-nowrap">กิจกรรม</th>
            </tr>
          </thead>
          <tbody aria-live="polite" aria-relevant="additions removals">
            {mockLogs.length === 0 ? (
              <tr>
                <td colSpan={3} className="text-center py-6 text-base-content/50">
                  ยังไม่มีบันทึกการเข้าใช้งาน
                </td>
              </tr>
            ) : (
              mockLogs.map(({ timestamp, username, action }, idx) => (
                <tr
                  key={`${timestamp}-${username}`}
                  className={`transition-colors duration-150 ${
                    idx % 2 === 0 ? 'bg-base-100' : 'bg-base-300/40 dark:bg-base-700/40'
                  }`}
                >
                  <td className="py-3 px-4 whitespace-nowrap text-base-content/90">{timestamp}</td>
                  <td className="py-3 px-4 whitespace-nowrap font-mono text-primary font-medium">{username}</td>
                  <td className="py-3 px-4 whitespace-nowrap text-base-content">{action}</td>
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