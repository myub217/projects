// src/documents/BusinessRegistration.tsx
import React, { useRef } from "react";

interface BusinessRegistrationProps {
  companyThaiName: string;
  companyEngName: string;
  registrationNumber: string;
  registrationDate: string;
  ownerName: string;
  position: string;
  department: string;
  businessAddressLines: string[];
  issueDate: string;
  issuerName: string;
  issuerPosition: string;
  contactPhone: string;
  watermarkUrl?: string;
}

const BusinessRegistration: React.FC<BusinessRegistrationProps> = ({
  companyThaiName,
  companyEngName,
  registrationNumber,
  registrationDate,
  ownerName,
  position,
  department,
  businessAddressLines,
  issueDate,
  issuerName,
  issuerPosition,
  contactPhone,
  watermarkUrl = "sensor.webp",
}) => {
  const pageRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* CSS Styles */}
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');

          * {
            box-sizing: border-box;
          }

          html, body {
            margin: 0;
            padding: 0;
            background: #eee;
            font-family: 'Sarabun', sans-serif;
            font-size: 13.5pt;
            line-height: 1.6;
            color: #000;
            height: 100%;
          }

          body {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            padding: 20px;
            min-height: 100vh;
          }

          .page {
            position: relative;
            width: 210mm;
            height: 297mm;
            background: #fff;
            padding: 25mm 20mm;
            box-shadow: 0 0 10px rgba(0,0,0,0.15);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            margin: 20px auto;
          }

          /* Watermark background */
          .page::before {
            content: "";
            position: absolute;
            inset: 0;
            background: url("${watermarkUrl}") center center no-repeat;
            background-size: 90% auto;
            opacity: 0.2;
            z-index: 0;
            pointer-events: none;
          }

          /* Ensure content is above watermark */
          .page * {
            position: relative;
            z-index: 1;
          }

          header.header {
            margin-bottom: 16px;
          }

          header.header h1 {
            font-size: 16pt;
            font-weight: bold;
            margin: 0;
            user-select: text;
          }

          header.header h2 {
            font-size: 14pt;
            font-style: italic;
            margin: 4px 0 16px 0;
            color: #555;
            user-select: text;
          }

          .document-id {
            font-size: 13pt;
            margin: 12px 0 24px 0;
            color: #444;
            user-select: text;
          }

          .title {
            text-align: center;
            font-size: 17pt;
            font-weight: bold;
            text-decoration: underline;
            margin-bottom: 28px;
            user-select: text;
          }

          section.content {
            flex: 1;
            text-align: justify;
            user-select: text;
          }

          section.content p {
            text-indent: 2em;
            margin: 14px 0;
          }

          ul.details-list {
            margin-left: 60px;
            margin-bottom: 28px;
            list-style-type: disc;
            user-select: text;
          }

          ul.details-list li {
            margin: 6px 0;
          }

          .issue-signature-wrapper {
            text-align: right;
            margin-top: 48px;
            line-height: 1.8;
            user-select: text;
          }

          .issue-signature-wrapper p {
            margin: 0;
          }

          .issue-signature-wrapper p:nth-child(1) {
            padding-right: 20px;
          }

          .issue-signature-wrapper p:nth-child(2) {
            font-weight: bold;
            padding-right: 64px;
          }

          .issue-signature-wrapper p:nth-child(3) {
            padding-right: 48px;
            margin-bottom: 12px;
          }

          section.notes {
            margin-top: 48px;
            padding-top: 12px;
            border-top: 1px solid #ccc;
            font-size: 13pt;
            color: #555;
            user-select: text;
          }

          section.notes strong {
            display: block;
            margin-bottom: 8px;
            color: #000;
          }

          section.notes p {
            text-indent: 2em;
            margin: 6px 0;
          }

          footer.footer {
            font-size: 13pt;
            line-height: 1.5;
            margin-top: auto;
            padding-top: 20px;
            color: #444;
            user-select: text;
          }

          footer.footer p {
            margin: 4px 0;
          }

          /* Print Styles */
          @media print {
            html, body {
              background: none;
              -webkit-print-color-adjust: exact;
              print-color-adjust: exact;
              height: auto;
            }

            .page {
              box-shadow: none;
              margin: 0;
              page-break-after: always;
            }

            @page {
              size: A4;
              margin: 0;
            }
          }
        `}
      </style>

      {/* Document */}
      <article
        ref={pageRef}
        className="page"
        role="document"
        aria-label="ใบทะเบียนพาณิชย์"
        lang="th"
      >
        <header className="header" aria-label="หัวกระดาษบริษัท">
          <h1>{companyThaiName}</h1>
          <h2>{companyEngName}</h2>
        </header>

        <div className="document-id" aria-label="เลขที่ทะเบียนพาณิชย์">
          เลขที่ทะเบียนพาณิชย์: {registrationNumber}
        </div>

        <h2 className="title">ใบทะเบียนพาณิชย์</h2>

        <section className="content" aria-label="รายละเอียดใบทะเบียนพาณิชย์">
          <p>
            ใบทะเบียนนี้ขอรับรองว่า <strong>{ownerName}</strong> เป็นเจ้าของกิจการบริษัท <strong>{companyThaiName}</strong> โดยจดทะเบียนเมื่อวันที่{" "}
            <strong>{registrationDate}</strong> ปัจจุบันดำเนินกิจการประเภท <strong>{position}</strong> แผนก <strong>{department}</strong>
          </p>

          <p>ที่อยู่สถานประกอบการ:</p>
          <ul className="details-list" aria-label="ที่อยู่สถานประกอบการ">
            {businessAddressLines.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </ul>

          <div className="issue-signature-wrapper" aria-label="ลายเซ็นผู้รับรอง">
            <p>ออกให้ ณ วันที่ <strong>{issueDate}</strong></p>
            <p>{companyEngName}</p>
            <p>({issuerName})</p>
            <p>{issuerPosition}</p>
          </div>

          <section className="notes" aria-label="หมายเหตุใบทะเบียนพาณิชย์">
            <strong>หมายเหตุ:</strong>
            <p>1. ใบทะเบียนนี้จัดทำขึ้นเพื่อยืนยันการจดทะเบียนพาณิชย์อย่างถูกต้อง</p>
            <p>2. ใบทะเบียนนี้ต้องไม่มีรอยขูดขีด ลบ หรือแก้ไขใด ๆ</p>
          </section>
        </section>

        <footer className="footer" aria-label="ข้อมูลติดต่อบริษัท">
          <p>โทรศัพท์: {contactPhone}</p>
          {businessAddressLines.map((line, idx) => (
            <p key={idx}>{line}</p>
          ))}
        </footer>
      </article>
    </>
  );
};

export default BusinessRegistration;