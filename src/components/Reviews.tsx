const reviews = [
  { id: 1, name: "John Doe", role: "Customer", comment: "Great service!", avatar: "/images/avatar1.png" },
  { id: 2, name: "Jane Smith", role: "Client", comment: "Highly recommended!", avatar: "/images/avatar2.png" }
];

<section
  id="reviews"
  className="py-20 bg-gray-50"
  aria-label="รีวิวจากลูกค้า JP Visual & Docs"
>
  <div className="container max-w-7xl mx-auto px-6">
    <h2 className="text-4xl font-extrabold text-center mb-6 text-gray-900">
      รีวิวจากลูกค้า
    </h2>
    <p className="text-center mb-4 text-gray-700 max-w-2xl mx-auto text-lg">
      ลูกค้าที่เคยใช้บริการของเรา ต่างประทับใจในคุณภาพงานและความใส่ใจในทุกขั้นตอน
      ไม่ว่าจะเป็นการพัฒนาเว็บไซต์ แอปพลิเคชัน วางระบบ หรือการออกแบบเอกสารต่าง ๆ
    </p>
    <p className="text-center text-sm text-gray-500 mb-12 max-w-xl mx-auto">
      เราเชื่อว่าความพึงพอใจของลูกค้าคือหัวใจของการทำงาน
      และทุกเสียงตอบรับคือแรงผลักดันให้เราพัฒนาบริการให้ดียิ่งขึ้น
    </p>

    <div role="list" className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
      {reviews.map(({ id, name, role, comment, avatar }) => (
        <article
          key={id}
          role="listitem"
          className="bg-white shadow-md p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow duration-300"
        >
          <figure className="flex items-center space-x-4 mb-5">
            <img
              src={avatar}
              alt={`รูปโปรไฟล์ของ ${name}`}
              className="w-14 h-14 rounded-full border-2 border-gray-300 object-cover"
              loading="lazy"
              decoding="async"
              onError={(e) => {
                const img = e.currentTarget as HTMLImageElement;
                img.src = "https://via.placeholder.com/100?text=No+Avatar";
                img.alt = `ไม่มีรูปโปรไฟล์ของ ${name}`;
              }}
            />
            <figcaption>
              <h4
                tabIndex={0}
                className="font-semibold text-lg text-gray-900 cursor-pointer hover:underline focus:underline focus:outline-none"
                aria-label={`ชื่อผู้รีวิว ${name}`}
              >
                {name}
              </h4>
              <p className="text-sm text-gray-600 italic">{role}</p>
            </figcaption>
          </figure>
          <blockquote
            className="text-gray-800 italic leading-relaxed"
            aria-label={`ข้อความรีวิวจากคุณ ${name}`}
          >
            &ldquo;{comment}&rdquo;
          </blockquote>
        </article>
      ))}
    </div>

    <div className="mt-12 text-center">
      <a
        href="#contact"
        title="ติดต่อเรา"
        className="inline-block px-6 py-3 text-sm font-semibold rounded-lg border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white transition-all"
      >
        ติดต่อเราเพื่อเริ่มโปรเจกต์ของคุณ
      </a>
    </div>
  </div>
</section>