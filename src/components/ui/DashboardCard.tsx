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
      'bg-base-200 dark:bg-zinc-800 rounded-2xl shadow-lg p-6 transition-shadow duration-300 hover:shadow-2xl focus-within:shadow-2xl outline-none',
      className
    )}
  >
    {title && (
      <header className="flex flex-wrap justify-between items-center mb-4 select-text gap-2">
        <h3 className="text-lg font-semibold text-primary truncate">{title}</h3>
        {headerRight && <div className="ml-4 flex items-center">{headerRight}</div>}
      </header>
    )}
    <div>{children}</div>
  </section>
)

export default DashboardCard