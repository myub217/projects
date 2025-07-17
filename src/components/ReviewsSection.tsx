// ✅ src/components/ReviewsSection.tsx

import React from 'react';
import { reviewsData } from '@/data/reviewsData';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewsSection: React.FC = () => (
  <section
    id="reviews"
    aria-labelledby="reviews-heading"
    className="section bg-base-100 dark:bg-base-200 text-center px-4 py-20 sm:px-6 lg:px-12"
  >
    <div className="max-w-7xl mx-auto">
      <h2
        id="reviews-heading"
        className="text-3xl sm:text-4xl font-bold text-primary mb-4 font-heading"
      >
        รีวิวจากลูกค้าของเรา
      </h2>
      <p className="max-w-3xl mx-auto text-base sm:text-lg text-muted mb-12">
        ความประทับใจของลูกค้าคือสิ่งสำคัญที่สุดของเรา 🙌 เราใส่ใจทุกขั้นตอนเพื่อให้คุณมั่นใจในบริการของเรา
      </p>

      {/* Desktop/Tablet Grid */}
      <div className="hidden lg:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviewsData.map((review, idx) => (
          <div
            key={idx}
            className="flex flex-col justify-between card bg-base-100 dark:bg-base-300 border border-base-200 dark:border-base-300 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out group"
          >
            <div className="flex items-start gap-3 mb-4">
              <FaQuoteLeft className="text-primary text-xl mt-1 group-hover:scale-110 transition-transform" />
              <blockquote className="text-sm sm:text-base text-base-content/90 italic leading-relaxed">
                {review.feedback}
              </blockquote>
            </div>
            <div className="mt-auto text-left">
              <div className="text-sm font-semibold text-primary">{review.name}</div>
              <div className="text-xs text-muted">{review.date}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="lg:hidden mt-6 flex overflow-x-auto space-x-4 snap-x snap-mandatory scrollbar-hide px-1">
        {reviewsData.map((review, idx) => (
          <div
            key={idx}
            className="min-w-[85%] max-w-sm snap-center shrink-0 bg-base-100 dark:bg-base-300 border border-base-200 dark:border-base-300 rounded-2xl p-5 shadow-md transition-transform hover:scale-[1.01]"
          >
            <div className="flex items-start gap-3 mb-3">
              <FaQuoteLeft className="text-primary text-lg mt-1" />
              <blockquote className="text-sm text-base-content/90 italic leading-snug">
                {review.feedback}
              </blockquote>
            </div>
            <div className="text-left mt-2">
              <div className="text-sm font-semibold text-primary">{review.name}</div>
              <div className="text-xs text-muted">{review.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;