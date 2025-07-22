// src/components/ServiceCard.tsx
// ✅ Refined, accessible, optimized Service Card with graceful image fallback and keyboard support

import React from 'react'
import { IconType } from 'react-icons'

type ServiceCardProps = {
  icon: IconType
  title: string
  description: string
  link?: string
  imageUrl?: string
  altText?: string
  disabled?: boolean
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon: Icon,
  title,
  description,
  link,
  imageUrl,
  altText,
  disabled = false,
}) => {
  return (
    <article
      role="region"
      aria-label={`${title}${disabled ? ' - กำลังจะมาเร็วๆ นี้' : ''}`}
      aria-disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      className={`group flex flex-col justify-between h-full rounded-3xl overflow-hidden border shadow-sm transition-shadow duration-300
        ${disabled
          ? 'border-yellow-400 bg-yellow-50 dark:bg-yellow-900 dark:border-yellow-600 cursor-not-allowed opacity-70'
          : 'border-base-200 bg-base-100 dark:bg-base-300 hover:shadow-xl hover:border-primary dark:hover:border-primary cursor-pointer'}
        text-center sm:text-left select-text`}
    >
      {/* Image or fallback icon */}
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={altText ?? title}
          loading="lazy"
          className="w-full h-40 sm:h-48 object-cover object-center transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
          decoding="async"
          draggable={false}
          fetchPriority="low"
        />
      ) : (
        <div
          className={`flex items-center justify-center sm:justify-start w-16 h-16 mx-auto sm:mx-0 mt-6 mb-4 rounded-full text-4xl
            ${disabled
              ? 'bg-yellow-200 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-300'
              : 'bg-primary/10 text-primary'}`}
          aria-hidden="true"
        >
          <Icon />
        </div>
      )}

      {/* Text Content */}
      <div className="flex flex-col flex-grow px-6 pb-6 pt-2 sm:pt-0">
        <h3
          title={title}
          className={`text-lg sm:text-xl font-extrabold mb-2 truncate ${
            disabled ? 'text-yellow-700 dark:text-yellow-400' : 'text-base-content'
          }`}
        >
          {title}
        </h3>

        <p
          className={`text-sm sm:text-base mb-4 line-clamp-4 ${
            disabled ? 'text-yellow-800 dark:text-yellow-300' : 'text-base-content/80'
          }`}
        >
          {description}
        </p>

        {/* Link (if not disabled) */}
        {link && !disabled && (
          <div className="mt-auto">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`อ่านเพิ่มเติมเกี่ยวกับ ${title}`}
              className="inline-block text-sm sm:text-base font-semibold text-primary hover:text-primary-focus transition duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
            >
              อ่านเพิ่มเติม →
            </a>
          </div>
        )}
      </div>
    </article>
  )
}

export default ServiceCard