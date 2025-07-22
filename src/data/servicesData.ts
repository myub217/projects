// src/data/servicesData.ts
// ✅ Structured & consistent service data with strong typing and i18n-ready text

export interface Service {
  id: number
  title: string
  description: string
  price: string
  image: string
  altText: string
  available: boolean
  comingSoonNote?: string | null
}

export const services: Service[] = [
  {
    id: 1,
    title: 'ที่ปรึกษายื่นกู้สินเชื่อ',
    description:
      'บริการดูแลครบวงจร ตั้งแต่การวิเคราะห์เงื่อนไขธนาคาร จัดเตรียมเอกสาร จนถึงยื่นเรื่อง เพิ่มโอกาสอนุมัติจริง',
    price: '4,000 - 300,000 บาท',
    image: '/images/services/service1.webp',
    altText: 'ภาพประกอบบริการที่ปรึกษายื่นกู้สินเชื่อ',
    available: true,
  },
  {
    id: 2,
    title: 'รับดูแลเอกสารยื่นวีซ่า',
    description:
      'ตรวจสอบและจัดเตรียมเอกสารยื่นวีซ่าแบบมืออาชีพ พร้อมคำแนะนำปรับแต่งให้ตรงตามข้อกำหนด',
    price: 'เริ่มต้น 4,000 บาท',
    image: '/images/services/service2.webp',
    altText: 'ภาพประกอบบริการดูแลเอกสารยื่นวีซ่า',
    available: true,
  },
  {
    id: 3,
    title: 'แก้ไข / สร้างใหม่ สลิป / เอกสาร',
    description:
      'แก้ไขหรือสร้างเอกสารใหม่แบบเหมือนจริง เหมาะกับงานที่ต้องการความยืดหยุ่นสูง ใช้ฟอนต์และพื้นหลังล่าสุด',
    price: '100 บาท / ใบ',
    image: '/images/services/service3.webp',
    altText: 'ภาพประกอบบริการแก้ไขและสร้างใหม่สลิปเอกสาร',
    available: true,
  },
  {
    id: 4,
    title: 'แก้ไข - สร้างใหม่ - จัดหาเอกสาร',
    description:
      'ครบทุกขั้นตอน ตั้งแต่แก้ไขจนถึงจัดหาเอกสารพิเศษเฉพาะ เหมาะกับผู้ต้องการความแม่นยำและความรวดเร็ว',
    price: 'เริ่มต้น 400 - 600 บาท',
    image: '/images/services/service4.webp',
    altText: 'ภาพประกอบบริการเอกสารเฉพาะทาง',
    available: true,
  },
  {
    id: 5,
    title: 'ชิ้นงานจริง บัตรแข็ง / อ่อน',
    description:
      'ผลิตบัตรจริงพร้อมลายน้ำและ QR ตรวจสอบ ส่งตรงถึงมือ พร้อมความปลอดภัยขั้นสูงสุด',
    price: 'เริ่มต้น 4,500 บาท',
    image: '/images/services/service5.webp',
    altText: 'ภาพประกอบบริการผลิตบัตรแข็งและบัตรอ่อน',
    available: true,
  },
  {
    id: 6,
    title: 'ดูแลการตลาดครบวงจร',
    description:
      'วางกลยุทธ์ สร้างคอนเทนต์ ทำโฆษณาให้ครบจบในที่เดียว ทั้งออนไลน์และออฟไลน์ พร้อมรีพอร์ตผลลัพธ์',
    price: '5,000 - 500,000 บาท',
    image: '/images/services/service6.webp',
    altText: 'ภาพประกอบบริการดูแลการตลาดครบวงจร',
    available: true,
  },
  {
    id: 7,
    title: 'ออกแบบโลโก้ / แบนเนอร์ / ทีม',
    description:
      'สร้างสื่อแบรนด์คุณภาพสูง พร้อมไฟล์ต้นฉบับและไฟล์ใช้งานทุกช่องทาง รองรับการใช้งานจริง',
    price: 'เริ่มต้น 300 บาท',
    image: '/images/services/service7.webp',
    altText: 'ภาพประกอบบริการออกแบบโลโก้และทีม',
    available: true,
  },
  {
    id: 8,
    title: 'ระบบหลังบ้านธุรกิจ',
    description:
      'ตั้งค่าระบบแจ้งเตือน, Line OA, Telegram, บอทตอบอัตโนมัติ ช่วยคุณบริหารลูกค้าได้ตลอด 24 ชม.',
    price: 'เริ่มต้น 4,000 บาท',
    image: '/images/services/service8.webp',
    altText: 'ภาพประกอบบริการระบบหลังบ้านธุรกิจ',
    available: true,
  },
  {
    id: 9,
    title: 'โครงการให้น้องได้พักผ่อน',
    description:
      'ระบบจัดการกลุ่มปิดและดึงลูกค้าเข้าระบบแบบอัตโนมัติ พร้อม AI ช่วยดูแลลูกค้าและทีมงาน',
    price: 'เริ่มต้น 5,000 บาท',
    image: '/images/services/service9.webp',
    altText: 'ภาพประกอบบริการระบบดูแลลูกค้าภายใน',
    available: true,
  },
  {
    id: 10,
    title: 'สร้างภาพลักษณ์ / ทำลายภาพลักษณ์',
    description:
      'บริการรีแบรนด์ทั้งองค์กรหรือบุคคล รองรับทั้งภาพบวกและลบ (ไม่ละเมิดกฎหมาย) อย่างมืออาชีพ',
    price: 'เริ่มต้น 5,000 บาท',
    image: '/images/services/service10.webp',
    altText: 'ภาพประกอบบริการสร้างหรือปรับภาพลักษณ์',
    available: true,
  },
  {
    id: 11,
    title: 'บริการใหม่กำลังจะมา',
    description: 'เตรียมเปิดตัวบริการใหม่ ที่ตอบโจทย์กลุ่มเป้าหมายมากยิ่งขึ้น',
    price: '-',
    image: '/images/services/service11.webp',
    altText: 'ภาพประกอบบริการใหม่กำลังเปิดตัว',
    available: false,
    comingSoonNote: 'เปิดตัวเร็ว ๆ นี้',
  },
  {
    id: 12,
    title: 'Coming Soon',
    description: 'กำลังอัปเดตบริการใหม่ โปรดติดตามเร็ว ๆ นี้',
    price: '-',
    image: '/images/services/service12.webp',
    altText: 'ภาพประกอบบริการใหม่ Coming Soon',
    available: false,
    comingSoonNote: 'ติดตามเร็ว ๆ นี้',
  },
]