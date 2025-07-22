// src/components/About.tsx – ปรับ UI, เพิ่มความเสถียร, รองรับ Dark Mode, Mobile/Desktop

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
  const lineHref = getContactHref('line')
  const fbHref = getContactHref('facebook')
  const messengerHref = getContactHref('messenger')
  const emailHref = getContactHref('email')

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-base-100 py-20 sm:py-24 lg:py-32 text-center dark:bg-gray-900"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <h2
          id="about-heading"
          className="mb-12 text-3xl sm:text-4xl font-extrabold text-primary tracking-tight"
        >
          เกี่ยวกับเรา
        </h2>

        {/* Main Image */}
        <div className="mx-auto mb-12 max-w-2xl sm:mb-16">
          <img
            src={aboutImage}
            alt="ภาพเกี่ยวกับเรา"
            className="w-full rounded-2xl shadow-xl ring-1 ring-primary/20"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>

        {/* Description */}
        <div className="mx-auto max-w-3xl space-y-6 text-left sm:text-center text-gray-700 dark:text-gray-300 sm:text-lg leading-relaxed">
          <p>
            <strong className="text-primary">JP - VISUAL & DOCS</strong>
            <br />
            ธุรกิจสีเทาที่ออกแบบมาให้ได้มาตรฐานเท่าที่สามารถแสดงได้
            เราพร้อมร่วมงานกับทุกสายอาชีพ ทุกวงการ และพร้อมสร้างเครื่องมือที่ตอบโจทย์จริงให้ทุกคน
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
          <p className="italic font-semibold text-gray-600 dark:text-gray-400">
            ผมไม่ใช่คนที่เก่งที่สุด<br />แต่ผมมีทีมงานที่เก่ง
          </p>
        </div>

        {/* Contact Icons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-2xl text-primary sm:text-3xl">
          <a
            href={lineHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ติดต่อผ่าน LINE"
            className="transition-transform hover:scale-110"
          >
            <FaLine />
          </a>
          <a
            href={fbHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ติดต่อผ่าน Facebook"
            className="transition-transform hover:scale-110"
          >
            <FaFacebook />
          </a>
          <a
            href={messengerHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ติดต่อผ่าน Messenger"
            className="transition-transform hover:scale-110"
          >
            <FaFacebookMessenger />
          </a>
          <a
            href={emailHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ติดต่อผ่าน Email"
            className="transition-transform hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Signature */}
        <div className="mt-14 flex justify-center">
          <img
            src={signatureImage}
            alt="ลายเซ็น"
            loading="lazy"
            className="w-32 sm:w-48 pointer-events-none select-none"
            style={{
              filter: `
                brightness(1.4)
                contrast(1.6)
                drop-shadow(0 0 4px rgba(255,255,255,0.3))
              `,
            }}
            onError={(e) => {
              e.currentTarget.style.display = 'none'
            }}
          />
        </div>

        {/* Note */}
        <p className="mt-10 text-xs text-gray-500 dark:text-gray-400">
          * ข้อมูลทั้งหมดเป็นความจริงตามสถานการณ์ปัจจุบัน และไม่มีการเก็บข้อมูลใดๆ โดยไม่ได้รับอนุญาต
        </p>
      </div>
    </section>
  )
}

export default About