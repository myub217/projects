import React from "react";

const BusinessRegistration: React.FC = () => {
  return (
    <div
      role="document"
      aria-label="ใบทะเบียนพาณิชย์"
      lang="th"
      style={{
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
      }}
    >
      {/* Watermark background */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: 'url("/sensor.webp")',
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "90% auto",
          opacity: 0.25,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />

      {/* Main content wrapper */}
      <div style={{ position: "relative", zIndex: 1, flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Top metadata */}
        <div
          role="contentinfo"
          aria-label="ข้อมูลทะเบียนและคำขอ"
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 8,
            letterSpacing: "0.03em",
            userSelect: "text",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 3 }}>
            <div><strong>ทะเบียนเลขที่:</strong> 99999999</div>
            <div><strong>คำขอที่:</strong> 99999999</div>
          </div>
          <div style={{ textAlign: "right" }}>
            <strong>แบบ:</strong> ไม่รู้. 01234
          </div>
        </div>

        {/* Header section */}
        <div role="banner" aria-label="หัวกระดาษ" style={{ textAlign: "center", marginBottom: 10 }}>
          <img
            src="/krut1.webp"
            alt="ตราครุฑ"
            style={{ width: 70, margin: "0 auto 6px", display: "block" }}
          />
          <h2 style={{ fontSize: 18, margin: 0, fontWeight: 600 }}>กรมพัฒนาธุรกิจกสินค้ากลางป่า</h2>
          <h3 style={{ fontSize: 16, margin: "3px 0 0", fontWeight: 500, color: "#444" }}>
            สำนักงานกลางทะเบียนกลางป่า
          </h3>
          <h1 style={{ fontSize: 24, fontWeight: 700, margin: "6px 0 0", letterSpacing: "0.05em" }}>
            ใบไม้ทะเบียนทาซาน
          </h1>
        </div>

        {/* Certificate Statement */}
        <div style={{ textAlign: "center", marginTop: 14, lineHeight: 1.4 }}>
          ใบสำคัญนี้ออกให้เพื่อแสดงว่า
          <div
            style={{
              borderBottom: "1.5px solid #000",
              padding: "5px 8px",
              fontWeight: 600,
              margin: "0.25rem auto",
              width: "fit-content",
              maxWidth: 320,
              textAlign: "center",
            }}
          >
            บริษัท นามสมมุติ จำกัด
          </div>
          ได้จดทะเบียนใบไม้ ตามกำหนดกลางป่า ค.ศ. 1750
          <div
            style={{
              borderBottom: "1.2px solid #000",
              padding: "4px 8px",
              margin: "0.25rem auto",
              width: "fit-content",
              maxWidth: 320,
              textAlign: "center",
            }}
          >
            เมื่อวันที่ 99 กรกฎาคม ค.ศ. 1750
          </div>
        </div>

        {/* Business Details */}
        <div style={{ textAlign: "center", marginTop: 14 }}>
          ชื่อที่ใช้ในการประกอบพาณิชยกิจ
          <div
            style={{
              borderBottom: "1.5px solid #000",
              padding: "5px 8px",
              fontWeight: 600,
              margin: "0.25rem auto",
              width: "fit-content",
              maxWidth: 320,
            }}
          >
            Namsommut.co.cld
          </div>
          (เขียนเป็นอักษรโรมัน)
          <div
            style={{
              borderBottom: "1.5px solid #000",
              padding: "5px 8px",
              fontWeight: 600,
              margin: "0.25rem auto",
              width: "fit-content",
              maxWidth: 320,
            }}
          >
            Namsommut.co.cld /
          </div>
          ชนิดธุรกิจกลางป่า
          <div style={{ margin: "8px auto 18px", maxWidth: 480 }}>
            <div style={{ borderBottom: "1.2px solid #000", padding: "4px 8px", textAlign: "center" }}>
              จำหน่ายสินค้าเทคนิค, edit & create ผ่านอินเทอร์เน็ต
            </div>
            <div style={{ borderBottom: "1.2px solid #000", padding: "4px 8px" }}>&nbsp;</div>
            <div style={{ borderBottom: "1.2px solid #000", padding: "4px 8px" }}>&nbsp;</div>
          </div>
        </div>

        {/* Headquarters Address */}
        <div
          style={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: 16,
            marginTop: 20,
            marginBottom: 4,
          }}
        >
          ที่ตั้งสำนักงานใหญ่
        </div>
        <div
          style={{
            fontSize: 15,
            textAlign: "left",
            lineHeight: 1.4,
            maxWidth: 480,
            margin: "0 auto",
            whiteSpace: "pre-line",
          }}
        >
          เลขที่ 123 หมู่ 7, ตรอก/ซอย กลางป่าใหญ่, ถนนทางช้างเผือก,
          <br />
          ตำบล/แขวง บ้านต้นไม้, อำเภอ/เขต เมืองพงไพร, จังหวัดมหานครทาซาน
        </div>

        {/* Footer signature */}
        <footer
          role="contentinfo"
          style={{
            fontSize: 15,
            marginTop: "auto",
            paddingTop: 12,
            textAlign: "right",
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <div style={{ maxWidth: 320, textAlign: "right" }}>
            ณ วันที่ ..................................................<br />
            ลงชื่อ ..................................................<br />
            <div style={{ textAlign: "center", marginTop: 3, lineHeight: 1.2 }}>
              (นาย นามสมมุติ)
              <br />
              นายทะเบียนพาณิชย์
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default BusinessRegistration;