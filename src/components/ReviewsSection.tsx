import React from "react";
import { motion } from "framer-motion";

interface Review {
  id: number;
  name: string;
  avatarUrl: string;
  role?: string;
  content: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "คุณสมชาย พงษ์ศรี",
    avatarUrl: "/assets/avatars/user1.jpg",
    role: "เจ้าของธุรกิจ",
    content:
      "บริการดีมาก ทีมงานมืออาชีพ เข้าใจความต้องการ และส่งงานตรงเวลา แนะนำอย่างยิ่ง!",
  },
  {
    id: 2,
    name: "นางสาวสุนิสา ศรีวัฒน์",
    avatarUrl: "/assets/avatars/user2.jpg",
    role: "ผู้จัดการฝ่ายการตลาด",
    content:
      "เว็บไซต์ที่ได้รับช่วยเพิ่มยอดขายและภาพลักษณ์ของบริษัทอย่างชัดเจน ขอบคุณทีม JP Visual & Docs ครับ!",
  },
  {
    id: 3,
    name: "คุณอาทิตย์ มณีโชติ",
    avatarUrl: "/assets/avatars/user3.jpg",
    role: "เจ้าของร้านอาหาร",
    content:
      "การออกแบบน่าประทับใจมาก เว็บไซต์ใช้งานง่าย ลูกค้าชอบมากขึ้นจริง ๆ ครับ",
  },
  {
    id: 4,
    name: "นางสาวพรทิพย์ ศิริรักษ์",
    avatarUrl: "/assets/avatars/user4.jpg",
    role: "ฟรีแลนซ์",
    content:
      "ทีมงานตอบสนองรวดเร็วและมีไอเดียสร้างสรรค์มาก ๆ รู้สึกประทับใจและจะใช้บริการอีกแน่นอนค่ะ",
  },
];

const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="max-w-7xl mx-auto px-4 py-16"
    >
      <h2
        id="reviews-title"
        className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white"
      >
        รีวิวจากลูกค้า
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {reviews.map(({ id, name, avatarUrl, role, content }) => (
          <motion.blockquote
            key={id}
            className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: id * 0.1 }}
          >
            <div className="flex items-center mb-4">
              <img
                src={avatarUrl}
                alt={`รูปโปรไฟล์ของ ${name}`}
                className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary"
                loading="lazy"
                decoding="async"
              />
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{name}</p>
                {role && (
                  <p className="text-sm text-primary dark:text-secondary">{role}</p>
                )}
              </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 flex-grow leading-relaxed">
              “{content}”
            </p>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;