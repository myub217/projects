// src/components/ui/Skeleton.tsx
// ✅ Reusable Skeleton Loader component with theme-aware shimmer animation for loading states

import React from 'react'
import clsx from 'clsx'

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number
  height?: string | number
  rounded?: boolean | string
  className?: string
  inline?: boolean
  count?: number
  circle?: boolean
}

const Skeleton: React.FC<SkeletonProps> = ({
  width,
  height,
  rounded = true,
  className,
  inline = false,
  count = 1,
  circle = false,
  ...props
}) => {
  const borderRadius = circle
    ? 'rounded-full'
    : typeof rounded === 'string'
      ? rounded
      : rounded
        ? 'rounded-md'
        : 'rounded-none'

  const style = {
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
  }

  const baseClasses = clsx(
    'bg-base-300 dark:bg-zinc-700 relative overflow-hidden',
    borderRadius,
    inline ? 'inline-block' : 'block',
    className
  )

  const shimmer = (
    <span
      className="animate-skeleton absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent dark:via-white/10"
      aria-hidden="true"
    />
  )

  return (
    <>
      {Array(count)
        .fill(null)
        .map((_, i) => (
          <div key={i} style={style} className={baseClasses} {...props}>
            {shimmer}
          </div>
        ))}
    </>
  )
}

export default Skeleton

/* Tailwind CSS animation (to be added in tailwind.config.js)
  animation: {
    skeleton: 'shimmer 1.5s infinite',
  },
  keyframes: {
    shimmer: {
      '0%': { transform: 'translateX(-100%)' },
      '100%': { transform: 'translateX(100%)' },
    },
  },
*/
