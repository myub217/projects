const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16 bg-base-100">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-primary">
          รีวิวลูกค้า
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[
            { text: 'บริการไว งานเนียน เหมือนจริงมากครับ', author: 'คุณเอ' },
            { text: 'ติดต่อง่าย งานไว ตรงใจ', author: 'คุณบี' },
            { text: 'ทีมงานดูแลดี บริการครบจบจริง ๆ', author: 'คุณซี' },
          ].map(({ text, author }, idx) => (
            <div
              key={idx}
              className="rounded-lg bg-base-200 p-6 shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-sm leading-relaxed">“{text}”</p>
              <div className="mt-4 text-right font-semibold text-secondary">
                – {author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
