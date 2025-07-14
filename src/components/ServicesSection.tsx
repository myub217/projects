// src/components/ServicesSection.tsx
import React from "react";
import ServiceCard from "./ServiceCard";
import { services } from "../data/servicesData";

export interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  altText?: string;
  available: boolean;
  comingSoonNote?: string | null; // allow null for compatibility with data
}

interface ServicesSectionProps {
  onRequest?: (service: Service) => void;
}

const ServicesSection: React.FC<ServicesSectionProps> = ({ onRequest }) => {
  return (
    <section
      className="bg-base-100 py-16 transition-colors duration-500 dark:bg-gray-900"
      aria-label="บริการของเรา"
      role="region"
      id="services"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2
          className="mb-12 text-center text-3xl font-extrabold tracking-wide text-primary"
          id="services-heading"
        >
          บริการของเรา
        </h2>

        <div
          className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          role="list"
          aria-labelledby="services-heading"
        >
          {services.map((service) => (
            <div
              key={`${service.id}-${service.title}`}
              className="flex flex-col"
              data-testid={`service-card-${service.id}`}
              aria-label={`บริการ: ${service.title}`}
              role="listitem"
            >
              <ServiceCard
                service={service}
                disabled={!service.available}
                // onRequest prop intentionally removed to let ServiceCard handle direct link
                // onRequest={onRequest ? () => onRequest(service) : undefined}
              />
              {!service.available && service.comingSoonNote && (
                <p
                  className="mt-3 animate-pulse text-center text-sm italic text-gray-500 dark:text-gray-400"
                  aria-live="polite"
                  role="note"
                >
                  🚧 {service.comingSoonNote}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;