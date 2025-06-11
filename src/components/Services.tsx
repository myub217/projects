import serviceImage from "../assets/service-visa.webp";

interface Service {
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    title: "ขอวีซ่าท่องเที่ยว",
    description:
      "ช่วยยื่นขอวีซ่าท่องเที่ยวประเทศต่าง ๆ อย่างมืออาชีพ พร้อมคำแนะนำและตรวจสอบเอกสารครบถ้วน",
    image: serviceImage,
  },
  {
    title: "วีซ่านักเรียน",
    description:
      "บริการยื่นวีซ่านักเรียนสำหรับการศึกษาต่อในต่างประเทศ พร้อมดูแลเอกสารและคำแนะนำที่ถูกต้องตามกฎหมาย",
    image: serviceImage,
  },
  {
    title: "วีซ่าธุรกิจ",
    description:
      "จัดการยื่นขอวีซ่าธุรกิจเพื่อทำงานหรือทำกิจการในต่างประเทศ พร้อมคำปรึกษาที่เชี่ยวชาญ",
    image: serviceImage,
  },
  {
    title: "วีซ่าถาวร",
    description:
      "ช่วยวางแผนและดำเนินการขอวีซ่าถาวรสำหรับผู้ที่ต้องการตั้งถิ่นฐานในต่างประเทศอย่างถูกต้อง",
    image: serviceImage,
  },
  {
    title: "ปรึกษาด้านกฎหมาย",
    description:
      "ให้คำปรึกษาด้านกฎหมายที่เกี่ยวข้องกับการเดินทาง การยื่นเอกสาร และวีซ่าต่าง ๆ โดยทีมงานมืออาชีพ",
    image: serviceImage,
  },
  {
    title: "แปลเอกสาร",
    description:
      "บริการแปลเอกสารทางราชการและเอกสารสำคัญต่าง ๆ ด้วยความแม่นยำและรับรองตามมาตรฐานสากล",
    image: serviceImage,
  },
  {
    title: "จองตั๋วเครื่องบิน",
    description:
      "บริการช่วยจองตั๋วเครื่องบินราคาพิเศษสำหรับลูกค้าที่ใช้บริการด้านวีซ่ากับเรา",
    image: serviceImage,
  },
  {
    title: "จองที่พัก",
    description:
      "ช่วยจัดหาที่พักที่เหมาะสมและคุ้มค่าในต่างประเทศตามความต้องการของลูกค้า",
    image: serviceImage,
  },
];

export default function ServicesSection() {
  // ฟังก์ชันจัดการกรณีโหลดรูปไม่สำเร็จ
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = "/fallback-image.png"; // เปลี่ยนเป็น path รูป fallback ของคุณ
  };

  return (
    <section
      id="services"
      aria-label="บริการของเรา"
      className="py-12 bg-white text-center"
      role="region"
    >
      <h2 className="text-4xl font-bold mb-8 text-primary">บริการของเรา</h2>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 px-4 max-w-6xl mx-auto"
        role="list"
      >
        {services.map(({ title, description, image }, index) => (
          <article
            key={index}
            role="listitem"
            tabIndex={0}
            className="bg-gray-100 shadow-md rounded-lg hover:shadow-xl focus:shadow-xl transition-shadow duration-300 animate-fade-in cursor-pointer outline-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <figure className="overflow-hidden rounded-t-lg">
              <img
                src={image}
                alt={`บริการ: ${title}`}
                loading="lazy"
                className="h-40 w-full object-cover rounded-t-lg transform transition-transform duration-300 hover:scale-105"
                onError={handleImageError}
              />
            </figure>
            <div className="px-6 py-4">
              <h3 className="text-lg text-accent font-semibold">{title}</h3>
              <p className="text-sm text-gray-700 mt-2">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}