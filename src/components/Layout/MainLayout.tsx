// src/layout/MainLayout.tsx
// Layout หลักของแอป พร้อม Header, Footer และพื้นที่เนื้อหาหลัก

import React, { ReactNode } from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'

interface MainLayoutProps {
  children: ReactNode
  className?: string
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, className = '' }) => {
  const containerClass = [
    'min-h-screen',
    'flex',
    'flex-col',
    'bg-base-100',
    'text-base-content',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={containerClass}>
      <Header role="banner" />
      <main
        role="main"
        aria-label="เนื้อหาหลักของหน้า"
        className="flex-grow w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
        tabIndex={-1}
      >
        {children}
      </main>
      <Footer role="contentinfo" />
    </div>
  )
}

export default MainLayout