// src/components/common/Icon.tsx
// Reusable Icon component wrapping lucide-react icons with accessibility and size props

import React from 'react'
import { Phone, Facebook, Line, Menu, X, Check, Loader2 } from 'lucide-react'

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

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: IconName
  size?: number
  'aria-label'?: string
  className?: string
}

const Icon: React.FC<IconProps> = ({
  name,
  size = 20,
  'aria-label': ariaLabel,
  className = '',
  ...restProps
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
      {...restProps}
    />
  )
}

export default Icon
