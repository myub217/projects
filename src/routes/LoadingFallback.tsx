// src/routes/LoadingFallback.tsx
// ✅ Accessible loading fallback with polite aria attributes and smooth pulse animation

import React from 'react'

const LoadingFallback: React.FC = () => (
  <main
    role="status"
    aria-live="polite"
    aria-busy="true"
    className="flex justify-center items-center min-h-screen bg-base-100 text-gray-500 dark:text-gray-400 select-none"
  >
    <span className="text-lg font-semibold animate-pulse">กำลังโหลด...</span>
  </main>
)

export default LoadingFallback