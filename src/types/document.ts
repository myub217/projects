// src/types/document.ts

// ประเภทเอกสารในระบบ JP - Visual & Docs
export type DocumentType =
  | 'salary_certificate'             // ใบรับรองเงินเดือน
  | 'commercial_registration'        // ใบทะเบียนพาณิชย์
  | 'company_profile'                // ข้อมูลบริษัท
  | 'service_agreement'              // สัญญาให้บริการ
  | 'nda_agreement'                  // สัญญาไม่เปิดเผยข้อมูล
  | 'others';                        // อื่นๆ

// โครงสร้างข้อมูลเอกสารแต่ละไฟล์
export interface DocumentMeta {
  id: string;                         // รหัสเอกสาร เช่น "doc-00123"
  type: DocumentType;                // ประเภทเอกสาร
  title: string;                     // ชื่อแสดง เช่น "ใบรับรองเงินเดือน ประจำปี 2025"
  description?: string;             // คำอธิบาย เช่น "สำหรับยื่นกู้ธนาคาร"
  fileName: string;                 // ชื่อไฟล์จริง เช่น "salary_2025_john_doe.pdf"
  fileUrl: string;                  // URL หรือ path เช่น "/documents/salary_2025_john_doe.pdf"
  createdAt: string;                // วันที่สร้าง เช่น "2025-07-01T10:00:00Z"
  updatedAt?: string;               // วันที่อัปเดตล่าสุด
  tags?: string[];                  // แท็ก เช่น ["pdf", "confidential"]
  isPublic?: boolean;               // เอกสารถูกเปิดให้สาธารณะดาวน์โหลดหรือไม่
  requiresAuth?: boolean;           // ต้อง login ก่อนดูหรือไม่
}

// แบบฟอร์มขอเอกสารจากฝั่งลูกค้า
export interface DocumentRequestFormData {
  requesterName: string;            // ชื่อผู้ขอ เช่น "นายกิตติศักดิ์"
  requesterEmail: string;          // อีเมลผู้ขอ เช่น "kit@example.com"
  requesterPhone?: string;         // เบอร์โทร เช่น "0899999999"
  documentType: DocumentType;      // ประเภทเอกสารที่ต้องการ
  purpose: string;                 // วัตถุประสงค์ เช่น "ยื่นขอสินเชื่อ"
  note?: string;                   // หมายเหตุเพิ่มเติม เช่น "ต้องการด่วนภายใน 1 วัน"
}