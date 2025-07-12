// src/components/ReviewsSection.tsx
import React from "react";

// รีวิวลูกค้า (Import images ให้ถูก path ตามโครงสร้างโปรเจกต์)
import review1 from "../assets/images/review/review1.png";
import review2 from "../assets/images/review/review2.png";
import review3 from "../assets/images/review/review3.png";
import review4 from "../assets/images/review/review4.png";
import review5 from "../assets/images/review/review5.png";
import review6 from "../assets/images/review/review6.png";
import review7 from "../assets/images/review/review7.png";
import review8 from "../assets/images/review/review8.png";
import review9 from "../assets/images/review/review9.png";
import review10 from "../assets/images/review/review10.png";

// fallback หากโหลดภาพไม่สำเร็จ
const fallbackImage = "/assets/images/fallback-image.png";

const reviews = [
  { img: review1, alt: "รีวิวลูกค้า 1" },
  { img: review2, alt: "รีวิวลูกค้า 2" },
  { img: review3, alt: "รีวิวลูกค้า 3" },
  { img: review4, alt: "รีวิวลูกค้า 4" },
  { img: review5, alt: "รีวิวลูกค้า 5" },
  { img: review6, alt: "รีวิวลูกค้า 6" },
  { img: review7, alt: "รีวิวลูกค้า 7" },
  { img: review8, alt: "รีวิวลูกค้า 8" },
  { img: review9, alt: "รีวิวลูกค้า 9" },
  { img: review10, alt: "รีวิวลูกค้า 10" },
];

const ReviewsSection: React.FC = () => {
  return (
    <section
      className="py-16 bg-gray-50 dark:bg-gray-900 transition-colors duration-500"
      aria-labelledby="reviews-heading"
      role="region"
      id="reviews"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          id="reviews-heading"
          className="text-3xl sm:text-4xl font-bold text-center text-gray-800 dark:text-white mb-12"
        >
          รวมรีวิวลูกค้าบางส่วน
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reviews.map(({ img, alt }, index) => (
            <figure
              key={index}
              className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-[1.02] bg-white dark:bg-gray-800"
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
                className="w-full h-auto object-cover transition-opacity duration-500"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;