// src/components/common/DashboardCard.tsx
// Reusable card container with semantic roles, keyboard focus, header slot, and accessibility enhancements

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
}) => (
  <section
    role="region"
    tabIndex={-1}
    aria-label={ariaLabel || (title ? `${title} card` : 'Dashboard card')}
    className={clsx(
      'rounded-2xl bg-base-200 p-6 shadow-md outline-none transition-shadow duration-300 focus-within:shadow-lg hover:shadow-lg dark:bg-zinc-800',
      className
    )}
  >
    {title && (
      <header className="mb-4 flex select-text items-center justify-between">
        <h2 className="truncate text-xl font-semibold text-primary">{title}</h2>
        {headerRight && <div className="ml-4 flex items-center">{headerRight}</div>}
      </header>
    )}
    <div>{children}</div>
  </section>
)

export default DashboardCard
