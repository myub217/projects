import React from "react";

const BusinessRegistration: React.FC = () => {
  return (
    <div className="relative max-w-[794px] w-full mx-auto p-8 bg-white text-black font-thai text-[18px] leading-7">
      {/* Watermark or background */}
      <div className="absolute inset-0 opacity-10 z-0 bg-no-repeat bg-center bg-contain" style={{ backgroundImage: "url('/watermark.png')" }} />

      {/* Content */}
      <div className="relative z-10 space-y-4">
        <p>ทะเบียนเลขที่: <strong>99999999</strong></p>
        <p>คำขอที่: <strong>99999999</strong></p>
        <p>แบบ: <strong>ไม่รู้. 01234</strong></p>

        <h1 className="text-center text-xl font-bold">ตราครุฑ</h1>
        <p className="text-center">
          กรมพัฒนาธุรกิจกสินค้ากลางป่า<br />
          สำนักงานกลางทะเบียนกลางป่า<br />
          ใบไม้ทะเบียนทาซาน
        </p>

        <p className="text-center text-lg mt-6">
          ใบสำคัญนี้ออกให้เพื่อแสดงว่า<br />
          <strong>บริษัท นามสมมุติ จำกัด</strong><br />
          ได้จดทะเบียนใบไม้ ตามกำหนดกลางป่า ค.ศ. 1750<br />
          เมื่อวันที่ 99 กรกฎาคม ค.ศ. 1750
        </p>

        <p className="mt-6">
          <strong>ชื่อที่ใช้ในการประกอบพาณิชยกิจ:</strong><br />
          Namsommut.co.cld<br />
          (เขียนเป็นอักษรโรมัน)
        </p>

        <p>
          <strong>ชนิดธุรกิจกลางป่า:</strong><br />
          จำหน่ายสินค้าเทคนิค, edit & create ผ่านอินเทอร์เน็ต
        </p>

        <p className="mt-6">
          <strong>ที่ตั้งสำนักงานใหญ่:</strong><br />
          เลขที่ 123 หมู่ 7, ตรอก/ซอย กลางป่าใหญ่, ถนนทางช้างเผือก,<br />
          ตำบล/แขวง บ้านต้นไม้, อำเภอ/เขต เมืองพงไพร, จังหวัดมหานครทาซาน
        </p>

        <div className="mt-12 space-y-3">
          <p>ณ วันที่ ..................................................</p>
          <p>ลงชื่อ ..................................................</p>
          <p>(นาย นามสมมุติ)</p>
          <p className="text-sm">นายทะเบียนพาณิชย์</p>
        </div>
      </div>
    </div>
  );
};

export default BusinessRegistration;