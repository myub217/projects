// src/components/ServiceCard.tsx

import React from 'react';
import { Service } from '@/data/servicesData';
import { FaTag } from 'react-icons/fa';

interface ServiceCardProps {
  service: Service;
  onRequest?: () => void;
  disabled?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service, onRequest, disabled = false }) => {
  return (
    <div
      className={`group flex flex-col overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:shadow-xl ${
        disabled ? 'opacity-60 grayscale cursor-not-allowed' : 'cursor-pointer'
      }`}
      aria-disabled={disabled}
    >
      <div className="relative w-full pb-[75%] bg-base-200">
        <img
          src={service.image}
          alt={service.altText}
          className="absolute top-0 left-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col justify-between p-4 sm:p-5 h-full">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-primary mb-2 leading-tight line-clamp-2">
            {service.title}
          </h3>
          <p className="text-sm text-base-content/80 leading-snug line-clamp-3">
            {service.description}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="inline-flex items-center gap-1 text-sm text-base-content font-medium">
            <FaTag className="text-base-content/70" />
            {service.price}
          </span>

          {!disabled && onRequest && (
            <button
              type="button"
              onClick={onRequest}
              className="btn btn-sm btn-primary hover:scale-105 transition-transform"
              aria-label={`ขอใช้บริการ: ${service.title}`}
            >
              ขอใช้บริการ
            </button>
          )}
        </div>

        {disabled && service.comingSoonNote && (
          <p
            className="mt-3 text-xs italic text-center text-warning animate-pulse"
            role="note"
            aria-live="polite"
          >
            🚧 {service.comingSoonNote}
          </p>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;