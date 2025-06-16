import React from "react";
import { motion } from "framer-motion";
import aboutUsImage from "../assets/about-us.jpg";

const About: React.FC = () => {
  return (
    <motion.section
      aria-labelledby="about-title"
      role="region"
      tabIndex={-1}
      className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-12 lg:px-24 py-16 bg-white dark:bg-gray-900"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.75, ease: "easeOut" }}
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      {/* ภาพประกอบทีมงาน */}
      <figure
        className="overflow-hidden rounded-3xl shadow-xl max-h-[400px] md:max-h-[520px]"
        aria-label="ภาพทีมงาน JP Visual & Docs กำลังทำงานอย่างมืออาชีพ"
      >
        <img
          src={aboutUsImage}
          alt="ทีมงาน JP Visual & Docs กำลังทำงานอย่างมืออาชีพ"
          className="w-full h-full object-cover object-center transition-transform duration-500 ease-in-out hover:scale-[1.05] focus-visible:outline-pink-500 focus-visible:outline-4"
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          width={600}
          height={400}
          sizes="(max-width: 768px) 100vw, 50vw"
          onError={(e) => {
            // กรณีโหลดภาพไม่สำเร็จ fallback เป็นสีพื้นหลัง
            (e.currentTarget as HTMLImageElement).src =
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23ccc'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%23666' font-size='24'%3Eภาพไม่สามารถแสดงได้%3C/text%3E%3C/svg%3E";
          }}
        />
        <noscript>
          <p className="sr-only">ภาพประกอบทีมงาน JP Visual & Docs</p>
        </noscript>
      </figure>

      {/* เนื้อหาเกี่ยวกับองค์กร */}
      <article
        itemScope
        itemType="https://schema.org/Organization"
        itemProp="mainEntity"
      >
        <h2
          id="about-title"
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8 leading-tight"
          itemProp="name"
        >
          เกี่ยวกับเรา
        </h2>

        <div
          className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed space-y-6"
          itemProp="description"
        >
          <p>
            เว็บนี้มีไว้โชว์ในสิ่งที่โชว์ได้ บางเรื่องในโลกธุรกิจ มันพูดบนหน้าเว็บไม่ได้
            แต่ใน <strong>“ห้องลับ”</strong> ของเรา — คุณจะได้เห็นทุกอย่าง
          </p>

          <p>ผมทำงานกับทุกสาย ทุกสี — ขาว เทา ดำ ผมอาจไม่ได้เก่งที่สุด</p>

          <p>
            แต่ผมคือ <strong>“ตัวเชื่อม”</strong> ที่พาคุณไปถึงเป้าหมาย
            <span className="block mt-1">
              Connection ที่ใช้งานได้จริง ไม่ใช่แค่มีไว้โชว์
            </span>
          </p>

          <p>
            จะคุยตรงกับผม หรือผ่านทีมงาน — แล้วแต่คุณ
            ถ้าไม่สบายใจ บอกทีมงานให้ต่อสายมาหาผมได้ทันที
          </p>

          <p>
            <strong>ความลับของคุณ คือกฎเหล็กของเรา</strong>
            <br />
            ไม่เคยหลุด ไม่เคยขาย ไม่เคยหักหลัง
          </p>

          <p>ไม่ว่าคุณจะเป็นใคร อยู่ในวงการไหน ผมไม่มองคุณต่ำหรือสูงไปกว่ากัน</p>

          <p>
            ธุรกิจของคุณอาจยังไม่สมบูรณ์ — <strong>เราเสริมให้</strong>
            <br />
            บางอย่างขาด — <strong>เราสร้างให้</strong>
            <br />
            และทั้งหมดต้อง <strong>ใช้งานได้จริง</strong> ไม่ใช่แค่ดูดีบนกระดาษ
          </p>

          <p>
            นี่คือโลกจริงที่คนข้างนอกไม่กล้าพูด
            แต่ผมพูด เพราะผมอยู่ในนั้น
          </p>

          <p>
            <strong>
              5 ปีในสนามจริง + ทีมงานที่เอาอยู่ทุกเคส
              <br />
              JP Visual & Docs — ของจริง ไม่ขายฝัน
            </strong>
          </p>

          <p className="text-right italic text-gray-500 dark:text-gray-400">
            By. เจ้าป่า
          </p>

          {/* ปุ่มติดต่อ */}
          <div className="flex flex-col sm:flex-row gap-4 pt-8">
            <a
              href="https://lin.ee/odeycin"
              target="_blank"
              rel="nofollow noopener noreferrer"
              role="button"
              aria-label="ติดต่อผ่าน LINE"
              className="inline-block px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-semibold text-center transition-colors duration-300 shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-400"
            >
              ติดต่อผ่าน LINE
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61573307616115&mibextid=kFxxJD"
              target="_blank"
              rel="nofollow noopener noreferrer"
              role="button"
              aria-label="ดูหน้า Facebook"
              className="inline-block px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-center transition-colors duration-300 shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400"
            >
              ดูหน้า Facebook
            </a>
          </div>
        </div>
      </article>
    </motion.section>
  );
};

export default About;