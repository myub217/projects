// src/components/SecretRoom/HeaderBlock.tsx

import React from 'react'
import { FaUserShield } from 'react-icons/fa'

interface HeaderBlockProps {
  title: string
  subtitle?: string
  icon?: React.ReactNode
}

const HeaderBlock: React.FC<HeaderBlockProps> = ({ title, subtitle, icon }) => {
  return (
    <header className="flex flex-col items-center md:items-start space-y-2 md:space-y-3 mb-6 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-extrabold flex items-center gap-3 text-secondary">
        {icon ?? <FaUserShield size={36} />}
        {title}
      </h1>
      {subtitle && (
        <p className="text-center md:text-left text-base leading-relaxed text-neutral-content/80 max-w-prose">
          {subtitle}
        </p>
      )}
    </header>
  )
}

export default HeaderBlock