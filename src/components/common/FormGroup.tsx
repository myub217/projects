// src/components/common/FormGroup.tsx

import React from 'react'

interface FormGroupProps {
  label: string
  htmlFor: string
  children: React.ReactNode
  error?: string
  required?: boolean
}

const FormGroup: React.FC<FormGroupProps> = ({
  label,
  htmlFor,
  children,
  error,
  required = false,
}) => {
  const inputId = htmlFor
  const errorId = error ? `${inputId}-error` : undefined

  return (
    <div className="mb-4">
      <label
        htmlFor={inputId}
        className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1 select-none"
      >
        {label} {required && <span className="text-red-500" aria-hidden="true">*</span>}
      </label>
      {React.isValidElement(children)
        ? React.cloneElement(children, {
            'aria-invalid': error ? true : undefined,
            'aria-describedby': errorId,
            id: inputId,
          })
        : children}
      {error && (
        <p
          id={errorId}
          className="mt-1 text-sm text-red-500"
          role="alert"
          aria-live="assertive"
        >
          {error}
        </p>
      )}
    </div>
  )
}

export default FormGroup