// src/pages/CustomerAssessmentSummary.tsx
// ✅ Refined and accessible customer assessment summary page with clear semantics and spacing

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
  <p className="mb-2 text-gray-800">
    <strong className="text-gray-900">{label}:</strong>{' '}
    <span>{value?.trim() || '-'}</span>
  </p>
)

const MultiLineRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="mb-4">
    <p className="font-semibold text-gray-900 mb-1">{label}:</p>
    <p className="pl-5 text-gray-800 whitespace-pre-wrap">{value?.trim() || '-'}</p>
  </div>
)

const CustomerAssessmentSummary: React.FC<CustomerAssessmentSummaryProps> = ({ data }) => {
  return (
    <main
      role="main"
      aria-label="สรุปข้อมูลประเมินลูกค้า"
      className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg"
    >
      <h1 className="text-3xl font-bold mb-10 text-center text-gray-900">
        สรุปข้อมูลประเมินลูกค้า
      </h1>

      {/* ข้อมูลส่วนตัว */}
      <section aria-labelledby="section-personal-info" className="mb-10">
        <h2 id="section-personal-info" className="text-2xl font-semibold mb-6 text-gray-700">
          ข้อมูลส่วนตัว
        </h2>
        <InfoRow label="ชื่อ-นามสกุล" value={data.fullName} />
        <InfoRow label="เบอร์โทรศัพท์" value={data.phone} />
        <InfoRow label="อาชีพ" value={data.occupation} />
        <InfoRow label="รายได้โดยประมาณ" value={data.income} />
      </section>

      {/* ธุรกิจ / การเงิน */}
      <section aria-labelledby="section-business-finance" className="mb-10">
        <h2 id="section-business-finance" className="text-2xl font-semibold mb-6 text-gray-700">
          ธุรกิจ / การเงิน
        </h2>
        <MultiLineRow label="สินทรัพย์ค้ำประกัน / จำนอง" value={data.collateralAssets} />
        <MultiLineRow label="สถานะบริหารธุรกิจ/การทำงาน" value={data.businessManagement} />
        <InfoRow label="ยอดเงินที่ต้องการ" value={data.requestedAmount} />
      </section>

      {/* ประวัติและความต้องการ */}
      <section aria-labelledby="section-history-needs">
        <h2 id="section-history-needs" className="text-2xl font-semibold mb-6 text-gray-700">
          ประวัติและความต้องการ
        </h2>
        <MultiLineRow label="ประวัติการฟ้องร้องใน 3 ปีที่ผ่านมา" value={data.legalIssues} />
        <MultiLineRow label="ปัญหาบูโรหรือ blacklist" value={data.creditIssues} />
        <MultiLineRow label="สิ่งที่ต้องการจากทีมงาน" value={data.teamRequirements} />
      </section>
    </main>
  )
}

export default CustomerAssessmentSummary