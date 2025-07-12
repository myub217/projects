import React from "react";

export interface ActivityLog {
  id: number;
  detail: string;
  time: string;
}

interface RecentActivityLogProps {
  logs: ActivityLog[];
}

/**
 * Component: RecentActivityLog
 * แสดงรายการกิจกรรมล่าสุดของผู้ใช้ในระบบ
 *
 * Accessibility:
 * - ใช้ aria-live="polite" เพื่อแจ้งผู้ใช้ที่ใช้ screen reader เมื่อข้อมูลกิจกรรมใหม่เข้ามา
 * - ใช้ aria-label ระบุบริบทของ section ชัดเจน
 *
 * Design:
 * - ใช้ Tailwind CSS สำหรับจัดรูปแบบ list และข้อความ รองรับทั้ง light/dark mode
 * - แสดงข้อความแจ้งเมื่อไม่มีข้อมูลกิจกรรม
 *
 * Performance:
 * - ใช้ key เป็น id ในการ map รายการ activities
 */
export default function RecentActivityLog({ logs }: RecentActivityLogProps) {
  return (
    <section
      className="mb-8"
      aria-label="กิจกรรมล่าสุด"
      aria-live="polite"
      role="region"
    >
      <h2 className="font-semibold text-sm text-gray-800 dark:text-white mb-2">
        🕒 กิจกรรมล่าสุด
      </h2>
      <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
        {logs.length === 0 ? (
          <li className="italic text-gray-500 dark:text-gray-400" tabIndex={0}>
            ไม่มีข้อมูลกิจกรรมล่าสุด
          </li>
        ) : (
          logs.map(({ id, detail, time }) => (
            <li key={id} title={`${detail} (${time})`} tabIndex={0}>
              {detail}{" "}
              <time
                className="text-xs text-gray-500 dark:text-gray-400"
                dateTime={time}
              >
                ({time})
              </time>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}