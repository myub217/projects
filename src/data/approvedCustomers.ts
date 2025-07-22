// src/data/approvedCustomers.ts

export interface CustomerApproval {
  id: string
  name: string
  documentTitle: string
  receivedDate: string // ISO 8601 with timezone, e.g. 2025-07-09T09:15:00+07:00
  status: 'เสร็จสมบูรณ์' | 'กำลังดำเนินการ'
}

export const approvedCustomers: CustomerApproval[] = [
  {
    id: 'doc-001',
    name: 'ศรัณย์ พิทักษ์ชาญชัย',
    documentTitle: 'จัดเตรียมเอกสารจำนองที่ดิน',
    receivedDate: '2025-07-09T09:15:00+07:00',
    status: 'เสร็จสมบูรณ์',
  },
  {
    id: 'doc-002',
    name: 'อรินทรา ทองเจริญ',
    documentTitle: 'ขอหนังสือรับรองบริษัทและงบดุล',
    receivedDate: '2025-07-08T10:45:00+07:00',
    status: 'เสร็จสมบูรณ์',
  },
  {
    id: 'doc-003',
    name: 'ณัฐวัฒน์ ชัยวรรณ',
    documentTitle: 'ตรวจสอบโฉนดที่ดินพร้อมแบบบ้าน',
    receivedDate: '2025-07-07T14:20:00+07:00',
    status: 'กำลังดำเนินการ',
  },
  {
    id: 'doc-004',
    name: 'ปรียานุช ศรีทอง',
    documentTitle: 'ยื่นแบบคำร้องเปลี่ยนกรรมสิทธิ์',
    receivedDate: '2025-07-06T11:05:00+07:00',
    status: 'เสร็จสมบูรณ์',
  },
  {
    id: 'doc-005',
    name: 'ธีรภัทร์ เจริญสุข',
    documentTitle: 'ร่างสัญญาซื้อขายและแนบเอกสาร',
    receivedDate: '2025-07-05T15:40:00+07:00',
    status: 'เสร็จสมบูรณ์',
  },
  {
    id: 'doc-006',
    name: 'สุนิสา ไชยพงศ์',
    documentTitle: 'ปรึกษากฎหมายการซื้อขายที่ดิน',
    receivedDate: '2025-07-04T13:25:00+07:00',
    status: 'กำลังดำเนินการ',
  },
  {
    id: 'doc-007',
    name: 'พงศกร วัฒนกิจ',
    documentTitle: 'เตรียมแบบฟอร์มจำนองพร้อมสัญญา',
    receivedDate: '2025-07-03T08:55:00+07:00',
    status: 'เสร็จสมบูรณ์',
  },
  {
    id: 'doc-008',
    name: 'นภัสกร สายทอง',
    documentTitle: 'แปลเอกสารต่างประเทศและรับรอง',
    receivedDate: '2025-07-02T12:10:00+07:00',
    status: 'กำลังดำเนินการ',
  },
  {
    id: 'doc-009',
    name: 'วิษณุ เทพารักษ์',
    documentTitle: 'ตรวจสอบสิทธิ์ในที่ดินก่อนซื้อขาย',
    receivedDate: '2025-07-01T09:30:00+07:00',
    status: 'เสร็จสมบูรณ์',
  },
  {
    id: 'doc-010',
    name: 'กิตติพงษ์ เสริมสุข',
    documentTitle: 'ประสานงานกับสำนักงานที่ดิน',
    receivedDate: '2025-06-30T16:45:00+07:00',
    status: 'เสร็จสมบูรณ์',
  },
  {
    id: 'doc-011',
    name: 'ปริญญา วงศ์ทอง',
    documentTitle: 'รับมอบอำนาจจัดการเรื่องกรรมสิทธิ์',
    receivedDate: '2025-06-29T14:00:00+07:00',
    status: 'กำลังดำเนินการ',
  },
  {
    id: 'doc-012',
    name: 'กนกวรรณ ศรีสวัสดิ์',
    documentTitle: 'ออกแบบแผนผังทรัพย์สินประกอบคำร้อง',
    receivedDate: '2025-06-28T11:20:00+07:00',
    status: 'เสร็จสมบูรณ์',
  },
  {
    id: 'doc-013',
    name: 'อานนท์ บุญมา',
    documentTitle: 'เตรียมสัญญาเช่าระยะยาวพร้อมแนบท้าย',
    receivedDate: '2025-06-27T15:55:00+07:00',
    status: 'เสร็จสมบูรณ์',
  },
  {
    id: 'doc-014',
    name: 'จารุวรรณ เทพสุริยะ',
    documentTitle: 'แนบเอกสารการเงินสำหรับขอกู้แบงก์',
    receivedDate: '2025-06-26T10:10:00+07:00',
    status: 'กำลังดำเนินการ',
  },
  {
    id: 'doc-015',
    name: 'มนูญ แก้วมณี',
    documentTitle: 'ประสานงานราชการเรื่องเอกสารสิทธิ์',
    receivedDate: '2025-06-25T09:45:00+07:00',
    status: 'เสร็จสมบูรณ์',
  },
]