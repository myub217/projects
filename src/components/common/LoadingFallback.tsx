// src/components/common/LoadingFallback.tsx
import React from 'react'

const LoadingFallback: React.FC = () => (
  <div
    role="alert"
    aria-busy="true"
    className="flex items-center justify-center w-full h-full p-4 text-lg text-primary"
  >
    กำลังโหลด...
  </div>
)

export default LoadingFallback