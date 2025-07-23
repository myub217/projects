// src/components/ui/Section.tsx
// ✅ Reusable Section wrapper with responsive padding, max width, and theme-aware background

import React from 'react'
import clsx from 'clsx'

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
  as?: React.ElementType
  bgColor?: 'base' | 'secondary' | 'primary' | 'transparent'
  maxWidth?: string // e.g. 'max-w-screen-lg'
}

const bgColorMap = {
  base: 'bg-base-100',
  secondary: 'bg-base-200',
  primary: 'bg-primary',
  transparent: 'bg-transparent',
}

const Section: React.FC<SectionProps> = ({
  children,
  className,
  as: Component = 'section',
  bgColor = 'transparent',
  maxWidth = 'max-w-screen-xl',
  ...props
}) => {
  return (
    <Component
      className={clsx(
        bgColorMap[bgColor],
        'mx-auto w-full px-4 py-12 sm:px-6 lg:px-16',
        maxWidth,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  )
}

export default Section
