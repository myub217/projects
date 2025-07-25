// src/components/SecretRoom/NotificationsPanel.tsx
// ✅ แสดงรายการแจ้งเตือนแบบ mock พร้อมรองรับไอคอนตามประเภท, Dark mode, semantic และ animation

import React from 'react';
import { BellIcon, InfoIcon, AlertCircleIcon, CheckCircleIcon } from 'lucide-react';

type NotificationType = 'info' | 'success' | 'warning' | 'error';

interface Notification {
  id: string;
  type: NotificationType;
  message: string;
  timestamp: string;
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
];

const iconMap: Record<NotificationType, React.ReactNode> = {
  info: (
    <InfoIcon
      className="h-5 w-5 shrink-0 text-blue-500"
      aria-hidden="true"
      focusable="false"
    />
  ),
  success: (
    <CheckCircleIcon
      className="h-5 w-5 shrink-0 text-green-500"
      aria-hidden="true"
      focusable="false"
    />
  ),
  warning: (
    <AlertCircleIcon
      className="h-5 w-5 shrink-0 text-yellow-500"
      aria-hidden="true"
      focusable="false"
    />
  ),
  error: (
    <AlertCircleIcon
      className="h-5 w-5 shrink-0 text-red-500"
      aria-hidden="true"
      focusable="false"
    />
  ),
};

const NotificationsPanel: React.FC = () => {
  return (
    <section
      aria-label="การแจ้งเตือนระบบ"
      className="space-y-6 rounded-xl bg-base-200 p-6 shadow transition-all dark:bg-zinc-800 sm:p-8"
    >
      <header className="mb-4 flex items-center gap-3">
        <BellIcon className="h-6 w-6 text-primary" aria-hidden="true" />
        <h2 className="select-none text-lg font-bold text-base-content sm:text-xl">
          การแจ้งเตือน
        </h2>
      </header>

      {mockNotifications.length === 0 ? (
        <p className="select-none text-sm text-base-content/60">
          ไม่มีการแจ้งเตือนใหม่
        </p>
      ) : (
        <ul className="space-y-4 text-sm text-base-content/80 sm:text-base">
          {mockNotifications.map((notif) => (
            <li
              key={notif.id}
              className="flex items-start gap-3 rounded-lg bg-base-100 p-4 shadow-sm transition-all hover:shadow dark:bg-zinc-700"
              aria-label={`การแจ้งเตือนประเภท ${notif.type} - ${notif.message}`}
            >
              {iconMap[notif.type]}
              <div className="flex flex-col">
                <p className="font-medium text-base-content">{notif.message}</p>
                <time
                  dateTime={notif.timestamp}
                  className="mt-1 text-xs text-gray-500 dark:text-gray-400"
                >
                  {notif.timestamp}
                </time>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default NotificationsPanel;
