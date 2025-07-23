// src/config/salaryCertificateConfig.ts

/**
 * ข้อมูลบริษัท สำหรับใช้งานในเอกสารราชการ เช่น ใบรับรองเงินเดือน
 * รูปแบบเรียบง่าย สีดำล้วน ใช้สำหรับเอกสารทางบัญชี/ราชการ
 */

export interface CompanyInfo {
  name: string
  logoUrl?: string
  address: string
  phone: string
  taxId: string
  hrManager: {
    fullName: string
    position: string
    email: string
  }
}

export const companyInfo: CompanyInfo = {
  name: 'บริษัท เจพี วิชวล จำกัด',
  logoUrl: '/assets/logo.png', // ✅ เปลี่ยน path ตามที่จัดเก็บจริง (ใน public/)
  address: [
    '123/45 ถนนสุขุมวิท',
    'แขวงคลองเตยเหนือ เขตวัฒนา',
    'กรุงเทพมหานคร 10110 ประเทศไทย',
  ].join('\n'),
  phone: '02-123-4567',
  taxId: '0105550123456',
  hrManager: {
    fullName: 'นางสาว สุภาพร แซ่ลิ้ม',
    position: 'ผู้จัดการฝ่ายทรัพยากรบุคคล',
    email: 'supaporn.s@jpvisual.co.th',
  },
}
