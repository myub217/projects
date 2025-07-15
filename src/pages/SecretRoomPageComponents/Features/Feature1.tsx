// src/pages/SecretRoomPageComponents/Features/Feature1.tsx

import React, { useState } from 'react';

//-------------------------------
// Types
//-------------------------------

interface RenderedDoc {
  id: string;
  title: string;
  renderedContent: string;
  name: string;
  date: string;
  isoDate: string;
}

interface TemplateDoc {
  id: string;
  title: string;
  contentTemplate: (name: string, date: string) => string;
}

//-------------------------------
// Templates
//-------------------------------

const templateDocs: TemplateDoc[] = [
  {
    id: 'tax-deduction',
    title: 'ใบหักภาษี ณ ที่จ่าย',
    contentTemplate: (name, date) =>
      `เรียนคุณ ${name}\n\nตามที่ท่านได้รับเงินเดือนในเดือนนี้ ทางบริษัทขอแจ้งหักภาษี ณ ที่จ่าย จำนวนเงิน 5,000 บาท\nวันที่ ${date}\n\nขอแสดงความนับถือ`,
  },
  {
    id: 'contract',
    title: 'สัญญาจ้างงาน',
    contentTemplate: (name, date) =>
      `สัญญาฉบับนี้จัดทำขึ้น ณ วันที่ ${date} ระหว่างบริษัทและคุณ ${name} โดยมีข้อตกลงดังต่อไปนี้\n1. ระยะเวลาการทำงาน 1 ปี\n2. เงินเดือนตามที่ตกลง\n\nลงชื่อ..................................................`,
  },
  {
    id: 'quotation',
    title: 'ใบเสนอราคา',
    contentTemplate: (name, date) =>
      `เรียนคุณ ${name}\n\nทางบริษัทขอเสนอราคาดังต่อไปนี้\n1. บริการออกแบบเว็บไซต์ 50,000 บาท\n2. พัฒนา Web App 100,000 บาท\nวันที่เสนอราคา ${date}\n\nขอขอบพระคุณที่ให้ความไว้วางใจ`,
  },
];

//-------------------------------
// Utilities
//-------------------------------

const getRandomName = (): string => {
  const names = ['คุณสมชาย ใจดี', 'คุณสมหญิง แสนสุข', 'คุณสมศักดิ์ เก่งงาน', 'คุณสมฤดี รักงาน'];
  return names[Math.floor(Math.random() * names.length)];
};

const getFormattedDate = (): { display: string; iso: string } => {
  const start = new Date(2023, 0, 1).getTime();
  const end = new Date(2025, 11, 31).getTime();
  const randomTime = start + Math.random() * (end - start);
  const date = new Date(randomTime);

  return {
    display: date.toLocaleDateString('th-TH', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    iso: date.toISOString().split('T')[0],
  };
};

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

export default function Feature1() {
  const [docSet, setDocSet] = useState<RenderedDoc[]>(generateRandomDocSet);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleRandomize = () => {
    setDocSet(generateRandomDocSet());
  };

  const handleDownload = async () => {
    setIsDownloading(true);
    await new Promise((res) => setTimeout(res, 1200));
    alert(
      `✅ ดาวน์โหลดชุดเอกสาร (Demo):\n\n${docSet
        .map((d) => `- ${d.title} (สำหรับ ${d.name}, วันที่ ${d.date})`)
        .join('\n')}`
    );
    setIsDownloading(false);
  };

  return (
    <section
      className="font-sarabun mx-auto mt-12 max-w-5xl rounded-2xl bg-background p-8 text-foreground shadow-lg"
      aria-label="พื้นที่ห้องลับสำหรับสมาชิก VIP"
    >
      {/* Header */}
      <header className="mb-8 text-center">
        <h1 className="mb-2 text-3xl font-extrabold text-primary drop-shadow-sm">
          🔐 ห้องลับเฉพาะสมาชิก VIP
        </h1>
        <p className="mx-auto max-w-xl text-lg leading-relaxed text-secondary">
          พื้นที่พิเศษสำหรับสมาชิกระดับ VIP ทดลองสุ่มชุดเอกสารที่จัดเตรียมไว้อย่างมืออาชีพ
          พร้อมใช้งานและดาวน์โหลดได้ทันที
        </p>
      </header>

      {/* Buttons */}
      <div className="mb-10 flex flex-col justify-center gap-6 sm:flex-row">
        <button
          onClick={handleRandomize}
          className="flex-1 rounded-md bg-primary py-3 font-semibold text-white shadow transition duration-300 hover:bg-primary-dark"
        >
          🔄 สุ่มชุดเอกสารใหม่
        </button>
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className={`flex-1 rounded-md py-3 font-semibold shadow transition duration-300 ${
            isDownloading
              ? 'cursor-not-allowed bg-gray-400'
              : 'bg-success text-white hover:bg-success-dark'
          }`}
        >
          {isDownloading ? '⏳ กำลังดาวน์โหลด...' : '⬇️ ดาวน์โหลดเอกสาร PDF'}
        </button>
      </div>

      {/* Documents */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {docSet.map((doc) => (
          <article
            key={doc.id}
            role="region"
            aria-label={`เอกสาร: ${doc.title}`}
            className="bg-surface relative rounded-xl border border-border bg-opacity-90 p-6 shadow-md backdrop-blur-sm transition-transform duration-300 hover:scale-[1.02]"
          >
            {/* Watermark */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 flex items-center justify-center text-7xl font-extrabold text-foreground opacity-10"
              style={{ userSelect: 'none', filter: 'blur(2px)' }}
            >
              CONFIDENTIAL
            </div>

            {/* Content */}
            <h2 className="relative mb-4 text-lg font-bold">{doc.title}</h2>
            <pre className="relative mb-6 whitespace-pre-wrap font-mono text-sm leading-relaxed text-foreground/90">
              {doc.renderedContent}
            </pre>
            <footer className="relative flex justify-between text-xs text-foreground/70">
              <span>
                👤 <span className="font-medium">{doc.name}</span>
              </span>
              <time dateTime={doc.isoDate}>📅 {doc.date}</time>
            </footer>
          </article>
        ))}
      </div>
    </section>
  );
}
