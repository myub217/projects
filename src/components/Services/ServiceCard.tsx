// src/components/Services/ServiceCard.tsx
import React from 'react';
import { Service } from '@types/service';

interface ServiceCardProps {
  service: Service;
  onRequestService: (serviceId: number) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onRequestService }) => {
  return (
    <div className="card bg-base-200 shadow-md">
      <figure>
        <img
          src={service.image}
          alt={service.altText}
          className="h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h3 className="card-title">{service.title}</h3>
        <p className="text-sm text-gray-500">{service.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-semibold">
            {service.price.amount} {service.price.currency}
          </span>
          <button
            onClick={() => onRequestService(service.id)}
            className="btn btn-primary btn-sm"
          >
            ขอใช้บริการ
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
