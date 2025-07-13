// src/components/About.tsx

import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaEnvelope } from "react-icons/fa";
import aboutImage from "../assets/images/about-us.webp";
import signature from "../assets/signature.webp";
import { contactLinks, getContactHref } from "../config/contact";

const socialLinks = contactLinks.filter((c) => c.type !== "email");

const About: React.FC = () => {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="py-16 px-4 sm:px-6 lg:px-8 bg-base-100 text-base-content transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
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
            draggable={false}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="md:w-1/2 w-full flex flex-col"
        >
          <h2
            id="about-title"
            className="flex items-center gap-3 text-3xl sm:text-4xl font-extrabold text-primary mb-4"
          >
            <FaUserTie className="text-primary text-2xl" aria-hidden="true" />
            JP - VISUAL & DOCS
          </h2>
          <hr className="border-base-content/30 mb-6" />

          <div className="space-y-5 leading-relaxed text-lg">
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
              หากคุณอยากคุยกับผมโดยตรง บอกแอดมินได้เลย <br />
              รับรองว่าคุณจะรู้สึกปลอดภัย และสบายใจที่ได้คุยแน่นอน
            </p>

            <blockquote
              className="mt-8 text-right italic font-medium border-r-4 pr-4 flex flex-col items-end gap-2 max-w-xs self-end"
              style={{
                borderColor: "var(--color-primary)",
                color: "var(--color-primary)",
              }}
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

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center sm:gap-6">
            <a
              href={getContactHref("email")}
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-focus text-primary-content font-semibold px-5 py-3 rounded-full shadow-lg transition-colors duration-300 mb-4 sm:mb-0 justify-center"
              aria-label="ติดต่อเรา ผ่านอีเมล"
              title="ติดต่อเรา"
            >
              <FaEnvelope className="text-lg" aria-hidden="true" />
              ติดต่อเรา
            </a>

            <nav
              aria-label="ช่องทางโซเชียลมีเดีย"
              className="flex gap-6 flex-wrap justify-center"
            >
              {socialLinks.map(({ type, href, label }) => (
                <a
                  key={type}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`ลิงก์ไปยัง ${label}`}
                  className="hover:opacity-80 transition-opacity hover:scale-110 transform duration-300"
                >
                  <img
                    src={`/images/icons/${label}.svg`}
                    alt={`${label} Icon`}
                    className="w-8 h-8"
                    loading="lazy"
                    draggable={false}
                  />
                </a>
              ))}
            </nav>
          </div>

          <p className="text-sm mt-6 opacity-70 text-center sm:text-left">
            * ข้อมูลทั้งหมดเป็นความจริงตามสถานการณ์ปัจจุบัน และไม่มีการเก็บข้อมูลใดๆ โดยไม่ได้รับอนุญาต
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;