// src/components/SecretRoom/NotificationsPanel.tsx

import React from 'react'
import { BellIcon, InfoIcon, AlertCircleIcon, CheckCircleIcon } from 'lucide-react'

type NotificationType = 'info' | 'success' | 'warning' | 'error'

interface Notification {
  id: string
  type: NotificationType
  message: string
  timestamp: string
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'info',
    message: 'ระบบจะมีการปรับปรุงในวันเสาร์ เวลา 23:00 น.',
    timestamp: '2025-07-21 10:45',
  },
  {
    id: '2',
    type: 'success',
    message: 'อัปเดตข้อมูลผู้ใช้สำเร็จแล้ว',
    timestamp: '2025-07-20 16:30',
  },
  {
    id: '3',
    type: 'error',
    message: 'ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้',
    timestamp: '2025-07-19 08:15',
  },
]

const iconMap = {
  info: <InfoIcon className="w-5 h-5 text-blue-500" />,
  success: <CheckCircleIcon className="w-5 h-5 text-green-500" />,
  warning: <AlertCircleIcon className="w-5 h-5 text-yellow-500" />,
  error: <AlertCircleIcon className="w-5 h-5 text-red-500" />,
}

const NotificationsPanel: React.FC = () => {
  return (
    <section
      aria-label="การแจ้งเตือนระบบ"
      className="bg-base-200 dark:bg-zinc-800 rounded-xl shadow p-6 sm:p-8 space-y-6"
    >
      <div className="flex items-center gap-3 mb-4">
        <BellIcon className="w-6 h-6 text-primary" />
        <h2 className="text-lg sm:text-xl font-bold text-base-content">การแจ้งเตือน</h2>
      </div>

      {mockNotifications.length === 0 ? (
        <p className="text-base-content/60 text-sm">ไม่มีการแจ้งเตือนใหม่</p>
      ) : (
        <ul className="space-y-4 text-sm sm:text-base text-base-content/80">
          {mockNotifications.map((notif) => (
            <li key={notif.id} className="flex items-start gap-3">
              {iconMap[notif.type]}
              <div>
                <p className="font-medium">{notif.message}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{notif.timestamp}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default NotificationsPanel