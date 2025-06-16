import React, { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Review {
  id: number;
  name: string;
  service: string;
  message: string;
  rating: number; // 1-5
}

const reviews: Review[] = [
  {
    id: 1,
    name: "คุณสมชาย จันทร์รุ่ง",
    service: "บริการยื่นกู้สินเชื่อ",
    message:
      "ทีมงานมืออาชีพมาก ให้คำแนะนำละเอียดและช่วยให้กระบวนการกู้สินเชื่อผ่านได้รวดเร็วมากครับ ขอบคุณมาก ๆ สำหรับการดูแลอย่างใกล้ชิดและตอบทุกคำถามอย่างละเอียดจนผมมั่นใจในทุกขั้นตอนของการขอสินเชื่อครับ",
    rating: 5,
  },
  {
    id: 2,
    name: "นางสาวปิยนุช สวัสดิ์ดี",
    service: "บริการออกแบบกราฟิก",
    message:
      "ผลงานออกแบบสวยงาม ตรงกับความต้องการมากค่ะ ทีมงานเข้าใจและสื่อสารดีมาก ขอบคุณสำหรับการออกแบบที่สร้างสรรค์และทันสมัยมากค่ะ",
    rating: 4,
  },
  {
    id: 3,
    name: "นายวิทยา โชติชัย",
    service: "บริการทำเว็บไซต์",
    message:
      "เว็บไซต์ใช้งานง่าย และรองรับมือถืออย่างดี ประทับใจบริการหลังการขายครับ ทีมงานดูแลดีและตอบปัญหาเร็วมาก",
    rating: 5,
  },
  {
    id: 4,
    name: "นางสาวสุนิสา ศรีสุข",
    service: "บริการตลาดออนไลน์",
    message:
      "ยอดขายเพิ่มขึ้นอย่างชัดเจนหลังใช้บริการการตลาดออนไลน์กับทีมนี้ค่ะ แนะนำเลยให้ทุกคนที่ต้องการเติบโตในธุรกิจ",
    rating: 5,
  },
  {
    id: 5,
    name: "นายธนพล กิจเจริญ",
    service: "บริการระบบหลังบ้าน",
    message:
      "ระบบเสถียรและตอบโจทย์งานได้อย่างครบถ้วน ทีมงานแก้ปัญหาเร็วมากครับ ทำให้ธุรกิจผมสะดวกขึ้นเยอะ",
    rating: 4,
  },
  {
    id: 6,
    name: "นางสาวพิมพ์ใจ ศิลป์ดี",
    service: "บริการวีซ่าและเอกสาร",
    message:
      "ขั้นตอนรวดเร็วและมีความชัดเจน ทีมงานช่วยดูแลเอกสารอย่างละเอียดมากค่ะ ช่วยลดความยุ่งยากและทำให้ผ่านขั้นตอนต่าง ๆ อย่างง่ายดาย",
    rating: 5,
  },
  {
    id: 7,
    name: "นายอนุชา สุขใจ",
    service: "บริการ AI Solution",
    message:
      "ระบบ AI ที่พัฒนามาช่วยประหยัดเวลาทำงานได้มาก ทีมงานให้คำปรึกษาดีเยี่ยมครับ ประทับใจมาก ๆ กับผลลัพธ์ที่ได้",
    rating: 5,
  },
  {
    id: 8,
    name: "นางสาวอารยา แสนดี",
    service: "บริการ Workshop และอบรม",
    message:
      "Workshop มีประโยชน์มาก ได้ความรู้และเทคนิคใหม่ ๆ ที่สามารถนำไปใช้จริงได้ค่ะ ทีมงานมืออาชีพและน่ารักมาก",
    rating: 4,
  },
];

const MAX_PREVIEW_LENGTH = 120;

const ReviewsSection: React.FC = () => {
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());

  const toggleExpand = useCallback((id: number) => {
    setExpandedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }, []);

  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-base-100 dark:bg-gray-900 rounded-lg shadow-md"
    >
      <motion.h2
        id="reviews-title"
        className="text-3xl font-extrabold text-center mb-10 text-primary dark:text-accent"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        เสียงตอบรับจากลูกค้า
      </motion.h2>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        role="list"
        aria-label="รายการรีวิวจากลูกค้า"
      >
        {reviews.map(({ id, name, service, message, rating }) => {
          const isExpanded = expandedIds.has(id);
          const displayMessage =
            message && message.length > MAX_PREVIEW_LENGTH && !isExpanded
              ? message.slice(0, MAX_PREVIEW_LENGTH) + "..."
              : message || "ไม่มีข้อความรีวิว";

          return (
            <motion.article
              key={id}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col focus-within:ring-2 focus-within:ring-primary dark:focus-within:ring-accent"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: id * 0.1 }}
              tabIndex={0}
              role="listitem"
              aria-label={`รีวิวจากคุณ ${name} สำหรับบริการ ${service}`}
            >
              <header>
                <h3 className="text-lg font-semibold text-center text-gray-900 dark:text-white mb-1">
                  {name}
                </h3>
                <p className="text-sm text-center text-primary dark:text-accent font-medium mb-3">
                  {service}
                </p>
                <div
                  className="flex justify-center gap-1 mb-3"
                  aria-label={`คะแนนรีวิว ${rating} ดาว`}
                  role="img"
                >
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={`${
                        i < rating
                          ? "text-yellow-400"
                          : "text-gray-300 dark:text-gray-600"
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </header>

              <section
                id={`review-message-${id}`}
                className="text-gray-700 dark:text-gray-300 text-sm flex-grow leading-relaxed"
              >
                “{displayMessage}”
              </section>

              {message && message.length > MAX_PREVIEW_LENGTH && (
                <button
                  onClick={() => toggleExpand(id)}
                  className="mt-3 self-center text-primary dark:text-accent underline text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent rounded"
                  aria-expanded={isExpanded}
                  aria-controls={`review-message-${id}`}
                >
                  {isExpanded ? "ย่อข้อความ" : "อ่านรีวิวเพิ่มเติม"}
                </button>
              )}
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};

export default ReviewsSection;