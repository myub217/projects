// <src/components/AdminBoard/widgets/FormFieldWrapper.tsx>
// ✅ Wrapper สำหรับฟิลด์ฟอร์ม พร้อม label, description, error, และรองรับ accessibility

import React, { ReactNode } from 'react'
import clsx from 'clsx'

interface FormFieldWrapperProps {
  id: string
  label: ReactNode
  description?: ReactNode
  error?: ReactNode
  children: ReactNode
  className?: string
}

const FormFieldWrapper: React.FC<FormFieldWrapperProps> = ({
  id,
  label,
  description,
  error,
  children,
  className,
}) => {
  const descriptionId = description ? `${id}-desc` : undefined
  const errorId = error ? `${id}-error` : undefined
  const ariaDescribedBy = [descriptionId, errorId].filter(Boolean).join(' ') || undefined

  return (
    <div className={clsx('mb-5', className)}>
      <label htmlFor={id} className="block text-sm font-medium text-base-content">
        {label}
      </label>

      {description && (
        <p id={descriptionId} className="mt-1 text-xs text-base-content/70">
          {description}
        </p>
      )}

      <div>
        {React.isValidElement(children)
          ? React.cloneElement(children as React.ReactElement, {
              id,
              'aria-describedby': ariaDescribedBy,
            })
          : children}
      </div>

      {error && (
        <p
          id={errorId}
          className="mt-1 text-xs font-semibold text-error"
          role="alert"
          aria-live="assertive"
        >
          {error}
        </p>
      )}
    </div>
  )
}

export default FormFieldWrapper
