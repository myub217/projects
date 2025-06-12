import React from "react";
import fallbackImage from "../assets/fallback-image.png";

interface Service {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: "วางแผนยื่นกู้สินเชื่อแบบตรงจุด",
    description:
      "• วิเคราะห์โปรไฟล์ลูกค้าอย่างละเอียดเพื่อเข้ากับเงื่อนไขธนาคารแต่ละแห่ง\n" +
      "• วางแผนจัดชุดเอกสารครบถ้วนเหมาะสมกับเป้าหมายสินเชื่อ เช่น สินเชื่อบุคคล, SME, รีไฟแนนซ์\n" +
      "• ราคาเริ่มต้นตั้งแต่ 4,000 – 300,000 บาท\n" +
      "• เหมาะสำหรับเจ้าของธุรกิจ, ฟรีแลนซ์, ผู้มีโปรไฟล์ไม่สมบูรณ์ ต้องการคำแนะนำอย่างมืออาชีพ",
    image: "https://i.imgur.com/IuTnf7S.png",
  },
  {
    title: "ดูแลเอกสารยื่นวีซ่าทุกประเภท",
    description:
      "• ตรวจสอบและจัดชุดเอกสารวีซ่าให้ครบถ้วนตามข้อกำหนดประเทศปลายทาง\n" +
      "• คำนวณและจัดเตรียมข้อมูลทางการเงินอย่างสมจริง เพื่อเพิ่มโอกาสผ่านวีซ่า\n" +
      "• รองรับงานด่วนและวีซ่ารอบพิเศษ\n" +
      "• ราคาเริ่มต้น 4,000 บาท\n" +
      "• เหมาะสำหรับผู้ยื่นขอวีซ่าท่องเที่ยว, ธุรกิจ, คู่สมรส",
    image: "https://i.imgur.com/IuTnf7S.png",
  },
  {
    title: "SLIBBANK – สลิปโอนเงิน/รับเงิน (ตรวจสอบได้)",
    description:
      "• สลิปโอนเงิน/รับเงินสมจริง ตรวจสอบได้ ไม่มีข้อมูลมั่ว\n" +
      "• ปรับแต่งชื่อบัญชี, เวลา, โลโก้, ยอดเงิน ตามความต้องการ\n" +
      "• ใช้เป็นหลักฐานยื่นเอกสาร โปรไฟล์ หรือแสดงรายการทางการเงิน\n" +
      "• ราคา 100 บาท/ใบ, แพ็ก 10 ใบ 500 บาท\n" +
      "• เหมาะสำหรับผู้ต้องการสร้างภาพลักษณ์การเงินที่น่าเชื่อถือ",
    image: "https://i.imgur.com/ybpCoKs.png",
  },
  {
    title: "บริการเอกสาร: แก้ไข / สร้างใหม่ / จัดหา",
    description:
      "• รับแก้ไขเอกสาร PDF, Word, ภาพถ่าย หรือฟอร์มออนไลน์\n" +
      "• สร้างเอกสารใหม่สมจริง ใช้งานได้จริง\n" +
      "• จัดหาเอกสารตามความต้องการ เช่น เอกสารราชการ รายการเดินบัญชี ฯลฯ\n" +
      "• ราคาเริ่มต้นแก้ไข 400 บาท, สร้างใหม่ 600 บาท\n" +
      "• เหมาะสำหรับผู้ยื่นกู้, ยื่นวีซ่า หรือยืนยันสถานะต่าง ๆ",
    image: "https://i.imgur.com/ybpCoKs.png",
  },
  {
    title: "ผลิตชิ้นงานจริง (บัตรแข็ง/บัตรพลาสติก)",
    description:
      "• ผลิตบัตรแข็งคุณภาพสูง พร้อมพิมพ์ลายน้ำ, QR Code, และ Hologram\n" +
      "• จัดส่งถึงมืออย่างปลอดภัย พร้อมซองเก็บรักษา\n" +
      "• ราคาเริ่มต้น 4,000 บาท\n" +
      "• เหมาะสำหรับการยื่นงานยืนยันตน หรือแสดงเครดิตที่น่าเชื่อถือ",
    image: "https://i.imgur.com/ybpCoKs.png",
  },
  {
    title: "ออกแบบโลโก้ / แบนเนอร์ / ปกเพจ",
    description:
      "• ออกแบบกราฟิกเน้นความเป็นเอกลักษณ์และตัวตนของแบรนด์ลูกค้า\n" +
      "• ส่งมอบไฟล์ครบชุด PNG, JPG, SVG และ Mockup\n" +
      "• ราคาเริ่มต้น 300 บาท\n" +
      "• เหมาะสำหรับธุรกิจใหม่ ปรับภาพลักษณ์เพจ หรือสร้าง Branding",
    image: "https://i.imgur.com/awWPh8v.png",
  },
  {
    title: "ดูแลการตลาดครบวงจร + ระบบหลังบ้าน",
    description:
      "• วางแผนคอนเทนต์และสร้าง Branding ให้โดดเด่น\n" +
      "• ยิงโฆษณาและออกแบบภาพโปรโมตเพื่อเพิ่มยอดขาย\n" +
      "• ติดตั้งระบบแชทอัตโนมัติ, Bot Line และระบบตอบแชทรวดเร็ว\n" +
      "• รายงานผลแบบมืออาชีพ พร้อม Dashboard สรุปข้อมูล\n" +
      "• ราคาเริ่มต้นตั้งแต่ 5,000 – 500,000 บาท\n" +
      "• เหมาะสำหรับธุรกิจที่ต้องการเติบโตอย่างรวดเร็ว ขยายตลาด และเพิ่มความน่าเชื่อถือ",
    image: "https://i.imgur.com/Fy1c2vn.png",
  },
  {
    title: "โครงการ “ให้น้องได้พักผ่อน” – AI Matching",
    description:
      "• ระบบจับคู่ลูกค้าและงานอัตโนมัติด้วย AI\n" +
      "• จัดการลูกค้า แชท และคิวงานผ่าน LINE / Telegram สะดวกและรวดเร็ว\n" +
      "• เหมาะสำหรับฟรีแลนซ์ที่ไม่ต้องการตอบแชทเอง\n" +
      "• ราคาเริ่มต้น 4,000 บาท\n" +
      "• เหมาะสำหรับคนทำงานสายเอกสาร รับจ้างทั่วไป และบริการหลังบ้าน",
    image: "https://i.imgur.com/5zMJP5e.png",
  },
];

