// src/components/ServiceCard.tsx
import React from "react";
import type { Service } from "../data/services";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    target.onerror = null;
    target.src = "/images/services/placeholder.png";
  };

  return (
    <article
      className="card card-compact bg-base-200 border border-base-300 dark:border-base-100 shadow-md rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-primary ring-offset-2 ring-offset-base-100 transition duration-200 hover:shadow-lg"
      tabIndex={0}
      role="group"
      aria-labelledby={`service-title-${service.id}`}
      aria-describedby={`service-desc-${service.id} service-price-${service.id}`}
    >
      <figure className="w-full aspect-video bg-base-100 overflow-hidden">
        <img
          src={service.image}
          alt={`ภาพประกอบบริการ: ${service.title}`}
          className="w-full h-full object-cover"
          loading="lazy"
          decoding="async"
          draggable={false}
          onError={handleImageError}
        />
        <figcaption className="sr-only">{service.title}</figcaption>
      </figure>

      <div className="card-body p-4 flex flex-col justify-between h-full">
        <h3
          id={`service-title-${service.id}`}
          className="card-title text-lg font-bold text-base-content"
        >
          {service.title}
        </h3>

        <p
          id={`service-desc-${service.id}`}
          className="text-sm text-base-content/80 mt-2 leading-relaxed flex-grow"
          lang="th"
        >
          {service.description}
        </p>

        <p
          id={`service-price-${service.id}`}
          className="mt-4 font-semibold text-primary"
        >
          <span className="sr-only">ราคา:</span>
          ราคา: {service.price}
        </p>

        <div className="mt-4">
          <button
            className="btn btn-sm btn-primary w-full"
            type="button"
            aria-label={`ขอรับบริการ ${service.title}`}
          >
            ขอรับบริการ
          </button>
        </div>
      </div>
    </article>
  );
};

export default ServiceCard;