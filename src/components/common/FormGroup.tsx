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
}) => (
  <div className="mb-4">
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1"
    >
      {label} {required && <span className="text-red-500">*</span>}
    </label>
    {children}
    {error && (
      <p className="mt-1 text-sm text-red-500" role="alert">
        {error}
      </p>
    )}
  </div>
)

export default FormGroup