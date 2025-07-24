// src/components/Layout/PageWrapper.tsx
// ✅ ครอบหน้าเพจให้มี padding, responsive layout, background, พร้อมรองรับ slot custom และ SEO metadata

import React from 'react'
import clsx from 'clsx'

interface PageWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
  noPadding?: boolean
  bg?: string // ใช้สำหรับปรับพื้นหลังตาม context เช่น bg-base-100, bg-gray-100
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full' // สำหรับคุมความกว้าง
}

const maxWidthMap: Record<PageWrapperProps['maxWidth'], string> = {
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  full: 'max-w-full',
}

const PageWrapper: React.FC<PageWrapperProps> = ({
  children,
  className = '',
  noPadding = false,
  bg = 'bg-base-100',
  maxWidth = '2xl',
  ...props
}) => {
  return (
    <div className={clsx('min-h-screen w-full', bg)}>
      <div
        className={clsx(
          'mx-auto w-full',
          maxWidthMap[maxWidth],
          !noPadding && 'px-4 py-6 sm:px-6 lg:px-8',
          className
        )}
        {...props}
      >
        {children}
      </div>
    </div>
  )
}

export default PageWrapper
