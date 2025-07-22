// src/components/Layout/MainLayout.tsx

import React, { ReactNode } from 'react'
import Header from '@components/Header'
import Footer from '@components/Footer'

interface MainLayoutProps {
  children: ReactNode
  className?: string
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex min-h-screen flex-col bg-base-100 text-base-content ${className}`}>
      <Header />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout