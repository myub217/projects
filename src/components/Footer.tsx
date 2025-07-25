// src/components/Footer.tsx

import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 text-muted py-6 mt-16 border-t border-base-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm select-none">
          &copy; {currentYear} JP Visual & Docs. All rights reserved.
        </p>
        <nav className="flex space-x-6 text-sm">
          <a
            href="#services"
            className="hover:text-primary transition-colors"
            aria-label="บริการ"
          >
            บริการ
          </a>
          <a
            href="#portfolio"
            className="hover:text-primary transition-colors"
            aria-label="ตัวอย่างงาน"
          >
            ตัวอย่างงาน
          </a>
          <a
            href="#faq"
            className="hover:text-primary transition-colors"
            aria-label="คำถามที่พบบ่อย"
          >
            คำถามที่พบบ่อย
          </a>
          <a
            href="#contact"
            className="hover:text-primary transition-colors"
            aria-label="ติดต่อเรา"
          >
            ติดต่อเรา
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
