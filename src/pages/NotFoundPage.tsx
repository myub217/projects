// ✅ Final: src/pages/NotFoundPage.tsx
// 404 Page — ใช้ MainLayout + แจ้งเตือนด้วยข้อความชัดเจน

import React from 'react'
import MainLayout from '@components/Layout/MainLayout'

const NotFoundPage: React.FC = () => (
  <MainLayout className="flex min-h-screen items-center justify-center text-center">
    <main
      role="alert"
      aria-live="assertive"
      className="select-none text-2xl font-bold tracking-wide text-error sm:text-3xl"
    >
      404 | ไม่พบหน้าที่คุณต้องการ
    </main>
  </MainLayout>
)

export default NotFoundPage
