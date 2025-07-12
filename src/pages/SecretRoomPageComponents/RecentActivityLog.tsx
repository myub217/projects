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
 * - แต่ละรายการมี tabIndex=0 รองรับการโฟกัสด้วยคีย์บอร์ด
 * - ใช้ <time> พร้อม attribute dateTime เพื่อช่วย screen reader และ SEO
 *
 * Design:
 * - ใช้ Tailwind CSS สำหรับจัดรูปแบบ list และข้อความ รองรับทั้ง light/dark mode
 * - เพิ่มเส้นขอบล่างบาง ๆ แยกรายการให้ชัดเจน
 * - มีไอคอนนาฬิกาเล็ก ๆ ข้างหัวข้อเพื่อเพิ่มความเข้าใจ
 * - แสดงข้อความแจ้งเมื่อไม่มีข้อมูลกิจกรรมด้วยสไตล์อักษรเอียงและสีอ่อน
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
      <h2 className="flex items-center font-semibold text-sm text-gray-800 dark:text-white mb-3">
        <svg
          className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          aria-hidden="true"
          focusable="false"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        🕒 กิจกรรมล่าสุด
      </h2>
      <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-2 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-700">
        {logs.length === 0 ? (
          <li
            className="italic text-gray-500 dark:text-gray-400"
            tabIndex={0}
            aria-live="assertive"
          >
            ไม่มีข้อมูลกิจกรรมล่าสุด
          </li>
        ) : (
          logs.map(({ id, detail, time }) => (
            <li
              key={id}
              title={`${detail} (${time})`}
              tabIndex={0}
              className="border-b border-gray-200 dark:border-gray-700 pb-1"
            >
              <span>{detail} </span>
              <time
                className="text-xs text-gray-500 dark:text-gray-400 ml-1"
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