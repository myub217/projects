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
    name: "Aom",
    role: "CEO, Startup A",
    comment: "บริการดีมาก ทีมงานมืออาชีพและใส่ใจทุกรายละเอียด!",
    avatar: "https://i.pravatar.cc/100?img=1",
  },
  {
    id: 2,
    name: "Benz",
    role: "CTO, Company B",
    comment: "แอปที่พัฒนาให้ใช้งานได้จริง และดูดีมาก 👍",
    avatar: "https://i.pravatar.cc/100?img=2",
  },
  {
    id: 3,
    name: "Nok",
    role: "UX Designer",
    comment: "UI/UX ของแอปที่ได้รับนั้นตอบโจทย์และสวยมากเลยค่ะ",
    avatar: "https://i.pravatar.cc/100?img=3",
  },
  {
    id: 4,
    name: "John",
    role: "Freelancer",
    comment: "ทีมนี้เจ๋งมากครับ ส่งงานไวและแก้ไขเร็ว",
    avatar: "https://i.pravatar.cc/100?img=4",
  },
  {
    id: 5,
    name: "May",
    role: "Marketing",
    comment: "แนะนำเลยค่ะ ทีมงานเป็นกันเองและให้คำปรึกษาได้ดีมาก",
    avatar: "https://i.pravatar.cc/100?img=5",
  },
];

const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-6 text-pink-400 neon-text">
          รีวิวจากลูกค้า
        </h2>
        <p className="text-center mb-12 text-base-content/80 max-w-xl mx-auto">
          ฟังเสียงจากลูกค้าจริงที่ไว้วางใจให้เราสร้างสรรค์แอปพลิเคชันให้กับธุรกิจของพวกเขา
        </p>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {reviews.map(({ id, name, role, comment, avatar }) => (
            <div
              key={id}
              className="card bg-base-100 shadow-neon p-6 hover:shadow-pink-600 transition-shadow duration-300 rounded-lg"
            >
              <div className="flex items-center space-x-4 mb-5">
                <img
                  src={avatar}
                  alt={name}
                  className="w-14 h-14 rounded-full border-2 border-pink-400 shadow-neon"
                />
                <div>
                  <h4 className="font-extrabold text-lg text-pink-400 neon-text">
                    {name}
                  </h4>
                  <p className="text-sm text-pink-300 italic">{role}</p>
                </div>
              </div>
              <p className="text-base-content/90 italic">&ldquo;{comment}&rdquo;</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;