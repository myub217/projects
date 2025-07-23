import React, { useState, useRef, useEffect, ReactNode } from 'react'
import clsx from 'clsx'

interface TooltipProps {
  children: ReactNode
  content: ReactNode
  position?: 'top' | 'bottom' | 'left' | 'right'
  delay?: number
  className?: string
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = 'top',
  delay = 300,
  className = '',
}) => {
  const [visible, setVisible] = useState(false)
  const timeoutRef = useRef<number | null>(null)
  const idRef = useRef(`tooltip-${Math.random().toString(36).slice(2, 11)}`)

  const showTooltip = () => {
    timeoutRef.current = window.setTimeout(() => setVisible(true), delay)
  }

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setVisible(false)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const positionStyles = {
    top: 'bottom-full mb-2 left-1/2 -translate-x-1/2',
    bottom: 'top-full mt-2 left-1/2 -translate-x-1/2',
    left: 'right-full mr-2 top-1/2 -translate-y-1/2',
    right: 'left-full ml-2 top-1/2 -translate-y-1/2',
  }

  return (
    <div
      className="relative inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onFocus={showTooltip}
      onBlur={hideTooltip}
      tabIndex={0}
      aria-describedby={idRef.current}
    >
      {children}
      <div
        id={idRef.current}
        role="tooltip"
        aria-live="polite"
        className={clsx(
          'pointer-events-none absolute z-50 whitespace-nowrap rounded-md bg-gray-800 px-2 py-1 text-xs text-white shadow-md transition-opacity duration-200',
          visible ? 'opacity-100' : 'opacity-0',
          positionStyles[position],
          className
        )}
        aria-hidden={!visible}
      >
        {content}
      </div>
    </div>
  )
}

export default Tooltip
