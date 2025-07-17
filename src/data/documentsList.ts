// src/data/documentsList.ts

export interface DocumentItem {
  id: string;
  title: string;
  description: string;
  url: string;
  tags?: string[];
}

export const documentsList: DocumentItem[] = [
  {
    id: 'doc-001',
    title: 'แผนกลยุทธ์องค์กร',
    description: 'เอกสารแสดงวิสัยทัศน์ พันธกิจ และแนวทางดำเนินงานในระยะ 5 ปี',
    url: '/documents/strategic-plan.pdf',
    tags: ['กลยุทธ์', 'แผนระยะยาว', 'องค์กร'],
  },
  {
    id: 'doc-002',
    title: 'รายงานผลการดำเนินงาน',
    description: 'สรุปผลการดำเนินงานขององค์กรในปีที่ผ่านมา',
    url: '/documents/annual-report.pdf',
    tags: ['รายงาน', 'ผลประกอบการ', 'ประจำปี'],
  },
  {
    id: 'doc-003',
    title: 'นโยบายความปลอดภัยข้อมูล',
    description: 'แนวทางการจัดการและรักษาความปลอดภัยของข้อมูลภายใน',
    url: '/documents/data-security-policy.pdf',
    tags: ['ความปลอดภัย', 'ข้อมูล', 'นโยบาย'],
  },
  {
    id: 'doc-004',
    title: 'คู่มือการใช้งานระบบ',
    description: 'เอกสารแนะนำฟังก์ชันและการใช้งานระบบภายใน',
    url: '/documents/system-guide.pdf',
    tags: ['คู่มือ', 'การใช้งาน', 'ระบบ'],
  },
];