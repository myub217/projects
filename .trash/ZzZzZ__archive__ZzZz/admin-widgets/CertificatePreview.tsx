// src/components/AdminBoard/widgets/CertificatePreview.tsx
// ✅ แสดงตัวอย่างใบรับรองเงินเดือนแบบ Preview สำหรับ Admin Panel

import React from 'react';
import { CompanyInfo } from '@/config/salaryCertificateConfig';

interface CertificatePreviewProps {
  employeeName: string;
  position: string;
  salary: number;
  issueDate: string;
  company: CompanyInfo;
}

const CertificatePreview: React.FC<CertificatePreviewProps> = ({
  employeeName,
  position,
  salary,
  issueDate,
  company,
}) => {
  return (
    <section
      role="document"
      aria-label="ตัวอย่างใบรับรองเงินเดือน"
      className="w-full max-w-3xl rounded-lg border border-gray-300 bg-white p-8 shadow-md dark:border-gray-700 dark:bg-base-100 print:border-0 print:bg-white print:p-0 print:shadow-none"
    >
      {/* Header */}
      <header className="mb-6 text-center">
        {company.logoUrl && (
          <img
            src={company.logoUrl}
            alt="โลโก้บริษัท"
            className="mx-auto mb-2 h-12 object-contain"
          />
        )}
        <h1 className="text-lg font-bold text-gray-900 dark:text-gray-100">
          {company.name}
        </h1>
        <p className="text-sm text-gray-600 dark:text-gray-400">{company.address}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">โทร. {company.phone}</p>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          เลขประจำตัวผู้เสียภาษี {company.taxId}
        </p>
      </header>

      {/* Body */}
      <div className="text-sm leading-relaxed text-gray-800 dark:text-gray-200">
        <p className="mb-4 indent-8">
          ใบนี้เพื่อรับรองว่า <strong>{employeeName}</strong> ดำรงตำแหน่ง{' '}
          <strong>{position}</strong> ได้รับเงินเดือนประจำจำนวน{' '}
          <strong>{salary.toLocaleString()} บาท</strong> (บาทถ้วน)
        </p>
        <p className="mb-6 indent-8">
          โดยเป็นพนักงานของบริษัทฯ และมีสถานภาพการทำงานปกติ ณ วันที่ {issueDate}
        </p>
        <p className="text-right">ออกให้ ณ วันที่ {issueDate}</p>
      </div>

      {/* Signature */}
      <div className="mt-10 text-right">
        <p className="font-semibold text-gray-800 dark:text-gray-100">
          {company.hrManager.fullName}
        </p>
        <p className="text-sm text-gray-600 dark:text-gray-400">ฝ่ายทรัพยากรบุคคล</p>
      </div>
    </section>
  );
};

export default CertificatePreview;
