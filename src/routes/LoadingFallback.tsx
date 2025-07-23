// src/routes/LoadingFallback.tsx
// ✅ Accessible loading fallback with polite aria attributes and smooth pulse animation

import React from 'react'

const LoadingFallback: React.FC = () => (
  <main
    role="status"
    aria-live="polite"
    aria-busy="true"
    className="flex min-h-screen select-none items-center justify-center bg-base-100 text-gray-500 dark:text-gray-400"
  >
    <span className="animate-pulse text-lg font-semibold">กำลังโหลด...</span>
  </main>
)

export default LoadingFallback
