import React from 'react';

const FAQSection: React.FC = () => (
  <section id="faq" className="mx-auto max-w-7xl p-6">
    <h2 className="mb-4 text-2xl font-bold">คำถามที่พบบ่อย</h2>
    <div className="space-y-4">
      <details className="rounded border p-4">
        <summary className="cursor-pointer font-semibold">
          บริการของ JP Visual & Docs คืออะไร?
        </summary>
        <p className="mt-2 text-muted">
          บริการด้านเอกสารและภาพลักษณ์ธุรกิจที่ครอบคลุมทั้งการสร้างเอกสารและออกแบบภาพลักษณ์
        </p>
      </details>
      {/* เพิ่มเติม FAQ ตามต้องการ */}
    </div>
  </section>
);

export default FAQSection;
