import React from "react";
import { Link } from "react-router-dom";

type QuickLink = {
  label: string;
  to: string;
  ariaLabel: string;
};

const quickLinks: QuickLink[] = [
  {
    label: "จัดการโปรไฟล์",
    to: "/profile",
    ariaLabel: "ไปยังหน้าจัดการโปรไฟล์",
  },
  {
    label: "เอกสารของฉัน",
    to: "/documents",
    ariaLabel: "ไปยังหน้าเอกสารของฉัน",
  },
  {
    label: "ส่งคำขอใหม่",
    to: "/forms/request",
    ariaLabel: "ไปยังหน้าส่งคำขอใหม่",
  },
];

export default function QuickActions() {
  return (
    <section
      className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md shadow mb-8"
      aria-label="ลิงก์ด่วน"
    >
      <h2 className="font-semibold text-sm text-gray-800 dark:text-white mb-2">
        🔗 ลิงก์ด่วน
      </h2>
      <ul className="list-disc list-inside text-sm space-y-1">
        {quickLinks.map(({ label, to, ariaLabel }) => (
          <li key={to}>
            <Link
              to={to}
              className="text-blue-600 dark:text-blue-400 hover:underline"
              aria-label={ariaLabel}
              title={label}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}