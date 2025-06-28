// src/documents/SalaryCertificate.tsx
import React from "react";
import "./SalaryCertificate.css";

interface SalaryDetail {
  label: string;
  amount: string;
}

interface SalaryCertificateProps {
  companyThaiName: string;
  companyEngName: string;
  documentId: string;
  employeeName: string;
  startDate: string;
  position: string;
  department: string;
  salaryDetails: SalaryDetail[];
  issueDate: string;
  issuerName: string;
  issuerPosition: string;
  hrPhone: string;
  hrAddressLines: string[];
  watermarkUrl?: string;
}

const SalaryCertificate: React.FC<SalaryCertificateProps> = ({
  companyThaiName,
  companyEngName,
  documentId,
  employeeName,
  startDate,
  position,
  department,
  salaryDetails,
  issueDate,
  issuerName,
  issuerPosition,
  hrPhone,
  hrAddressLines,
  watermarkUrl = "sensor.webp", // ใส่ path รูป watermark ตามจริง
}) => {
  return (
    <article
      className="page"
      role="document"
      lang="th"
      style={{ position: "relative", fontFamily: "'Sarabun', sans-serif" }}
    >
      {/* Watermark Layer */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${watermarkUrl})`,
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "90% auto",
          opacity: 0.15,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Header */}
      <header className="header" aria-label="หัวกระดาษบริษัท">
        <h1 className="company-thai-name">{companyThaiName}</h1>
        <h2 className="company-eng-name">{companyEngName}</h2>
      </header>

      {/* Document ID */}
      <div className="document-id" aria-label="เลขที่เอกสาร">
        เลขที่เอกสาร: {documentId}
      </div>

      {/* Title */}
      <h2 className="title">หนังสือรับรองเงินเดือน</h2>

      {/* Content */}
      <section className="content" aria-label="เนื้อหาหนังสือรับรอง">
        <p>
          หนังสือรับรองฉบับนี้ขอรับรองว่า{" "}
          <strong>{employeeName}</strong> เป็นพนักงานของบริษัท{" "}
          <strong>{companyThaiName}</strong> โดยเริ่มปฏิบัติงานตั้งแต่{" "}
          <strong>{startDate}</strong> จนถึงปัจจุบัน ในตำแหน่ง{" "}
          <strong>{position}</strong> แผนก <strong>{department}</strong>
        </p>

        <p>ได้รับรายได้ดังนี้:</p>
        <ul className="salary-details" aria-label="รายละเอียดเงินเดือน">
          {salaryDetails.map(({ label, amount }, i) => (
            <li key={i}>
              {label}: <strong>{amount}</strong>
            </li>
          ))}
        </ul>

        <div
          className="issue-signature-wrapper"
          aria-label="ลายเซ็นผู้รับรอง"
          style={{ marginTop: "2rem" }}
        >
          <p>
            ออกให้ ณ วันที่ <strong>{issueDate}</strong>
          </p>
          <p>{companyEngName}</p>
          <p>({issuerName})</p>
          <p>{issuerPosition}</p>
        </div>

        <section className="notes" aria-label="หมายเหตุหนังสือรับรอง" style={{ marginTop: "2rem" }}>
          <strong>หมายเหตุ:</strong>
          <p>1. หนังสือรับรองนี้เป็นการยืนยันการเป็นพนักงานบริษัทเท่านั้น</p>
          <p>2. หนังสือรับรองฉบับนี้ต้องไม่มีรอยขูด ขีด ลบ แต่อย่างใด จึงถือว่าสมบูรณ์</p>
        </section>
      </section>

      {/* Footer */}
      <footer className="footer" aria-label="ข้อมูลฝ่ายทรัพยากรบุคคล" style={{ marginTop: "3rem" }}>
        <p>ฝ่ายทรัพยากรบุคคล โทร. {hrPhone}</p>
        {hrAddressLines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </footer>
    </article>
  );
};

export default SalaryCertificate;