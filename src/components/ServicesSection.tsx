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
      className="py-16 bg-base-100 dark:bg-gray-900 transition-colors duration-500"
      aria-label="บริการของเรา"
      role="region"
      id="services"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className="text-3xl font-extrabold text-center mb-12 text-primary tracking-wide"
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
                  className="mt-3 text-center text-sm text-gray-500 dark:text-gray-400 italic animate-pulse"
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