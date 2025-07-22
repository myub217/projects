// ✅ Final: src/pages/CustomerAssessmentSummary.tsx
// Display summarized customer assessment data

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
  <p className="mb-1">
    <strong>{label}:</strong>{' '}
    <span className="text-gray-800">{value || '-'}</span>
  </p>
)

const MultiLineRow: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="mb-2">
    <p className="font-semibold">{label}:</p>
    <p className="pl-4 text-gray-800 whitespace-pre-wrap">{value || '-'}</p>
  </div>
)

const CustomerAssessmentSummary: React.FC<CustomerAssessmentSummaryProps> = ({ data }) => {
  return (
    <main className="max-w-3xl mx-auto p-6 bg-white rounded-xl shadow-lg">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-900">
        สรุปข้อมูลประเมินลูกค้า
      </h1>

      {/* ข้อมูลส่วนตัว */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3 text-gray-700">ข้อมูลส่วนตัว</h2>
        <InfoRow label="ชื่อ-นามสกุล" value={data.fullName} />
        <InfoRow label="เบอร์โทรศัพท์" value={data.phone} />
        <InfoRow label="อาชีพ" value={data.occupation} />
        <InfoRow label="รายได้โดยประมาณ" value={data.income} />
      </section>

      {/* ธุรกิจ / การเงิน */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3 text-gray-700">ธุรกิจ / การเงิน</h2>
        <MultiLineRow label="สินทรัพย์ค้ำประกัน / จำนอง" value={data.collateralAssets} />
        <MultiLineRow label="สถานะบริหารธุรกิจ/การทำงาน" value={data.businessManagement} />
        <InfoRow label="ยอดเงินที่ต้องการ" value={data.requestedAmount} />
      </section>

      {/* ประวัติและความต้องการ */}
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-3 text-gray-700">ประวัติและความต้องการ</h2>
        <MultiLineRow label="ประวัติการฟ้องร้องใน 3 ปีที่ผ่านมา" value={data.legalIssues} />
        <MultiLineRow label="ปัญหาบูโรหรือ blacklist" value={data.creditIssues} />
        <MultiLineRow label="สิ่งที่ต้องการจากทีมงาน" value={data.teamRequirements} />
      </section>
    </main>
  )
}

export default CustomerAssessmentSummary