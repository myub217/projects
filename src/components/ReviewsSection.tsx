import React from "react";

interface Review {
  id: number;
  name: string;
  message: string;
  avatar?: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "คุณสมชาย",
    message: "บริการดีมาก ทีมงานให้คำปรึกษาอย่างมืออาชีพ ประทับใจสุด ๆ",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    name: "คุณนิดา",
    message: "เอกสารครบถ้วน รวดเร็ว ใช้งานง่ายมากค่ะ",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    name: "คุณธนา",
    message: "ช่วยให้ผมยื่นกู้ผ่านภายในเวลาไม่นาน ขอบคุณมากครับ",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 4,
    name: "คุณปิ่น",
    message: "ชอบดีไซน์และระบบหลังบ้าน ใช้งานง่ายมากค่ะ",
    avatar: "https://i.pravatar.cc/150?img=45",
  },
  {
    id: 5,
    name: "คุณเอก",
    message: "ทีมงานตอบไวและใส่ใจทุกรายละเอียด แนะนำเลยครับ",
    avatar: "https://i.pravatar.cc/150?img=23",
  },
];

const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      className="py-16 bg-base-200"
      aria-labelledby="reviews-title"
      role="region"
    >
      <div className="container max-w-7xl mx-auto px-6">
        <h2
          id="reviews-title"
          className="text-4xl font-extrabold text-center mb-12 text-pink-400 drop-shadow-neon"
        >
          ความคิดเห็นจากลูกค้า
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map(({ id, name, message, avatar }) => (
            <article
              key={id}
              tabIndex={0}
              className="card bg-base-100 rounded-xl p-6 shadow-lg hover:shadow-pink-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-300"
              aria-label={`รีวิวโดย ${name}`}
              role="article"
            >
              <div className="flex items-center gap-4 mb-4">
                {avatar ? (
                  <img
                    src={avatar}
                    alt={`รูปโปรไฟล์ของ ${name}`}
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/fallback-avatar.png";
                    }}
                    className="w-14 h-14 rounded-full border-2 border-pink-400 shadow-md object-cover"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="w-14 h-14 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 text-xl font-bold border-2 border-pink-400 shadow-md select-none"
                  >
                    {name.charAt(0).toUpperCase()}
                  </div>
                )}
                <h3 className="text-lg font-semibold text-pink-400">
                  {name}
                </h3>
              </div>

              <blockquote className="text-base-content text-sm leading-relaxed italic">
                “{message}”
              </blockquote>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;