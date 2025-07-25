// src/components/Sections/AboutSection.tsx
// ✅ About section component: responsive, professional style, Tailwind + React TS

import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      aria-label="เกี่ยวกับ JP Visual & Docs"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div>
          <h2 className="mb-4 text-3xl font-extrabold text-primary">
            เกี่ยวกับ JP Visual & Docs
          </h2>
          <p className="mb-6 text-muted">
            JP Visual & Docs คือผู้เชี่ยวชาญด้านงานเอกสารและภาพลักษณ์ธุรกิจระดับมืออาชีพ
            เรามุ่งมั่นให้บริการที่มีคุณภาพและน่าเชื่อถือในธุรกิจสีเทา ด้วยความรวดเร็ว
            แม่นยำ และปลอดภัย
          </p>
          <p className="mb-6 text-muted">
            บริการของเราครอบคลุมตั้งแต่การสร้างเอกสารปลอมแปลง การยื่นกู้
            การดูแลเอกสารวีซ่า งานบัตรแข็ง รวมถึงการออกแบบแบรนด์และระบบการตลาดหลังบ้าน
          </p>
          <p className="text-muted">
            เราใส่ใจในทุกรายละเอียดของงาน
            เพื่อให้ลูกค้าได้รับผลลัพธ์ที่ดีที่สุดและดูเป็นมืออาชีพอย่างแท้จริง
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src="/images/about.webp"
            alt="ภาพตัวอย่างเกี่ยวกับ JP Visual & Docs"
            className="h-auto max-w-full rounded-lg object-cover shadow-soft"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            draggable={false}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
