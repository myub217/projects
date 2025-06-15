// src/components/ServicesSection.tsx
import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, LineChart } from "lucide-react";
import { motion } from "framer-motion";

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
      className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-20 relative"
    >
      <div className="text-center mb-16">
        <h2 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-orange-400 to-yellow-300">
          บริการครบวงจร
        </h2>
        <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
          ครอบคลุมทุกมิติของความสำเร็จ: เอกสาร ● การเงิน ● การตลาด ● ระบบหลังบ้าน ● AI
        </p>
      </div>

      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <motion.div
            key={service.id}
            className="group rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-1.5 hover:scale-[1.01] transition-all duration-500 bg-white dark:bg-gray-900 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: service.id * 0.05 }}
          >
            <div className="relative h-48 overflow-hidden">
              <img
                loading="lazy"
                src={service.image}
                alt={`บริการ ${service.title} | JP Visual & Docs`}
                aria-label={`บริการ ${service.title}`}
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    "/images/services/ccom.png";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-all duration-300" />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow leading-relaxed">
                {service.description}
              </p>
              <div className="mt-3 space-y-1">
                <p className="text-base font-semibold text-red-600 dark:text-red-400">
                  {service.price}
                </p>
                {service.duration && (
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    ระยะเวลา: {service.duration}
                  </p>
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-4 items-center">
                {service.link ? (
                  <Link
                    to={service.link}
                    className="text-sm text-red-600 hover:text-red-700 dark:hover:text-red-400 font-medium flex items-center gap-1"
                    aria-label={`ดูรายละเอียดเพิ่มเติมสำหรับ ${service.title}`}
                  >
                    ดูเพิ่มเติม <ArrowRight size={16} />
                  </Link>
                ) : (
                  <span className="text-sm text-gray-400 italic">
                    สอบถามบริการนี้ผ่าน LINE
                  </span>
                )}
                <a
                  href="https://lin.ee/XJZ7H4u"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`แอด LINE สำหรับบริการ ${service.title}`}
                  className="text-sm text-green-600 hover:text-green-700 dark:hover:text-green-400 font-medium flex items-center gap-1"
                >
                  แอด LINE <LineChart size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <p className="text-xl sm:text-2xl text-gray-800 dark:text-gray-200 font-medium mb-6">
          อย่าปล่อยให้โอกาสผ่านไป — ปรึกษาเราฟรี ไม่มีค่าใช้จ่าย
        </p>
        <a
          href="https://lin.ee/XJZ7H4u"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="แอด LINE JP Visual & Docs"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-orange-500 hover:from-red-700 hover:to-orange-600 text-white text-base font-bold px-8 py-3 rounded-full shadow-xl hover:shadow-2xl active:scale-95 transition-all"
        >
          แอด LINE @462FQTFC
          <LineChart size={18} />
        </a>
      </div>
    </section>
  );
};

export default ServicesSection;