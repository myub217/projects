// src/pages/NotFoundPage.tsx

import React from 'react'
import MainLayout from '@components/Layout/MainLayout'

const NotFoundPage: React.FC = () => (
  <MainLayout className="flex items-center justify-center">
    <main
      role="alert"
      aria-live="assertive"
      className="text-error text-xl font-semibold select-none"
    >
      404 | ไม่พบหน้าที่คุณต้องการ
    </main>
  </MainLayout>
)

export default NotFoundPage