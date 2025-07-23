// src/components/SecretRoom/DashboardCard.tsx
// Dashboard card with flexible header, dark/light mode, full accessibility, and smooth UI interaction

import React, { ReactNode } from 'react'
import clsx from 'clsx'

interface DashboardCardProps {
  title?: string
  children: ReactNode
  className?: string
  headerRight?: ReactNode
  'aria-label'?: string
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  children,
  className = '',
  headerRight,
  'aria-label': ariaLabel,
}) => {
  return (
    <section
      role="region"
      tabIndex={-1}
      aria-label={ariaLabel || (title ? `${title} card` : 'Dashboard card')}
      className={clsx(
        'rounded-2xl bg-base-200 p-6 shadow-lg outline-none transition-shadow duration-300 focus-within:shadow-2xl hover:shadow-2xl dark:bg-zinc-800',
        className
      )}
    >
      {title && (
        <header className="mb-4 flex select-text items-center justify-between">
          <h3 className="text-lg font-semibold text-primary">{title}</h3>
          {headerRight && <div className="ml-4 flex items-center">{headerRight}</div>}
        </header>
      )}
      <div>{children}</div>
    </section>
  )
}

export default DashboardCard
