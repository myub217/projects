// src/components/ReviewsSection.tsx

import React from 'react';

interface Review {
  name: string;
  feedback: string;
  date: string;
}

const mockReviews: Review[] = [
  {
    name: 'คุณแพรว - เจ้าของธุรกิจออนไลน์',
    feedback:
      '“JP ช่วยจัดระบบเอกสารและทำแบรนด์ให้ดูน่าเชื่อถือมากขึ้น ลูกค้าตัดสินใจเร็วขึ้นกว่าเดิมเยอะเลยค่ะ”',
    date: '12 มิ.ย. 2025',
  },
  {
    name: 'คุณไมค์ - ผู้ก่อตั้ง StartUp',
    feedback:
      '“พวกเขามีความเป็นมืออาชีพสูงมาก ทุกงานเสร็จตรงเวลา และมีความเข้าใจเชิงธุรกิจจริง ๆ”',
    date: '8 พ.ค. 2025',
  },
  {
    name: 'คุณแอม - เจ้าของร้านความงาม',
    feedback:
      '“ใช้บริการด้านการตลาดครบวงจรของ JP แล้วร้านเราดูโปรขึ้นทันทีเลยค่ะ คนติดตามเพิ่มขึ้นเรื่อย ๆ”',
    date: '24 เม.ย. 2025',
  },
];

const ReviewsSection: React.FC = () => (
  <section
    id="reviews"
    aria-labelledby="reviews-heading"
    className="section bg-base-100 dark:bg-base-200 text-center px-4 py-16 sm:px-6 lg:px-8"
  >
    <div className="max-w-7xl mx-auto">
      <h2
        id="reviews-heading"
        className="text-3xl sm:text-4xl font-bold text-primary mb-6 font-heading"
      >
        รีวิวจากลูกค้าของเรา
      </h2>
      <p className="max-w-3xl mx-auto text-base sm:text-lg text-muted mb-12">
        ความประทับใจของลูกค้าคือสิ่งสำคัญที่สุดของเรา 🙌
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockReviews.map((review, idx) => (
          <div
            key={idx}
            className="card bg-base-100 dark:bg-base-300 border border-border dark:border-base-300 rounded-xl p-6 text-left shadow-sm hover:shadow-md transition-shadow"
          >
            <blockquote className="text-sm sm:text-base text-foreground italic mb-4">
              {review.feedback}
            </blockquote>
            <div className="text-sm font-medium text-muted mt-auto">
              <div>{review.name}</div>
              <div className="text-xs text-gray-400 dark:text-gray-500">{review.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ReviewsSection;