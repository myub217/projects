// src/components/ServiceCard.tsx
// Refined, accessible, optimized Service Card with graceful image fallback and keyboard support

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
      className={`group flex h-full flex-col justify-between overflow-hidden rounded-3xl border shadow-sm transition-shadow duration-300 ${
        disabled
          ? 'cursor-not-allowed border-yellow-400 bg-yellow-50 opacity-70 dark:border-yellow-600 dark:bg-yellow-900'
          : 'cursor-pointer border-base-200 bg-base-100 hover:border-primary hover:shadow-xl dark:bg-base-300 dark:hover:border-primary'
      } select-text text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 sm:text-left`}
    >
      {/* Image or fallback icon */}
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={altText ?? title}
          loading="lazy"
          className="h-40 w-full object-cover object-center transition-transform duration-300 group-hover:scale-105 sm:h-48"
          onError={e => {
            e.currentTarget.style.display = 'none'
          }}
          decoding="async"
          draggable={false}
          fetchPriority="low"
        />
      ) : (
        <div
          className={`mx-auto mb-4 mt-6 flex h-16 w-16 items-center justify-center rounded-full text-4xl sm:mx-0 sm:justify-start ${
            disabled
              ? 'bg-yellow-200 text-yellow-700 dark:bg-yellow-700 dark:text-yellow-300'
              : 'bg-primary/10 text-primary'
          }`}
          aria-hidden="true"
        >
          <Icon />
        </div>
      )}

      {/* Text Content */}
      <div className="flex flex-grow flex-col px-6 pb-6 pt-2 sm:pt-0">
        <h3
          title={title}
          className={`mb-2 truncate text-lg font-extrabold sm:text-xl ${
            disabled ? 'text-yellow-700 dark:text-yellow-400' : 'text-base-content'
          }`}
        >
          {title}
        </h3>

        <p
          className={`mb-4 line-clamp-4 text-sm sm:text-base ${
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
              className="hover:text-primary-focus inline-block rounded text-sm font-semibold text-primary transition duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:text-base"
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
