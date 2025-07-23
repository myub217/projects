// src/components/common/Modal.tsx
// Reusable Modal with configurable size, accessibility, scroll lock, ESC-close, focus trap, optional backdrop close, and transitions

import React, { ReactNode, useEffect, useRef, useCallback } from 'react'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  ariaLabelledBy?: string
  ariaDescribedBy?: string
  disableBackdropClose?: boolean
  initialFocusRef?: React.RefObject<HTMLElement>
  className?: string
}

const sizeClasses = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
} as const

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  ariaLabelledBy,
  ariaDescribedBy,
  disableBackdropClose = false,
  initialFocusRef,
  className = '',
}) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  // Focus trap & restore focus on close
  useEffect(() => {
    if (!isOpen) return

    previousActiveElement.current = document.activeElement as HTMLElement | null

    // Focus initial element or modal container
    if (initialFocusRef?.current) {
      initialFocusRef.current.focus()
    } else {
      modalRef.current?.focus()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      }
      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
        if (focusableElements.length === 0) return

        const firstEl = focusableElements[0]
        const lastEl = focusableElements[focusableElements.length - 1]

        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault()
            lastEl.focus()
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault()
            firstEl.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      previousActiveElement.current?.focus()
    }
  }, [isOpen, onClose, initialFocusRef])

  // Scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  // Prevent click inside modal content from closing modal
  const onModalContentClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation()
  }, [])

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={ariaLabelledBy ?? (title ? 'modal-title' : undefined)}
      aria-describedby={ariaDescribedBy}
      tabIndex={-1}
      onClick={disableBackdropClose ? undefined : onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-200"
    >
      <div
        ref={modalRef}
        tabIndex={0}
        onClick={onModalContentClick}
        className={`bg-base-100 text-base-content rounded-lg shadow-lg p-6 w-full mx-4 ${sizeClasses[size]} max-h-[90vh] overflow-auto focus:outline-none ${className} transition-transform duration-200 ease-out`}
      >
        {title && (
          <header className="mb-4">
            <h2
              id={ariaLabelledBy ?? 'modal-title'}
              className="text-xl font-semibold text-primary"
              tabIndex={-1}
            >
              {title}
            </h2>
          </header>
        )}

        <div>{children}</div>

        <footer className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="btn btn-sm btn-outline btn-primary"
            aria-label="Close modal"
            type="button"
          >
            ปิด
          </button>
        </footer>
      </div>
    </div>
  )
}

export default Modal