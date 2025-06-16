import React from "react";
import { motion } from "framer-motion";
import type { Service } from "../data/services";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const imageSrc = service.image;

  // ฟังก์ชัน fallback เมื่อโหลดรูปภาพล้มเหลว
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    target.onerror = null; // ป้องกันลูป error ซ้ำ
    target.src = "/images/services/placeholder.png"; // ใช้ภาพสำรอง
  };

  return (
    <motion.article
      role="group"
      aria-label={`บริการ: ${service.title}`}
      aria-labelledby={`service-title-${service.id}`}
      aria-describedby={`service-desc-${service.id} service-price-${service.id}`}
      tabIndex={0} // เพื่อให้โฟกัสด้วยคีย์บอร์ดได้
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="card group card-compact bg-base-200 border border-base-300 dark:border-base-100 shadow-md rounded-xl overflow-hidden
        focus:outline-none focus-visible:ring-2 focus-visible:ring-primary ring-offset-2 ring-offset-base-100
        transition duration-200 hover:shadow-lg cursor-default"
    >
      {/* รูปภาพประกอบบริการ */}
      <figure className="w-full aspect-video bg-base-100 overflow-hidden">
        <img
          src={imageSrc}
          alt={service.altText || `ภาพประกอบบริการ ${service.title}`}
          onError={handleImageError}
          loading="lazy"
          decoding="async"
          draggable={false}
          width={640}
          height={360}
          fetchPriority="high"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <figcaption className="sr-only" aria-hidden="true">
          {service.title}
        </figcaption>
      </figure>

      {/* เนื้อหาบริการ */}
      <div className="card-body p-4 flex flex-col justify-between h-full">
        {/* ชื่อบริการ */}
        <h3
          id={`service-title-${service.id}`}
          className="card-title text-lg font-bold text-base-content"
        >
          {service.title}
        </h3>

        {/* คำอธิบายบริการ */}
        <p
          id={`service-desc-${service.id}`}
          className="text-sm text-base-content/80 mt-2 leading-relaxed flex-grow"
          lang="th"
        >
          {service.description}
        </p>

        {/* ราคาบริการ */}
        <p
          id={`service-price-${service.id}`}
          className="mt-4 font-semibold text-primary"
        >
          <span className="sr-only">ราคา:</span>
          {service.price && service.price.trim()
            ? service.price
            : "กรุณาสอบถามราคา"}
        </p>

        {/* ปุ่มลิงก์หรือปุ่ม action */}
        <div className="mt-4">
          {service.link ? (
            <a
              href={service.link}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="btn btn-sm btn-primary w-full"
              aria-label={`ไปยังบริการ ${service.title}`}
            >
              ดูรายละเอียด
            </a>
          ) : (
            <button
              type="button"
              className="btn btn-sm btn-primary w-full cursor-pointer"
              aria-label={`ขอรับบริการ: ${service.title}`}
              onClick={() => alert(`ขอรับบริการ: ${service.title}`)}
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