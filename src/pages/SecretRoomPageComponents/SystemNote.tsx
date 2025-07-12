import React from "react";

interface SystemNoteProps {
  message: string;
  type?: "info" | "warning" | "error"; // ประเภทของโน้ต เพื่อกำหนดสไตล์อัตโนมัติ
}

/**
 * กำหนดสไตล์พื้นฐานและสีตามประเภทข้อความ
 * - รองรับ light & dark mode โดยใช้ Tailwind CSS classes
 */
const typeStyles = {
  info: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  error: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
};

/**
 * Component: SystemNote
 * แสดงข้อความแจ้งเตือนหรือบันทึกระบบที่มีการเน้นตามประเภท
 *
 * Accessibility:
 * - ใช้ role="alert" และ aria-live="polite" เพื่อแจ้งผู้ใช้เมื่อข้อความเปลี่ยนแปลง
 * - ข้อความใน <p> ใช้ขนาดเล็ก (text-sm) เพื่อไม่แย่งความสนใจมากเกินไป
 * - รองรับการโฟกัสสำหรับผู้ใช้คีย์บอร์ดโดยการเพิ่ม tabIndex=0
 */
export default function SystemNote({ message, type = "info" }: SystemNoteProps) {
  return (
    <section
      className={`p-4 rounded-md shadow-md mb-6 ${typeStyles[type]}`}
      role="alert"
      aria-live="polite"
      tabIndex={0}
    >
      <p className="text-sm">{message}</p>
    </section>
  );
}