import React from "react";

interface SystemNoteProps {
  message: string;
  type?: "info" | "warning" | "error"; // ประเภทของโน้ต (กำหนดสไตล์อัตโนมัติ)
}

// กำหนดสไตล์ตามประเภทข้อความ
const typeStyles = {
  info: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  error: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
};

export default function SystemNote({ message, type = "info" }: SystemNoteProps) {
  return (
    <section
      className={`p-4 rounded-md shadow-md mb-6 ${typeStyles[type]}`}
      role="alert"
      aria-live="polite"
    >
      <p className="text-sm">{message}</p>
    </section>
  );
}