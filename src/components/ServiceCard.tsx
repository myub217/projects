// src/components/ServiceCard.tsx
import React from "react";
import { motion } from "framer-motion";
import type { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const imageSrc = service?.image || "/images/services/placeholder.png";

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    target.onerror = null; // ป้องกันลูป error
    target.src = "/images/services/placeholder.png";
  };

  const isComingSoon = !service.available;

  const lineMessage = encodeURIComponent(
    `📌 สนใจบริการ: ${service.title}\n\n${service.description}\n\n💰 ราคา: ${service.price}\n\n💬 รบกวนแนะนำเพิ่มเติมหน่อยนะคะ 🙏`
  );

  const lineUrl = `https://line.me/R/ti/p/@462FQTFC?text=${lineMessage}`;

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
      className={`relative card group card-compact border shadow-md rounded-xl overflow-hidden
        ${
          isComingSoon
            ? "bg-gray-200 dark:bg-gray-700 cursor-not-allowed"
            : "bg-base-200 border-base-300 dark:bg-gray-800 dark:border-gray-600"
        }
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ring-offset-2 ring-offset-base-100 dark:ring-offset-gray-900
        transition duration-200 hover:shadow-lg`}
    >
      {/* Overlay Coming Soon */}
      {isComingSoon && (
        <div
          className="absolute inset-0 bg-black/60 z-20 flex items-center justify-center text-white text-xl font-bold pointer-events-none"
          tabIndex={-1}
        >
          🚧 Coming Soon
        </div>
      )}

      {/* ภาพบริการ */}
      <figure className="w-full aspect-[4/3] bg-base-100 dark:bg-gray-700 overflow-hidden">
        <img
          src={imageSrc}
          alt={service.altText?.trim() || `ภาพประกอบบริการ ${service.title}`}
          onError={handleImageError}
          loading="lazy"
          decoding="async"
          draggable={false}
          width={640}
          height={480}
          fetchPriority="auto"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
        />
        <figcaption className="sr-only">{service.title || "บริการ"}</figcaption>
      </figure>

      {/* เนื้อหาการ์ด */}
      <div
        className={`card-body p-4 flex flex-col h-full z-10 ${
          isComingSoon ? "pointer-events-none" : ""
        }`}
      >
        <h3
          id={`service-title-${service.id}`}
          className="card-title text-lg font-bold text-base-content dark:text-white"
        >
          {service.title}
        </h3>

        <p
          id={`service-desc-${service.id}`}
          className="text-sm text-base-content/80 dark:text-gray-300 mt-2 leading-relaxed flex-grow line-clamp-3"
          lang="th"
        >
          {service.description || "-"}
        </p>

        <p
          id={`service-price-${service.id}`}
          className="mt-4 font-semibold text-primary"
        >
          <span className="sr-only">ราคา:</span>
          {service.price?.trim() || "-"}
        </p>

        <div className="mt-4 flex flex-col gap-2">
          <button
            type="button"
            className="btn btn-sm btn-primary w-full"
            onClick={() => !isComingSoon && alert(`คุณเลือกบริการ: ${service.title}`)}
            disabled={isComingSoon}
            aria-label={`ขอรับบริการ: ${service.title}`}
            title={`ขอรับบริการ: ${service.title}`}
          >
            ขอรับบริการ
          </button>

          <a
            href={isComingSoon ? "#" : lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => isComingSoon && e.preventDefault()}
            className={`btn btn-sm btn-outline border-base-300 dark:border-gray-600 w-full flex items-center justify-center gap-2 transition ${
              isComingSoon
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-[#00c300]/10 hover:border-[#00c300]"
            }`}
            aria-label={`ติดต่อ LINE สำหรับบริการ: ${service.title}`}
            title={`ติดต่อผ่าน LINE: ${service.title}`}
          >
            <img
              src="/images/icons/line.svg"
              alt=""
              aria-hidden="true"
              width={20}
              height={20}
              draggable={false}
              className="inline-block"
            />
            ติดต่อผ่าน LINE
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default ServiceCard;