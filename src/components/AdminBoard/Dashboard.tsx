// src/components/AdminBoard/Dashboard.tsx
// ✅ Dashboard รวม widget ต่าง ๆ ของ AdminBoard พร้อมส่ง props ถูกต้องและสวยงาม

import React from 'react'
import StatsPanel from './widgets/StatsPanel'
import CustomerCard from './widgets/CustomerCard'
import UserTable from './widgets/UserTable'
import CertificatePreview from './widgets/CertificatePreview'
import { CompanyInfo } from '@/config/salaryCertificateConfig'

const company: CompanyInfo = {
  name: 'บริษัท เทคโนโลยีเพื่อธุรกิจ จำกัด',
  logoUrl: '/images/logo.png', // ตรวจสอบให้แน่ใจว่าไฟล์นี้อยู่ใน public/
  address: '88/8 อาคารเทคโนเซ็นเตอร์ ชั้น 9 ถนนเทคโนโลยี แขวงธุรกิจ เขตไอที กรุงเทพฯ 10200',
  phone: '02-888-9999',
  taxId: '0105546099999',
  hrManager: {
    fullName: 'นางสาว สุรีย์พร ทรัพย์เจริญ',
  },
}

const Dashboard: React.FC = () => {
  return (
    <main className="container mx-auto space-y-8 p-6">
      <h1 className="text-3xl font-bold text-primary">แดชบอร์ดผู้ดูแลระบบ</h1>

      <section aria-label="สถิติโดยรวม">
        <StatsPanel />
      </section>

      <section aria-label="ข้อมูลลูกค้าคนสำคัญ">
        <CustomerCard />
      </section>

      <section aria-label="รายชื่อผู้ใช้งานในระบบ">
        <UserTable />
      </section>

      <section aria-label="ตัวอย่างใบรับรองเงินเดือน" id="certificate-section">
        <CertificatePreview
          employeeName="สมชาย ใจดี"
          position="วิศวกรซอฟต์แวร์"
          salary={45000}
          issueDate="24 กรกฎาคม 2568"
          company={company}
        />
      </section>
    </main>
  )
}

export default Dashboard
