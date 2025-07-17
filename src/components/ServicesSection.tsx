// ✅ /data/data/com.termux/files/home/projects/projects1/src/components/ServicesSection.tsx

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
      aria-label="บริการของเรา"
      className="bg-base-100 dark:bg-base-200 py-20 px-4 sm:px-6 lg:px-12 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        <h2
          id="services-heading"
          className="text-3xl sm:text-4xl font-bold text-center text-primary mb-4 font-heading"
        >
          บริการของเรา
        </h2>
        <p className="max-w-2xl mx-auto text-center text-base sm:text-lg text-base-content/70 mb-12">
          เรานำเสนอหลากหลายบริการเพื่อช่วยผลักดันธุรกิจของคุณให้เติบโตอย่างมั่นคง 🚀
        </p>

        {services.length === 0 ? (
          <p className="text-center text-base-content/70">
            ไม่มีข้อมูลบริการในขณะนี้
          </p>
        ) : (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            role="list"
            aria-labelledby="services-heading"
          >
            {services.map((service, idx) => {
              const isDisabled = !service.available
              const showNote = isDisabled && service.comingSoonNote
              const Icon = iconMap[idx % iconMap.length]

              return (
                <div
                  key={`${service.id}-${service.title}`}
                  className="relative flex flex-col justify-between rounded-2xl overflow-hidden border border-base-200 bg-base-100 dark:bg-base-300 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out"
                  role="listitem"
                  aria-label={`บริการ: ${service.title}`}
                >
                  <ServiceCard
                    icon={Icon}
                    title={service.title}
                    description={service.description}
                    link={
                      !isDisabled
                        ? getContactHref(
                            'line',
                            `สนใจบริการ: ${service.title}`
                          )
                        : undefined
                    }
                    imageUrl={service.image}
                  />

                  {showNote && (
                    <div
                      className="absolute top-3 right-3 text-xs text-warning italic animate-pulse"
                      role="note"
                      aria-live="polite"
                    >
                      🚧 {service.comingSoonNote}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}

        <div className="mt-16 text-center">
          <p className="text-sm text-base-content/70">
            ต้องการบริการที่กำหนดเอง หรือไม่เห็นสิ่งที่คุณต้องการ?{' '}
            <a
              href={getContactHref('line', 'สอบถามบริการเพิ่มเติม')}
              className="text-primary underline underline-offset-2 hover:text-secondary"
              target="_blank"
              rel="noopener noreferrer"
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