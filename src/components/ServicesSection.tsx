import React from "react";
import serviceImg from "../assets/service-visa.webp";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "บริการขอวีซ่าทุกประเภท",
    description:
      "ให้คำปรึกษาและดำเนินการขอวีซ่าท่องเที่ยว, วีซ่านักเรียน, วีซ่าธุรกิจ, วีซ่าถาวร สำหรับทุกประเทศ เช่น อเมริกา ออสเตรเลีย แคนาดา อังกฤษ ยุโรป และเอเชีย",
    image: serviceImg,
    alt: "บริการขอวีซ่าท่องเที่ยวและธุรกิจ",
  },
  {
    id: 2,
    title: "ประกันการเดินทาง",
    description:
      "จัดหาประกันภัยการเดินทางระหว่างประเทศ ครอบคลุมค่ารักษา ค่าชดเชย และเหตุสุดวิสัย พร้อมเอกสารประกอบการขอวีซ่า",
    image: serviceImg,
    alt: "บริการประกันการเดินทาง",
  },
  {
    id: 3,
    title: "ที่ปรึกษาด้านกฎหมายและการเงิน",
    description:
      "วิเคราะห์โปรไฟล์ ตรวจสอบเอกสาร ประเมินความเสี่ยง และให้คำปรึกษาเรื่องบัญชี ธุรกิจ และกฎหมายที่เกี่ยวข้องกับการยื่นวีซ่า",
    image: serviceImg,
    alt: "ที่ปรึกษาด้านเอกสารและการเงิน",
  },
  {
    id: 4,
    title: "บริการจองตั๋วและที่พัก",
    description:
      "จองตั๋วเครื่องบิน โรงแรม โฮสเทล และที่พักระยะยาว ราคาพิเศษ พร้อมยื่นเอกสารประกอบการขอวีซ่า",
    image: serviceImg,
    alt: "บริการจองตั๋วเครื่องบินและโรงแรม",
  },
  {
    id: 5,
    title: "แปลเอกสารและรับรอง",
    description:
      "บริการแปลเอกสารราชการ, สัญญา, หนังสือรับรอง พร้อมรับรองโดยผู้แปลมืออาชีพหรือศูนย์แปลที่ได้รับอนุญาต",
    image: serviceImg,
    alt: "แปลเอกสารราชการและรับรอง",
  },
  {
    id: 6,
    title: "วางแผนการเดินทาง",
    description:
      "จัดทำแผนการเดินทางที่เหมาะสม พร้อมตารางเที่ยว บริการจองรถ/ทัวร์ และคำแนะนำพิเศษตามประเทศปลายทาง",
    image: serviceImg,
    alt: "บริการวางแผนการเดินทางส่วนตัว",
  },
  {
    id: 7,
    title: "ต่ออายุ/ยื่นขอวีซ่าใหม่",
    description:
      "บริการยื่นขอวีซ่าใหม่หรือต่ออายุ พร้อมจัดเตรียมเอกสารและให้คำปรึกษาเพื่อเพิ่มโอกาสผ่านสูงสุด",
    image: serviceImg,
    alt: "บริการต่ออายุวีซ่า",
  },
  {
    id: 8,
    title: "บริการหลังการยื่น",
    description:
      "ติดตามผลวีซ่า ประสานงานกับสถานทูต จัดเตรียมคำตอบสัมภาษณ์ และช่วยเหลือกรณีวีซ่าถูกปฏิเสธ",
    image: serviceImg,
    alt: "บริการหลังการยื่นวีซ่า",
  },
];

const Services: React.FC = () => {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="py-16 bg-base-200"
      role="region"
    >
      <div className="container mx-auto px-4">
        <h2
          id="services-title"
          className="text-4xl font-bold text-center mb-12 text-primary"
        >
          บริการของเรา
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ id, title, description, image, alt }) => (
            <article
              key={id}
              className="card bg-base-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in"
              tabIndex={0}
            >
              <figure className="overflow-hidden rounded-t-lg">
                <img
                  src={image}
                  alt={alt}
                  className="w-full h-40 object-cover rounded-t-lg transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "/src/assets/fallback-image.png";
                  }}
                />
              </figure>
              <div className="card-body px-6 py-4">
                <h3 className="card-title text-accent text-lg font-semibold">
                  {title}
                </h3>
                <p className="text-sm text-secondary">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;