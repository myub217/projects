// src/components/common/SectionHeader.tsx
// ✅ Reusable section header with optional subtext, center alignment, and accessible structure

import React from 'react'
import clsx from 'clsx'

interface SectionHeaderProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  className?: string
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  const isCenter = align === 'center'

  return (
    <header
      className={clsx(
        'mb-8 w-full',
        {
          'text-center': isCenter,
          'text-left': !isCenter,
        },
        className
      )}
      role="region"
      aria-label={title}
    >
      <h2 className="text-2xl font-bold tracking-tight text-base-content sm:text-3xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-2 max-w-prose text-base text-base-content/70">{subtitle}</p>
      )}
    </header>
  )
}

export default SectionHeader
