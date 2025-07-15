import React from 'react';

// รีวิวลูกค้า (Import images ให้ถูก path ตามโครงสร้างโปรเจกต์)
import review1 from '../assets/images/review/review1.png';
import review2 from '../assets/images/review/review2.png';
import review3 from '../assets/images/review/review3.png';
import review4 from '../assets/images/review/review4.png';
import review5 from '../assets/images/review/review5.png';
import review6 from '../assets/images/review/review6.png';
import review7 from '../assets/images/review/review7.png';
import review8 from '../assets/images/review/review8.png';
import review9 from '../assets/images/review/review9.png';
import review10 from '../assets/images/review/review10.png';

// fallback หากโหลดภาพไม่สำเร็จ
const fallbackImage = '/assets/images/fallback-image.png';

interface Review {
  img: string;
  alt: string;
}

const reviews: Review[] = [
  { img: review1, alt: 'รีวิวลูกค้า 1' },
  { img: review2, alt: 'รีวิวลูกค้า 2' },
  { img: review3, alt: 'รีวิวลูกค้า 3' },
  { img: review4, alt: 'รีวิวลูกค้า 4' },
  { img: review5, alt: 'รีวิวลูกค้า 5' },
  { img: review6, alt: 'รีวิวลูกค้า 6' },
  { img: review7, alt: 'รีวิวลูกค้า 7' },
  { img: review8, alt: 'รีวิวลูกค้า 8' },
  { img: review9, alt: 'รีวิวลูกค้า 9' },
  { img: review10, alt: 'รีวิวลูกค้า 10' },
];

const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      role="region"
      aria-labelledby="reviews-heading"
      className="bg-gray-50 py-16 transition-colors duration-500 dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="reviews-heading"
          className="mb-12 text-center text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl"
        >
          รวมรีวิวลูกค้าบางส่วน
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {reviews.map(({ img, alt }, index) => (
            <figure
              key={index}
              className="transform overflow-hidden rounded-xl bg-white shadow-md transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl dark:bg-gray-800"
            >
              <img
                src={img}
                alt={alt ?? `รีวิวลูกค้า ${index + 1}`}
                loading="lazy"
                decoding="async"
                draggable={false}
                onError={(e) => {
                  e.currentTarget.onerror = null; // ป้องกัน loop error
                  e.currentTarget.src = fallbackImage;
                }}
                className="h-auto w-full object-cover transition-opacity duration-500"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
