// src/components/Footer.tsx – Responsive Modern Footer with Branding, Description & Social Links

import React from 'react'
import jpLogo from '@/assets/jp-logo.webp'
import { FaLine, FaFacebookMessenger } from 'react-icons/fa'

const Footer: React.FC = () => (
  <footer className="bg-base-200 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-base-300 transition-colors duration-300">
    <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0">
        {/* Brand & Logo */}
        <div className="flex items-center gap-3">
          <img
            src={jpLogo}
            alt="JP Visual & Docs Logo"
            className="h-10 w-auto select-none"
            loading="lazy"
            decoding="async"
            fetchpriority="low"
            draggable={false}
          />
          <span className="text-base font-semibold tracking-tight text-primary select-none">
            JP - Visual & Docs
          </span>
        </div>

        {/* Social Links */}
        <div className="flex gap-6 text-xl text-primary">
          <a
            href="https://line.me/R/ti/p/@462fqrfc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ติดต่อเรา LINE"
            className="hover:text-primary-focus transition-colors"
          >
            <FaLine />
          </a>
          <a
            href="https://m.me/yourpage"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ติดต่อเรา Facebook Messenger"
            className="hover:text-primary-focus transition-colors"
          >
            <FaFacebookMessenger />
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center sm:text-right text-sm leading-relaxed">
          <p className="select-text">© 2025 JP - Visual & Docs</p>
          <p className="opacity-70 select-text">สงวนลิขสิทธิ์ทั้งหมด | All rights reserved</p>
        </div>
      </div>

      {/* Business Description */}
      <div className="mt-6 text-center sm:text-left text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl sm:max-w-none mx-auto sm:mx-0">
        <span className="block sm:inline">
          ผู้ช่วยด้านภาพลักษณ์และเอกสารธุรกิจแบบมืออาชีพ
        </span>
        <br className="sm:hidden" />
        <span className="block sm:inline">
          เสริมความน่าเชื่อถือให้ธุรกิจของคุณดูโดดเด่นยิ่งขึ้น
        </span>
      </div>
    </div>
  </footer>
)

export default Footer