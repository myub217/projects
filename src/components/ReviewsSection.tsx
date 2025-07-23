// src/components/ReviewsSection.tsx
// Responsive, accessible reviews section with keyboard support and clear structure

import React from 'react'
import { reviewsData } from '@/data/reviewsData'
import { FaQuoteLeft } from 'react-icons/fa'

const ReviewsSection: React.FC = () => (
  <section
    id="reviews"
    role="region"
    aria-labelledby="reviews-heading"
    className="section bg-base-100 px-4 py-20 text-center transition-colors duration-300 dark:bg-gray-900 sm:px-6 lg:px-12"
  >
    <div className="mx-auto max-w-7xl">
      <h2
        id="reviews-heading"
        className="mb-6 select-text font-heading text-3xl font-extrabold tracking-tight text-primary sm:text-4xl"
      >
        รีวิวจากลูกค้าของเรา
      </h2>
      <p className="mx-auto mb-14 max-w-3xl select-text text-base text-muted sm:text-lg">
        ความประทับใจของลูกค้าคือหัวใจสำคัญของเรา 🙌 เราใส่ใจทุกรายละเอียด
        เพื่อบริการที่มั่นใจและน่าเชื่อถือ
      </p>

      {/* Desktop & Tablet Grid */}
      <div className="hidden grid-cols-1 gap-10 sm:grid-cols-2 lg:grid lg:grid-cols-3">
        {reviewsData.map((review, idx) => (
          <article
            key={review.id ?? idx}
            className="group card flex flex-col justify-between rounded-3xl border border-gray-200 bg-white p-8 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800"
            tabIndex={0}
            aria-label={`รีวิวจากคุณ ${review.name}`}
          >
            <div className="mb-6 flex items-start gap-4">
              <FaQuoteLeft
                className="mt-1 text-2xl text-primary transition-transform duration-300 group-hover:scale-110"
                aria-hidden="true"
              />
              <blockquote className="select-text text-base italic leading-relaxed text-gray-800 dark:text-gray-200">
                {review.feedback}
              </blockquote>
            </div>
            <footer className="mt-auto text-left">
              <p className="select-text text-sm font-semibold text-primary">{review.name}</p>
              <p className="select-text text-xs text-muted">{review.date}</p>
            </footer>
          </article>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="scrollbar-hide mt-8 flex snap-x snap-mandatory space-x-5 overflow-x-auto px-2 lg:hidden">
        {reviewsData.map((review, idx) => (
          <article
            key={review.id ?? idx}
            className="min-w-[85%] max-w-sm shrink-0 snap-center rounded-3xl border border-gray-200 bg-white p-6 shadow-md transition-transform duration-200 hover:scale-[1.03] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:border-gray-700 dark:bg-gray-800"
            tabIndex={0}
            aria-label={`รีวิวจากคุณ ${review.name}`}
          >
            <div className="mb-4 flex items-start gap-3">
              <FaQuoteLeft className="mt-1 text-xl text-primary" aria-hidden="true" />
              <blockquote className="select-text text-sm italic leading-snug text-gray-800 dark:text-gray-200">
                {review.feedback}
              </blockquote>
            </div>
            <footer className="mt-3 text-left">
              <p className="select-text text-sm font-semibold text-primary">{review.name}</p>
              <p className="select-text text-xs text-muted">{review.date}</p>
            </footer>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default ReviewsSection
