// src/components/SecretRoom/NotificationToast.tsx
// Accessible, styled toast notification with auto-dismiss and manual close

import React, { useEffect, useRef } from 'react'
import clsx from 'clsx'
import {
  FaCheckCircle,
  FaTimesCircle,
  FaInfoCircle,
  FaExclamationTriangle,
} from 'react-icons/fa'

type ToastType = 'success' | 'error' | 'info' | 'warning'

interface NotificationToastProps {
  message: string
  type?: ToastType
  duration?: number // milliseconds
  onClose?: () => void
}

const ICONS = {
  success: FaCheckCircle,
  error: FaTimesCircle,
  info: FaInfoCircle,
  warning: FaExclamationTriangle,
}

const NotificationToast: React.FC<NotificationToastProps> = ({
  message,
  type = 'info',
  duration = 4000,
  onClose,
}) => {
  const timerRef = useRef<number | null>(null)

  useEffect(() => {
    timerRef.current = window.setTimeout(() => {
      onClose?.()
    }, duration)

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [duration, onClose])

  const Icon = ICONS[type]

  return (
    <div
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      tabIndex={0}
      className={clsx(
        'fixed bottom-6 right-6 max-w-sm w-full rounded-lg shadow-lg flex items-center gap-3 p-4 text-white',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        {
          'bg-green-600': type === 'success',
          'bg-red-600': type === 'error',
          'bg-blue-600': type === 'info',
          'bg-yellow-400 text-black': type === 'warning',
        }
      )}
    >
      <Icon className="w-6 h-6 flex-shrink-0" aria-hidden="true" />
      <p className="flex-grow text-sm font-medium select-text">{message}</p>
      <button
        onClick={onClose}
        aria-label="ปิดการแจ้งเตือน"
        className="ml-2 rounded focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
        type="button"
      >
        <FaTimesCircle className="w-5 h-5" aria-hidden="true" />
      </button>
    </div>
  )
}

export default NotificationToast