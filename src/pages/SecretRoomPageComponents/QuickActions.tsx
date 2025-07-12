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

/**
 * Component: QuickActions
 * แสดงลิงก์ด่วนเพื่อช่วยผู้ใช้เข้าถึงฟังก์ชันสำคัญในระบบได้อย่างรวดเร็ว
 *
 * Accessibility:
 * - มี aria-label ช่วยระบุบริบทของกลุ่มลิงก์
 * - แต่ละลิงก์มี aria-label และ title ช่วยผู้ใช้ screen reader และผู้ใช้ที่ใช้ mouse hover
 *
 * Design:
 * - รองรับ dark mode โดยใช้ Tailwind CSS class
 * - ใช้สี blue ที่เหมาะสมสำหรับลิงก์ และแสดง underline เมื่อ hover/focus
 *
 * Performance:
 * - ข้อมูลลิงก์ถูกแยกเป็น array object ภายนอก ทำให้แก้ไขหรือขยายง่าย
 */
export default function QuickActions() {
  return (
    <section
      className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md shadow mb-8 transition-colors duration-300"
      aria-label="ลิงก์ด่วน"
      role="region"
    >
      <h2 className="font-semibold text-sm text-gray-800 dark:text-white mb-2 flex items-center gap-2">
        <svg
          className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0"
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
            d="M13.828 10.172a4 4 0 015.656 5.656l-4.95 4.95a4 4 0 01-5.656 0l-4.95-4.95a4 4 0 015.656-5.656"
          />
        </svg>
        🔗 ลิงก์ด่วน
      </h2>
      <ul className="list-disc list-inside text-sm space-y-1">
        {quickLinks.map(({ label, to, ariaLabel }) => (
          <li key={to}>
            <Link
              to={to}
              className="text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded transition-colors"
              aria-label={ariaLabel}
              title={label}
              tabIndex={0}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}