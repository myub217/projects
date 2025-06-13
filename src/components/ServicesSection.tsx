// src/components/ServicesSection.tsx
import React from "react";
import { Link } from "react-router-dom";

interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  duration?: string;
  image: string;
  link?: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "ยื่นกู้",
    description: "บริการยื่นกู้ดอกเบี้ยต่ำ พร้อมเอกสารครบถ้วนและรวดเร็ว",
    price: "เริ่มต้น 5,000 บาท",
    duration: "3-7 วันทำการ",
    image: "/images/services/loan.png",
    link: "/loan",
  },
  {
    id: 2,
    title: "ขอวีซ่า",
    description: "ช่วยจัดการขอวีซ่าระยะยาวและสั้น พร้อมคำปรึกษาแบบมืออาชีพ",
    price: "เริ่มต้น 3,000 บาท",
    duration: "7-14 วันทำการ",
    image: "/images/services/visa.png",
    link: "/visa",
  },
  {
    id: 3,
    title: "จัดการเอกสาร",
    description: "บริการจัดการเอกสารสำคัญทุกประเภท ครบวงจรและปลอดภัย",
    price: "เริ่มต้น 2,000 บาท",
    duration: "1-3 วันทำการ",
    image: "/images/services/financial-docs.png",
  },
  {
    id: 4,
    title: "ที่ปรึกษาการเงิน",
    description: "ให้คำปรึกษาด้านการเงินส่วนบุคคลและธุรกิจอย่างมืออาชีพ",
    price: "เริ่มต้น 4,000 บาท / ครั้ง",
    duration: "ตามนัดหมาย",
    image: "/images/services/consulting.jpg",
  },
  {
    id: 5,
    title: "ระบบหลังบ้าน",
    description: "พัฒนาระบบหลังบ้านช่วยจัดการงานและข้อมูลอย่างมีประสิทธิภาพ",
    price: "เริ่มต้น 15,000 บาท",
    duration: "2-4 สัปดาห์",
    image: "/images/services/backend.jpg",
  },
  {
    id: 6,
    title: "ทีมงานมืออาชีพ",
    description: "ทีมงานคุณภาพพร้อมให้บริการอย่างรวดเร็วและมีประสิทธิภาพ",
    price: "บริการรายเดือน เริ่มต้น 8,000 บาท",
    duration: "รายเดือน",
    image: "/images/services/pro-team.jpg",
  },
  {
    id: 7,
    title: "บริการพิเศษ",
    description: "บริการเสริมและดูแลเฉพาะด้านตามความต้องการของลูกค้า",
    price: "สอบถามราคา",
    duration: "ตามข้อตกลง",
    image: "/images/services/special.jpg",
  },
  {
    id: 8,
    title: "เอกสารโปรไฟล์",
    description: "จัดทำโปรไฟล์และเอกสารสำหรับนำเสนอธุรกิจหรือบุคคล",
    price: "เริ่มต้น 3,500 บาท",
    duration: "5-7 วันทำการ",
    image: "/images/services/profile.jpg",
  },
  {
    id: 9,
    title: "Coming Soon",
    description: "รายละเอียดกำลังจะมาเร็ว ๆ นี้",
    price: "Coming Soon",
    duration: "Coming Soon",
    image: "/images/services/ccom.png",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="max-w-6xl mx-auto px-6 py-16"
      aria-label="บริการของเรา"
    >
      <h2 className="text-4xl font-extrabold text-center mb-12 text-red-600">
        บริการของเรา
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition"
          >
            <img
              src={service.image}
              alt={`บริการ: ${service.title}`}
              className="w-full h-48 object-cover"
              loading="lazy"
              draggable={false}
              onError={(e) => {
                // ถ้าภาพ service หายหรือโหลดไม่ขึ้น ใช้ fallback ที่มีอยู่จริง
                (e.currentTarget as HTMLImageElement).src = "/images/services/ccom.png";
              }}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">{service.description}</p>
              <p className="mt-1 font-bold text-red-600">{service.price}</p>
              {service.duration && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  ระยะเวลา: {service.duration}
                </p>
              )}
              {service.link && (
                <Link
                  to={service.link}
                  className="inline-block mt-4 text-red-600 hover:underline"
                >
                  ดูรายละเอียดเพิ่มเติม &rarr;
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;