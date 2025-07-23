// src/layout/MainLayout.tsx
// Clean, accessible layout with semantic roles, responsive container, and flexible styling

import React, { ReactNode } from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'

interface MainLayoutProps {
  children: ReactNode
  className?: string
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, className = '' }) => {
  const baseClasses = [
    'min-h-screen',
    'flex',
    'flex-col',
    'bg-base-100',
    'text-base-content',
    'transition-colors',
    'duration-300',
  ]
  const containerClasses = [
    'flex-grow',
    'w-full',
    'max-w-6xl',
    'mx-auto',
    'px-4',
    'sm:px-6',
    'lg:px-8',
    'py-10',
    'outline-none',
  ]

  return (
    <div className={[...baseClasses, className].filter(Boolean).join(' ')}>
      <Header role="banner" />
      <main
        role="main"
        aria-label="เนื้อหาหลักของหน้า"
        tabIndex={-1}
        className={containerClasses.join(' ')}
      >
        {children}
      </main>
      <Footer role="contentinfo" />
    </div>
  )
}

export default MainLayout