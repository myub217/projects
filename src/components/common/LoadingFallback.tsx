// src/components/common/LoadingFallback.tsx
import React from 'react'

const LoadingFallback: React.FC = () => (
  <div
    role="alert"
    aria-busy="true"
    className="flex h-full w-full items-center justify-center p-4 text-lg text-primary"
  >
    กำลังโหลด...
  </div>
)

export default LoadingFallback
