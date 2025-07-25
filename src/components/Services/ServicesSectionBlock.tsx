// src/components/Services/ServicesSectionBlock.tsx
// ✅ แสดงรายการบริการที่เปิดให้ใช้งาน พร้อมรองรับการเรียกใช้งานผ่าน onRequestService

import React from 'react';
import { services } from '@data/services';
import { Service } from '@types/service';
import ServiceCard from './ServiceCard';

interface ServicesSectionBlockProps {
  onRequestService: (serviceId: number) => void;
}

const ServicesSectionBlock: React.FC<ServicesSectionBlockProps> = ({
  onRequestService,
}) => {
  const availableServices = services.filter((s: Service) => s.available);

  return (
    <section id="services" className="bg-base-100 py-20 text-base-content">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold">บริการของเรา</h2>

        {availableServices.length > 0 ? (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {availableServices.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onRequestService={onRequestService}
              />
            ))}
          </div>
        ) : (
          <div className="mt-12 text-center text-gray-500">
            ขออภัย ยังไม่มีบริการที่เปิดให้ใช้งานในขณะนี้
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSectionBlock;
