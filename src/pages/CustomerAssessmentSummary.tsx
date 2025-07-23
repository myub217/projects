// src/pages/CustomerAssessmentSummary.tsx
// ✅ Refined + accessible customer assessment summary with semantic grouping and print-ready layout

import React from 'react'

interface CustomerAssessmentSummaryProps {
  data: {
    fullName: string
    phone: string
    occupation: string
    income: string
    collateralAssets: string
    businessManagement: string
    requestedAmount: string
    legalIssues: string
    creditIssues: string
    teamRequirements: string
  }
}

const InfoRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <p className="mb-2 break-words text-sm text-gray-800 sm:text-base">
    <strong className="text-gray-900">{label}:</strong> <span>{value?.trim() || '-'}</span>
  </p>
)

const MultiLineRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="mb-6">
    <p className="mb-1 text-sm font-semibold text-gray-900 sm:text-base">{label}:</p>
    <p className="whitespace-pre-wrap break-words rounded-md bg-gray-50 px-4 py-2 text-sm text-gray-800 shadow-inner ring-1 ring-gray-200 sm:text-base">
      {value?.trim() || '-'}
    </p>
  </div>
)

const CustomerAssessmentSummary: React.FC<CustomerAssessmentSummaryProps> = ({ data }) => {
  return (
    <main
      role="main"
      aria-label="สรุปข้อมูลประเมินลูกค้า"
      className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 sm:p-8 print:bg-transparent print:shadow-none"
      tabIndex={-1}
    >
      <h1 className="mb-10 text-center text-2xl font-bold text-gray-900 sm:text-3xl">
        สรุปข้อมูลประเมินลูกค้า
      </h1>

      {/* ข้อมูลส่วนตัว */}
      <section aria-labelledby="section-personal-info" className="mb-10">
        <h2
          id="section-personal-info"
          className="mb-4 text-xl font-semibold text-gray-700 sm:text-2xl"
        >
          ข้อมูลส่วนตัว
        </h2>
        <div className="space-y-2">
          <InfoRow label="ชื่อ-นามสกุล" value={data.fullName} />
          <InfoRow label="เบอร์โทรศัพท์" value={data.phone} />
          <InfoRow label="อาชีพ" value={data.occupation} />
          <InfoRow label="รายได้โดยประมาณ" value={data.income} />
        </div>
      </section>

      {/* ธุรกิจ / การเงิน */}
      <section aria-labelledby="section-business-finance" className="mb-10">
        <h2
          id="section-business-finance"
          className="mb-4 text-xl font-semibold text-gray-700 sm:text-2xl"
        >
          ธุรกิจ / การเงิน
        </h2>
        <MultiLineRow label="สินทรัพย์ค้ำประกัน / จำนอง" value={data.collateralAssets} />
        <MultiLineRow label="สถานะบริหารธุรกิจ / การทำงาน" value={data.businessManagement} />
        <InfoRow label="ยอดเงินที่ต้องการ" value={data.requestedAmount} />
      </section>

      {/* ประวัติและความต้องการ */}
      <section aria-labelledby="section-history-needs">
        <h2
          id="section-history-needs"
          className="mb-4 text-xl font-semibold text-gray-700 sm:text-2xl"
        >
          ประวัติและความต้องการ
        </h2>
        <MultiLineRow label="ประวัติการฟ้องร้องใน 3 ปีที่ผ่านมา" value={data.legalIssues} />
        <MultiLineRow label="ปัญหาบูโรหรือ Blacklist" value={data.creditIssues} />
        <MultiLineRow label="สิ่งที่ต้องการจากทีมงาน" value={data.teamRequirements} />
      </section>
    </main>
  )
}

export default CustomerAssessmentSummary
