import React from "react";

export interface ActivityLog {
  id: number;
  detail: string;
  time: string;
}

interface RecentActivityLogProps {
  logs: ActivityLog[];
}

export default function RecentActivityLog({ logs }: RecentActivityLogProps) {
  return (
    <section className="mb-8" aria-label="กิจกรรมล่าสุด" aria-live="polite">
      <h2 className="font-semibold text-sm text-gray-800 dark:text-white mb-2">
        🕒 กิจกรรมล่าสุด
      </h2>
      <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
        {logs.length === 0 ? (
          <li>ไม่มีข้อมูลกิจกรรมล่าสุด</li>
        ) : (
          logs.map(({ id, detail, time }) => (
            <li key={id} title={`${detail} (${time})`}>
              {detail}{" "}
              <span className="text-xs text-gray-500">({time})</span>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}