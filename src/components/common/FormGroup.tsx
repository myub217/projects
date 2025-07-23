// src/components/common/FormGroup.tsx

import React, { ReactElement } from 'react'

interface FormGroupProps {
  label: string
  htmlFor: string
  children: React.ReactNode
  error?: string
  required?: boolean
  className?: string
}

const FormGroup: React.FC<FormGroupProps> = ({
  label,
  htmlFor,
  children,
  error,
  required = false,
  className = '',
}) => {
  const inputId = htmlFor
  const errorId = error ? `${inputId}-error` : undefined

  // Enhance accessibility: add aria-invalid and aria-describedby to child input if possible
  const enhancedChildren = React.isValidElement(children)
    ? React.cloneElement(children as ReactElement, {
        id: inputId,
        'aria-invalid': !!error || undefined,
        'aria-describedby': errorId,
      })
    : children

  return (
    <div className={`mb-4 ${className}`}>
      <label
        htmlFor={inputId}
        className="mb-1 block select-none text-sm font-medium text-gray-700 dark:text-gray-200"
      >
        {label}{' '}
        {required && (
          <span className="text-red-500" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {enhancedChildren}

      {error && (
        <p id={errorId} role="alert" aria-live="assertive" className="mt-1 text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}

export default FormGroup
