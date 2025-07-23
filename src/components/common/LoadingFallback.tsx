// src/components/common/LoadingFallback.tsx
// Accessible loading fallback with alert role, busy state, and centered styling

import React from 'react'

const LoadingFallback: React.FC = () => (
  <main
    role="status"
    aria-live="polite"
    aria-busy="true"
    className="flex min-h-screen w-full items-center justify-center p-4 text-lg text-primary"
  >
    <span className="animate-pulse">กำลังโหลด...</span>
  </main>
)

export default LoadingFallback
