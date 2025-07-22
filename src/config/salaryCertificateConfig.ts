// src/config/salaryCertificateConfig.ts

export interface SalaryCertificateConfig {
  organization: {
    name: string             // ชื่อบริษัทเต็ม
    address: string          // ที่อยู่บริษัทเต็ม (พร้อมรหัสไปรษณีย์)
    logoUrl: string          // โลโก้บริษัท (relative path หรือ CDN)
  }
  issuer: {
    fullName: string         // ชื่อผู้ลงนามเต็ม (พร้อมคำนำหน้า)
    position: string         // ตำแหน่งผู้ลงนาม
  }
  document: {
    currency: string         // สกุลเงิน (ISO 4217 เช่น THB, USD)
    footerNote: string       // ข้อความหมายเหตุท้ายเอกสาร
  }
  theme?: {
    primaryColor?: string       // สีหลัก (เช่น หัวเรื่อง)
    textColor?: string          // สีตัวอักษรหลัก
    accentColor?: string        // สีเน้น (ชื่อบริษัท, ลายเซ็น)
    backgroundColor?: string    // สีพื้นหลังเอกสาร
  }
}

const salaryCertificateConfig: SalaryCertificateConfig = {
  organization: {
    name: 'บริษัท เจพี วิชวล จำกัด',
    address:
      '123/45 ถนนสุขุมวิท แขวงคลองเตยเหนือ เขตวัฒนา กรุงเทพมหานคร 10110 ประเทศไทย',
    logoUrl: '/images/logo/logo.svg', // ชัดเจน: แนะนำแยกโฟลเดอร์ logo/
  },
  issuer: {
    fullName: 'นางสาว สุภาพร แซ่ลิ้ม',
    position: 'ผู้จัดการฝ่ายทรัพยากรบุคคล',
  },
  document: {
    currency: 'THB',
    footerNote:
      'เอกสารนี้จัดทำขึ้นเพื่อใช้เป็นหลักฐานประกอบ และไม่มีผลผูกพันทางกฎหมายโดยตรง',
  },
  theme: {
    primaryColor: '#2563eb',      // blue-600
    textColor: '#1f2937',         // gray-800
    accentColor: '#4ade80',       // green-400
    backgroundColor: '#ffffff',   // white
  },
}

export default salaryCertificateConfig