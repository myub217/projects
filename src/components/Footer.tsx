// src/components/Footer.tsx

import React from 'react';
import jpLogo from '@/assets/jp-logo.webp';

const Footer: React.FC = () => (
  <footer className="bg-base-200 dark:bg-gray-900 text-gray-600 dark:text-gray-400 border-t border-base-300">
    <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <img
          src={jpLogo}
          alt="JP Visual & Docs Logo"
          className="h-10 w-auto"
          loading="lazy"
        />
        <span className="text-sm font-semibold">
          JP - Visual & Docs
        </span>
      </div>
      <div className="text-xs text-center sm:text-right leading-relaxed">
        <p>© 2025 JP - Visual & Docs</p>
        <p className="opacity-70">สงวนลิขสิทธิ์ทั้งหมด | All rights reserved</p>
      </div>
    </div>
  </footer>
);

export default Footer;