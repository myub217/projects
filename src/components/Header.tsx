// src/components/Header.tsx – Responsive, UX-friendly, Gray-area business tone

import React, { useState } from 'react'
import { Link } from 'react-scroll'
import {
  FaFacebookMessenger,
  FaLine,
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from 'react-icons/fa'
import { getContactHref } from '@/config/contact'

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-base-100/90 backdrop-blur-md border-b border-base-300 dark:bg-gray-900 dark:border-gray-700 shadow-sm">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* 🔹 Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/assets/logo.svg"
            alt="โลโก้"
            className="h-8 w-8 select-none"
            draggable={false}
          />
          <span className="text-lg font-bold tracking-tight text-primary">
            BANNER DIGITAL
          </span>
        </div>

        {/* 🔹 Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-6 text-sm font-medium">
          <Link
            to="services"
            smooth
            offset={-80}
            duration={500}
            className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
          >
            บริการของเรา
          </Link>
          <Link
            to="feature"
            smooth
            offset={-80}
            duration={500}
            className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
          >
            ตัวอย่างงาน
          </Link>
        </nav>

        {/* 🔹 Desktop Contact */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={getContactHref('line')}
            target="_blank"
            rel="noopener noreferrer"
            title="LINE OA"
            aria-label="LINE OA"
            className="rounded-full bg-green-500 p-2 text-white shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
          >
            <FaLine className="h-5 w-5" />
          </a>
          <a
            href={getContactHref('messenger')}
            target="_blank"
            rel="noopener noreferrer"
            title="Messenger"
            aria-label="Messenger"
            className="rounded-full bg-blue-600 p-2 text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <FaFacebookMessenger className="h-5 w-5" />
          </a>
          <a
            href="tel:0956636615"
            title="โทรติดต่อ"
            className="flex items-center gap-2 rounded bg-primary px-3 py-1.5 text-sm text-white font-medium shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <FaPhoneAlt className="h-4 w-4" />
            <span>095-663-6615</span>
          </a>
        </div>

        {/* 🔹 Mobile Toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden inline-flex items-center justify-center rounded-md p-2 text-gray-600 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="เปิดเมนู"
        >
          {menuOpen ? <FaTimes className="h-5 w-5" /> : <FaBars className="h-5 w-5" />}
        </button>
      </div>

      {/* 🔹 Mobile Menu */}
      {menuOpen && (
        <div className="sm:hidden px-4 pb-4 pt-2 space-y-3 bg-base-100 border-t border-base-300 dark:bg-gray-900 dark:border-gray-700">
          <Link
            to="services"
            smooth
            offset={-80}
            duration={500}
            onClick={() => setMenuOpen(false)}
            className="block text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary"
          >
            บริการของเรา
          </Link>
          <Link
            to="feature"
            smooth
            offset={-80}
            duration={500}
            onClick={() => setMenuOpen(false)}
            className="block text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-primary"
          >
            ตัวอย่างงาน
          </Link>

          <div className="flex items-center gap-3 pt-3">
            <a
              href={getContactHref('line')}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-green-500 p-2 text-white shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              title="LINE OA"
            >
              <FaLine className="h-5 w-5" />
            </a>
            <a
              href={getContactHref('messenger')}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-blue-600 p-2 text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              title="Messenger"
            >
              <FaFacebookMessenger className="h-5 w-5" />
            </a>
            <a
              href="tel:0956636615"
              className="flex items-center gap-2 rounded bg-primary px-3 py-1.5 text-sm font-medium text-white shadow hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <FaPhoneAlt className="h-4 w-4" />
              <span>095-663-6615</span>
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header