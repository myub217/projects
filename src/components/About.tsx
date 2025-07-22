// src/components/About.tsx

import React from 'react'
import {
  FaLine,
  FaFacebookMessenger,
  FaFacebook,
  FaEnvelope,
} from 'react-icons/fa'
import { getContactHref } from '@/config/contact'
import aboutImage from '@/assets/about.webp'
import signatureImage from '@/assets/signature.webp'

const About: React.FC = () => {
  const contactLinks = [
    { icon: <FaLine />, label: 'LINE', href: getContactHref('line') },
    { icon: <FaFacebook />, label: 'Facebook', href: getContactHref('facebook') },
    { icon: <FaFacebookMessenger />, label: 'Messenger', href: getContactHref('messenger') },
    { icon: <FaEnvelope />, label: 'Email', href: getContactHref('email') },
  ]

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-base-100 py-20 sm:py-24 lg:py-32 text-center dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="about-heading"
          className="mb-12 select-none text-3xl font-extrabold tracking-tight text-primary sm:text-4xl"
        >
          เกี่ยวกับเรา
        </h2>

        <div className="mx-auto mb-12 max-w-2xl sm:mb-16">
          <img
            src={aboutImage}
            alt="ภาพเกี่ยวกับเรา"
            loading="lazy"
            decoding="async"
            onError={(e) => (e.currentTarget.style.display = 'none')}
            draggable={false}
            className="w-full rounded-2xl shadow-xl ring-1 ring-primary/20 select-none"
          />
        </div>

        <div className="mx-auto max-w-3xl space-y-6 text-left sm:text-center sm:text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          <p>
            <strong className="text-primary">JP - VISUAL & DOCS</strong>
            <br />
            ธุรกิจสีเทาที่ออกแบบมาให้ได้มาตรฐานเท่าที่สามารถแสดงได้ เราพร้อมร่วมงานกับทุกสายอาชีพ ทุกวงการ และพร้อมสร้างเครื่องมือที่ตอบโจทย์จริงให้ทุกคน
          </p>
          <p>
            เรายินดีให้คำปรึกษาแบบตรงไปตรงมา ด้วยข้อมูลจริง พร้อมอธิบายเปอร์เซ็นต์ความเสี่ยงและผลลัพธ์อย่างโปร่งใส — เราไม่ขายฝัน
          </p>
          <p>
            หากคุณมีคำถามเพิ่มเติม หรือรายละเอียดที่ไม่สามารถเปิดเผยได้บนเว็บไซต์ สามารถสอบถามแอดมินของเราได้ตลอด 24 ชั่วโมง
          </p>
          <p>
            หากคุณอยากคุยกับผมโดยตรง บอกแอดมินได้เลย รับรองว่าคุณจะรู้สึกปลอดภัย และสบายใจที่ได้คุยแน่นอน
          </p>
          <p className="select-text italic font-semibold text-gray-600 dark:text-gray-400">
            ผมไม่ใช่คนที่เก่งที่สุด<br />แต่ผมมีทีมงานที่เก่ง
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-primary text-2xl sm:text-3xl">
          {contactLinks.map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`ติดต่อผ่าน ${label}`}
              className="rounded transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              {icon}
            </a>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <img
            src={signatureImage}
            alt="ลายเซ็น"
            loading="lazy"
            decoding="async"
            draggable={false}
            onError={(e) => (e.currentTarget.style.display = 'none')}
            className="w-32 select-none pointer-events-none sm:w-48"
            style={{
              filter:
                'brightness(1.4) contrast(1.6) drop-shadow(0 0 4px rgba(255,255,255,0.3))',
            }}
          />
        </div>

        <p className="mt-10 select-text text-xs text-gray-500 dark:text-gray-400">
          * ข้อมูลทั้งหมดเป็นความจริงตามสถานการณ์ปัจจุบัน และไม่มีการเก็บข้อมูลใดๆ โดยไม่ได้รับอนุญาต
        </p>
      </div>
    </section>
  )
}

export default About