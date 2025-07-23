// src/components/common/LoadingFallback.tsx
// ✅ Reusable loading fallback spinner with accessible text, Tailwind + DaisyUI + dark mode support

import React from 'react'

const LoadingFallback: React.FC = () => {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="flex flex-col items-center justify-center py-10"
    >
      <svg
        className="h-10 w-10 animate-spin text-primary"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
      </svg>
      <span className="mt-3 select-none text-sm font-medium text-gray-700 dark:text-gray-300">
        กำลังโหลด...
      </span>
    </div>
  )
}

export default LoadingFallback
