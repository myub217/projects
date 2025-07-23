// src/components/ui/Input.tsx
// Reusable controlled input with label, error handling, accessibility, and customizable styling

import React, { forwardRef, InputHTMLAttributes } from 'react'
import clsx from 'clsx'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string | boolean
  id?: string
  className?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, id, className, type = 'text', ...props }, ref) => {
    const inputId = id || `input-${Math.random().toString(36).slice(2, 9)}`
    const errorId = error ? `${inputId}-error` : undefined

    return (
      <div className={clsx('flex w-full flex-col', className)}>
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1 select-none text-sm font-semibold text-gray-700 dark:text-gray-300"
          >
            {label}
          </label>
        )}
        <input
          id={inputId}
          ref={ref}
          type={type}
          aria-invalid={!!error}
          aria-describedby={errorId}
          className={clsx(
            'rounded-md border px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 dark:text-gray-100 dark:placeholder:text-gray-500',
            'focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1',
            error ? 'border-error focus:ring-error' : 'border-gray-300 dark:border-gray-600',
            'transition-colors duration-150',
            'disabled:cursor-not-allowed disabled:opacity-50',
            'shadow-sm'
          )}
          {...props}
        />
        {error && typeof error === 'string' && (
          <p id={errorId} role="alert" className="mt-1 select-none text-sm text-error">
            {error}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export default Input
