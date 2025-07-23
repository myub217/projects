// src/components/common/LoadingSpinner.tsx
// ✅ Optimized accessible spinner with TailwindCSS, clean SVG, and ARIA roles

import React from 'react'

const LoadingSpinner: React.FC = () => (
  <div
    role="status"
    aria-live="polite"
    aria-label="กำลังโหลดข้อมูล"
    className="flex justify-center items-center p-4"
  >
    <svg
      className="animate-spin h-8 w-8 text-primary"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth={4}
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
      />
    </svg>
    <span className="sr-only">กำลังโหลดข้อมูล</span>
  </div>
)

export default LoadingSpinner