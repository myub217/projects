// src/components/common/LoadingSpinner.tsx
// Optimized, accessible spinner with TailwindCSS, clean SVG, ARIA roles, and customizable size & color

import React from 'react'

interface LoadingSpinnerProps {
  size?: number | string
  colorClass?: string
  label?: string
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 32,
  colorClass = 'text-primary',
  label = 'กำลังโหลดข้อมูล',
}) => (
  <div
    role="status"
    aria-live="polite"
    aria-label={label}
    className="flex justify-center items-center p-4"
  >
    <svg
      className={`animate-spin ${typeof size === 'number' ? `h-[${size}px] w-[${size}px]` : `h-${size} w-${size}`} ${colorClass}`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      style={{ height: typeof size === 'number' ? size : undefined, width: typeof size === 'number' ? size : undefined }}
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
    <span className="sr-only">{label}</span>
  </div>
)

export default LoadingSpinner