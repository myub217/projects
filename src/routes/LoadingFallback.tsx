// src/routes/LoadingFallback.tsx
// ✅ Accessible loading fallback with ARIA, animation, and themed color support

import React from 'react'

const LoadingFallback: React.FC = () => {
  return (
    <main
      role="status"
      aria-live="polite"
      aria-busy="true"
      className="flex min-h-screen items-center justify-center bg-base-100 text-base-content transition-colors duration-300"
    >
      <span className="animate-pulse rounded px-4 py-2 text-lg font-semibold tracking-wide text-gray-600 dark:text-gray-300">
        กำลังโหลด...
      </span>
    </main>
  )
}

export default LoadingFallback
