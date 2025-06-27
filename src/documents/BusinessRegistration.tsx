import React, { useRef } from "react";
import "./BusinessRegistration.css";

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
    <article
      ref={pageRef}
      className="page"
      role="document"
      aria-label="ใบทะเบียนพาณิชย์"
      lang="th"
    >
      {/* Watermark Layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${watermarkUrl})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "90% auto",
          opacity: 0.2,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

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
          ใบทะเบียนนี้ขอรับรองว่า <strong>{ownerName}</strong> เป็นเจ้าของกิจการบริษัท{" "}
          <strong>{companyThaiName}</strong> โดยจดทะเบียนเมื่อวันที่{" "}
          <strong>{registrationDate}</strong> ปัจจุบันดำเนินกิจการประเภท{" "}
          <strong>{position}</strong> แผนก <strong>{department}</strong>
        </p>

        <p>ที่อยู่สถานประกอบการ:</p>
        <ul className="details-list">
          {businessAddressLines.map((line, idx) => (
            <li key={idx}>{line}</li>
          ))}
        </ul>

        <div className="issue-signature-wrapper" aria-label="ลายเซ็นผู้ออกใบทะเบียน">
          <p>ออกให้ ณ วันที่ <strong>{issueDate}</strong></p>
          <p>{companyEngName}</p>
          <p>({issuerName})</p>
          <p>{issuerPosition}</p>
        </div>

        <section className="notes" aria-label="หมายเหตุ">
          <strong>หมายเหตุ:</strong>
          <p>1. ใบทะเบียนนี้จัดทำขึ้นเพื่อยืนยันการจดทะเบียนพาณิชย์อย่างถูกต้อง</p>
          <p>2. ใบทะเบียนนี้ต้องไม่มีรอยขูดขีด ลบ หรือแก้ไขใด ๆ</p>
        </section>
      </section>

      <footer className="footer" aria-label="ข้อมูลติดต่อ">
        <p>โทรศัพท์: {contactPhone}</p>
        {businessAddressLines.map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </footer>
    </article>
  );
};

export default BusinessRegistration;