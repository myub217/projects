// src/components/common/Icon.tsx

import React from 'react'
import {
  Phone,
  Facebook,
  Line,
  Menu,
  X,
  Check,
  Loader2,
} from 'lucide-react'

const icons = {
  phone: Phone,
  facebook: Facebook,
  line: Line,
  menu: Menu,
  close: X,
  check: Check,
  spinner: Loader2,
} as const

export type IconName = keyof typeof icons

interface IconProps {
  name: IconName
  className?: string
  size?: number
  'aria-label'?: string
}

const Icon: React.FC<IconProps> = ({
  name,
  className = '',
  size = 20,
  'aria-label': ariaLabel,
}) => {
  const LucideIcon = icons[name]
  return (
    <LucideIcon
      size={size}
      className={className}
      aria-hidden={ariaLabel ? undefined : true}
      aria-label={ariaLabel}
      role={ariaLabel ? 'img' : undefined}
      focusable="false"
    />
  )
}

export default Icon