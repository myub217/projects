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
    description: `• วิเคราะห์โปรไฟล์ลูกค้าอย่างละเอียดเพื่อเข้ากับเงื่อนไขธนาคารแต่ละแห่ง
• วางแผนจัดชุดเอกสารครบถ้วนเหมาะสมกับเป้าหมายสินเชื่อ เช่น สินเชื่อบุคคล, SME, รีไฟแนนซ์
• ราคาเริ่มต้นตั้งแต่ 4,000 – 300,000 บาท
• เหมาะสำหรับเจ้าของธุรกิจ, ฟรีแลนซ์, ผู้มีโปรไฟล์ไม่สมบูรณ์ ต้องการคำแนะนำอย่างมืออาชีพ`,
    image: "https://i.imgur.com/IuTnf7S.png",
  },
  // ... (ข้อมูลอื่นคงเดิม)
];

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\wก-๙\s-]/g, "") // ลบอักขระพิเศษ ยกเว้นภาษาไทย
    .trim()
    .replace(/\s+/g, "-");
}

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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto" role="list">
        {services.map(({ title, description, image }, index) => {
          const id = slugify(title) + `-${index}`;

          return (
            <article
              key={id}
              role="listitem"
              tabIndex={0}
              className="bg-gray-100 shadow-md rounded-lg transition-shadow duration-300 hover:shadow-xl focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 animate-fade-in"
              aria-describedby={id}
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
              <div className="px-6 py-4 text-left">
                <h3 className="text-lg text-accent font-semibold">{title}</h3>
                <p className="text-sm text-gray-700 mt-2 whitespace-pre-line" id={id}>
                  {description}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}