// src/components/ui/DashboardCard.tsx
// Reusable Dashboard card with accessible region, responsive header, dark/light mode, and focus styles

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
      'rounded-2xl bg-base-200 p-6 shadow-lg outline-none transition-shadow duration-300 focus-within:shadow-2xl hover:shadow-2xl dark:bg-zinc-800',
      className
    )}
  >
    {title && (
      <header className="mb-4 flex select-text flex-wrap items-center justify-between gap-2">
        <h3 className="truncate text-lg font-semibold text-primary">{title}</h3>
        {headerRight && <div className="ml-4 flex items-center">{headerRight}</div>}
      </header>
    )}
    <div>{children}</div>
  </section>
)

export default DashboardCard
