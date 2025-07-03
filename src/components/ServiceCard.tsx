import React from "react";
import { motion } from "framer-motion";

export interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  altText?: string;
  available: boolean;
  comingSoonNote?: string;
}

interface ServiceCardProps {
  service: Service;
  disabled?: boolean;
  onRequest?: (service: Service) => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  disabled,
  onRequest,
}) => {
  const isComingSoon = disabled || !service.available;

  // ฟallback รูปภาพถ้าโหลดไม่สำเร็จ
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.onerror = null;
    e.currentTarget.src = "/images/services/placeholder.png";
  };

  // สร้างข้อความสำหรับส่งผ่าน LINE
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
      className={`relative card card-compact overflow-hidden rounded-xl shadow-md border transition hover:shadow-lg focus:outline-none focus-visible:ring-2 ring-offset-2 ${
        isComingSoon
          ? "bg-gray-200 dark:bg-gray-700 border-transparent cursor-not-allowed"
          : "bg-base-200 dark:bg-gray-800 border-base-300 dark:border-gray-600 focus-visible:ring-primary dark:ring-offset-gray-900"
      }`}
    >
      {isComingSoon && (
        <div
          className="absolute inset-0 bg-black/60 z-20 flex items-center justify-center text-white text-xl font-bold pointer-events-none select-none"
          aria-hidden="true"
        >
          🚧 Coming Soon
        </div>
      )}

      <figure className="aspect-[4/3] bg-base-100 dark:bg-gray-700 overflow-hidden">
        <img
          src={service.image}
          alt={service.altText?.trim() || `ภาพประกอบบริการ ${service.title}`}
          onError={handleImageError}
          loading="lazy"
          decoding="async"
          draggable={false}
          width={640}
          height={480}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <figcaption className="sr-only">{service.title || "บริการ"}</figcaption>
      </figure>

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
            onClick={() => {
              if (!isComingSoon) onRequest?.(service);
            }}
            disabled={isComingSoon}
            aria-label={`ขอรับบริการ: ${service.title}`}
            aria-disabled={isComingSoon}
          >
            ขอรับบริการ
          </button>

          <a
            href={isComingSoon ? "#" : lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => isComingSoon && e.preventDefault()}
            className={`btn btn-sm btn-outline w-full flex items-center justify-center gap-2 transition border-base-300 dark:border-gray-600 ${
              isComingSoon
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-[#00c300]/10 hover:border-[#00c300]"
            }`}
            aria-label={`ติดต่อผ่าน LINE สำหรับบริการ: ${service.title}`}
          >
            <img
              src="/images/icons/line.svg"
              alt=""
              aria-hidden="true"
              width={20}
              height={20}
              className="inline-block"
              draggable={false}
            />
            ติดต่อผ่าน LINE
          </a>
        </div>

        {isComingSoon && service.comingSoonNote && (
          <p
            className="mt-2 text-sm italic text-center text-gray-500 dark:text-gray-400"
            aria-live="polite"
          >
            {service.comingSoonNote}
          </p>
        )}
      </div>
    </motion.article>
  );
};

export default ServiceCard;