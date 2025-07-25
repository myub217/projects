// src/components/Sections/TestimonialsSection.tsx
// ✅ Testimonials section: responsive grid, accessible, professional styling

import React from 'react';

const testimonials = [
  { id: 1, text: 'บริการไว งานเนียน เหมือนจริงมากครับ', author: 'คุณเอ' },
  { id: 2, text: 'ติดต่อง่าย งานไว ตรงใจ', author: 'คุณบี' },
  { id: 3, text: 'ทีมงานดูแลดี บริการครบจบจริง ๆ', author: 'คุณซี' },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      aria-label="รีวิวจากลูกค้า"
      className="py-16 bg-base-100"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-primary">
          รีวิวลูกค้า
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ id, text, author }) => (
            <blockquote
              key={id}
              className="rounded-lg bg-base-200 p-6 shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
              tabIndex={0}
              aria-label={`รีวิวจากลูกค้า: ${author}`}
            >
              <p className="text-sm leading-relaxed">“{text}”</p>
              <footer className="mt-4 text-right font-semibold text-secondary">
                – {author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
