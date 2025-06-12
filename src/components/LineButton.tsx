
import React from "react";

const LineButton: React.FC = () => {
  return (
    <a
      href="https://line.me/R/ti/p/@yourlineid"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-6 z-50 p-3 rounded-full bg-green-600 text-white"
      aria-label="ติดต่อทาง LINE"
      title="ติดต่อทาง LINE"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="w-6 h-6"
      >
        {/* ตัวอย่าง icon line (SVG) */}
        <path d="M3 3h18v18H3V3z" />
      </svg>
    </a>
  );
};

export default LineButton;
