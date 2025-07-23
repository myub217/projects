// src/components/common/ErrorMessage.tsx
// ✅ Reusable error message component with icon, accessibility roles, and consistent styling

import React from 'react'
import { AlertTriangle } from 'lucide-react'
import clsx from 'clsx'

interface ErrorMessageProps {
  message: string
  className?: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, className = '' }) => {
  if (!message) return null

  return (
    <div
      role="alert"
      aria-live="assertive"
      className={clsx(
        'flex items-center gap-2 p-3 text-sm border border-red-300 bg-red-100 text-red-800 rounded-md',
        className
      )}
    >
      <AlertTriangle className="w-4 h-4 shrink-0" aria-hidden="true" />
      <span>{message}</span>
    </div>
  )
}

export default ErrorMessage