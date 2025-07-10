import React from 'react';
import { documentCertConfig } from '../config/documentCert.config';

export function DocumentCert() {
  const config = documentCertConfig;

  return (
    <div
      id="document"
      style={{
        width: '210mm',
        maxWidth: '100%',
        minHeight: '297mm',
        padding: '20mm 20mm 10mm',
        backgroundColor: '#fff',
        boxShadow: '0 0 10px rgba(0,0,0,0.15)',
        fontFamily: "'Sarabun', sans-serif",
        fontSize: '14pt',
        color: '#000',
        lineHeight: 1.4,
        boxSizing: 'border-box',
        userSelect: 'text',
        position: 'relative',
        margin: 'auto', // กึ่งกลางหน้าจอ
      }}
    >
      {/* Identifiers - ด้านบนซ้าย/ขวา */}
      <section
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          fontWeight: 600,
          fontSize: 14,
          letterSpacing: '0.03em',
          marginBottom: 10,
          padding: '0 5mm',
          boxSizing: 'border-box',
        }}
      >
        <div style={{ textAlign: 'left' }}>
          <div>ทะเบียนเลขที่: {config.registrationNo}</div>
          <div>คำขอที่: {config.requestNo}</div>
        </div>
        <div style={{ textAlign: 'right' }}>แบบ: {config.formType}</div>
      </section>

      {/* Header */}
      <header
        style={{
          textAlign: 'center',
          marginBottom: 10,
          marginTop: 4,
          boxSizing: 'border-box',
        }}
      >
        {/* แก้ไขให้อยู่กึ่งกลางโดยใช้ display:block และ margin อัตโนมัติ */}
        <img
          src="/assets/krut.webp"
          alt="ตราครุฑ"
          style={{
            width: 70,
            marginBottom: 6,
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
        <h2
          style={{
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: '0.05em',
            margin: 0,
          }}
        >
          {config.issueBy}
        </h2>
        <h3
          style={{
            fontSize: 16,
            fontWeight: 500,
            color: '#444',
            marginTop: 3,
          }}
        >
          {config.subIssuedBy}
        </h3>
        <h1
          style={{
            fontSize: 24,
            fontWeight: 700,
            letterSpacing: '0.15em',
            marginTop: 6,
            paddingBottom: 4,
            borderBottom: '1px solid #000',
            display: 'inline-block',
          }}
        >
          {config.documentTitle}
        </h1>
      </header>

      {/* Certification Text */}
      <section
        style={{
          textAlign: 'center',
          maxWidth: 480,
          margin: '20px auto 0',
          fontSize: 14,
          lineHeight: 1.6,
          boxSizing: 'border-box',
        }}
      >
        <p>{config.certPurpose}</p>
        <p
          style={{
            display: 'inline-block',
            padding: '4px 8px',
            margin: '6px 0 12px',
            borderBottom: '1.5px solid #000',
            fontWeight: 600,
          }}
        >
          {config.companyName}
        </p>
        <p style={{ marginBottom: 12 }}>
          ได้จดทะเบียนพาณิชย์ถูกต้องตามระเบียบราชการกลางป่า เมื่อปี{' '}
          {config.issuedYearBE}
        </p>
        <p
          style={{
            display: 'inline-block',
            padding: '4px 8px',
            marginBottom: 12,
            borderBottom: '1.5px solid #000',
          }}
        >
          เมื่อวันที่ {config.issuedDate}
        </p>
      </section>

      {/* Business Details */}
      <section
        style={{
          textAlign: 'center',
          maxWidth: 480,
          margin: '20px auto 0',
          fontSize: 14,
          lineHeight: 1.5,
          boxSizing: 'border-box',
        }}
      >
        <div style={{ fontWeight: 600, marginBottom: 6 }}>
          ชื่อที่ใช้ในการประกอบพาณิชยกิจ
        </div>
        <div
          style={{
            borderBottom: '1.5px solid #000',
            padding: '4px 8px',
            marginBottom: 6,
            fontWeight: 600,
            display: 'inline-block',
          }}
        >
          {config.businessName}
        </div>
        <div
          style={{
            borderBottom: '1.5px solid #000',
            padding: '4px 8px',
            marginBottom: 12,
            display: 'inline-block',
          }}
        >
          ({config.businessName})
        </div>
        <div style={{ fontWeight: 600, marginTop: 16, marginBottom: 8 }}>
          ชนิดธุรกิจ:
        </div>
        {config.businessTypes.map((type, i) => (
          <div
            key={i}
            style={{
              borderBottom: '1.2px solid #000',
              padding: '4px 8px',
              marginTop: 6,
              fontWeight: 400,
            }}
          >
            {type}
          </div>
        ))}
      </section>

      {/* Address */}
      <section
        style={{
          fontWeight: 600,
          textAlign: 'left',
          marginTop: 30,
          maxWidth: 480,
          marginLeft: 'auto',
          marginRight: 'auto',
          whiteSpace: 'pre-line',
          color: '#222',
          fontSize: 14,
          lineHeight: 1.4,
          paddingLeft: 10,
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            textAlign: 'center',
            fontWeight: 700,
            marginBottom: 8,
            fontSize: 16,
          }}
        >
          ที่อยู่สำนักงานใหญ่
        </div>
        {config.addressLine1 && <div>{config.addressLine1}</div>}
        {config.addressLine2 && <div>{config.addressLine2}</div>}
        {config.addressLine3 && <div>{config.addressLine3}</div>}
        {config.addressLine4 && <div>{config.addressLine4}</div>}
        {config.addressLine5 && <div>{config.addressLine5}</div>}
      </section>

      {/* Footer / Signature */}
      <footer
        style={{
          marginTop: 40,
          textAlign: 'right',
          fontSize: 14,
          fontFamily: "'Sarabun', sans-serif",
          maxWidth: 320,
          marginLeft: 'auto',
          whiteSpace: 'pre-line',
          lineHeight: 1.6,
          boxSizing: 'border-box',
        }}
      >
        <div>ณ วันที่ {config.issuedDate}</div>
        <br />
        <div>( {config.registrarName} )</div>
        <div>นายทะเบียนพาณิชย์</div>
      </footer>
    </div>
  );
}