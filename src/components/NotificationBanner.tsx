// src/components/NotificationBanner.tsx
// Dismissible top alert banner with smooth animation, accessibility, flexible styling, and optional auto-dismiss

import React, { useState, useEffect, useCallback } from 'react'
import { X } from 'lucide-react'
import clsx from 'clsx'

interface NotificationBannerProps {
  message: string
  type?: 'info' | 'success' | 'warning' | 'error'
  icon?: React.ReactNode
  dismissible?: boolean
  className?: string
  duration?: number // auto-dismiss timeout in milliseconds
}

const baseStyles =
  'flex items-center justify-between gap-4 p-4 rounded-md border text-sm shadow-md transition-all duration-300 animate-in fade-in slide-in-from-top-4'
const typeStyles = {
  info: 'bg-blue-100 text-blue-800 border-blue-300',
  success: 'bg-green-100 text-green-800 border-green-300',
  warning: 'bg-yellow-100 text-yellow-900 border-yellow-300',
  error: 'bg-red-100 text-red-800 border-red-300',
}

const NotificationBanner: React.FC<NotificationBannerProps> = ({
  message,
  type = 'info',
  icon,
  dismissible = true,
  className = '',
  duration,
}) => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    if (duration && dismissible) {
      const timer = setTimeout(() => setVisible(false), duration)
      return () => clearTimeout(timer)
    }
  }, [duration, dismissible])

  const handleDismiss = useCallback(() => setVisible(false), [])

  if (!visible) return null

  return (
    <div role="alert" aria-live="polite" className={clsx(baseStyles, typeStyles[type], className)}>
      <div className="flex flex-grow select-text items-center gap-2">
        {icon && <span className="shrink-0">{icon}</span>}
        <span className="font-medium">{message}</span>
      </div>
      {dismissible && (
        <button
          type="button"
          onClick={handleDismiss}
          aria-label="ปิดการแจ้งเตือน"
          className="rounded-sm text-inherit hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      )}
    </div>
  )
}

export default NotificationBanner
