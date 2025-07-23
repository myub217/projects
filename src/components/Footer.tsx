// src/components/Footer.tsx
// ✅ Responsive Footer with branding, social links, copyright, accessible semantics, and improved accessibility

import React from 'react'
import jpLogo from '@/assets/jp-logo.webp'
import { FaLine, FaFacebookMessenger } from 'react-icons/fa'

const Footer: React.FC = () => (
  <footer
    role="contentinfo"
    className="select-text border-t border-base-300 bg-base-200 text-gray-700 transition-colors duration-300 dark:bg-gray-900 dark:text-gray-300"
  >
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:gap-0">
        {/* Brand & Logo */}
        <div className="flex items-center gap-3" aria-label="แบรนด์ JP Visual & Docs" tabIndex={-1}>
          <img
            src={jpLogo}
            alt="โลโก้ JP Visual & Docs"
            className="h-10 w-auto select-none"
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            draggable={false}
          />
          <span className="select-text text-base font-semibold tracking-tight text-primary">
            JP - Visual & Docs
          </span>
        </div>

        {/* Social Links */}
        <nav aria-label="ช่องทางติดต่อโซเชียลมีเดีย" className="flex gap-6 text-xl text-primary">
          <a
            href="https://line.me/R/ti/p/@462fqrfc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ติดต่อเรา ผ่าน LINE"
            className="hover:text-primary-focus rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <FaLine aria-hidden="true" />
          </a>
          <a
            href="https://m.me/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ติดต่อเรา ผ่าน Facebook Messenger"
            className="hover:text-primary-focus rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
          >
            <FaFacebookMessenger aria-hidden="true" />
          </a>
        </nav>

        {/* Copyright */}
        <div className="select-text text-center text-sm leading-relaxed sm:text-right">
          <p>© 2025 JP - Visual & Docs</p>
          <p className="opacity-70">สงวนลิขสิทธิ์ทั้งหมด | All rights reserved</p>
        </div>
      </div>

      {/* Business Description */}
      <p
        className="mx-auto mt-6 max-w-xl select-text text-center text-sm leading-relaxed text-gray-600 dark:text-gray-400 sm:mx-0 sm:max-w-none sm:text-left"
        aria-label="คำอธิบายธุรกิจ"
      >
        <span className="block sm:inline">ผู้ช่วยด้านภาพลักษณ์และเอกสารธุรกิจแบบมืออาชีพ</span>
        <br className="sm:hidden" />
        <span className="block sm:inline">
          เสริมความน่าเชื่อถือให้ธุรกิจของคุณดูโดดเด่นยิ่งขึ้น
        </span>
      </p>
    </div>
  </footer>
)

export default Footer
