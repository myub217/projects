// src/components/common/UserAvatar.tsx
// User avatar component with fallback initials, accessible alt text, and customizable size

import React from 'react'
import clsx from 'clsx'

interface UserAvatarProps {
  src?: string | null
  alt?: string
  name?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
}

const sizeClasses = {
  sm: 'w-8 h-8 text-sm',
  md: 'w-12 h-12 text-base',
  lg: 'w-16 h-16 text-lg',
  xl: 'w-24 h-24 text-xl',
}

const UserAvatar: React.FC<UserAvatarProps> = ({
  src,
  alt,
  name,
  size = 'md',
  className = '',
}) => {
  // Extract initials from name fallback
  const getInitials = (fullName: string | undefined) => {
    if (!fullName) return '?'
    const names = fullName.trim().split(' ')
    if (names.length === 0) return '?'
    if (names.length === 1) return names[0][0].toUpperCase()
    return (names[0][0] + names[names.length - 1][0]).toUpperCase()
  }

  return src ? (
    <img
      src={src}
      alt={alt ?? `Avatar of ${name ?? 'user'}`}
      className={clsx('rounded-full object-cover', sizeClasses[size], className)}
      loading="lazy"
      draggable={false}
      onError={(e) => {
        // fallback to initials by removing src on error
        ;(e.currentTarget as HTMLImageElement).src = ''
      }}
    />
  ) : (
    <div
      role="img"
      aria-label={alt ?? `Avatar of ${name ?? 'user'}`}
      className={clsx(
        'flex items-center justify-center rounded-full bg-primary text-primary-contrastText font-semibold select-none',
        sizeClasses[size],
        className
      )}
    >
      {getInitials(name)}
    </div>
  )
}

export default UserAvatar