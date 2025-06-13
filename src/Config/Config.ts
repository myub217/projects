// src/Config/Config.ts

export interface Service {
  id: number | string;
  title: string;
  description: string;
  image: string;
  link?: string; // ถ้าไม่มีลิงก์ก็ไม่ต้องใส่ก็ได้
}

const services: Service[] = [
  {
    id: 1,
    title: "ยื่นกู้",
    description:
      "บริการยื่นกู้ครบวงจร พร้อมคำปรึกษาและช่วยเตรียมเอกสารอย่างมืออาชีพ\nให้คุณมั่นใจได้ในทุกขั้นตอน",
    image: "/images/services/loan.jpg",
    link: "/services/loan",
  },
  {
    id: 2,
    title: "วีซ่า",
    description:
      "ยื่นขอวีซ่า พร้อมดูแลเอกสารและคำแนะนำเฉพาะบุคคล\nให้คุณเดินทางได้อย่างไร้กังวล",
    image: "/images/services/visa.jpg",
    link: "/services/visa",
  },
  {
    id: 3,
    title: "เอกสารการเงิน",
    description:
      "จัดเตรียมเอกสารการเงินและรายงานต่าง ๆ สำหรับการยื่นขออนุมัติต่าง ๆ\nครบถ้วนตามมาตรฐานสากล",
    image: "/images/services/financial-docs.jpg",
    link: "/services/financial-docs",
  },
  {
    id: 4,
    title: "โปรไฟล์",
    description:
      "สร้างและจัดการโปรไฟล์ธุรกิจหรือบุคคล เพื่อการนำเสนอที่น่าเชื่อถือ\nและมีประสิทธิภาพสูงสุด",
    image: "/images/services/profile.jpg",
    link: "/services/profile",
  },
  {
    id: 5,
    title: "ระบบหลังบ้าน",
    description:
      "ออกแบบและพัฒนาระบบหลังบ้านที่รองรับการทำงานอย่างมีประสิทธิภาพ\nและง่ายต่อการบริหารจัดการ",
    image: "/images/services/backend.jpg",
    link: "/services/backend",
  },
  {
    id: 6,
    title: "ทีมงานมืออาชีพ",
    description:
      "ทีมงานผู้เชี่ยวชาญที่พร้อมให้คำปรึกษาและช่วยเหลือในทุกขั้นตอน\nเพื่อให้คุณได้รับบริการที่ดีที่สุด",
    image: "/images/services/pro-team.jpg",
  },
  {
    id: 7,
    title: "ปรึกษาฟรี",
    description:
      "ให้คำปรึกษาฟรีเกี่ยวกับการยื่นกู้ วีซ่า และเอกสารต่าง ๆ\nเพื่อวางแผนการดำเนินงานอย่างมีประสิทธิภาพ",
    image: "/images/services/consulting.jpg",
  },
  {
    id: 8,
    title: "บริการพิเศษ",
    description:
      "บริการเสริมและดูแลหลังการยื่นเอกสารเพื่อความสบายใจของคุณ\nพร้อมทีมงานดูแลตลอดเวลา",
    image: "/images/services/special.jpg",
  },
];

const config = {
  services,
};

export default config;