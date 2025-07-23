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
      'bg-base-200 dark:bg-zinc-800 rounded-2xl shadow-md p-6 transition-shadow duration-300 hover:shadow-lg focus-within:shadow-lg outline-none',
      className
    )}
  >
    {title && (
      <header className="flex justify-between items-center mb-4 select-text">
        <h2 className="text-xl font-semibold text-primary truncate">{title}</h2>
        {headerRight && <div className="ml-4 flex items-center">{headerRight}</div>}
      </header>
    )}
    <div>{children}</div>
  </section>
)

export default DashboardCard