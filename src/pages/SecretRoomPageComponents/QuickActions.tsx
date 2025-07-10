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
    >
      <h2 className="font-semibold text-sm text-gray-800 dark:text-white mb-2">
        🔗 ลิงก์ด่วน
      </h2>
      <ul className="list-disc list-inside text-sm space-y-1">
        {quickLinks.map(({ label, to, ariaLabel }) => (
          <li key={to}>
            <Link
              to={to}
              className="text-blue-600 dark:text-blue-400 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
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