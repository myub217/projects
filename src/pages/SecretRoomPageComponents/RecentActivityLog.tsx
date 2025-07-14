// src/components/RecentActivityLog.tsx

import React from "react";

export interface ActivityLog {
  id: number;
  detail: string;
  time: string; // ISO 8601 เช่น "2025-07-14T12:00:00Z"
}

interface RecentActivityLogProps {
  logs: ActivityLog[];
}

/**
 * Component: RecentActivityLog
 * แสดงรายการกิจกรรมล่าสุดของผู้ใช้
 * - ใช้ aria-live, <time>, keyboard-friendly
 * - รองรับ scrollbar, dark mode, UI แยกรายการชัดเจน
 */
export default function RecentActivityLog({ logs }: RecentActivityLogProps) {
  return (
    <section
      className="mb-8"
      aria-label="กิจกรรมล่าสุด"
      aria-live="polite"
      role="region"
    >
      <h2 className="mb-3 flex items-center text-sm font-semibold text-gray-800 dark:text-white">
        <svg
          className="mr-2 h-5 w-5 text-gray-500 dark:text-gray-400"
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

      <ul className="scrollbar-thin max-h-48 space-y-2 overflow-y-auto text-sm text-gray-700 dark:text-gray-300 scrollbar-thumb-gray-400 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-700">
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
              tabIndex={0}
              title={`${detail} (${time})`}
              className="border-b border-gray-200 pb-1 dark:border-gray-700"
            >
              <span>{detail}</span>
              <time
                className="ml-1 text-xs text-gray-500 dark:text-gray-400"
                dateTime={time}
              >
                ({formatLocalTime(time)})
              </time>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}

//-------------------------------
// Utils: แปลงเวลาจาก ISO เป็นท้องถิ่น
//-------------------------------

function formatLocalTime(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleString("th-TH", {
    dateStyle: "short",
    timeStyle: "short",
    hour12: false,
  });
}