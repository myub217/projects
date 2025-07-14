// src/data/servicesData.ts

export interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  altText: string;
  available: boolean;
  comingSoonNote?: string | null;
}

export const services: Service[] = [
  {
    id: 1,
    title: "ที่ปรึกษายื่นกู้สินเชื่อ",
    description:
      "ดูแลครบวงจร ตั้งแต่วิเคราะห์เงื่อนไขธนาคาร จัดเตรียมเอกสาร จนถึงยื่นเรื่อง เพิ่มโอกาสอนุมัติจริง",
    price: "4,000 - 300,000 บาท",
    image: "/images/services/service1.webp",
    altText: "ภาพประกอบบริการที่ปรึกษายื่นกู้สินเชื่อ",
    available: true,
  },
  {
    id: 2,
    title: "รับดูแลเอกสารยื่นวีซ่า",
    description:
      "ออกแบบและตรวจเอกสารยื่นวีซ่าสำหรับสาวสายทำงาน ปรับแต่งครบถ้วนตรงข้อกำหนด",
    price: "4,000 บาทขึ้นไป",
    image: "/images/services/service2.webp",
    altText: "ภาพประกอบบริการดูแลเอกสารยื่นวีซ่า",
    available: true,
  },
  {
    id: 3,
    title: "แก้ไข สร้างใหม่ สลิป / เอกสาร",
    description:
      "แก้ไขจุดสำคัญหรือสร้างใหม่ให้เหมือนจริง ใช้ฟอนต์และพื้นหลังล่าสุด เหมาะสำหรับงานเอกสารยืดหยุ่น",
    price: "100 บาท/ใบ",
    image: "/images/services/service3.webp",
    altText: "ภาพประกอบบริการแก้ไขสร้างใหม่สลิปเอกสาร",
    available: true,
  },
  {
    id: 4,
    title: "แก้ไข-สร้างใหม่-จัดหาเอกสาร",
    description:
      "รวมบริการทุกแบบ: แก้ไข สร้างใหม่ และจัดหาเอกสารตามต้องการ ครอบคลุมทุกความจำเป็น",
    price: "เริ่มต้น 400 - 600 บาท",
    image: "/images/services/service4.webp",
    altText: "ภาพประกอบบริการแก้ไขสร้างใหม่จัดหาเอกสาร",
    available: true,
  },
  {
    id: 5,
    title: "ชิ้นงานจริงบัตรแข็ง/อ่อน",
    description:
      "งานจริงพร้อมลายน้ำแมว จัดส่งผ่านบริการมืออาชีพ ลดความเสี่ยง ปลอดภัยแน่นอน",
    price: "เริ่มต้น 4,500 บาท",
    image: "/images/services/service5.webp",
    altText: "ภาพประกอบชิ้นงานจริงบัตรแข็งและอ่อน",
    available: true,
  },
  {
    id: 6,
    title: "ดูแลการตลาดครบวงจร",
    description:
      "วางแผนการตลาดล่วงหน้า 3 เดือน พร้อมออกแบบภาพลักษณ์ แคมเปญ และคอนเทนต์ที่เหมาะกับกลุ่มเป้าหมาย",
    price: "5,000 - 500,000 บาท",
    image: "/images/services/service6.webp",
    altText: "ภาพประกอบบริการดูแลการตลาดครบวงจร",
    available: true,
  },
  {
    id: 7,
    title: "ออกแบบโลโก้/แบนเนอร์/ทีม",
    description:
      "สร้างภาพลักษณ์ด้วยโลโก้และแบนเนอร์คุณภาพสูง รองรับทุกช่องทาง พร้อมไฟล์โปร่งใส",
    price: "เริ่มต้น 300 บาท",
    image: "/images/services/service7.webp",
    altText: "ภาพประกอบบริการออกแบบโลโก้และแบนเนอร์",
    available: true,
  },
  {
    id: 8,
    title: "ระบบหลังบ้านธุรกิจ",
    description:
      "ตั้งค่าระบบ Line OA, Telegram, แจ้งเตือนอัตโนมัติ และบอท ตอบลูกค้าแทนคุณตลอด 24 ชม.",
    price: "เริ่มต้น 4,000 บาท",
    image: "/images/services/service8.webp",
    altText: "ภาพประกอบระบบหลังบ้านธุรกิจ",
    available: true,
  },
  {
    id: 9,
    title: "โครงการให้น้องได้พักผ่อน",
    description:
      "ดึงลูกค้าเข้ากลุ่มปิดด้วยระบบอัตโนมัติพร้อม AI ช่วยจัดการข้อมูล ดูแลทั้งฝั่งลูกค้าและทีมงาน",
    price: "เริ่มต้น 5,000 บาท",
    image: "/images/services/service9.webp",
    altText: "ภาพประกอบโครงการให้น้องได้พักผ่อน",
    available: true,
  },
  {
    id: 10,
    title: "สร้างภาพลักษณ์ / ทำลายภาพลักษณ์",
    description:
      "ช่วยเปลี่ยนภาพลักษณ์องค์กรหรือบุคคล ทั้งทางบวกและลบ (ไม่ผิดกฎหมาย) เหมาะสำหรับธุรกิจที่ต้องการรีแบรนด์",
    price: "เริ่มต้น 5,000 บาท",
    image: "/images/services/service10.webp",
    altText: "ภาพประกอบบริการสร้างภาพลักษณ์และทำลายภาพลักษณ์",
    available: true,
  },
  {
    id: 11,
    title: "Coming Soon",
    description: "-",
    price: "-",
    image: "/images/services/service11.webp",
    altText: "ภาพประกอบบริการใหม่ที่จะมาเร็วๆ นี้",
    available: false,
    comingSoonNote: "บริการใหม่กำลังจะเปิดตัวเร็ว ๆ นี้",
  },
  {
    id: 12,
    title: "Coming Soon",
    description: "-",
    price: "-",
    image: "/images/services/service12.webp",
    altText: "ภาพประกอบบริการใหม่ที่จะมาเร็วๆ นี้",
    available: false,
    comingSoonNote: "ติดตามบริการใหม่ในเร็ว ๆ นี้",
  },
];