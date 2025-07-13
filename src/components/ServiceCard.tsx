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
      className={`flex flex-col h-full rounded-lg overflow-hidden shadow-md border
        bg-white dark:bg-gray-800 transition-transform transform
        hover:scale-[1.03] hover:shadow-xl
        focus-within:scale-[1.03] focus-within:shadow-xl
        ${disabled ? "opacity-50 pointer-events-none" : "cursor-pointer"}`}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      role="region"
      aria-label={`บริการ: ${service.title}${disabled ? " (ปิดใช้งาน)" : ""}`}
    >
      <img
        src={service.image}
        alt={service.altText ?? `ภาพบริการ: ${service.title}`}
        className="w-full h-40 object-cover select-none"
        loading="lazy"
        decoding="async"
        draggable={false}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "/assets/images/fallback-image.png";
        }}
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          {service.title}
        </h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 flex-grow leading-relaxed">
          {service.description}
        </p>
        <p className="text-sm text-primary mt-3 font-semibold tracking-wide">
          ราคา: {service.price}
        </p>
        {onRequest && !disabled && (
          <button
            type="button"
            onClick={onRequest}
            className="mt-5 inline-block px-5 py-2 bg-primary text-white rounded-md text-sm font-semibold
              hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
              transition-colors"
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