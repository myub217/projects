// src/pages/SecretRoomPageComponents/SalaryCertDocument.tsx

import React from "react";

const certData = {
  documentNumber: "HR.Cer 2024/00047",
  issueDate: "12 กรกฎาคม 2567",
  locale: "th",
  company: {
    nameTh: "บริษัท ไทยแลนด์แอนทราไซท์ จำกัด",
    nameEn: "Thailand Anthracite Co., Ltd.",
    addressTh:
      "240/40 อาคารอโยธยาทาวเวอร์ ชั้น 20 ถนนรัชดาภิเษก แขวงห้วยขวาง เขตห้วยขวาง กรุงเทพฯ 10310",
    phone: "02-274-1455",
    fax: "02-274-1904",
    website: "www.thailandanthracite.com",
    email: "info@thailandanthracite.com",
    hrExt: "501",
  },
  employee: {
    fullName: "นางสาวสิริเพ็ญ วรสุนทรากร",
    startDate: "26 สิงหาคม 2562",
    position: "หัวหน้างาน Ship Operator",
    department: "Ship Operator",
  },
  incomes: [
    { label: "เงินเดือน", amount: "62,399 บาท" },
    { label: "ค่าตำแหน่ง", amount: "1,500 บาท" },
    { label: "ค่าครองชีพ", amount: "600 บาท" },
  ],
  signer: {
    name: "นายศักดิ์ชัย มั่นคง",
    position: "ผู้จัดการฝ่ายทรัพยากรบุคคล",
  },
};

const SalaryCertDocument: React.FC = () => {
  const handlePrint = () => {
    if (typeof window !== "undefined" && window.confirm("คุณต้องการพิมพ์เอกสารนี้หรือไม่?")) {
      window.print();
    }
  };

  return (
    <div>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sarabun&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; padding: 0; background: #eee; font-family: 'Sarabun', sans-serif; }

        .page {
          width: 210mm;
          height: 297mm;
          margin: 20px auto;
          padding: 30mm 25mm 25mm 30mm;
          background: white;
          color: black;
          font-size: 16px;
          line-height: 1.65;
          box-shadow: 0 0 8px rgba(0,0,0,0.1);
          overflow: hidden;
          position: relative;
        }

        @media print {
          body {
            background: white;
            margin: 0;
            padding: 0;
          }
          .print-btn { display: none; }
          .page {
            margin: 0;
            box-shadow: none;
            page-break-after: always;
          }
        }

        .print-btn {
          position: fixed;
          top: 10px;
          right: 10px;
          background: #444;
          color: white;
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          z-index: 999;
          font-size: 14px;
        }

        .company-header {
          font-weight: bold;
          font-size: 18px;
          margin-bottom: 4px;
          line-height: 1.3;
        }

        .doc-number {
          margin-top: 12px;
          font-weight: bold;
        }

        .issue-date {
          text-align: right;
          font-size: 14px;
          margin-bottom: 24px;
        }

        .title {
          text-align: center;
          font-size: 20px;
          font-weight: bold;
          text-decoration: underline;
          margin: 24px 0;
          letter-spacing: 0.05em;
        }

        .content {
          text-align: justify;
          text-indent: 2.5em;
          margin-bottom: 24px;
          white-space: pre-line;
        }

        .list-income {
          margin-left: 3em;
          margin-bottom: 30px;
          list-style-type: disc;
        }

        .list-income li {
          margin-bottom: 8px;
        }

        .note-title {
          font-weight: bold;
          margin-bottom: 6px;
        }

        .note-list {
          margin-left: 3em;
          margin-bottom: 40px;
          list-style-type: disc;
        }

        .signature {
          text-align: right;
          margin-top: 80px;
          min-height: 100px;
          font-size: 16px;
          white-space: pre-line;
        }

        .signature p {
          margin: 4px 0;
        }

        .contact-info {
          font-size: 14px;
          line-height: 1.5;
          margin-top: 30px;
          color: #333;
        }

        .contact-info p {
          margin: 2px 0;
        }

        .contact-info hr {
          border-top: 1px solid #ccc;
          margin: 12px 0;
        }

        a {
          color: #0645AD;
          text-decoration: none;
        }

        a:hover, a:focus {
          text-decoration: underline;
          outline: none;
        }
      `}</style>

      <button className="print-btn" onClick={handlePrint} aria-label="พิมพ์เอกสาร">
        พิมพ์เอกสาร
      </button>

      <div className="page" role="document" aria-label="หนังสือรับรองเงินเดือน">
        <div className="company-header">
          {certData.company.nameTh}
          <br />
          {certData.company.nameEn}
        </div>

        <div className="doc-number">เลขที่เอกสาร: {certData.documentNumber}</div>
        <div className="issue-date">วันที่ออกเอกสาร: {certData.issueDate}</div>

        <div className="title">หนังสือรับรองเงินเดือน</div>

        <div className="content">
          หนังสือรับรองฉบับนี้ขอรับรองว่า{" "}
          <strong>{certData.employee.fullName}</strong> เป็นพนักงานของ{" "}
          <strong>{certData.company.nameTh}</strong> โดยเริ่มปฏิบัติงานตั้งแต่วันที่{" "}
          <strong>{certData.employee.startDate}</strong> จนถึงปัจจุบัน ในตำแหน่ง{" "}
          <strong>{certData.employee.position}</strong> แผนก/ฝ่าย{" "}
          <strong>{certData.employee.department}</strong> โดยมีรายได้ประจำดังต่อไปนี้
        </div>

        <ul className="list-income">
          {certData.incomes.map((income, i) => (
            <li key={i}>
              – {income.label} เดือนละ <strong>{income.amount}</strong>
            </li>
          ))}
        </ul>

        <div className="note-title">หมายเหตุ:</div>
        <ul className="note-list">
          <li>หนังสือรับรองฉบับนี้ใช้ยืนยันการเป็นพนักงานของบริษัทฯ เท่านั้น</li>
          <li>หนังสือรับรองฉบับนี้จะต้องไม่มีรอยขูด ขีด ลบ แต่อย่างใด จึงจะถือว่าสมบูรณ์</li>
        </ul>

        <div className="signature" aria-label="ลายเซ็นผู้จัดการ">
          <p>ลงชื่อ ......................................................</p>
          <br />
          <p>({certData.signer.name})</p>
          <p>{certData.signer.position}</p>
        </div>

        <div className="contact-info">
          <p>
            <strong>ฝ่ายทรัพยากรบุคคล</strong> โทร. {certData.company.phone} ต่อ{" "}
            {certData.company.hrExt}
          </p>
          <p>{certData.company.addressTh}</p>
          <p>
            โทรศัพท์ {certData.company.phone} | แฟกซ์ {certData.company.fax}
          </p>
          <hr />
          <p>
            Website:{" "}
            <a
              href={`http://${certData.company.website}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {certData.company.website}
            </a>
          </p>
          <p>
            Email:{" "}
            <a href={`mailto:${certData.company.email}`}>{certData.company.email}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SalaryCertDocument;