export default function ServicesSection() {
  const handleImageError = (
    e: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = fallbackImage;
  };

  return (
    <section
      id="services"
      aria-label="บริการของ JP Visual & Docs"
      className="py-12 bg-white text-center"
      role="region"
    >
      <h2 className="text-4xl font-bold mb-8 text-primary">บริการของเรา</h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto"
        role="list"
      >
        {services.map(({ title, description, image }) => (
          <article
            key={title}
            role="listitem"
            tabIndex={0}
            className="bg-gray-100 shadow-md rounded-lg transition-shadow duration-300
              hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500
              animate-fade-in cursor-default focus:cursor-pointer"
            aria-describedby={`${title.replace(/\s+/g, "-")}-desc`}
          >
            <figure className="overflow-hidden rounded-t-lg">
              <img
                src={image}
                alt={`ภาพประกอบบริการ: ${title}`}
                loading="lazy"
                className="h-40 w-full object-cover rounded-t-lg transform transition-transform duration-300 hover:scale-105"
                onError={handleImageError}
              />
            </figure>
            <div className="px-6 py-4 text-left whitespace-pre-line">
              <h3 className="text-lg text-accent font-semibold">{title}</h3>
              <p
                className="text-sm text-gray-700 mt-2"
                id={`${title.replace(/\s+/g, "-")}-desc`}
              >
                {description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}