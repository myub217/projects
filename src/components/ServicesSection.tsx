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
    description: "ขอวีซ่าระยะยาวและสั้น พร้อมคำปรึกษาแบบมืออาชีพ",
    price: "เริ่มต้น 3,000 บาท",
    duration: "7-14 วันทำการ",
    image: "/images/services/visa.png",
    link: "/visa",
  },
  {
    id: 3,
    title: "SLIBBANK",
    description: "บริการทางเลือกใหม่เพื่อเข้าถึงแหล่งเงินทุนออนไลน์",
    price: "เริ่มต้น 4,000 บาท",
    duration: "5-7 วันทำการ",
    image: "/images/services/financial-docs.png",
  },
  {
    id: 4,
    title: "เอกสารราชการ & แปล",
    description: "บริการจัดเตรียมเอกสารราชการ แปลภาษา และรับรองครบวงจร",
    price: "เริ่มต้น 2,500 บาท",
    duration: "1-5 วันทำการ",
    image: "/images/services/consulting.jpg",
  },
  {
    id: 5,
    title: "ผลิตบัตรต่าง ๆ",
    description: "ออกแบบ-ผลิต บัตรพนักงาน บัตรสมาชิก ฯลฯ",
    price: "เริ่มต้น 1,500 บาท",
    duration: "3-5 วันทำการ",
    image: "/images/services/backend.jpg",
  },
  {
    id: 6,
    title: "โลโก้ & เอกสารโปรไฟล์",
    description: "ออกแบบโลโก้ และโปรไฟล์นำเสนอธุรกิจหรือบุคคล",
    price: "เริ่มต้น 3,500 บาท",
    duration: "5-7 วันทำการ",
    image: "/images/services/profile.jpg",
  },
  {
    id: 7,
    title: "ระบบการตลาด & หน้าเพจ",
    description: "ออกแบบระบบเพจ โปรโมทสินค้า ยิงแอด พร้อมระบบจัดการ",
    price: "เริ่มต้น 12,000 บาท",
    duration: "1-2 สัปดาห์",
    image: "/images/services/special.jpg",
  },
  {
    id: 8,
    title: "AI Matching & ระบบหลังบ้าน",
    description: "ระบบหลังบ้านอัจฉริยะเชื่อมโยงข้อมูลและจับคู่แบบ AI",
    price: "เริ่มต้น 18,000 บาท",
    duration: "2-4 สัปดาห์",
    image: "/images/services/pro-team.jpg",
  },
  {
    id: 9,
    title: "บริการลับๆ เฉพาะทาง",
    description: "สอบถามรายละเอียดเฉพาะทางแบบส่วนตัวผ่าน LINE เท่านั้น",
    price: "สอบถามราคา",
    duration: "ตามข้อตกลง",
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
      {/* หัวข้อหลัก */}
      <h2 className="text-4xl font-extrabold text-center mb-6 text-red-600">
        บริการของเรา
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
        ครอบคลุมตั้งแต่เอกสาร การเงิน การตลาด ระบบหลังบ้าน จนถึง AI
      </p>

      {/* Grid บริการ */}
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
                (e.currentTarget as HTMLImageElement).src =
                  "/images/services/ccom.png";
              }}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {service.description}
              </p>
              <p className="mt-1 font-bold text-red-600">{service.price}</p>
              {service.duration && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  ระยะเวลา: {service.duration}
                </p>
              )}

              {/* ปุ่มลิงก์เพิ่มเติม */}
              <div className="mt-4 space-x-3">
                {service.link && (
                  <Link
                    to={service.link}
                    className="inline-block text-red-600 hover:underline"
                  >
                    ดูรายละเอียดเพิ่มเติม &rarr;
                  </Link>
                )}
                <a
                  href="https://lin.ee/XJZ7H4u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-green-600 hover:underline"
                >
                  ติดต่อผ่าน LINE
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA ส่วนล่าง */}
      <div className="text-center mt-16">
        <p className="text-gray-700 dark:text-gray-300 mb-2">
          สนใจบริการ? แอดไลน์เพื่อปรึกษาฟรี!
        </p>
        <a
          href="https://lin.ee/XJZ7H4u"
          className="inline-block bg-red-600 text-white px-6 py-2 rounded-full font-medium shadow hover:bg-red-700 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          แอด LINE @462FQTFC
        </a>
      </div>
    </section>
  );
};

export default ServicesSection;