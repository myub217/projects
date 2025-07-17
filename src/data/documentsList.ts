// src/data/documentsList.ts

export interface DocumentItem {
  id: string;
  title: string;
  description: string;
  url: string;
  tags?: string[];
  createdAt?: string;       // วันที่เอกสารจัดทำ (ISO string)
  updatedAt?: string;       // วันที่เอกสารแก้ไขล่าสุด (ISO string)
  author?: string;          // ผู้จัดทำเอกสาร
  category?: string;        // หมวดหมู่เอกสาร
  fileSizeKB?: number;      // ขนาดไฟล์ (กิโลไบต์)
}

export const documentsList: DocumentItem[] = [
  {
    id: 'doc-001',
    title: 'แผนกลยุทธ์องค์กร',
    description: 'เอกสารแสดงวิสัยทัศน์ พันธกิจ และแนวทางดำเนินงานในระยะ 5 ปี',
    url: '/documents/strategic-plan.pdf',
    tags: ['กลยุทธ์', 'แผนระยะยาว', 'องค์กร'],
    createdAt: '2023-01-15T00:00:00Z',
    updatedAt: '2024-06-01T00:00:00Z',
    author: 'ฝ่ายวางแผนองค์กร',
    category: 'กลยุทธ์',
    fileSizeKB: 4500,
  },
  {
    id: 'doc-002',
    title: 'รายงานผลการดำเนินงาน',
    description: 'สรุปผลการดำเนินงานขององค์กรในปีที่ผ่านมา',
    url: '/documents/annual-report.pdf',
    tags: ['รายงาน', 'ผลประกอบการ', 'ประจำปี'],
    createdAt: '2024-01-10T00:00:00Z',
    updatedAt: '2024-06-15T00:00:00Z',
    author: 'ฝ่ายบริหาร',
    category: 'รายงาน',
    fileSizeKB: 5200,
  },
  {
    id: 'doc-003',
    title: 'นโยบายความปลอดภัยข้อมูล',
    description: 'แนวทางการจัดการและรักษาความปลอดภัยของข้อมูลภายใน',
    url: '/documents/data-security-policy.pdf',
    tags: ['ความปลอดภัย', 'ข้อมูล', 'นโยบาย'],
    createdAt: '2022-08-20T00:00:00Z',
    updatedAt: '2023-12-05T00:00:00Z',
    author: 'ฝ่ายไอที',
    category: 'นโยบาย',
    fileSizeKB: 1800,
  },
  {
    id: 'doc-004',
    title: 'คู่มือการใช้งานระบบ',
    description: 'เอกสารแนะนำฟังก์ชันและการใช้งานระบบภายใน',
    url: '/documents/system-guide.pdf',
    tags: ['คู่มือ', 'การใช้งาน', 'ระบบ'],
    createdAt: '2023-05-01T00:00:00Z',
    updatedAt: '2024-02-28T00:00:00Z',
    author: 'ฝ่ายสนับสนุนระบบ',
    category: 'คู่มือ',
    fileSizeKB: 2200,
  },
];