// src/components/common/DashboardCard.tsx
// ✅ Reusable card container with semantic roles, keyboard focus, responsive header, smooth shadow transitions, and dark/light mode support

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
      'rounded-2xl bg-base-200 p-6 shadow-md outline-none transition-shadow duration-300 ease-in-out focus-within:shadow-lg hover:shadow-lg dark:bg-zinc-800 dark:text-gray-100',
      className
    )}
  >
    {title && (
      <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h2 className="truncate text-xl font-semibold text-primary">{title}</h2>
        {headerRight && <div className="ml-auto flex items-center">{headerRight}</div>}
      </header>
    )}
    <div>{children}</div>
  </section>
)

export default DashboardCard
