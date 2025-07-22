// src/config/salaryCertificateConfig.ts

export interface SalaryCertificateConfig {
  organization: {
    name: string           // ชื่อบริษัทเต็ม
    address: string        // ที่อยู่บริษัท (เต็มรูปแบบ พร้อมรหัสไปรษณีย์)
    logoUrl: string        // URL โลโก้บริษัท (relative path หรือ CDN)
  }
  issuer: {
    fullName: string       // ชื่อผู้ลงนามเต็ม (พร้อมคำนำหน้า)
    position: string       // ตำแหน่งผู้ลงนาม (เต็ม)
  }
  document: {
    currency: string       // สกุลเงิน (ISO 4217 เช่น THB, USD)
    footerNote: string     // ข้อความหมายเหตุท้ายเอกสาร
  }
  theme?: {
    primaryColor?: string     // สีหลัก (หัวเรื่อง, เส้นคั่น)
    textColor?: string        // สีข้อความหลัก
    accentColor?: string      // สีเน้น (ชื่อบริษัท, ลายเซ็น)
    backgroundColor?: string  // สีพื้นหลังเอกสาร (A4)
  }
}

const salaryCertificateConfig: SalaryCertificateConfig = {
  organization: {
    name: 'บริษัท เจพี วิชวล จำกัด',
    address:
      '123/45 ถนนสุขุมวิท แขวงคลองเตยเหนือ เขตวัฒนา กรุงเทพมหานคร 10110 ประเทศไทย',
    logoUrl: '/logo.svg',
  },
  issuer: {
    fullName: 'นางสาว สุภาพร แซ่ลิ้ม',
    position: 'ผู้จัดการฝ่ายทรัพยากรบุคคล',
  },
  document: {
    currency: 'THB',
    footerNote:
      'เอกสารนี้จัดทำเพื่อใช้เป็นหลักฐานประกอบเท่านั้น และไม่มีผลทางกฎหมาย',
  },
  theme: {
    primaryColor: '#2563eb',      // Tailwind blue-600
    textColor: '#1f2937',         // Tailwind gray-800
    accentColor: '#4ade80',       // Tailwind green-400
    backgroundColor: '#ffffff',   // สีพื้นหลังเอกสาร A4
  },
}

export default salaryCertificateConfig