import React from "react";

const Offline: React.FC = () => {
  const handleReload = (): void => {
    window.location.reload();
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 p-4">
      <div className="max-w-md text-center space-y-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mx-auto h-24 w-24 text-red-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
          role="img"
          aria-label="สัญลักษณ์สถานะออฟไลน์"
        >
          <circle
            cx="12"
            cy="12"
            r="9"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            stroke="currentColor"
            fill="none"
          />
          <line
            x1="7"
            y1="8"
            x2="17"
            y2="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
          <line
            x1="7"
            y1="12"
            x2="11"
            y2="12"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
          <line
            x1="10"
            y1="16"
            x2="14"
            y2="16"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
          />
        </svg>

        <h1 className="text-3xl font-bold">คุณออฟไลน์อยู่</h1>
        <p className="text-lg">
          ไม่สามารถเชื่อมต่ออินเทอร์เน็ตได้ กรุณาตรวจสอบการเชื่อมต่อของคุณ
        </p>

        <button
          type="button"
          onClick={handleReload}
          className="inline-block px-6 py-3 rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
          aria-label="ลองเชื่อมต่อใหม่"
        >
          ลองเชื่อมต่อใหม่
        </button>
      </div>
    </main>
  );
};

export default Offline;