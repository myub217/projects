const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto">
        <h2 className="mb-6 text-center text-3xl font-bold">รีวิวลูกค้า</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* ตัวอย่างรีวิว */}
          <div className="rounded-lg bg-base-200 p-6 shadow-md">
            <p className="text-sm">“บริการไว งานเนียน เหมือนจริงมากครับ”</p>
            <div className="mt-4 text-right font-semibold">– คุณเอ</div>
          </div>
          <div className="rounded-lg bg-base-200 p-6 shadow-md">
            <p className="text-sm">“ติดต่อง่าย งานไว ตรงใจ”</p>
            <div className="mt-4 text-right font-semibold">– คุณบี</div>
          </div>
          <div className="rounded-lg bg-base-200 p-6 shadow-md">
            <p className="text-sm">“ทีมงานดูแลดี บริการครบจบจริง ๆ”</p>
            <div className="mt-4 text-right font-semibold">– คุณซี</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
