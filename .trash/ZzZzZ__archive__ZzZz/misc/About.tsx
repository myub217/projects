// src/components/About.tsx
// ✅ Professional About section with responsive layout, accessible labels, safe image fallback, and dynamic contact links

import React from 'react';
import { FaLine, FaFacebookMessenger, FaFacebook, FaEnvelope } from 'react-icons/fa';
import { getContactHref } from '@/config/contact';
import aboutImage from '@/assets/about.webp';
import signatureImage from '@/assets/signature.webp';

const About: React.FC = () => {
  const contactLinks = [
    {
      icon: <FaLine aria-hidden="true" />,
      label: 'LINE',
      href: getContactHref('line'),
    },
    {
      icon: <FaFacebook aria-hidden="true" />,
      label: 'Facebook',
      href: getContactHref('facebook'),
    },
    {
      icon: <FaFacebookMessenger aria-hidden="true" />,
      label: 'Messenger',
      href: getContactHref('messenger'),
    },
    {
      icon: <FaEnvelope aria-hidden="true" />,
      label: 'Email',
      href: getContactHref('email'),
    },
  ];

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-base-100 py-20 text-center transition-colors duration-300 dark:bg-gray-900 sm:py-24 lg:py-32"
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
            alt="ภาพเกี่ยวกับเรา JP Visual & Docs"
            role="img"
            loading="lazy"
            decoding="async"
            onError={(e) => (e.currentTarget.style.display = 'none')}
            draggable={false}
            className="w-full select-none rounded-2xl shadow-xl ring-1 ring-primary/20"
          />
        </div>

        <div className="mx-auto max-w-3xl space-y-6 text-left leading-relaxed text-gray-700 dark:text-gray-300 sm:text-center sm:text-lg">
          <p>
            <strong className="text-primary">JP - VISUAL & DOCS</strong>
            <br />
            ธุรกิจสีเทาที่ออกแบบมาให้ได้มาตรฐานเท่าที่สามารถแสดงได้
            เราพร้อมร่วมงานกับทุกสายอาชีพ ทุกวงการ
            และพร้อมสร้างเครื่องมือที่ตอบโจทย์จริงให้ทุกคน
          </p>
          <p>
            เรายินดีให้คำปรึกษาแบบตรงไปตรงมา ด้วยข้อมูลจริง
            พร้อมอธิบายเปอร์เซ็นต์ความเสี่ยงและผลลัพธ์อย่างโปร่งใส — เราไม่ขายฝัน
          </p>
          <p>
            หากคุณมีคำถามเพิ่มเติม หรือรายละเอียดที่ไม่สามารถเปิดเผยได้บนเว็บไซต์
            สามารถสอบถามแอดมินของเราได้ตลอด 24 ชั่วโมง
          </p>
          <p>
            หากคุณอยากคุยกับผมโดยตรง บอกแอดมินได้เลย รับรองว่าคุณจะรู้สึกปลอดภัย
            และสบายใจที่ได้คุยแน่นอน
          </p>
          <p className="select-text font-semibold italic text-gray-600 dark:text-gray-400">
            ผมไม่ใช่คนที่เก่งที่สุด
            <br />
            แต่ผมมีทีมงานที่เก่ง
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-6 text-2xl text-primary sm:text-3xl">
          {contactLinks.map(({ icon, label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer nofollow"
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
            alt="ลายเซ็น JP Visual & Docs"
            role="img"
            loading="lazy"
            decoding="async"
            draggable={false}
            onError={(e) => (e.currentTarget.style.display = 'none')}
            className="pointer-events-none w-32 select-none sm:w-48"
            style={{
              filter:
                'brightness(1.4) contrast(1.6) drop-shadow(0 0 4px rgba(255,255,255,0.3))',
            }}
          />
        </div>

        <p className="mt-10 select-text text-xs text-gray-500 dark:text-gray-400">
          * ข้อมูลทั้งหมดเป็นความจริงตามสถานการณ์ปัจจุบัน และไม่มีการเก็บข้อมูลใดๆ
          โดยไม่ได้รับอนุญาต
        </p>
      </div>
    </section>
  );
};

export default About;
