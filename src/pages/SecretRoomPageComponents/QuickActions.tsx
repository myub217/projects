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
      className="mb-8 rounded-md bg-gray-100 p-4 shadow transition-colors duration-300 dark:bg-gray-700"
      aria-label="ลิงก์ด่วน"
      role="region"
    >
      <h2 className="mb-2 flex items-center gap-2 text-sm font-semibold text-gray-800 dark:text-white">
        <svg
          className="h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400"
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
      <ul className="list-inside list-disc space-y-1 text-sm">
        {quickLinks.map(({ label, to, ariaLabel }) => (
          <li key={to}>
            <Link
              to={to}
              className="rounded text-blue-600 transition-colors hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 dark:text-blue-400"
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