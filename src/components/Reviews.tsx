import React from "react";

interface Review {
  id: number;
  name: string;
  role: string;
  comment: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "ออม",
    role: "CEO, Startup A",
    comment:
      "บริการดีมาก ทีมงานมืออาชีพ ใส่ใจทุกรายละเอียด ทำให้แอปของเราน่าเชื่อถือและใช้ได้จริง!",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "เบนซ์",
    role: "CTO, Company B",
    comment:
      "ประทับใจตั้งแต่ขั้นตอนวิเคราะห์ระบบจนถึงส่งมอบ ทีมเข้าใจธุรกิจและแนะนำสิ่งที่เหมาะสมมาก",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "นก",
    role: "UX Designer",
    comment:
      "UI/UX ที่ได้ดูทันสมัย มีความสอดคล้องกับแบรนด์ ใช้งานง่าย ถูกใจทั้งลูกค้าและทีม",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 4,
    name: "จอห์น",
    role: "Freelancer",
    comment:
      "ตอบโจทย์ทุกอย่างที่ขอไว้ ส่งงานรวดเร็ว พร้อมคำแนะนำดี ๆ ที่ช่วยให้ระบบของผมดูมืออาชีพขึ้นมาก",
    avatar: "https://i.pravatar.cc/100?img=4",
  },
  {
    id: 5,
    name: "เมย์",
    role: "ฝ่ายการตลาด",
    comment:
      "ขอชื่นชมการสื่อสารที่ดีของทีมงาน เข้าใจง่าย เป็นกันเอง ทำให้ทุกขั้นตอนราบรื่นมากค่ะ",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
];

const ReviewsSection: React.FC = () => {
  const handleNameKeyDown = (
    e: React.KeyboardEvent<HTMLHeadingElement>
  ) => {
    if ((e.key === "Enter" || e.key === " ") && e.currentTarget.tagName === "H4") {
      e.preventDefault();
      alert("ดูรายละเอียดของรีวิวนี้");
    }
  };

  return (
    <section
      id="reviews"
      className="py-20 bg-base-200"
      aria-label="รีวิวจากลูกค้า JP Visual & Docs"
    >
      <div className="container max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-6 text-pink-400 neon-text">
          รีวิวจากลูกค้า
        </h2>
        <p className="text-center mb-4 text-base-content/80 max-w-2xl mx-auto text-lg">
          ลูกค้าที่เคยใช้บริการของเรา ต่างประทับใจในคุณภาพงานและความใส่ใจในทุกขั้นตอน
          ไม่ว่าจะเป็นการพัฒนาเว็บไซต์ แอปพลิเคชัน วางระบบ หรือการออกแบบเอกสารต่าง ๆ
        </p>
        <p className="text-center text-sm text-base-content/60 mb-12 max-w-xl mx-auto">
          เราเชื่อว่าความพึงพอใจของลูกค้าคือหัวใจของการทำงาน
          และทุกเสียงตอบรับคือแรงผลักดันให้เราพัฒนาบริการให้ดียิ่งขึ้น
        </p>

        <div role="list" className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {reviews.map(({ id, name, role, comment, avatar }) => (
            <article
              key={id}
              role="listitem"
              className="card bg-base-100 shadow-neon p-6 hover:shadow-pink-600 transition-shadow duration-300 rounded-lg"
            >
              <figure className="flex items-center space-x-4 mb-5">
                <img
                  src={avatar}
                  alt={`รูปโปรไฟล์ของ ${name}`}
                  className="w-14 h-14 rounded-full border-2 border-pink-400 shadow-neon object-cover"
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
                    className="font-extrabold text-lg text-pink-400 neon-text cursor-pointer hover:underline focus:underline focus:outline-none"
                    onKeyDown={handleNameKeyDown}
                    aria-label={`ชื่อผู้รีวิว ${name}`}
                  >
                    {name}
                  </h4>
                  <p className="text-sm text-pink-300 italic">{role}</p>
                </figcaption>
              </figure>
              <blockquote
                className="text-base-content/90 italic leading-relaxed"
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
            className="inline-block px-6 py-3 text-sm font-semibold rounded-lg border border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-white transition-all"
          >
            ติดต่อเราเพื่อเริ่มโปรเจกต์ของคุณ
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;