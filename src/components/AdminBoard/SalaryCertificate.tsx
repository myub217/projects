// src/components/AdminBoard/SalaryCertificate.tsx

import React from 'react'
import salaryCertificateConfig from '@/config/salaryCertificateConfig'

const SalaryCertificate: React.FC = () => {
  const { organization, issuer, document, theme } = salaryCertificateConfig

  const employee = {
    fullName: 'นายสมชาย ใจดี',
    position: 'วิศวกรซอฟต์แวร์',
    department: 'ฝ่ายพัฒนาระบบ',
    salaryAmount: 45000,
    salaryMonth: 'กรกฎาคม 2568',
    issueDate: '22 กรกฎาคม 2568',
  }

  return (
    <article
      role="document"
      aria-label={`หนังสือรับรองเงินเดือนของ ${employee.fullName}`}
      className="w-full max-w-[210mm] min-h-[297mm] mx-auto bg-white p-16 border border-gray-300 rounded-lg shadow-lg
                 print:shadow-none print:border-0 print:p-8 print:max-w-full print:min-h-auto"
      style={{
        color: theme?.textColor ?? '#1f2937',
        backgroundColor: theme?.backgroundColor ?? '#ffffff',
        boxSizing: 'border-box',
      }}
    >
      {/* Header */}
      <header className="flex items-start justify-between mb-10 print:mb-6 gap-6">
        <img
          src={organization.logoUrl}
          alt={`${organization.name} โลโก้บริษัท`}
          className="h-20 object-contain print:h-16"
          width={160}
          height={60}
          loading="lazy"
        />
        <address
          className="not-italic text-right text-base leading-relaxed print:text-sm print:leading-tight"
          style={{ color: theme?.textColor }}
        >
          <strong
            className="block text-xl font-bold"
            style={{ color: theme?.primaryColor }}
          >
            {organization.name}
          </strong>
          {organization.address}
        </address>
      </header>

      {/* Title */}
      <h1
        className="text-center text-4xl font-extrabold mb-10 print:text-3xl print:mb-6"
        style={{ color: theme?.primaryColor }}
      >
        หนังสือรับรองเงินเดือน
      </h1>

      {/* Body */}
      <section className="text-lg leading-relaxed space-y-6 print:text-base print:leading-snug">
        <p>เรียน ผู้ที่เกี่ยวข้อง,</p>
        <p>
          บริษัท <strong>{organization.name}</strong> ขอรับรองว่า{' '}
          <strong>{employee.fullName}</strong> ดำรงตำแหน่ง{' '}
          <strong>{employee.position}</strong> ในแผนก{' '}
          <strong>{employee.department}</strong> และได้รับเงินเดือนจำนวน{' '}
          <strong>
            {employee.salaryAmount.toLocaleString(undefined, {
              style: 'currency',
              currency: document.currency,
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </strong>{' '}
          สำหรับเดือน <strong>{employee.salaryMonth}</strong>
        </p>
        <p>
          หนังสือฉบับนี้ออกให้เพื่อใช้เป็นหลักฐานในการดำเนินการต่าง ๆ ตามที่จำเป็น
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-16 flex justify-between items-end gap-6 print:mt-12 print:text-sm print:leading-tight">
        <p
          className="italic max-w-xs text-gray-500 print:text-gray-600"
          style={{ color: theme?.textColor ?? '#6b7280' }}
        >
          {document.footerNote}
        </p>

        <div className="text-right">
          <p>ออกให้ ณ วันที่ {employee.issueDate}</p>
          <p
            className="mt-8 font-bold underline underline-offset-2"
            style={{ color: theme?.accentColor ?? '#4ade80' }}
          >
            {issuer.fullName}
          </p>
          <p>{issuer.position}</p>
        </div>
      </footer>
    </article>
  )
}

export default SalaryCertificate