import React from "react";
import { Service } from "./ServicesSection";

interface ServiceCardProps {
  service: Service;
  disabled?: boolean;
  onRequest?: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  disabled = false,
  onRequest,
}) => {
  return (
    <div
      className={`flex flex-col h-full rounded-lg overflow-hidden shadow-md border bg-white dark:bg-gray-800 transition transform hover:scale-[1.01] ${
        disabled ? "opacity-50 pointer-events-none" : ""
      }`}
      aria-disabled={disabled}
    >
      <img
        src={service.image}
        alt={service.altText || `ภาพบริการ: ${service.title}`}
        className="w-full h-40 object-cover"
        loading="lazy"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
          {service.title}
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 flex-grow">
          {service.description}
        </p>
        <p className="text-sm text-primary mt-2 font-medium">ราคา: {service.price}</p>
        {onRequest && !disabled && (
          <button
            type="button"
            onClick={onRequest}
            className="mt-4 inline-block px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
            aria-label={`ขอใช้บริการ ${service.title}`}
          >
            ขอใช้บริการ
          </button>
        )}
      </div>
    </div>
  );
};

export default ServiceCard;