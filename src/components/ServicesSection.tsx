import React from "react";
import { motion } from "framer-motion";

interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "ที่ปรึกษายื่นกู้สินเชื่อ",
    description:
      "เราจะดูแลในเรื่องการหาสินเชื่อให้สอดคล้องกับโปรไฟล์ลูกค้า ไม่ให้ลูกค้าไปยื่นเองโดยไม่มีความรู้ วางแผนให้ทุกอย่างอย่างมืออาชีพ รวบรวมรายละเอียดครบถ้วน วิเคราะห์เงื่อนไขของธนาคารอย่างละเอียด เพื่อเพิ่มโอกาสในการอนุมัติสินเชื่ออย่างมั่นใจ",
    price: "4,000 - 300,000 บาท",
    image: "/images/services/service1.png",
  },
  {
    id: 2,
    title: "รับดูแลเอกสารยื่นวีซ่า",
    description:
      "เราออกแบบบริการเพื่อสาวสายทำงานตรงโดยเฉพาะ ดูแลทุกขั้นตอนของเอกสาร ตรวจสอบและแต่งเติมให้ครบตามเงื่อนไขของประเทศปลายทาง เน้นให้ผ่านจริง โดยเข้าใจธุรกิจและฐานลูกค้าเป็นอย่างดี",
    price: "4,000 บาทขึ้นไป",
    image: "/images/services/service2.png",
  },
  {
    id: 3,
    title: "แก้ไข สร้างใหม่ สลิป / เอกสาร",
    description:
      "แก้ไขได้ทุกจุดในสลิป ใช้ font และ background ล่าสุด มีโปรโมชั่น 10 ใบ 500 บาท สะสมไว้ใช้วันหลังได้จนกว่าจะหมด เหมาะสำหรับผู้ต้องการความยืดหยุ่นในการใช้งาน",
    price: "100 บาท/ใบ",
    image: "/images/services/service3.png",
  },
  {
    id: 4,
    title: "แก้ไข-สร้างใหม่-จัดหาเอกสาร",
    description:
      "บริการแก้ไข ≤ 4 รายการเริ่ม 400 บาท / สร้างใหม่เริ่ม 600 บาท / จัดหาเอกสารรูปแบบต่าง ๆ ตามความต้องการของลูกค้า ครอบคลุมการใช้งานหลายกรณี",
    price: "เริ่มต้น 400 - 600 บาท",
    image: "/images/services/service4.png",
  },
  {
    id: 5,
    title: "ชิ้นงานจริงบัตรแข็ง/อ่อน",
    description:
      "ดูตัวอย่างชิ้นงานจริงได้ (มีลายน้ำรูปแมวป้องกัน) จัดส่งปลอดภัยทางรถทัวร์ Grab หรือ Uber เท่านั้น ไม่รับมือ หลีกเลี่ยงความเสี่ยง",
    price: "เริ่มต้น 4,500 บาท",
    image: "/images/services/service5.png",
  },
  {
    id: 6,
    title: "ดูแลการตลาดครบวงจร",
    description:
      "ควบคุมภาพลักษณ์ ออกแบบธุรกิจให้ดูน่าเชื่อถือในแต่ละสายอาชีพ วิเคราะห์กลุ่มเป้าหมาย สร้างคอนเทนต์เฉพาะทาง พร้อมวางแผนกลยุทธ์ล่วงหน้า 3 เดือน เหมาะทั้งสายขาว ดำ และเทา",
    price: "5,000 - 500,000 บาท",
    image: "/images/services/service6.png",
  },
  {
    id: 7,
    title: "ออกแบบโลโก้/แบนเนอร์/ทีม",
    description:
      "ชิ้นงานคุณภาพส่งมอบทั้ง JPG และ PNG (โปร่งใส) พร้อมใช้งานในทุกแพลตฟอร์ม เหมาะสำหรับสร้างแบรนด์ใหม่หรือรีแบรนด์",
    price: "เริ่มต้น 300 บาท",
    image: "/images/services/service7.png",
  },
  {
    id: 8,
    title: "ระบบหลังบ้านธุรกิจ",
    description:
      "สร้างระบบครบวงจร เช่น Line OA, กลุ่ม Telegram, ระบบแจ้งเตือนอัตโนมัติ และ Bot รับลูกค้า คุณสามารถนอนพัก ลูกค้าเดินเข้ามาเอง",
    price: "เริ่มต้น 4,000 บาท",
    image: "/images/services/service8.png",
  },
  {
    id: 9,
    title: "โครงการให้น้องได้พักผ่อน",
    description:
      "AI จะคัดกรองกลุ่มลูกค้าเฉพาะ เช่น friend, thaionly ดึงเข้าสู่ระบบ Line OA และ Telegram พร้อมระบบตอบกลับอัตโนมัติ คุณเลือกงานได้ตามใจ ระบบทำงานแทนคุณ",
    price: "เริ่มต้น 5,000 บาท",
    image: "/images/services/service9.png",
  },
  {
    id: 10,
    title: "สร้างภาพลักษณ์ / ทำลายภาพลักษณ์",
    description:
      "บริการเฉพาะทางระดับลึก บางสิ่งคุณทำเองไม่ได้ เราทำให้ได้โดยไม่ผิดกฎหมาย (ยกเว้นการทำร้ายร่างกาย) ใช้ได้ทั้งการยกระดับและลบภาพในอดีต",
    price: "เริ่มต้น 5,000 บาท",
    image: "/images/services/service10.png",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <motion.section
      aria-labelledby="services-title"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.15 }}
    >
      <motion.h2
        id="services-title"
        className="text-3xl font-bold text-center mb-12 text-base-content"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        บริการของเรา
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(({ id, title, description, price, image }) => (
          <motion.div
            key={id}
            className="bg-base-100 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: id * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={image}
              alt={`ภาพประกอบบริการ ${title}`}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold text-base-content mb-2">
                {title}
              </h3>
              <p className="text-sm text-base-content/70 mb-2">{description}</p>
              <p className="text-sm font-medium text-primary">ราคา: {price}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default ServicesSection;