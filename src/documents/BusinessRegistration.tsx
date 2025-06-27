import React from "react";

const BusinessRegistration: React.FC = () => {
  const containerStyle: React.CSSProperties = {
    width: "210mm",
    height: "297mm",
    padding: "20mm 20mm 10mm",
    backgroundColor: "#fff",
    color: "#000",
    fontFamily: "'Sarabun', sans-serif",
    fontSize: 15,
    lineHeight: 1.4,
    boxSizing: "border-box",
    boxShadow: "0 0 10px rgba(0,0,0,0.15)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    userSelect: "none",
    overflow: "hidden",
  };

  const watermarkStyle: React.CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url("/sensor.webp")',
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "90% auto",
    opacity: 0.25,
    zIndex: 0,
    pointerEvents: "none",
  };

  const contentWrapperStyle: React.CSSProperties = {
    position: "relative",
    zIndex: 1,
    flex: 1,
    display: "flex",
    flexDirection: "column",
    paddingRight: 12,
  };

  const topInfoStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "space-between",
    fontSize: 14,
    fontWeight: 600,
    marginBottom: 8,
    letterSpacing: "0.03em",
    userSelect: "text",
  };

  const topInfoLeftStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 3,
  };

  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    marginBottom: 10,
    userSelect: "text",
    lineHeight: 1.1,
  };

  const krutImgStyle: React.CSSProperties = {
    width: 70,
    margin: "0 auto 6px",
    display: "block",
    userSelect: "none",
  };

  const headerH2Style: React.CSSProperties = {
    fontSize: 18,
    margin: 0,
    fontWeight: 600,
    letterSpacing: "0.05em",
  };

  const headerH3Style: React.CSSProperties = {
    fontSize: 16,
    margin: "3px 0 0",
    fontWeight: 500,
    color: "#444",
  };

  const headerH1Style: React.CSSProperties = {
    fontSize: 24,
    fontWeight: 700,
    margin: "6px 0 0",
    letterSpacing: "0.1em",
  };

  const certifySectionStyle: React.CSSProperties = {
    textAlign: "center",
    fontSize: 15,
    lineHeight: 1.4,
    margin: "14px auto 0",
    maxWidth: 480,
    userSelect: "text",
  };

  const companyNameStyle: React.CSSProperties = {
    margin: "0.25rem auto 0.4rem",
    borderBottom: "1.5px solid #000",
    padding: "5px 8px",
    textAlign: "center",
    maxWidth: 320,
    fontWeight: 600,
    width: "100%",
    boxSizing: "border-box",
    userSelect: "text",
  };

  const certifyTextBoldStyle: React.CSSProperties = {
    borderBottom: "none",
    fontWeight: 600,
    margin: "0.3rem auto 0.6rem",
    fontSize: 15,
    maxWidth: 420,
    textAlign: "center",
    userSelect: "text",
    color: "#222",
  };

  const certifyDateStyle: React.CSSProperties = {
    fontWeight: "normal",
    borderBottom: "1.2px solid #000",
    margin: "0.25rem auto 0.3rem",
    padding: "4px 8px",
    maxWidth: 320,
    textAlign: "center",
    width: "fit-content",
    userSelect: "text",
  };

  const detailSectionStyle: React.CSSProperties = {
    fontSize: 15,
    margin: "14px auto 0",
    textAlign: "center",
    lineHeight: 1.4,
    maxWidth: 480,
    userSelect: "text",
  };

  const detailItemStyle: React.CSSProperties = {
    margin: "0.25rem auto 0.4rem",
    borderBottom: "1.5px solid #000",
    padding: "5px 8px",
    textAlign: "center",
    maxWidth: 320,
    fontWeight: 600,
    width: "100%",
    boxSizing: "border-box",
    userSelect: "text",
  };

  const businessTypeWrapperStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 4,
    margin: "8px auto 18px",
    maxWidth: 480,
    userSelect: "text",
  };

  const businessTypeItemStyle: React.CSSProperties = {
    width: "100%",
    borderBottom: "1.2px solid #000",
    padding: "4px 8px",
    textAlign: "center",
    minHeight: "1.5em",
    boxSizing: "border-box",
  };

  const sectionTitleStyle: React.CSSProperties = {
    textAlign: "center",
    fontWeight: 700,
    fontSize: 16,
    margin: "20px auto 4px",
    letterSpacing: "0.05em",
    userSelect: "text",
  };

  const addressStyle: React.CSSProperties = {
    fontSize: 15,
    textAlign: "left",
    margin: "0 auto 0",
    lineHeight: 1.4,
    maxWidth: 480,
    userSelect: "text",
    whiteSpace: "pre-line",
    fontStyle: "normal",
  };

  const footerStyle: React.CSSProperties = {
    fontSize: 15,
    lineHeight: 1.3,
    textAlign: "right",
    marginTop: "auto",
    paddingTop: 12,
    whiteSpace: "pre-line",
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    userSelect: "text",
  };

  const footerContentStyle: React.CSSProperties = {
    maxWidth: 320,
    textAlign: "right",
  };

  const footerNameStyle: React.CSSProperties = {
    textAlign: "center",
    marginTop: 3,
    lineHeight: 1.2,
    userSelect: "text",
  };

  return (
    <article role="document" aria-label="ใบทะเบียนพาณิชย์" lang="th" style={containerStyle}>
      {/* Watermark background */}
      <div aria-hidden="true" style={watermarkStyle} />

      {/* Content wrapper */}
      <div style={contentWrapperStyle}>
        {/* Top info */}
        <section aria-label="ข้อมูลทะเบียนและคำขอ" style={topInfoStyle}>
          <div style={topInfoLeftStyle}>
            <div>
              <strong>ทะเบียนเลขที่:</strong> 99999999
            </div>
            <div>
              <strong>คำขอที่:</strong> 99999999
            </div>
          </div>
          <div style={{ textAlign: "right", userSelect: "text" }}>
            <strong>แบบ:</strong> ไม่รู้. 01234
          </div>
        </section>

        {/* Header center */}
        <header aria-label="หัวกระดาษ" style={headerStyle}>
          <img src="/krut1.webp" alt="ตราครุฑ" style={krutImgStyle} />
          <h2 style={headerH2Style}>กรมพัฒนาธุรกิจกสินค้ากลางป่า</h2>
          <h3 style={headerH3Style}>สำนักงานกลางทะเบียนกลางป่า</h3>
          <h1 style={headerH1Style}>ใบไม้ทะเบียนทาซาน</h1>
        </header>

        {/* Certify text */}
        <section aria-label="ข้อความรับรอง" style={certifySectionStyle}>
          ใบสำคัญนี้ออกให้เพื่อแสดงว่า
          <div aria-label="ชื่อบริษัท" style={companyNameStyle}>
            บริษัท นามสมมุติ จำกัด
          </div>
          <div style={certifyTextBoldStyle}>
            ได้จดทะเบียนใบไม้ ตามกำหนดกลางป่า ค.ศ. 1750
          </div>
          <div aria-label="วันที่จดทะเบียน" style={certifyDateStyle}>
            เมื่อวันที่ 99 กรกฎาคม ค.ศ. 1750
          </div>
        </section>

        {/* Details */}
        <section aria-label="รายละเอียดธุรกิจ" style={detailSectionStyle}>
          ชื่อที่ใช้ในการประกอบพาณิชยกิจ
          <div aria-label="ชื่อภาษาอังกฤษ" style={detailItemStyle}>
            Namsommut.co.cld
          </div>
          (เขียนเป็นอักษรโรมัน)
          <div aria-label="ชื่อภาษาอังกฤษซ้ำ" style={detailItemStyle}>
            Namsommut.co.cld /
          </div>
          ชนิดธุรกิจกลางป่า
          <div aria-label="ชนิดธุรกิจ" style={businessTypeWrapperStyle}>
            <div style={businessTypeItemStyle}>
              จำหน่ายสินค้าเทคนิค, edit & create ผ่านอินเทอร์เน็ต
            </div>
            <div style={businessTypeItemStyle}>&nbsp;</div>
            <div style={businessTypeItemStyle}>&nbsp;</div>
          </div>
        </section>

        {/* Section title */}
        <div style={sectionTitleStyle}>ที่ตั้งสำนักงานใหญ่</div>

        {/* Address details */}
        <address aria-label="ที่อยู่สำนักงานใหญ่" style={addressStyle}>
          เลขที่ 123 หมู่ 7, ตรอก/ซอย กลางป่าใหญ่, ถนนทางช้างเผือก,
          <br />
          ตำบล/แขวง บ้านต้นไม้, อำเภอ/เขต เมืองพงไพร, จังหวัดมหานครทาซาน
        </address>

        {/* Footer */}
        <footer aria-label="ข้อมูลท้ายเอกสาร" style={footerStyle}>
          <div style={footerContentStyle}>
            ณ วันที่ ..................................................<br />
            ลงชื่อ ..................................................<br />
            <div style={footerNameStyle}>
              (นาย นามสมมุติ)
              <br />
              นายทะเบียนพาณิชย์
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default BusinessRegistration;