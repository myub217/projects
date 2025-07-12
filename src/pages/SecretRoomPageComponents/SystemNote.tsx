import React from "react";

interface SystemNoteProps {
  message: string;
  type?: "info" | "warning" | "error"; // ประเภทของโน้ต เพื่อกำหนดสไตล์อัตโนมัติ
}

/**
 * กำหนดสไตล์พื้นฐานและสีตามประเภทข้อความ
 * - รองรับ light & dark mode โดยใช้ Tailwind CSS classes
 * - เพิ่มไอคอนเพื่อเสริมการสื่อสารทางภาพและความเข้าใจ
 * - ปรับ padding, margin, และเงาให้ดูทันสมัยและเด่นชัดขึ้น
 */
const typeStyles = {
  info: {
    container: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    icon: (
      <svg
        className="w-5 h-5 mr-2 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="16" x2="12" y2="12" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="8" x2="12.01" y2="8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  warning: {
    container: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    icon: (
      <svg
        className="w-5 h-5 mr-2 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.29 3.86L1.82 18a1.75 1.75 0 001.51 2.64h16.34a1.75 1.75 0 001.51-2.64L13.71 3.86a1.75 1.75 0 00-3.42 0z"
        />
        <line x1="12" y1="9" x2="12" y2="13" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="12" y1="17" x2="12.01" y2="17" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  error: {
    container: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
    icon: (
      <svg
        className="w-5 h-5 mr-2 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="15" y1="9" x2="9" y2="15" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="9" y1="9" x2="15" y2="15" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
};

/**
 * Component: SystemNote
 * แสดงข้อความแจ้งเตือนหรือบันทึกระบบที่มีการเน้นตามประเภท
 *
 * Accessibility:
 * - ใช้ role="alert" และ aria-live="polite" เพื่อแจ้งผู้ใช้เมื่อข้อความเปลี่ยนแปลง
 * - ข้อความใน <p> ใช้ขนาดเล็ก (text-sm) เพื่อไม่แย่งความสนใจมากเกินไป
 * - รองรับการโฟกัสสำหรับผู้ใช้คีย์บอร์ดโดยการเพิ่ม tabIndex=0
 * - เพิ่มไอคอนเพื่อช่วยสื่อสารความหมายอย่างชัดเจน
 */
export default function SystemNote({ message, type = "info" }: SystemNoteProps) {
  const { container, icon } = typeStyles[type] || typeStyles.info;

  return (
    <section
      className={`flex items-center p-4 rounded-md shadow-md mb-6 ${container}`}
      role="alert"
      aria-live="polite"
      tabIndex={0}
    >
      {icon}
      <p className="text-sm">{message}</p>
    </section>
  );
}