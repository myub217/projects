// src/components/ui/Alert.tsx
// ✅ Accessible alert component with Tailwind + DaisyUI theme-aware styles and ARIA support

import React from 'react'

interface AlertProps {
  type?: 'info' | 'success' | 'warning' | 'error'
  message: React.ReactNode
  className?: string
  dismissible?: boolean
  onDismiss?: () => void
  role?: React.AriaRole
}

const typeStyles = {
  info: 'alert-info',
  success: 'alert-success',
  warning: 'alert-warning',
  error: 'alert-error',
}

const Alert: React.FC<AlertProps> = ({
  type = 'info',
  message,
  className = '',
  dismissible = false,
  onDismiss,
  role = 'alert',
}) => {
  return (
    <div
      role={role}
      className={`alert ${typeStyles[type]} shadow-lg ${className} ${dismissible ? 'pr-12' : ''}`}
      aria-live="assertive"
    >
      <div>{message}</div>
      {dismissible && onDismiss && (
        <button
          type="button"
          onClick={onDismiss}
          aria-label="Dismiss alert"
          className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      )}
    </div>
  )
}

export default Alert
