// src/components/HomeContent.tsx
import React from 'react';

const HomeContent: React.FC = () => (
  <section className="max-w-7xl mx-auto p-6 space-y-6">
    <h1 className="text-4xl font-bold leading-tight">JP - VISUAL & DOCS</h1>
    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
      บริการช่วยจัดการเบื้องหลังทุกเรื่องที่คุณไม่อยากวุ่น — เอกสาร ธุรกิจ และการตลาด
      พร้อมทำจริง จบไว
    </h2>

    <button className="btn btn-primary mt-2">เข้าสู่ระบบลับ</button>

    <section className="mt-12">
      <h3 className="text-xl font-semibold mb-3">📁 งานที่เราได้ดูแลให้ลูกค้าแล้ว</h3>
      <p className="mb-1">
        เราช่วยวางแผน ตรวจเอกสาร และประสานงานกับหน่วยงานต่าง ๆ ให้ลูกค้าตั้งแต่ต้นจนจบ
      </p>
      <p className="mb-6 font-medium">ทั้งหมด 15 รายการ</p>

      {/* รายการลูกค้าตัวอย่าง */}
      <ul className="space-y-4 text-gray-800 dark:text-gray-200">
        <li>
          <strong>ศรัณย์ พิทักษ์ชาญชัย</strong> - บริการ: จัดเตรียมเอกสารจำนองที่ดิน
          <br />
          <small className="text-sm text-gray-500 dark:text-gray-400">
            อัปเดตล่าสุด: 9 กรกฎาคม 2568
          </small>
        </li>
        <li>
          <strong>อรินทรา ทองเจริญ</strong> - บริการ: ขอหนังสือรับรองบริษัทและงบดุล
          <br />
          <small className="text-sm text-gray-500 dark:text-gray-400">
            อัปเดตล่าสุด: 8 กรกฎาคม 2568
          </small>
        </li>
        <li>
          <strong>ณัฐวัฒน์ ชัยวรรณ</strong> - บริการ: ตรวจสอบโฉนดที่ดินพร้อมแบบบ้าน
          <br />
          <small className="text-sm text-gray-500 dark:text-gray-400">
            อัปเดตล่าสุด: 7 กรกฎาคม 2568
          </small>
        </li>
        {/* ... เพิ่มเติมตามข้อมูลจริง */}
      </ul>
    </section>
  </section>
);

export default HomeContent;
