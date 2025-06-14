import React from "react";
import { Link } from "react-router-dom";
import { LucideArrowRight, LucideLineChart } from "lucide-react";

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
    <section id="services" className="max-w-7xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="text-center mb-14">
        <h2 className="text-5xl font-black tracking-tight text-red-600 dark:text-red-500">
          บริการครบวงจร
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          ครอบคลุมทุกมิติของความสำเร็จ: เอกสาร ● การเงิน ● การตลาด ● ระบบหลังบ้าน ● AI
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="rounded-2xl bg-white dark:bg-gray-900 shadow-lg hover:shadow-2xl transition-all overflow-hidden flex flex-col"
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-48 w-full object-cover"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src =
                  "/images/services/ccom.png";
              }}
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 flex-grow">
                {service.description}
              </p>
              <div className="mt-3">
                <p className="text-red-600 font-semibold">{service.price}</p>
                {service.duration && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    ระยะเวลา: {service.duration}
                  </p>
                )}
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {service.link && (
                  <Link
                    to={service.link}
                    className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center gap-1"
                  >
                    ดูเพิ่มเติม <LucideArrowRight size={16} />
                  </Link>
                )}
                <a
                  href="https://lin.ee/XJZ7H4u"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-600 hover:text-green-700 font-medium flex items-center gap-1"
                >
                  แอด LINE <LucideLineChart size={16} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-24 text-center">
        <p className="text-xl text-gray-800 dark:text-gray-200 font-medium mb-4">
          อย่าปล่อยให้โอกาสผ่านไป — ปรึกษาเราฟรี ไม่มีค่าใช้จ่าย
        </p>
        <a
          href="https://lin.ee/XJZ7H4u"
          className="inline-block bg-red-600 hover:bg-red-700 text-white text-base font-bold px-8 py-3 rounded-full shadow-lg transition-all"
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