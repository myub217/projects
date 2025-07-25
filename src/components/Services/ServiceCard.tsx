// src/components/Services/ServiceCard.tsx
// ✅ Service card component with image, description, price, and request button

import React from 'react';
import { Service } from '@types/service';

interface ServiceCardProps {
  service: Service;
  onRequestService: (serviceId: number) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onRequestService }) => {
  return (
    <article
      className="card bg-base-200 shadow-md flex flex-col"
      aria-label={`บริการ: ${service.title}`}
    >
      <figure>
        <img
          src={service.image}
          alt={service.altText}
          className="h-48 w-full object-cover rounded-t-lg"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          draggable={false}
        />
      </figure>
      <div className="card-body flex flex-col flex-grow">
        <h3 className="card-title text-lg font-semibold">{service.title}</h3>
        <p className="mt-2 flex-grow text-sm text-gray-600 dark:text-gray-300">
          {service.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold text-primary">
            {service.price.amount} {service.price.currency}
          </span>
          <button
            type="button"
            onClick={() => onRequestService(service.id)}
            className="btn btn-primary btn-sm"
            aria-label={`ขอใช้บริการ ${service.title}`}
          >
            ขอใช้บริการ
          </button>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;
