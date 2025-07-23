// src/components/common/Badge.tsx
// ✅ Simple Badge component with variants and accessibility support

import React from 'react'
import clsx from 'clsx'

type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info'

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  children: React.ReactNode
  className?: string
}

const variantStyles: Record<BadgeVariant, string> = {
  default: 'bg-gray-200 text-gray-800',
  primary: 'bg-primary text-white',
  success: 'bg-success text-white',
  warning: 'bg-warning text-black',
  error: 'bg-error text-white',
  info: 'bg-info text-white',
}

const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  children,
  className,
  ...props
}) => {
  return (
    <span
      role="status"
      className={clsx(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold',
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}

export default Badge