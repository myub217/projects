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
        'w-full mb-8',
        {
          'text-center': isCenter,
          'text-left': !isCenter,
        },
        className
      )}
    >
      <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-base-content">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-base text-base-content/70 max-w-prose mx-auto">
          {subtitle}
        </p>
      )}
    </header>
  )
}

export default SectionHeader