// src/components/Error/Error.tsx
import React from "react";

interface ErrorProps {
  message?: string;
}

const Error: React.FC<ErrorProps> = ({
  message = "เกิดข้อผิดพลาดบางอย่าง กรุณาลองใหม่อีกครั้ง",
}) => {
  return (
    <div className="w-full max-w-md mx-auto p-6 bg-red-100 dark:bg-red-900 border border-red-400 dark:border-red-700 text-red-700 dark:text-red-300 rounded-md shadow-md">
      <h2 className="text-xl font-semibold mb-2">Error</h2>
      <p>{message}</p>
    </div>
  );
};

export default Error;
