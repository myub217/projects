// src/config/BusinessConfigDocumentRequest.tsx

export interface BusinessDocumentRequest {
  id: string;
  title: string;
  description: string;
  requiredDocuments: string[];
  processingTimeDays: number;
  feeTHB: number;
  contactEmail: string;
  contactPhone: string;
  relatedLinks?: string[];
}

export const BusinessDocumentRequests: BusinessDocumentRequest[] = [
  {
    id: 'req-001',
    title: 'ขอใบรับรองการจดทะเบียนบริษัท',
    description:
      'ใช้สำหรับยืนยันสถานะและข้อมูลของบริษัทในการติดต่อราชการและธุรกิจ',
    requiredDocuments: [
      'สำเนาหนังสือรับรองบริษัท',
      'สำเนาบัตรประชาชนกรรมการ',
      'แบบฟอร์มคำขอใบรับรอง',
    ],
    processingTimeDays: 7,
    feeTHB: 500,
    contactEmail: 'business-docs@yourcompany.com',
    contactPhone: '02-123-4567',
    relatedLinks: ['https://www.dbd.go.th/registration'],
  },
  {
    id: 'req-002',
    title: 'ขออนุญาตประกอบกิจการ',
    description: 'ใช้สำหรับขอใบอนุญาตในการประกอบกิจการตามกฎหมาย',
    requiredDocuments: [
      'สำเนาใบจดทะเบียนพาณิชย์',
      'สำเนาบัตรประชาชนผู้ขออนุญาต',
      'แบบฟอร์มขออนุญาตประกอบกิจการ',
    ],
    processingTimeDays: 14,
    feeTHB: 1500,
    contactEmail: 'permit@yourcompany.com',
    contactPhone: '02-987-6543',
  },
  {
    id: 'req-003',
    title: 'ขอใบอนุญาตโฆษณา',
    description:
      'ใช้สำหรับขอใบอนุญาตในการโฆษณาสินค้าหรือบริการตามกฎหมาย',
    requiredDocuments: [
      'สำเนาใบทะเบียนพาณิชย์',
      'แบบฟอร์มคำขอใบอนุญาตโฆษณา',
      'ตัวอย่างสื่อโฆษณา',
    ],
    processingTimeDays: 10,
    feeTHB: 800,
    contactEmail: 'ads-permit@yourcompany.com',
    contactPhone: '02-555-1234',
  },
]