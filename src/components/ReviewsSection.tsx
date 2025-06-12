import React from "react";

interface Review {
  id: number;
  name: string;
  message: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "สมชาย",
    message:
      "ไม่คิดว่าจะมีทีมที่เข้าใจการยื่นกู้ได้ดีขนาดนี้! ตั้งแต่วันแรกที่ติดต่อมา ทีมงานให้คำปรึกษาชัดเจน ใส่ใจ และช่วยให้ผมผ่านได้จริง ๆ ประทับใจมากครับ",
  },
  {
    id: 2,
    name: "นิดา",
    message:
      "รู้สึกโชคดีมากที่เจอทีมนี้ค่ะ ทุกอย่างถูกจัดเตรียมให้พร้อม เอกสารครบถ้วน รวดเร็ว ไม่ต้องวิ่งเต้นเองเลย เหมือนได้ผู้ช่วยมืออาชีพจริง ๆ",
  },
  {
    id: 3,
    name: "ธนา",
    message:
      "ผมเคยคิดว่าการขอสินเชื่อยุ่งยาก แต่ทีม JP Visual & Docs ทำให้มันง่ายขึ้นมาก ไม่ใช่แค่ผ่าน แต่ยังได้คำแนะนำดี ๆ ที่ใช้ต่อยอดได้ในอนาคตอีกด้วย",
  },
  {
    id: 4,
    name: "ปิ่น",
    message:
      "ว้าว! ประทับใจตั้งแต่การให้บริการครั้งแรกค่ะ เว็บไซต์ดูดี ระบบใช้งานง่าย และทีมงานตอบคำถามไวมาก ไม่รู้สึกโดดเดี่ยวเลยตลอดกระบวนการ",
  },
  {
    id: 5,
    name: "เอก",
    message:
      "ผมเคยใช้บริการจากหลายที่ แต่ที่นี่ต่างออกไปจริง ๆ ทีมงานใส่ใจทุกรายละเอียด เหมือนมีพาร์ตเนอร์ช่วยวางแผนและดูแลทุกขั้นตอน",
  },
  {
    id: 6,
    name: "พร",
    message:
      "ช่วยชีวิตเลยค่ะ! ตอนแรกไม่มีความรู้เลยเรื่องเอกสาร แต่น้อง ๆ ทีมนี้ให้คำแนะนำดีมาก ทำให้ผ่านได้แบบไม่มีปัญหา บริการรวดเร็วทันใจจริง ๆ",
  },
  {
    id: 7,
    name: "วิทย์",
    message:
      "ผมชอบความตรงไปตรงมาของทีมนี้มากครับ ไม่ขายฝัน แต่ทำได้จริง พอเห็นผลลัพธ์แล้วต้องบอกว่า 'คุ้มค่าทุกบาท' ที่จ่ายไป",
  },
  {
    id: 8,
    name: "อร",
    message:
      "ดีใจมากที่ตัดสินใจเลือกที่นี่ ทุกขั้นตอนชัดเจน โปร่งใส ทีมงานติดตามงานให้อย่างต่อเนื่อง จนรู้สึกว่าเราเป็นคนสำคัญจริง ๆ",
  },
];

const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      className="py-20 bg-slate-50 text-slate-800"
      aria-labelledby="reviews-title"
      role="region"
    >
      <div className="container max-w-7xl mx-auto px-6">
        <h2
          id="reviews-title"
          className="text-4xl md:text-5xl font-extrabold text-center mb-6 text-blue-900"
        >
          ความคิดเห็นจากลูกค้าจริง
        </h2>
        <p className="text-center mb-12 text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
          เราให้บริการด้านเอกสาร วีซ่า การเงิน และโปรไฟล์ครบวงจร โดยทีมงานมืออาชีพ
          <br />
          นี่คือเสียงสะท้อนจากลูกค้าที่ไว้วางใจใช้บริการของเรา
        </p>

        <div
          role="list"
          className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        >
          {reviews.map(({ id, name, message }) => (
            <article
              key={id}
              role="listitem"
              className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-500"
              tabIndex={0}
              aria-label={`รีวิวจากคุณ ${name}`}
            >
              <figure className="flex items-center gap-4 mb-4">
                <div
                  aria-hidden="true"
                  className="w-14 h-14 flex items-center justify-center rounded-full bg-blue-100 text-blue-700 text-xl font-bold border border-blue-300 shadow-sm select-none"
                >
                  {name.charAt(0)}
                </div>
                <figcaption>
                  <h3 className="text-lg font-semibold text-blue-800">
                    {name}
                  </h3>
                </figcaption>
              </figure>

              <blockquote className="text-slate-700 text-sm leading-relaxed italic">
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