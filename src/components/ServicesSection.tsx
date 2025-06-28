// src/components/ServicesSection.tsx
import React from "react";
import { services } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";

const ServicesSection: React.FC = () => {
  const availableServices = services.filter((s) => s.available);
  const comingSoonServices = services.filter((s) => !s.available);

  const handleRequest = (service: typeof services[number]) => {
    alert(`คุณเลือกบริการ: ${service.title}`);
    // หรือใช้ modal / form / redirect / analytics ต่อได้ที่นี่
  };

  return (
    <section
      id="services"
      role="region"
      aria-labelledby="services-title"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-base-200"
    >
      {/* Section Header */}
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

      {/* Available Services */}
      {availableServices.length > 0 && (
        <div
          className="mt-12"
          role="region"
          aria-labelledby="available-services-title"
        >
          <h3
            id="available-services-title"
            className="text-xl font-semibold text-gray-900 dark:text-white mb-6 text-left"
          >
            พร้อมให้บริการ
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {availableServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onRequest={handleRequest}
              />
            ))}
          </div>
        </div>
      )}

      {/* Coming Soon Services */}
      {comingSoonServices.length > 0 && (
        <div
          className="mt-16"
          role="region"
          aria-labelledby="coming-soon-services-title"
        >
          <h3
            id="coming-soon-services-title"
            className="text-xl font-semibold text-gray-500 dark:text-gray-400 mb-6 text-left"
          >
            บริการที่จะมาเร็ว ๆ นี้
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {comingSoonServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                disabled={true}
                onRequest={handleRequest}
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;