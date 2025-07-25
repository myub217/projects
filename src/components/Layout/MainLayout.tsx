// src/components/Layout/MainLayout.tsx
// ✅ Layout คุมโครงสร้างหลักของหน้าเว็บ พร้อม header, footer และ slot content

import React, { ReactNode } from 'react';
import Header from '@components/Header';
import Footer from '@components/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-64px)] bg-base-100 text-base-content transition-colors duration-300">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
