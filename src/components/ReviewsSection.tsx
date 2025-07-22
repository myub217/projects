// src/components/ReviewsSection.tsx

import React from 'react'
import { reviewsData } from '@/data/reviewsData'
import { FaQuoteLeft } from 'react-icons/fa'

const ReviewsSection: React.FC = () => (
  <section
    id="reviews"
    aria-labelledby="reviews-heading"
    className="section bg-base-100 dark:bg-gray-900 text-center px-4 py-20 sm:px-6 lg:px-12 transition-colors duration-300"
    role="region"
  >
    <div className="max-w-7xl mx-auto">
      <h2
        id="reviews-heading"
        className="text-3xl sm:text-4xl font-extrabold text-primary mb-6 font-heading tracking-tight"
      >
        รีวิวจากลูกค้าของเรา
      </h2>
      <p className="max-w-3xl mx-auto text-base sm:text-lg text-muted mb-14">
        ความประทับใจของลูกค้าคือหัวใจสำคัญของเรา 🙌 เราใส่ใจทุกรายละเอียด เพื่อบริการที่มั่นใจและน่าเชื่อถือ
      </p>

      {/* Desktop & Tablet Grid */}
      <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {reviewsData.map((review, idx) => (
          <article
            key={idx}
            className="flex flex-col justify-between card bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out group"
            tabIndex={0}
            aria-label={`รีวิวจาก ${review.name}`}
          >
            <div className="flex items-start gap-4 mb-6">
              <FaQuoteLeft className="text-primary text-2xl mt-1 group-hover:scale-110 transition-transform duration-300" />
              <blockquote className="text-base text-gray-800 dark:text-gray-200 italic leading-relaxed">
                {review.feedback}
              </blockquote>
            </div>
            <footer className="mt-auto text-left">
              <p className="text-sm font-semibold text-primary">{review.name}</p>
              <p className="text-xs text-muted">{review.date}</p>
            </footer>
          </article>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="lg:hidden mt-8 flex overflow-x-auto space-x-5 snap-x snap-mandatory scrollbar-hide px-2">
        {reviewsData.map((review, idx) => (
          <article
            key={idx}
            className="min-w-[85%] max-w-sm snap-center shrink-0 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-3xl p-6 shadow-md hover:shadow-xl transition-transform duration-200 hover:scale-[1.03]"
            tabIndex={0}
            aria-label={`รีวิวจาก ${review.name}`}
          >
            <div className="flex items-start gap-3 mb-4">
              <FaQuoteLeft className="text-primary text-xl mt-1" />
              <blockquote className="text-sm text-gray-800 dark:text-gray-200 italic leading-snug">
                {review.feedback}
              </blockquote>
            </div>
            <footer className="text-left mt-3">
              <p className="text-sm font-semibold text-primary">{review.name}</p>
              <p className="text-xs text-muted">{review.date}</p>
            </footer>
          </article>
        ))}
      </div>
    </div>
  </section>
)

export default ReviewsSection