import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaEnvelope } from "react-icons/fa";
import aboutImage from "../assets/images/about-us.webp";
import signature from "@/assets/signature.webp";

const socialLinks = [
  {
    name: "LINE",
    href: "https://lin.ee/yourLineOA",
    src: "/images/icons/line.svg",
    alt: "LINE Official Account",
    className: "w-8 h-8",
  },
  {
    name: "Facebook",
    href: "https://facebook.com/yourpage",
    src: "/images/icons/Facebook.svg",
    alt: "Facebook Page",
    className: "w-8 h-8",
  },
  {
    name: "Instagram",
    href: "https://instagram.com/yourpage",
    src: "/images/icons/Instagram.svg",
    alt: "Instagram",
    className: "w-8 h-8",
  },
  {
    name: "Telegram",
    href: "https://t.me/yourtelegram",
    src: "/images/icons/Telagarm.svg",
    alt: "Telegram",
    className: "w-8 h-8",
  },
  {
    name: "Tiktok",
    href: "https://tiktok.com/@yourprofile",
    src: "/images/icons/Tiktok.svg",
    alt: "TikTok",
    className: "w-8 h-8",
  },
];

const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* รูปภาพประกอบ */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full"
        >
          <img
            src={aboutImage}
            alt="ทีมงาน JP - Visual & Docs"
            loading="lazy"
            decoding="async"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
        </motion.div>

        {/* เนื้อหา */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full flex flex-col"
        >
          <h2
            id="about-title"
            className="flex items-center gap-3 text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          >
            <FaUserTie className="text-blue-600 dark:text-white text-2xl" />
            JP - VISUAL & DOCS
          </h2>
          <hr className="border-white/20 dark:border-white/10 mb-6" />

          <div className="text-gray-700 dark:text-gray-300 text-lg space-y-5 leading-relaxed">
            <p>
              ธุรกิจสีเทาที่ออกแบบมาให้ได้มาตรฐานเท่าที่สามารถแสดงได้
              เราพร้อมร่วมงานกับทุกสายอาชีพ ทุกวงการ และพร้อมสร้างเครื่องมือที่ตอบโจทย์จริงให้ทุกคน
            </p>

            <p>
              เรายินดีให้คำปรึกษาแบบตรงไปตรงมา ด้วยข้อมูลจริง
              พร้อมอธิบายเปอร์เซ็นต์ความเสี่ยงและผลลัพธ์อย่างโปร่งใส เราไม่ขายฝัน
            </p>

            <p>
              หากคุณมีคำถามเพิ่มเติม หรือรายละเอียดที่ไม่สามารถเปิดเผยได้บนเว็บไซต์
              สามารถสอบถามแอดมินของเราได้ตลอด 24 ชั่วโมง
            </p>

            <p>
              หากคุณอยากคุยกับผมโดยตรง บอกแอดมินได้เลย
              <br />
              รับรองว่าคุณจะรู้สึกปลอดภัย และสบายใจที่ได้คุยแน่นอน
            </p>

            <blockquote
              className="mt-8 text-right italic font-medium text-gray-600 dark:text-white/70 border-r-4 border-white/50 pr-4 flex flex-col items-end gap-2"
              style={{ maxWidth: "320px" }}
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                ผมไม่ใช่คนที่เก่งที่สุด
                <br />
                แต่ผมมีทีมงานที่เก่งที่สุด
              </motion.span>

              <motion.img
                src={signature}
                alt="ลายเซ็นเจ้าป่า"
                className="w-28 sm:w-36 h-auto select-none pointer-events-none"
                loading="lazy"
                style={{
                  filter: `
                    brightness(2)
                    contrast(1.6)
                    drop-shadow(0 0 3px rgba(255,255,255,0.4))
                    drop-shadow(0 0 4px rgba(255,255,255,0.2))
                  `,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              />
            </blockquote>
          </div>

          {/* ปุ่มติดต่อ */}
          <div className="mt-10">
            <a
              href="mailto:contact@yourdomain.com"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-3 rounded-full shadow-lg transition-colors duration-300"
            >
              <FaEnvelope className="text-lg" />
              ติดต่อเรา
            </a>
          </div>

          {/* แสดงโลโก้โซเชียลมีเดีย */}
          <nav
            aria-label="Social media platforms"
            className="mt-10 flex gap-6 justify-start md:justify-start flex-wrap"
          >
            {socialLinks.map(({ name, href, src, alt, className }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={name}
                className="hover:opacity-80 transition-opacity hover:scale-110 transform duration-300"
              >
                <img src={src} alt={alt} className={className} loading="lazy" />
              </a>
            ))}
          </nav>

          {/* หมายเหตุ */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
            * ข้อมูลทั้งหมดเป็นความจริงตามสถานการณ์ปัจจุบัน และไม่มีการเก็บข้อมูลใดๆ โดยไม่ได้รับอนุญาต
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;