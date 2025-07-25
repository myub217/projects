// /src/components/IndustryInsights/data.ts

export interface InsightArticle {
  id: number;
  title: string;
  summary: string;
  date: string; // ISO 8601 format (YYYY-MM-DD)
  link: string;
}

export const insightArticles: InsightArticle[] = [
  {
    id: 1,
    title: 'ส่องแนวโน้มเอกสารราชการปลอม ปี 2025',
    summary:
      'แนวโน้มการปลอมแปลงเอกสารเปลี่ยนแปลงตามเทคโนโลยี AI & PDF Trace — นักปลอมต้องปรับตัวให้ทันสถานการณ์',
    date: '2025-07-01',
    link: 'https://example.com/article/fake-docs-2025',
  },
  {
    id: 2,
    title: "เข้าใจ 'E-Certificate' ในยุคดิจิทัล",
    summary:
      'ใบรับรองอิเล็กทรอนิกส์กับการใช้งานจริง พร้อมข้อควรระวังสำหรับงานที่ต้องการความน่าเชื่อถือสูง',
    date: '2025-07-10',
    link: 'https://example.com/article/e-certificate',
  },
  {
    id: 3,
    title: 'กฎหมาย PDPA กับงานเอกสารและฐานข้อมูลลูกค้า',
    summary:
      'ธุรกิจสีเทาต้องรู้! วิธีจัดเก็บและใช้งานข้อมูลลูกค้าอย่างปลอดภัย ไม่เสี่ยงผิดกฎหมาย PDPA',
    date: '2025-07-20',
    link: 'https://example.com/article/pdpa-docs',
  },
  {
    id: 4,
    title: 'การตรวจสอบเอกสารปลอม: วิธีที่เจ้าหน้าที่นิยมใช้',
    summary:
      'เข้าใจขั้นตอนตรวจสอบของหน่วยงานรัฐ เพื่อเตรียมรับมือและป้องกันอย่างมืออาชีพ',
    date: '2025-07-24',
    link: 'https://example.com/article/doc-check-methods',
  },
];
