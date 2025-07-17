// ✅ /data/data/com.termux/files/home/projects/projects1/src/components/ServiceCard.tsx

import React from 'react'
import { IconType } from 'react-icons'

type ServiceCardProps = {
  icon: IconType
  title: string
  description: string
  link?: string
  imageUrl?: string
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  link,
  imageUrl,
}) => {
  return (
    <div className="group flex flex-col justify-between h-full bg-base-100 dark:bg-base-300 border border-base-200 dark:border-base-300 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 ease-in-out text-center sm:text-left">
      {/* Image or Icon */}
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-40 sm:h-48 object-cover object-center"
        />
      ) : (
        <div className="flex items-center justify-center sm:justify-start w-16 h-16 mx-auto sm:mx-0 mt-6 mb-4 rounded-full bg-primary/10 text-primary text-3xl">
          <Icon />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-col flex-grow px-6 pb-6 pt-2 sm:pt-0">
        <h3 className="text-lg sm:text-xl font-bold text-base-content mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-base-content/80 mb-4 line-clamp-4">{description}</p>

        {link && (
          <div className="mt-auto">
            <a
              href={link}
              className="inline-block text-sm sm:text-base font-medium text-primary hover:text-primary-focus transition duration-200"
            >
              อ่านเพิ่มเติม →
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default ServiceCard