// src/components/common/Icon.tsx

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
}

export type IconName = keyof typeof icons

interface IconProps {
  name: IconName
  className?: string
  size?: number
}

const Icon: React.FC<IconProps> = ({ name, className = '', size = 20 }) => {
  const LucideIcon = icons[name]
  return <LucideIcon size={size} className={className} />
}

export default Icon