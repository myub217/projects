// src/components/ServicesSection.tsx – Comprehensive Services Showcase with Status & Contact CTA

import React from 'react'
import ServiceCard from './ServiceCard'
import { services } from '@/data/servicesData'
import { getContactHref } from '@/config/contact'
import {
  FaTools,
  FaChartLine,
  FaPaintBrush,
  FaCogs,
  FaMobileAlt,
  FaShieldAlt,
} from 'react-icons/fa'

export interface Service {
  id: number
  title: string
  description: string
  price: string
  image?: string
  altText?: string
  available: boolean
  comingSoonNote?: string | null
}

const iconMap = [
  FaTools,
  FaChartLine,
  FaPaintBrush,
  FaCogs,
  FaMobileAlt,
  FaShieldAlt,
]

const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      role="region"
      aria-labelledby="services-heading"
      className="bg-base-100 dark:bg-gray-900 py-20 px-4 sm:px-6 lg:px-12 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="services-heading"
          className="text-3xl sm:text-4xl font-extrabold text-center text-primary mb-6 font-heading tracking-tight"
        >
          บริการของเรา
        </h2>
        <p className="max-w-3xl mx-auto text-center text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-14">
          บริการหลากหลายที่ออกแบบเพื่อเสริมศักยภาพธุรกิจคุณอย่างมั่นคงและยั่งยืน 🚀
        </p>

        {services.length === 0 ? (
          <p className="text-center text-gray-500 dark:text-gray-400 select-none">
            ขณะนี้ยังไม่มีข้อมูลบริการ
          </p>
        ) : (
          <ul
            role="list"
            aria-labelledby="services-heading"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {services.map((service, idx) => {
              const isDisabled = !service.available
              const showNote = isDisabled && service.comingSoonNote
              const Icon = iconMap[idx % iconMap.length]

              return (
                <li
                  key={`${service.id}-${service.title}`}
                  role="listitem"
                  aria-label={`บริการ: ${service.title} ${
                    isDisabled ? '(กำลังจะมาเร็วๆ นี้)' : ''
                  }`}
                  className="relative flex flex-col justify-between rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                >
                  <ServiceCard
                    icon={Icon}
                    title={service.title}
                    description={service.description}
                    link={
                      !isDisabled
                        ? getContactHref('line', `สนใจบริการ: ${service.title}`)
                        : undefined
                    }
                    imageUrl={service.image}
                    disabled={isDisabled}
                  />

                  {showNote && (
                    <div
                      role="note"
                      aria-live="polite"
                      className="absolute top-4 right-4 rounded-full bg-yellow-100 dark:bg-yellow-900 px-3 py-1 text-xs font-semibold text-yellow-800 dark:text-yellow-400 italic animate-pulse shadow-md select-none"
                    >
                      🚧 {service.comingSoonNote}
                    </div>
                  )}
                </li>
              )
            })}
          </ul>
        )}

        <div className="mt-20 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 select-text">
            ต้องการบริการเฉพาะทางหรือไม่พบสิ่งที่ต้องการ?{' '}
            <a
              href={getContactHref('line', 'สอบถามบริการเพิ่มเติม')}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2 hover:text-secondary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              ติดต่อเรา
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

export default ServicesSection