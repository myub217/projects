// src/components/common/Button.tsx
// ✅ Reusable Button component with variants, sizes, and accessibility

import React from 'react'
import clsx from 'clsx'

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  loading?: boolean
  children: React.ReactNode
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-primary text-white hover:bg-primary-dark focus:ring-primary focus:ring-2 focus:ring-offset-2',
  secondary:
    'bg-secondary text-white hover:bg-secondary-focus focus:ring-secondary focus:ring-2 focus:ring-offset-2',
  danger:
    'bg-error text-white hover:bg-error-dark focus:ring-error focus:ring-2 focus:ring-offset-2',
  outline:
    'border border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary focus:ring-2 focus:ring-offset-2',
  ghost:
    'bg-transparent text-primary hover:bg-primary/10 focus:ring-primary focus:ring-2 focus:ring-offset-2',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  children,
  className,
  ...props
}) => {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center rounded-md font-semibold transition focus:outline-none disabled:cursor-not-allowed disabled:opacity-50',
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <svg
          className="-ml-1 mr-2 h-5 w-5 animate-spin text-white"
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
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
          ></path>
        </svg>
      )}
      {children}
    </button>
  )
}

export default Button
