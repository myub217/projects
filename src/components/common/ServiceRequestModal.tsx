// src/components/common/ServiceRequestModal.tsx

import React from 'react'
import type { Service } from '@components/ServicesSection'

interface ServiceRequestModalProps {
  service: Service | null
  onClose: () => void
}

const ServiceRequestModal: React.FC<ServiceRequestModalProps> = ({ service, onClose }) => {
  if (!service) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
      aria-describedby="service-modal-desc"
      tabIndex={-1}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4 py-6 md:px-6"
    >
      <div
        tabIndex={0}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg rounded-2xl bg-base-100 dark:bg-gray-900 p-6 shadow-2xl space-y-5 focus:outline-none"
      >
        <h3 id="service-modal-title" className="text-xl font-bold text-primary">
          ขอใช้บริการจาก JP Visual & Docs
        </h3>
        <section
          id="service-modal-desc"
          className="space-y-2 text-sm sm:text-base text-base-content/80"
        >
          <p><strong>บริการ:</strong> {service.title}</p>
          <p><strong>รายละเอียด:</strong> {service.description}</p>
          <p><strong>ค่าบริการ:</strong> {service.price}</p>
          <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
            ทีมงานสายทำจริง สไตล์มือโปร — เอกสาร ชัด เป๊ะ ขายงานผ่าน
          </p>
        </section>
        <div className="mt-6 flex flex-col sm:flex-row justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="btn btn-sm border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
          >
            ปิด
          </button>
          <a
            href={`https://line.me/ti/p/~jpdocs?text=${encodeURIComponent(
              `สวัสดีครับ/ค่ะ สนใจใช้บริการ: ${service.title}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="btn btn-sm btn-primary text-white focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
          >
            ติดต่อผ่าน LINE
          </a>
        </div>
      </div>
    </div>
  )
}

export default ServiceRequestModal