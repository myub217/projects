// src/components/Header.tsx

import React from 'react';
import { Link } from 'react-scroll';
import { FaFacebookMessenger, FaLine, FaPhoneAlt } from 'react-icons/fa';
import { getContactHref } from '@/config/contact';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-base-300 bg-base-100 shadow-sm backdrop-blur-md dark:border-gray-700 dark:bg-gray-900">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-y-2 px-4 py-3 sm:flex-nowrap sm:px-6 lg:px-8">
        {/* 🔹 Logo + Brand Name */}
        <div className="flex items-center gap-2">
          <img
            src="/assets/logo.svg"
            alt="โลโก้บริษัท"
            className="h-8 w-8 select-none"
            draggable={false}
          />
          <span className="text-lg font-bold tracking-tight text-primary">
            BANNER DIGITAL
          </span>
        </div>

        {/* 🔹 Navigation + Actions */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          {/* 🔸 Navigation */}
          <nav className="hidden space-x-4 text-sm font-medium sm:flex">
            <Link
              to="services"
              smooth
              duration={500}
              offset={-80}
              className="cursor-pointer text-gray-700 transition hover:text-primary dark:text-gray-300 dark:hover:text-primary"
            >
              บริการของเรา
            </Link>
            <Link
              to="feature"
              smooth
              duration={500}
              offset={-80}
              className="cursor-pointer text-gray-700 transition hover:text-primary dark:text-gray-300 dark:hover:text-primary"
            >
              ผลงานที่ผ่านมา
            </Link>
          </nav>

          {/* 🔸 Contact Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={getContactHref('line')}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green-500 p-2 text-white shadow transition hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              aria-label="ติดต่อผ่าน LINE OA"
              title="LINE OA"
            >
              <FaLine className="h-5 w-5" />
            </a>

            <a
              href={getContactHref('messenger')}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-600 p-2 text-white shadow transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="ติดต่อผ่าน Messenger"
              title="Facebook Messenger"
            >
              <FaFacebookMessenger className="h-5 w-5" />
            </a>

            <a
              href="tel:0956636615"
              className="hidden items-center gap-1 rounded bg-primary px-3 py-1.5 text-sm font-medium text-white shadow transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:flex"
              title="โทร 095-663-6615"
            >
              <FaPhoneAlt className="h-4 w-4" />
              <span className="whitespace-nowrap">095-663-6615</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;