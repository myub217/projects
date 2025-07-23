// src/components/ui/Modal.tsx
// ✅ Accessible modal with ARIA, ESC-to-close, focus trap, backdrop click, and smooth Tailwind transitions

import React, { useEffect, useRef, useCallback } from 'react'
import { X } from 'lucide-react'
import clsx from 'clsx'

interface ModalProps {
  open: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  className?: string
  overlayClassName?: string
}

const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  className = '',
  overlayClassName = '',
}) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const lastFocusedElement = useRef<HTMLElement | null>(null)

  // Handle ESC key to close modal & trap focus within modal
  useEffect(() => {
    if (!open) return

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
        return
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        )
        if (focusableElements.length === 0) {
          e.preventDefault()
          return
        }
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

    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [open, onClose])

  // Save last focused element, focus modal on open, restore on close, lock scroll
  useEffect(() => {
    if (open) {
      lastFocusedElement.current = document.activeElement as HTMLElement | null
      setTimeout(() => {
        modalRef.current?.focus()
      }, 0)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      lastFocusedElement.current?.focus()
    }
  }, [open])

  // Close modal on backdrop click
  const onBackdropClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) onClose()
    },
    [onClose]
  )

  if (!open) return null

  return (
    <div
      className={clsx(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4 backdrop-blur-sm',
        overlayClassName
      )}
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? 'modal-title' : undefined}
      onClick={onBackdropClick}
    >
      <div
        ref={modalRef}
        tabIndex={-1}
        className={clsx(
          'animate-in fade-in-80 relative w-full max-w-lg scale-100 transform rounded-xl bg-base-100 p-6 shadow-xl transition-transform',
          className
        )}
      >
        {title && (
          <h2 id="modal-title" className="mb-4 text-lg font-semibold">
            {title}
          </h2>
        )}
        <button
          onClick={onClose}
          aria-label="ปิดหน้าต่าง"
          type="button"
          className="absolute right-3 top-3 rounded-full text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <X className="h-5 w-5" />
        </button>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Modal
