import React from "react";

const BusinessRegistration: React.FC = () => {
  return (
    <div className="relative max-w-[794px] w-full mx-auto p-8 bg-white text-black font-thai text-[18px] leading-7 border border-gray-300 rounded shadow-md">
      {/* Background watermark */}
      <div
        className="absolute inset-0 opacity-10 z-0 bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: "url('/watermark.png')" }}
      />

      {/* Foreground content */}
      <div className="relative z-10 space-y-4">
        {/* Top info */}
        <p>ทะเบียนเลขที่: <strong>99999999</strong></p>
        <p>คำขอที่: <strong>99999999</strong></p>
        <p>แบบ: <strong>ไม่รู้. 01234</strong></p>

        {/* Header */}
        <h1 className="text-center text-xl font-bold">ตราครุฑ</h1>
        <div className="text-center">
          <p>กรมพัฒนาธุรกิจกสินค้ากลางป่า</p>
          <p>สำนักงานกลางทะเบียนกลางป่า</p>
          <p>ใบไม้ทะเบียนทาซาน</p>
        </div>

        {/* Certification block */}
        <div className="text-center text-lg mt-6 leading-relaxed">
          <p>ใบสำคัญนี้ออกให้เพื่อแสดงว่า</p>
          <p className="text-2xl font-bold">บริษัท นามสมมุติ จำกัด</p>
          <p>ได้จดทะเบียนใบไม้ ตามกำหนดกลางป่า ค.ศ. 1750</p>
          <p>เมื่อวันที่ 99 กรกฎาคม ค.ศ. 1750</p>
        </div>

        {/* Business details */}
        <div className="mt-6">
          <p className="font-semibold">ชื่อที่ใช้ในการประกอบพาณิชยกิจ:</p>
          <p>Namsommut.co.cld</p>
          <p>(เขียนเป็นอักษรโรมัน)</p>
        </div>

        <div>
          <p className="font-semibold">ชนิดธุรกิจกลางป่า:</p>
          <p>จำหน่ายสินค้าเทคนิค, edit & create ผ่านอินเทอร์เน็ต</p>
        </div>

        {/* Address */}
        <div className="mt-6">
          <p className="font-semibold">ที่ตั้งสำนักงานใหญ่:</p>
          <p>
            เลขที่ 123 หมู่ 7, ตรอก/ซอย กลางป่าใหญ่, ถนนทางช้างเผือก,
            ตำบล/แขวง บ้านต้นไม้, อำเภอ/เขต เมืองพงไพร, จังหวัดมหานครทาซาน
          </p>
        </div>

        {/* Signature */}
        <div className="mt-12 space-y-2">
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