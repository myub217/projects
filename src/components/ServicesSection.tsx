// src/components/ServicesSection.tsx
// Refined, accessible, animated Services Section with clear fallback and structured logic

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

const iconMap = [FaTools, FaChartLine, FaPaintBrush, FaCogs, FaMobileAlt, FaShieldAlt]

const ServicesSection: React.FC = () => {
  if (!services.length) {
    return (
      <section
        id="services"
        role="region"
        aria-labelledby="services-heading"
        className="bg-base-100 px-4 py-20 transition-colors duration-500 dark:bg-gray-900 sm:px-6 lg:px-12"
      >
        <div className="mx-auto max-w-7xl text-center">
          <h2
            id="services-heading"
            className="mb-6 select-text font-heading text-3xl font-extrabold tracking-tight text-primary sm:text-4xl"
          >
            บริการของเรา
          </h2>
          <p className="select-none text-gray-500 dark:text-gray-400">ขณะนี้ยังไม่มีข้อมูลบริการ</p>
        </div>
      </section>
    )
  }

  return (
    <section
      id="services"
      role="region"
      aria-labelledby="services-heading"
      className="bg-base-100 px-4 py-20 transition-colors duration-500 dark:bg-gray-900 sm:px-6 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        <h2
          id="services-heading"
          className="mb-6 select-text text-center font-heading text-3xl font-extrabold tracking-tight text-primary sm:text-4xl"
        >
          บริการของเรา
        </h2>
        <p className="mx-auto mb-14 max-w-3xl select-text text-center text-base text-gray-700 dark:text-gray-300 sm:text-lg">
          บริการหลากหลายที่ออกแบบเพื่อเสริมศักยภาพธุรกิจคุณอย่างมั่นคงและยั่งยืน 🚀
        </p>

        <ul
          role="list"
          aria-labelledby="services-heading"
          className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, idx) => {
            const isDisabled = !service.available
            const Icon = iconMap[idx % iconMap.length]

            return (
              <li
                key={service.id}
                role="listitem"
                aria-label={`บริการ: ${service.title}${isDisabled ? ' (เร็วๆ นี้)' : ''}`}
                className="relative"
              >
                <ServiceCard
                  icon={Icon}
                  title={service.title}
                  description={service.description}
                  link={
                    !isDisabled ? getContactHref('line', `สนใจบริการ: ${service.title}`) : undefined
                  }
                  imageUrl={service.image}
                  altText={service.altText}
                  disabled={isDisabled}
                />

                {isDisabled && service.comingSoonNote && (
                  <div
                    role="note"
                    aria-live="polite"
                    className="absolute right-4 top-4 animate-pulse select-none rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold italic text-yellow-800 shadow-md dark:bg-yellow-900 dark:text-yellow-400"
                  >
                    🚧 {service.comingSoonNote}
                  </div>
                )}
              </li>
            )
          })}
        </ul>

        <div className="mt-20 text-center">
          <p className="select-text text-sm text-gray-600 dark:text-gray-400">
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
