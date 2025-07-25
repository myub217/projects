// src/components/AdminBoard/widgets/SalaryCertificate.tsx
// ✅ UI แสดงผลใบรับรองเงินเดือน mock สำหรับใช้งานแสดงผลและพิมพ์ออกเอกสาร

import React from 'react';
import { defaultCompanyInfo } from '@/config/salaryCertificateConfig';

interface SalaryCertificateProps {
  employeeName: string;
  position: string;
  salary: number;
  issueDate: string;
}

const SalaryCertificate: React.FC<SalaryCertificateProps> = ({
  employeeName,
  position,
  salary,
  issueDate,
}) => {
  const company = defaultCompanyInfo;

  return (
    <div className="mx-auto max-w-[720px] rounded-xl bg-white p-10 shadow-md print:rounded-none print:bg-white print:p-0 print:shadow-none">
      {company.logoUrl && (
        <div className="mb-4 text-center">
          <img
            src={company.logoUrl}
            alt={`${company.name} โลโก้`}
            className="mx-auto h-16 object-contain"
          />
        </div>
      )}

      <div className="mb-4 text-center">
        <h1 className="text-xl font-bold">ใบรับรองเงินเดือน</h1>
        <p className="text-sm text-gray-600">ออกให้เพื่อแสดงรายได้ของพนักงาน</p>
      </div>

      <div className="space-y-4 text-sm leading-relaxed text-gray-800">
        <p>เรียน: ผู้ที่เกี่ยวข้อง</p>
        <p>
          บริษัท {company.name} ขอรับรองว่า <strong>{employeeName}</strong> ดำรงตำแหน่ง{' '}
          <strong>{position}</strong> โดยมีรายได้ประจำ (เงินเดือน) เดือนละ{' '}
          <strong>{salary.toLocaleString('th-TH')}</strong> บาท (
          {convertToThaiBahtText(salary)})
        </p>
        <p>
          ใบรับรองนี้ออกให้ตามคำร้องขอของพนักงาน
          เพื่อใช้เป็นหลักฐานประกอบการดำเนินงานที่เกี่ยวข้อง
        </p>
        <p>ออกให้ ณ วันที่ {issueDate}</p>
      </div>

      <div className="mt-10 text-right">
        <p className="font-bold">{company.hrManager.fullName}</p>
        <p>ผู้จัดการฝ่ายทรัพยากรบุคคล</p>
        {company.hrManager.phone && <p>โทร {company.hrManager.phone}</p>}
      </div>

      <div className="mt-10 border-t border-dashed pt-4 text-xs text-gray-500 print:hidden">
        <p>
          {company.name} | โทร: {company.phone} | เลขประจำตัวผู้เสียภาษี:{' '}
          {company.taxId}
        </p>
        <p className="whitespace-pre-line">{company.address}</p>
      </div>
    </div>
  );
};

export default SalaryCertificate;

// ✅ ฟังก์ชันแปลงเลขเป็นข้อความภาษาไทย (แบบย่อ)
function convertToThaiBahtText(amount: number): string {
  // NOTE: ถ้าโปรเจกต์จริงควรใช้ lib อย่าง `thai-baht-text`
  const formatted = amount.toLocaleString('th-TH', {
    style: 'currency',
    currency: 'THB',
    minimumFractionDigits: 0,
  });
  return formatted.replace('฿', '') + 'บาทถ้วน';
}
