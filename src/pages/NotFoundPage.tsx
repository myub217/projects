// ✅ Final: src/pages/NotFoundPage.tsx
// 404 Page — ใช้ MainLayout + แจ้งเตือนด้วยข้อความชัดเจน

import React from 'react'
import MainLayout from '@components/Layout/MainLayout'

const NotFoundPage: React.FC = () => (
  <MainLayout className="flex items-center justify-center min-h-screen text-center">
    <main
      role="alert"
      aria-live="assertive"
      className="text-error text-2xl sm:text-3xl font-bold tracking-wide select-none"
    >
      404 | ไม่พบหน้าที่คุณต้องการ
    </main>
  </MainLayout>
)

export default NotFoundPage