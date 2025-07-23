// src/components/common/UserAvatar.tsx
// User avatar component with fallback initials, accessible alt text, and customizable size

import React, { useState } from 'react'
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

const UserAvatar: React.FC<UserAvatarProps> = ({ src, alt, name, size = 'md', className = '' }) => {
  const [imgError, setImgError] = useState(false)

  const getInitials = (fullName?: string) => {
    if (!fullName) return '?'
    const names = fullName.trim().split(' ')
    if (names.length === 0) return '?'
    if (names.length === 1) return names[0][0].toUpperCase()
    return (names[0][0] + names[names.length - 1][0]).toUpperCase()
  }

  if (src && !imgError) {
    return (
      <img
        src={src}
        alt={alt ?? `Avatar of ${name ?? 'user'}`}
        className={clsx('rounded-full object-cover', sizeClasses[size], className)}
        loading="lazy"
        draggable={false}
        onError={() => setImgError(true)}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={alt ?? `Avatar of ${name ?? 'user'}`}
      className={clsx(
        'flex select-none items-center justify-center rounded-full bg-primary font-semibold text-primary-contrastText',
        sizeClasses[size],
        className
      )}
    >
      {getInitials(name)}
    </div>
  )
}

export default UserAvatar
