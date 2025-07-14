// src/components/ServiceCard.tsx
import React from "react";
import { Service } from "./ServicesSection";
import { getContactHref } from "../config/contact";

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
  const lineLink = getContactHref("line");

  return (
    <div
      className={`flex h-full transform flex-col overflow-hidden rounded-lg border
        bg-white shadow-md transition-transform focus-within:scale-[1.03]
        focus-within:shadow-xl hover:scale-[1.03]
        hover:shadow-xl dark:bg-gray-800
        ${disabled ? "pointer-events-none opacity-50" : "cursor-pointer"}`}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      role="region"
      aria-label={`บริการ: ${service.title}${disabled ? " (ปิดใช้งาน)" : ""}`}
    >
      <img
        src={service.image}
        alt={service.altText ?? `ภาพบริการ: ${service.title}`}
        className="h-40 w-full select-none object-cover"
        loading="lazy"
        decoding="async"
        draggable={false}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = "/assets/images/fallback-image.png";
        }}
      />
      <div className="flex flex-grow flex-col p-4">
        <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
          {service.title}
        </h3>
        <p className="flex-grow text-sm leading-relaxed text-gray-700 dark:text-gray-300">
          {service.description}
        </p>
        <p className="mt-3 text-sm font-semibold tracking-wide text-primary">
          ราคา: {service.price}
        </p>
        {!disabled && (
          onRequest ? (
            <button
              type="button"
              onClick={onRequest}
              className="mt-5 inline-block rounded-md bg-primary px-5 py-2 text-sm font-semibold text-white
                transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary
                focus:ring-offset-2"
              aria-label={`ขอใช้บริการ ${service.title}`}
            >
              ขอใช้บริการ
            </button>
          ) : (
            <a
              href={lineLink}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-block rounded-md bg-primary px-5 py-2 text-center text-sm font-semibold
                text-white transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2
                focus:ring-primary focus:ring-offset-2"
              aria-label={`ขอใช้บริการ ${service.title} ผ่าน LINE`}
            >
              ขอใช้บริการ
            </a>
          )
        )}
      </div>
    </div>
  );
};

export default ServiceCard;