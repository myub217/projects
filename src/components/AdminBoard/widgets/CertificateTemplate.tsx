// src/components/AdminBoard/widgets/CertificateTemplate.tsx
// ✅ เทมเพลตใบรับรอง ใช้แสดงผลเอกสารแบบเหมือนจริง พร้อมพิมพ์/ส่งออก PDF ได้

import React from 'react'

interface CertificateTemplateProps {
  title: string
  issuedDate: string
  recipientName: string
  position?: string
  salary?: string
  companyName: string
  companyAddress: string
  taxId?: string
  phone?: string
  hrName: string
  logoUrl?: string
}

const CertificateTemplate: React.FC<CertificateTemplateProps> = ({
  title,
  issuedDate,
  recipientName,
  position,
  salary,
  companyName,
  companyAddress,
  taxId,
  phone,
  hrName,
  logoUrl,
}) => {
  return (
    <section className="mx-auto max-w-[800px] rounded border border-gray-300 bg-white p-10 text-gray-900 shadow-sm print:border-0 print:bg-white print:p-0 print:shadow-none">
      {/* Header */}
      <header className="mb-6 flex items-center justify-between border-b pb-4">
        <div>
          <h1 className="text-xl font-bold">{companyName}</h1>
          <p className="text-sm">{companyAddress}</p>
          {taxId && <p className="text-sm">เลขประจำตัวผู้เสียภาษี: {taxId}</p>}
          {phone && <p className="text-sm">โทร: {phone}</p>}
        </div>
        {logoUrl && <img src={logoUrl} alt="Company Logo" className="h-16 w-auto object-contain" />}
      </header>

      {/* Title */}
      <h2 className="mb-6 text-center text-2xl font-bold underline">{title}</h2>

      {/* Content */}
      <div className="space-y-4 text-base leading-relaxed">
        <p>
          ขอรับรองว่า&nbsp;
          <span className="font-semibold">{recipientName}</span>
          {position && (
            <>
              {' '}
              ดำรงตำแหน่ง <span className="font-medium">{position}</span>
            </>
          )}
          {salary && (
            <>
              {' '}
              ได้รับเงินเดือน <span className="font-medium">{salary}</span> บาท
            </>
          )}
          &nbsp;ในสังกัดบริษัท {companyName}
        </p>

        <p>เอกสารฉบับนี้ออกให้เพื่อใช้เป็นหลักฐานประกอบการดำเนินการตามวัตถุประสงค์ของผู้ขอ</p>

        <p className="mt-8 text-right">ออกให้ ณ วันที่ {issuedDate}</p>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-right">
        <p className="font-semibold">{hrName}</p>
        <p>ฝ่ายทรัพยากรบุคคล</p>
      </footer>
    </section>
  )
}

export default CertificateTemplate
