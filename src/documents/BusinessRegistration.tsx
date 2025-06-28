import React from "react";

const BusinessRegistration: React.FC = () => {
  return (
    <article
      role="document"
      aria-label="ใบทะเบียนพาณิชย์"
      lang="th"
      style={{
        padding: 20,
        fontFamily: "'Sarabun', sans-serif",
        color: "#000",
        userSelect: "text",
      }}
    >
      {/* Watermark background (ถ้าต้องการใส่ภาพพื้นหลังแบบ watermark ให้เพิ่มใน CSS หรือต่อเติมในนี้) */}

      {/* Content wrapper */}
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        {/* Top info */}
        <section
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: 600,
            marginBottom: 12,
            fontSize: 14,
            userSelect: "text",
          }}
        >
          <div>
            <div>ทะเบียนเลขที่: 99999999</div>
            <div>คำขอที่: 99999999</div>
          </div>
          <div>แบบ: ไม่รู้. 01234</div>
        </section>

        {/* Header center */}
        <header
          style={{
            textAlign: "center",
            marginBottom: 20,
            userSelect: "text",
            lineHeight: 1.1,
          }}
        >
          <img
            src="/krut1.webp"
            alt="ตราครุฑ"
            style={{ width: 70, margin: "0 auto 6px", display: "block", userSelect: "none" }}
          />
          <h2 style={{ margin: 0, fontWeight: 600, fontSize: 18, letterSpacing: "0.05em" }}>
            กรมพัฒนาธุรกิจกสินค้ากลางป่า
          </h2>
          <h3 style={{ margin: "4px 0", fontWeight: 500, color: "#444", fontSize: 16 }}>
            สำนักงานกลางทะเบียนกลางป่า
          </h3>
          <h1
            style={{
              margin: "6px 0",
              fontWeight: 700,
              fontSize: 28,
              letterSpacing: "0.1em",
            }}
          >
            ใบไม้ทะเบียนทาซาน
          </h1>
        </header>

        {/* Certify text */}
        <section
          style={{
            textAlign: "center",
            marginBottom: 20,
            lineHeight: 1.4,
            fontSize: 16,
            userSelect: "text",
          }}
        >
          ใบสำคัญนี้ออกให้เพื่อแสดงว่า
          <div
            style={{
              borderBottom: "1.5px solid #000",
              margin: "8px auto",
              maxWidth: 320,
              fontWeight: 600,
              padding: "5px 8px",
              userSelect: "text",
            }}
          >
            บริษัท นามสมมุติ จำกัด
          </div>
          <div style={{ fontWeight: 600, marginBottom: 12, userSelect: "text" }}>
            ได้จดทะเบียนใบไม้ ตามกำหนดกลางป่า ค.ศ. 1750
          </div>
          <div
            style={{
              borderBottom: "1.2px solid #000",
              display: "inline-block",
              padding: "4px 8px",
              userSelect: "text",
            }}
          >
            เมื่อวันที่ 99 กรกฎาคม ค.ศ. 1750
          </div>
        </section>

        {/* Details */}
        <section
          style={{
            textAlign: "center",
            marginBottom: 20,
            fontSize: 16,
            userSelect: "text",
          }}
        >
          ชื่อที่ใช้ในการประกอบพาณิชยกิจ
          <div
            style={{
              borderBottom: "1.5px solid #000",
              margin: "8px auto",
              maxWidth: 320,
              fontWeight: 600,
              padding: "5px 8px",
              userSelect: "text",
            }}
          >
            Namsommut.co.cld
          </div>
          (เขียนเป็นอักษรโรมัน)
          <div
            style={{
              borderBottom: "1.5px solid #000",
              margin: "8px auto",
              maxWidth: 320,
              fontWeight: 600,
              padding: "5px 8px",
              userSelect: "text",
            }}
          >
            Namsommut.co.cld /
          </div>
          ชนิดธุรกิจกลางป่า
          <div
            style={{
              maxWidth: 480,
              margin: "12px auto",
              fontSize: 15,
              userSelect: "text",
            }}
          >
            <div
              style={{
                borderBottom: "1.2px solid #000",
                padding: "4px 8px",
                userSelect: "text",
              }}
            >
              จำหน่ายสินค้าเทคนิค, edit & create ผ่านอินเทอร์เน็ต
            </div>
            <div
              style={{
                borderBottom: "1.2px solid #000",
                padding: "4px 8px",
                minHeight: "1.5em",
                userSelect: "text",
              }}
            >
              &nbsp;
            </div>
            <div
              style={{
                borderBottom: "1.2px solid #000",
                padding: "4px 8px",
                minHeight: "1.5em",
                userSelect: "text",
              }}
            >
              &nbsp;
            </div>
          </div>
        </section>

        {/* Section title */}
        <h2
          style={{
            textAlign: "center",
            fontWeight: 700,
            marginBottom: 8,
            userSelect: "text",
          }}
        >
          ที่ตั้งสำนักงานใหญ่
        </h2>

        {/* Address details */}
        <address
          style={{
            whiteSpace: "pre-line",
            fontSize: 15,
            maxWidth: 480,
            margin: "0 auto 20px",
            textAlign: "left",
            fontStyle: "normal",
            userSelect: "text",
          }}
        >
          เลขที่ 123 หมู่ 7, ตรอก/ซอย กลางป่าใหญ่, ถนนทางช้างเผือก,
          <br />
          ตำบล/แขวง บ้านต้นไม้, อำเภอ/เขต เมืองพงไพร, จังหวัดมหานครทาซาน
        </address>

        {/* Footer */}
        <footer
          style={{
            fontSize: 15,
            lineHeight: 1.3,
            textAlign: "right",
            userSelect: "text",
          }}
        >
          <div>
            ณ วันที่ ..................................................<br />
            ลงชื่อ ..................................................<br />
            <div
              style={{
                textAlign: "center",
                marginTop: 6,
                lineHeight: 1.2,
                userSelect: "text",
              }}
            >
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