// src/components/Footer.tsx

import React from 'react';
import jpLogo from '@/assets/jp-logo.webp';

const Footer: React.FC = () => (
  <footer className="bg-base-200 dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-t border-base-300">
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-between gap-6 sm:flex-row sm:items-center">
        {/* 🔹 Brand & Logo */}
        <div className="flex items-center gap-3">
          <img
            src={jpLogo}
            alt="JP Visual & Docs Logo"
            className="h-10 w-auto"
            loading="lazy"
            draggable={false}
          />
          <span className="text-base font-semibold tracking-tight text-primary">
            JP - Visual & Docs
          </span>
        </div>

        {/* 🔸 Footer Links or Text */}
        <div className="text-center sm:text-right text-sm leading-relaxed">
          <p>© 2025 JP - Visual & Docs</p>
          <p className="opacity-70">สงวนลิขสิทธิ์ทั้งหมด | All rights reserved</p>
        </div>
      </div>

      {/* 🔹 Business Description */}
      <div className="mt-6 text-center text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        ผู้ช่วยด้านภาพลักษณ์และเอกสารธุรกิจแบบมืออาชีพ<br className="sm:hidden" />
        เพื่อเสริมความน่าเชื่อถือให้ธุรกิจของคุณดูโดดเด่นยิ่งขึ้น
      </div>
    </div>
  </footer>
);

export default Footer;