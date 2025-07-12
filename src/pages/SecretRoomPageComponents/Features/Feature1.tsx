// src/pages/SecretRoomPageComponents/Features/Feature1.tsx

import React, { useState } from "react";

//-------------------------------
// Types
//-------------------------------

/**
 * เอกสารที่แสดงผลแล้ว พร้อมข้อมูลเจ้าของและวันที่
 */
interface RenderedDoc {
  id: string;                 // รหัสเอกสาร (เช่น tax-deduction)
  title: string;              // ชื่อเอกสาร (เช่น ใบหักภาษี ณ ที่จ่าย)
  renderedContent: string;   // ข้อความที่เรนเดอร์เต็ม
  name: string;               // ชื่อผู้รับ/เจ้าของเอกสาร
  date: string;               // วันที่ในรูปแบบแสดงผล (ภาษาไทย)
  isoDate: string;           // วันที่รูปแบบ ISO (YYYY-MM-DD) สำหรับ time tag
}

/**
 * โครงสร้างเทมเพลตของเอกสารที่ใช้สร้าง RenderedDoc
 */
interface TemplateDoc {
  id: string;
  title: string;
  contentTemplate: (name: string, date: string) => string;
}

//-------------------------------
// Template Documents
//-------------------------------

/**
 * รายการเทมเพลตเอกสารที่รองรับในระบบ
 */
const templateDocs: TemplateDoc[] = [
  {
    id: "tax-deduction",
    title: "ใบหักภาษี ณ ที่จ่าย",
    contentTemplate: (name, date) =>
      `เรียนคุณ ${name}\n\nตามที่ท่านได้รับเงินเดือนในเดือนนี้ ทางบริษัทขอแจ้งหักภาษี ณ ที่จ่าย จำนวนเงิน 5,000 บาท\nวันที่ ${date}\n\nขอแสดงความนับถือ`,
  },
  {
    id: "contract",
    title: "สัญญาจ้างงาน",
    contentTemplate: (name, date) =>
      `สัญญาฉบับนี้จัดทำขึ้น ณ วันที่ ${date} ระหว่างบริษัทและคุณ ${name} โดยมีข้อตกลงดังต่อไปนี้\n1. ระยะเวลาการทำงาน 1 ปี\n2. เงินเดือนตามที่ตกลง\n\nลงชื่อ..................................................`,
  },
  {
    id: "quotation",
    title: "ใบเสนอราคา",
    contentTemplate: (name, date) =>
      `เรียนคุณ ${name}\n\nทางบริษัทขอเสนอราคาดังต่อไปนี้\n1. บริการออกแบบเว็บไซต์ 50,000 บาท\n2. พัฒนา Web App 100,000 บาท\nวันที่เสนอราคา ${date}\n\nขอขอบพระคุณที่ให้ความไว้วางใจ`,
  },
];

//-------------------------------
// Utilities
//-------------------------------

/**
 * ดึงชื่อแบบสุ่มจากรายชื่อจำลอง
 */
const getRandomName = (): string => {
  const names = [
    "คุณสมชาย ใจดี",
    "คุณสมหญิง แสนสุข",
    "คุณสมศักดิ์ เก่งงาน",
    "คุณสมฤดี รักงาน",
  ];
  return names[Math.floor(Math.random() * names.length)];
};

/**
 * คืนวันที่ทั้งแบบแสดงผล และ ISO
 */
const getFormattedDate = (): { display: string; iso: string } => {
  const start = new Date(2023, 0, 1).getTime();
  const end = new Date(2025, 11, 31).getTime();
  const randomTime = start + Math.random() * (end - start);
  const date = new Date(randomTime);

  return {
    display: date.toLocaleDateString("th-TH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    }),
    iso: date.toISOString().split("T")[0],
  };
};

/**
 * สร้างชุดเอกสารแบบสุ่มโดยใช้ชื่อและวันที่ร่วมกัน
 */
const generateRandomDocSet = (): RenderedDoc[] => {
  const name = getRandomName();
  const { display, iso } = getFormattedDate();

  return templateDocs.map((doc) => ({
    id: doc.id,
    title: doc.title,
    renderedContent: doc.contentTemplate(name, display),
    name,
    date: display,
    isoDate: iso,
  }));
};

//-------------------------------
// Component
//-------------------------------

const Feature1: React.FC = () => {
  const [docSet, setDocSet] = useState<RenderedDoc[]>(generateRandomDocSet);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleRandomize = () => {
    setDocSet(generateRandomDocSet());
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    await new Promise((res) => setTimeout(res, 1200));
    alert(`✅ ดาวน์โหลดชุดเอกสาร (Demo):\n\n${docSet.map((d) => d.title).join(", ")}`);
    setIsDownloading(false);
  };

  return (
    <section
      className="p-8 max-w-5xl mx-auto mt-12 bg-background rounded-2xl shadow-lg text-foreground font-sarabun"
      aria-label="พื้นที่ห้องลับสำหรับสมาชิก VIP"
    >
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="text-3xl font-extrabold text-primary drop-shadow-sm mb-2">
          🔐 ห้องลับเฉพาะสมาชิก VIP
        </h1>
        <p className="text-lg max-w-xl mx-auto leading-relaxed text-secondary">
          พื้นที่พิเศษสำหรับสมาชิกระดับ VIP ทดลองสุ่มชุดเอกสารที่จัดเตรียมไว้อย่างมืออาชีพ
          พร้อมใช้งานและดาวน์โหลดได้ทันที
        </p>
      </header>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
        <button
          onClick={handleRandomize}
          className="flex-1 py-3 bg-primary hover:bg-primary-dark text-white rounded-md font-semibold shadow transition duration-300"
        >
          🔄 สุ่มชุดเอกสารใหม่
        </button>
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className={`flex-1 py-3 rounded-md font-semibold shadow transition duration-300 ${
            isDownloading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-success hover:bg-success-dark text-white"
          }`}
        >
          {isDownloading ? "⏳ กำลังดาวน์โหลด..." : "⬇️ ดาวน์โหลดเอกสาร PDF"}
        </button>
      </div>

      {/* Documents */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {docSet.map((doc) => (
          <article
            key={doc.id}
            role="region"
            aria-label={`เอกสาร: ${doc.title}`}
            className="relative p-6 bg-surface bg-opacity-90 backdrop-blur-sm rounded-xl shadow-md border border-border hover:scale-[1.02] transition-transform duration-300"
          >
            {/* Watermark */}
            <div
              aria-hidden="true"
              className="absolute inset-0 flex items-center justify-center text-7xl font-extrabold text-foreground opacity-10 pointer-events-none"
              style={{ userSelect: "none", filter: "blur(2px)" }}
            >
              CONFIDENTIAL
            </div>

            {/* Content */}
            <h2 className="relative text-lg font-bold mb-4">{doc.title}</h2>
            <pre className="relative whitespace-pre-wrap text-sm leading-relaxed text-foreground/90 font-mono mb-6">
              {doc.renderedContent}
            </pre>

            {/* Footer */}
            <footer className="relative text-xs text-foreground/70 flex justify-between">
              <span>👤 <span className="font-medium">{doc.name}</span></span>
              <time dateTime={doc.isoDate}>📅 {doc.date}</time>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Feature1;