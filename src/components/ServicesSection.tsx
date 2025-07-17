// src/components/ServicesSection.tsx

import React from 'react';
import ServiceCard from './ServiceCard';
import { services } from '@/data/servicesData';
import { getContactHref } from '@/config/contact';

export interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  altText?: string;
  available: boolean;
  comingSoonNote?: string | null;
}

const ServicesSection: React.FC = () => {
  const handleRequest = (service: Service) => {
    const href = getContactHref('line', `สนใจบริการ: ${service.title}`);
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="services"
      role="region"
      aria-label="บริการของเรา"
      className="bg-base-100 py-16 transition-colors duration-500 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          id="services-heading"
          className="mb-12 text-center text-3xl font-extrabold tracking-tight text-primary sm:text-4xl"
        >
          บริการของเรา
        </h2>

        {services.length === 0 ? (
          <p className="text-center text-base-content/70">ไม่มีข้อมูลบริการในขณะนี้</p>
        ) : (
          <div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4"
            role="list"
            aria-labelledby="services-heading"
          >
            {services.map((service) => {
              const isDisabled = !service.available;
              const showNote = isDisabled && service.comingSoonNote;

              return (
                <div
                  key={`${service.id}-${service.title}`}
                  className="flex flex-col"
                  role="listitem"
                  aria-label={`บริการ: ${service.title}`}
                  data-testid={`service-card-${service.id}`}
                >
                  <ServiceCard
                    service={service}
                    disabled={isDisabled}
                    onRequest={!isDisabled ? () => handleRequest(service) : undefined}
                  />

                  {showNote && (
                    <p
                      className="mt-3 text-center text-sm italic text-warning animate-pulse"
                      role="note"
                      aria-live="polite"
                    >
                      🚧 {service.comingSoonNote}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;