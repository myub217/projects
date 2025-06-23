// src/components/ServicesSection.tsx
import React from "react";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

const ServicesSection: React.FC = () => {
  // แยกบริการที่เปิดให้ใช้งาน และบริการที่จะมาเร็ว ๆ นี้
  const availableServices = services.filter((s) => s.available);
  const comingSoonServices = services.filter((s) => !s.available);

  return (
    <section
      id="services"
      role="region"
      aria-labelledby="services-title"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-base-200"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2
          id="services-title"
          className="text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          บริการของเรา
        </h2>
        <p className="mt-4 text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          สำรวจบริการที่เราพร้อมให้คำปรึกษาและดำเนินการให้คุณครบวงจร
        </p>
      </div>

      {/* บริการที่เปิดให้ใช้งาน */}
      {availableServices.length > 0 && (
        <div className="mt-12" aria-label="บริการพร้อมให้บริการ">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            พร้อมให้บริการ
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableServices.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      )}

      {/* บริการที่จะมาเร็ว ๆ นี้ */}
      {comingSoonServices.length > 0 && (
        <div className="mt-16 opacity-70 select-none pointer-events-none" aria-label="บริการจะมาเร็ว ๆ นี้">
          <h3 className="text-xl font-semibold text-gray-500 dark:text-gray-400 mb-4">
            บริการที่จะมาเร็ว ๆ นี้
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {comingSoonServices.map((service) => (
              <ServiceCard key={service.id} service={service} disabled />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;