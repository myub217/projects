import React, { useState, useCallback, KeyboardEvent, useId } from "react";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface Review {
  id: number;
  name: string;
  service: string;
  message: string;
  rating: number;
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
    name: "คุณอรทัย สุวรรณ",
    service: "รับดูแลเอกสารยื่นวีซ่า",
    message:
      "บริการดูแลเอกสารยื่นวีซ่าของ JP Visual & Docs ดีมากค่ะ เอกสารครบถ้วนถูกต้องทุกขั้นตอน ผ่านการอนุมัติเร็ว และมีคำแนะนำที่ชัดเจน ทำให้กระบวนการไม่ซับซ้อนเลยค่ะ",
    rating: 5,
  },
  {
    id: 3,
    name: "นายวรเชษฐ์ พิทักษ์",
    service: "แก้ไข สร้างใหม่ สลิป / เอกสาร",
    message:
      "แก้ไขสลิปกับที่นี่รวดเร็วและถูกต้องมาก ใช้ฟอนต์ที่ทันสมัย และงานออกมาเนี๊ยบสุด ๆ ราคาก็ยุติธรรม เหมาะสำหรับคนที่ต้องการความรวดเร็วและมืออาชีพจริง ๆ ครับ",
    rating: 4,
  },
  {
    id: 4,
    name: "นางสาวพิมพ์ชนก กิ่งแก้ว",
    service: "แก้ไข-สร้างใหม่-จัดหาเอกสาร",
    message:
      "บริการครบครัน ตอบโจทย์ทุกความต้องการของเรา ไม่ว่าจะเอกสารแบบไหนก็ช่วยแก้ไขและจัดหาได้ดีมาก ช่วยประหยัดเวลาที่จะต้องทำเองเยอะเลยค่ะ",
    rating: 5,
  },
  {
    id: 5,
    name: "คุณธนวัฒน์ สายใจ",
    service: "ดูแลการตลาดครบวงจร",
    message:
      "ทีมงานวางแผนการตลาดให้ละเอียดและตรงกลุ่มเป้าหมายจริง ๆ ผลงานภาพลักษณ์แบรนด์ดูดีขึ้นอย่างเห็นได้ชัด และคอนเทนต์ก็โดนใจลูกค้า แนะนำเลยครับ",
    rating: 5,
  },
  {
    id: 6,
    name: "คุณสาวิตรี ใจดี",
    service: "ออกแบบโลโก้/แบนเนอร์/ทีม",
    message:
      "งานออกแบบสวยงามตรงใจมาก ๆ ค่ะ โลโก้และแบนเนอร์ที่ได้ทำให้แบรนด์ของเราดูมืออาชีพขึ้นมาก ใช้งานได้ทั้งออนไลน์และออฟไลน์ ขอบคุณทีม JP Visual & Docs มากค่ะ",
    rating: 5,
  },
  {
    id: 7,
    name: "นายปกรณ์ จิตตะนัย",
    service: "ระบบหลังบ้านธุรกิจ",
    message:
      "ระบบหลังบ้านที่พัฒนาขึ้นช่วยให้จัดการลูกค้าและงานได้ง่ายขึ้นมาก อัตโนมัติครบถ้วน ลูกค้าติดต่อสะดวก ทีมงานดูแลดีและแก้ไขปัญหาได้เร็วมากครับ",
    rating: 5,
  },
  {
    id: 8,
    name: "คุณวริศรา สุขสันต์",
    service: "สร้างภาพลักษณ์ / ทำลายภาพลักษณ์",
    message:
      "บริการเฉพาะทางนี้ช่วยยกระดับภาพลักษณ์บริษัทของเราได้อย่างมืออาชีพ ทำให้เราได้รับความไว้วางใจจากลูกค้ามากขึ้นจริง ๆ ขอบคุณมากค่ะ",
    rating: 5,
  },
  {
    id: 9,
    name: "คุณกิตติพงษ์ รักษ์ดี",
    service: "บริการให้คำปรึกษาการเงิน",
    message:
      "คำแนะนำการเงินที่ได้รับช่วยให้วางแผนและบริหารจัดการเงินได้ดีขึ้นมาก มีระบบติดตามผลที่ชัดเจนและเป็นมืออาชีพมากครับ",
    rating: 5,
  },
  {
    id: 10,
    name: "นางสาวปาริฉัตร นิ่มนวล",
    service: "จัดการเอกสารทางธุรกิจ",
    message:
      "การจัดการเอกสารของทีมงาน JP Visual & Docs มีความเป็นระบบ เรียบร้อยและรวดเร็วมาก ช่วยลดความยุ่งยากและความผิดพลาดได้เยอะค่ะ",
    rating: 5,
  },
];

const MAX_PREVIEW_LENGTH = 120;

const ReviewsSection: React.FC = () => {
  const [expandedIds, setExpandedIds] = useState<Set<number>>(new Set());
  const uniqueId = useId();

  const toggleExpand = useCallback((id: number) => {
    setExpandedIds((prev) => {
      const newSet = new Set(prev);
      newSet.has(id) ? newSet.delete(id) : newSet.add(id);
      return newSet;
    });
  }, []);

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    id: number
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleExpand(id);
    }
  };

  if (reviews.length === 0) {
    return (
      <motion.section
        id="reviews"
        aria-labelledby="reviews-title"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-base-100 dark:bg-gray-900 rounded-lg shadow-md text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2
          id="reviews-title"
          className="text-3xl font-extrabold text-primary dark:text-accent"
        >
          เสียงตอบรับจากลูกค้า
        </h2>
        <p className="mt-6 text-gray-600 dark:text-gray-400">
          ขณะนี้ยังไม่มีรีวิวจากลูกค้า
        </p>
      </motion.section>
    );
  }

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
          const shouldTruncate = message.length > MAX_PREVIEW_LENGTH;
          const displayMessage =
            shouldTruncate && !isExpanded
              ? message.slice(0, MAX_PREVIEW_LENGTH) + "..."
              : message;
          const messageId = `${uniqueId}-review-${id}`;

          return (
            <motion.article
              key={id}
              className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg flex flex-col focus-within:ring-2 focus-within:ring-primary dark:focus-within:ring-accent transition-shadow duration-200 outline-none"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: id * 0.12 }}
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
                id={messageId}
                className="text-gray-700 dark:text-gray-300 text-sm flex-grow leading-relaxed"
                aria-live="polite"
              >
                “{displayMessage}”
              </section>

              {shouldTruncate && (
                <button
                  type="button"
                  onClick={() => toggleExpand(id)}
                  onKeyDown={(e) => handleKeyDown(e, id)}
                  className="mt-3 self-center text-primary dark:text-accent underline text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent rounded hover:text-primary-focus dark:hover:text-accent-focus transition-colors duration-200"
                  aria-expanded={isExpanded}
                  aria-controls={messageId}
                  aria-label={
                    isExpanded
                      ? `ย่อข้อความรีวิวจากคุณ ${name}`
                      : `อ่านรีวิวเพิ่มเติมจากคุณ ${name}`
                  }
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