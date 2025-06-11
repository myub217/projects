import serviceImage from "../assets/service-visa.webp";

const services = [
  "ขอวีซ่าท่องเที่ยว",
  "วีซ่านักเรียน",
  "วีซ่าธุรกิจ",
  "วีซ่าถาวร",
  "ปรึกษาด้านกฎหมาย",
  "แปลเอกสาร",
  "จองตั๋วเครื่องบิน",
  "จองที่พัก",
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-12 bg-base-100 text-center">
      <h2 className="text-4xl font-bold mb-8 text-primary">บริการของเรา</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="card bg-base-200 shadow-md rounded-lg hover:shadow-xl transition-shadow duration-300"
          >
            <figure className="overflow-hidden rounded-t-lg">
              <img
                src={serviceImage}
                alt={service}
                loading="lazy"
                className="h-40 w-full object-cover rounded-t-lg transform transition-transform duration-300 hover:scale-105"
              />
            </figure>
            <div className="card-body px-6 py-4">
              <h3 className="card-title text-lg text-accent">{service}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}