// src/components/ui/Badge.tsx
// ✅ Lightweight, theme-aware Badge component with Tailwind + DaisyUI and accessibility support
// ✨ ปรับปรุงให้รองรับการใช้งาน aria-label และกำหนด role ตามสถานการณ์

import React from 'react'

interface BadgeProps {
  text: React.ReactNode
  type?: 'primary' | 'secondary' | 'accent' | 'info' | 'success' | 'warning' | 'error'
  className?: string
  rounded?: boolean
  ariaLabel?: string
}

const typeStyles = {
  primary: 'badge-primary',
  secondary: 'badge-secondary',
  accent: 'badge-accent',
  info: 'badge-info',
  success: 'badge-success',
  warning: 'badge-warning',
  error: 'badge-error',
}

const Badge: React.FC<BadgeProps> = ({
  text,
  type = 'primary',
  className = '',
  rounded = true,
  ariaLabel,
}) => {
  return (
    <span
      className={`badge ${typeStyles[type]} ${rounded ? 'rounded-full' : 'rounded'} ${className}`}
      role={ariaLabel ? 'status' : undefined}
      aria-label={ariaLabel}
    >
      {text}
    </span>
  )
}

export default Badge
