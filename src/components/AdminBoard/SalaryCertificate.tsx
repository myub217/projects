// src/components/AdminBoard/SalaryCertificate.tsx

import React from 'react'
import { companyInfo } from '@/config/salaryCertificateConfig'

export interface Employee {
  fullName: string
  position: string
  department: string
  salaryAmount: number
  salaryMonth: string
  issueDate: Date
}

const SalaryCertificate: React.FC<{ employee: Employee }> = ({ employee }) => {
  const formatThaiDate = (date: Date) =>
    date.toLocaleDateString('th-TH', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      calendar: 'buddhist',
    })

  return (
    <article
      role="document"
      aria-label={`หนังสือรับรองเงินเดือนของ ${employee.fullName}`}
      className="mx-auto min-h-[297mm] w-full max-w-[210mm] rounded-md border border-black bg-white p-16 print:border-0 print:p-8 print:shadow-none"
      style={{
        fontFamily: "'TH Sarabun New', serif",
        color: '#000',
        backgroundColor: '#fff',
        boxSizing: 'border-box',
        whiteSpace: 'pre-line',
        lineHeight: 1.6,
      }}
    >
      {/* Header */}
      <header className="mb-10 text-center print:mb-6" style={{ lineHeight: 1.6 }}>
        <h1 className="mb-6 text-4xl font-extrabold print:text-3xl" style={{ color: '#000' }}>
          หนังสือรับรองเงินเดือน
        </h1>

        <p className="mb-1 text-lg" style={{ color: '#000' }}>
          {companyInfo.name}
        </p>

        <p
          className="mb-1 text-sm"
          style={{
            color: '#000',
            whiteSpace: 'pre-line',
            lineHeight: '1.6',
            marginBottom: 0,
          }}
        >
          {companyInfo.address}
        </p>

        <p className="mb-1 text-sm" style={{ color: '#000' }}>
          โทร: {companyInfo.phone}
        </p>

        <p className="text-sm" style={{ color: '#000' }}>
          เลขประจำตัวผู้เสียภาษี: {companyInfo.taxId}
        </p>
      </header>

      {/* Body */}
      <section
        className="space-y-6 text-lg leading-relaxed print:text-base print:leading-snug"
        style={{ color: '#000', lineHeight: 1.7 }}
      >
        <p>เรียน ผู้ที่เกี่ยวข้อง,</p>

        <p>
          บริษัท <strong>{companyInfo.name}</strong> ขอรับรองว่า{' '}
          <strong>{employee.fullName}</strong> ดำรงตำแหน่ง <strong>{employee.position}</strong>{' '}
          ในฝ่าย <strong>{employee.department}</strong> และได้รับเงินเดือนจำนวน{' '}
          <strong>
            {employee.salaryAmount.toLocaleString('th-TH', {
              style: 'currency',
              currency: 'THB',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </strong>{' '}
          สำหรับเดือน <strong>{employee.salaryMonth}</strong>
        </p>

        <p>
          หนังสือฉบับนี้ออกให้เพื่อใช้เป็นหลักฐานประกอบการดำเนินการตามที่จำเป็น
          และไม่มีผลผูกพันทางกฎหมายโดยตรง
        </p>
      </section>

      {/* Footer */}
      <footer
        className="mt-16 flex justify-end print:mt-12 print:text-sm"
        style={{ color: '#000', lineHeight: 1.6 }}
      >
        <div className="text-right">
          <p>ออกให้ ณ วันที่ {formatThaiDate(employee.issueDate)}</p>

          <p className="mt-8 font-bold underline underline-offset-2" style={{ color: '#000' }}>
            {companyInfo.hrManager.fullName}
          </p>

          <p>{companyInfo.hrManager.position}</p>

          <p className="mt-1 text-xs">{companyInfo.hrManager.email}</p>
        </div>
      </footer>
    </article>
  )
}

export default SalaryCertificate
