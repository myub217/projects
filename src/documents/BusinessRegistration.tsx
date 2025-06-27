import React from "react";
import "./BusinessRegistration.css";

const BusinessRegistration: React.FC = () => {
  return (
    <article role="document" aria-label="ใบทะเบียนพาณิชย์" lang="th" className="container">
      <div aria-hidden="true" className="watermark" />
      <div className="content-wrapper">
        <section aria-label="ข้อมูลทะเบียนและคำขอ" className="top-info">
          <div className="top-info-left">
            <div><strong>ทะเบียนเลขที่:</strong> 99999999</div>
            <div><strong>คำขอที่:</strong> 99999999</div>
          </div>
          <div className="top-info-right"><strong>แบบ:</strong> ไม่รู้. 01234</div>
        </section>

        <header aria-label="หัวกระดาษ" className="header">
          <img src="/krut1.webp" alt="ตราครุฑ" className="krut-img" />
          <h2>กรมพัฒนาธุรกิจกสินค้ากลางป่า</h2>
          <h3>สำนักงานกลางทะเบียนกลางป่า</h3>
          <h1>ใบไม้ทะเบียนทาซาน</h1>
        </header>

        <section aria-label="ข้อความรับรอง" className="certify-section">
          ใบสำคัญนี้ออกให้เพื่อแสดงว่า
          <div aria-label="ชื่อบริษัท" className="company-name">บริษัท นามสมมุติ จำกัด</div>
          <div className="certify-text-bold">ได้จดทะเบียนใบไม้ ตามกำหนดกลางป่า ค.ศ. 1750</div>
          <div aria-label="วันที่จดทะเบียน" className="certify-date">เมื่อวันที่ 99 กรกฎาคม ค.ศ. 1750</div>
        </section>

        <section aria-label="รายละเอียดธุรกิจ" className="detail-section">
          ชื่อที่ใช้ในการประกอบพาณิชยกิจ
          <div aria-label="ชื่อภาษาอังกฤษ" className="detail-item">Namsommut.co.cld</div>
          (เขียนเป็นอักษรโรมัน)
          <div aria-label="ชื่อภาษาอังกฤษซ้ำ" className="detail-item">Namsommut.co.cld /</div>
          ชนิดธุรกิจกลางป่า
          <div aria-label="ชนิดธุรกิจ" className="business-type-wrapper">
            <div className="business-type-item">จำหน่ายสินค้าเทคนิค, edit & create ผ่านอินเทอร์เน็ต</div>
            <div className="business-type-item">&nbsp;</div>
            <div className="business-type-item">&nbsp;</div>
          </div>
        </section>

        <div className="section-title">ที่ตั้งสำนักงานใหญ่</div>

        <address aria-label="ที่อยู่สำนักงานใหญ่" className="address">
          เลขที่ 123 หมู่ 7, ตรอก/ซอย กลางป่าใหญ่, ถนนทางช้างเผือก,<br />
          ตำบล/แขวง บ้านต้นไม้, อำเภอ/เขต เมืองพงไพร, จังหวัดมหานครทาซาน
        </address>

        <footer aria-label="ข้อมูลท้ายเอกสาร" className="footer">
          <div className="footer-content">
            ณ วันที่ ..................................................<br />
            ลงชื่อ ..................................................<br />
            <div className="footer-name">
              (นาย นามสมมุติ)<br />
              นายทะเบียนพาณิชย์
            </div>
          </div>
        </footer>
      </div>
    </article>
  );
};

export default BusinessRegistration;