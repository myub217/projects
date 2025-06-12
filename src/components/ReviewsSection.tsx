import React, { KeyboardEvent } from "react";

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
    message:
      "บริการดีมาก ทีมงานให้คำปรึกษาอย่างมืออาชีพ เข้าใจขั้นตอนการยื่นกู้เป็นอย่างดี ประทับใจสุด ๆ",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    name: "คุณนิดา",
    message:
      "เอกสารครบถ้วน รวดเร็ว ใช้งานง่ายมากค่ะ ไม่ต้องเตรียมอะไรยุ่งยากเลย",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    name: "คุณธนา",
    message:
      "ช่วยให้ผมยื่นกู้ผ่านภายในเวลาไม่นาน พร้อมจัดทำโปรไฟล์การเงินได้อย่างมืออาชีพ ขอบคุณมากครับ",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 4,
    name: "คุณปิ่น",
    message:
      "ชอบดีไซน์เว็บไซต์และระบบหลังบ้านของ JP Visual & Docs ใช้งานง่ายมากค่ะ แนะนำเลย!",
    avatar: "https://i.pravatar.cc/150?img=45",
  },
  {
    id: 5,
    name: "คุณเอก",
    message:
      "ทีมงานตอบไวและใส่ใจทุกรายละเอียด ตั้งแต่จัดเอกสาร วางแผน ไปจนถึงติดตามผลจริงจัง",
    avatar: "https://i.pravatar.cc/150?img=23",
  },
];

const ReviewsSection: React.FC = () => {
  const onKeyDownHandler = (e: KeyboardEvent<HTMLElement>, name: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      alert(`คุณกดดูรีวิวจากคุณ ${name}`);
    }
  };

  return (
    <section
      id="reviews"
      className="py-16 bg-base-200 text-base-content"
      aria-labelledby="reviews-title"
      role="region"
    >
      <div className="container max-w-7xl mx-auto px-6">
        <h2
          id="reviews-title"
          className="text-4xl font-extrabold text-center mb-4 text-pink-400 drop-shadow-neon"
        >
          ความคิดเห็นจากลูกค้าจริง
        </h2>
        <p className="text-center mb-12 text-base text-base-content/70 max-w-2xl mx-auto">
          เราให้บริการด้านเอกสาร วีซ่า การเงิน และโปรไฟล์ครบวงจร โดยทีมงานมืออาชีพ
          <br />
          นี่คือเสียงสะท้อนจากลูกค้าที่ไว้วางใจใช้บริการของเรา
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map(({ id, name, message, avatar }) => (
            <button
              key={id}
              tabIndex={0}
              aria-label={`ดูรีวิวจาก ${name}`}
              onKeyDown={(e) => onKeyDownHandler(e, name)}
              onClick={() => alert(`คุณคลิกดูรีวิวจากคุณ ${name}`)}
              className="text-left card bg-base-100 rounded-xl p-6 shadow-lg hover:shadow-pink-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-300 cursor-pointer"
            >
              <figure className="flex items-center gap-4 mb-4">
                {avatar ? (
                  <img
                    src={avatar}
                    alt={`รูปโปรไฟล์ของ ${name}`}
                    loading="lazy"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src =
                        "/fallback-avatar.png";
                    }}
                    className="w-14 h-14 rounded-full border-2 border-pink-400 shadow-md object-cover"
                  />
                ) : (
                  <div
                    aria-hidden="true"
                    className="w-14 h-14 flex items-center justify-center rounded-full bg-pink-100 text-pink-600 text-xl font-bold border-2 border-pink-400 shadow-md select-none"
                  >
                    {name.charAt(0)}
                  </div>
                )}
                <figcaption>
                  <h3 className="text-lg font-semibold text-pink-400">
                    {name}
                  </h3>
                </figcaption>
              </figure>

              <blockquote className="text-base-content text-sm leading-relaxed italic">
                “{message}”
              </blockquote>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;