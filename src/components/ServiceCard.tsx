import React from "react";
import { motion } from "framer-motion";
import type { Service } from "../data/services";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const imageSrc = service?.image || "/images/services/placeholder.png";

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    target.onerror = null;
    target.src = "/images/services/placeholder.png";
  };

  return (
    <motion.article
      role="group"
      aria-labelledby={`service-title-${service.id}`}
      aria-describedby={`service-desc-${service.id} service-price-${service.id}`}
      tabIndex={0}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="card group card-compact bg-base-200 border border-base-300 dark:bg-gray-800 dark:border-gray-600 shadow-md rounded-xl overflow-hidden
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ring-offset-2 ring-offset-base-100 dark:ring-offset-gray-900
        transition duration-200 hover:shadow-lg cursor-default"
    >
      {/* ภาพประกอบบริการ */}
      <figure className="w-full aspect-video bg-base-100 dark:bg-gray-700 overflow-hidden">
        <img
          src={imageSrc}
          alt={service.altText?.trim() || `ภาพประกอบบริการ ${service.title}`}
          onError={handleImageError}
          loading="lazy"
          decoding="async"
          draggable={false}
          width={640}
          height={360}
          fetchPriority="auto"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <figcaption className="sr-only">{service.title}</figcaption>
      </figure>

      {/* เนื้อหาภายในการ์ด */}
      <div className="card-body p-4 flex flex-col justify-between h-full">
        <h3
          id={`service-title-${service.id}`}
          className="card-title text-lg font-bold text-base-content dark:text-white"
        >
          {service.title}
        </h3>

        <p
          id={`service-desc-${service.id}`}
          className="text-sm text-base-content/80 dark:text-gray-300 mt-2 leading-relaxed flex-grow"
          lang="th"
        >
          {service.description}
        </p>

        <p
          id={`service-price-${service.id}`}
          className="mt-4 font-semibold text-primary"
        >
          <span className="sr-only">ราคา:</span>
          {typeof service.price === "string" && service.price.trim()
            ? service.price
            : "กรุณาสอบถามราคา"}
        </p>

        <div className="mt-4">
          {typeof service.link === "string" && service.link.trim() ? (
            <a
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary w-full"
              aria-label={`ดูรายละเอียดบริการ: ${service.title}`}
              title={`ดูรายละเอียดบริการ: ${service.title}`}
              aria-describedby={`service-desc-${service.id}`}
            >
              ดูรายละเอียด
            </a>
          ) : (
            <button
              type="button"
              className="btn btn-sm btn-primary w-full cursor-pointer"
              onClick={() => alert(`ขอรับบริการ: ${service.title}`)}
              aria-label={`ขอรับบริการ: ${service.title}`}
              title={`ขอรับบริการ: ${service.title}`}
              aria-describedby={`service-desc-${service.id}`}
            >
              ขอรับบริการ
            </button>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ServiceCard;