import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import {
  FaFacebookMessenger,
  FaLine,
  FaPhoneAlt,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { getContactHref } from '@/config/contact';

const navItems = [
  { label: 'บริการของเรา', to: 'services' },
  { label: 'ตัวอย่างงาน', to: 'feature' },
];

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;

    const onClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false);
    };

    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onEsc);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      toggleButtonRef.current?.focus();
    }
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-base-300 bg-base-100/90 shadow-sm backdrop-blur-md transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900"
      role="banner"
      aria-label="ส่วนหัวเว็บไซต์"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <div
          className="flex select-none items-center gap-2"
          aria-label="โลโก้ JP - VISUAL & DOCS"
          tabIndex={-1}
        >
          <img
            src="/assets/logo.svg"
            alt="โลโก้ JP - VISUAL & DOCS"
            className="h-8 w-8"
            draggable={false}
            loading="lazy"
            decoding="async"
            fetchPriority="high"
          />
          <span className="select-text text-lg font-bold tracking-tight text-primary">
            JP - VISUAL & DOCS
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden items-center gap-6 text-sm font-medium sm:flex"
          aria-label="เมนูนำทางหลัก"
          role="navigation"
        >
          {navItems.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              smooth
              offset={-80}
              duration={500}
              className="cursor-pointer rounded text-gray-700 transition-colors hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary dark:text-gray-300 dark:hover:text-primary"
              tabIndex={0}
              role="link"
              aria-label={`ไปยังส่วน ${label}`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Desktop Contact */}
        <div
          className="hidden items-center gap-3 sm:flex"
          role="region"
          aria-label="ช่องทางติดต่อ"
        >
          <a
            href={getContactHref('line')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ติดต่อผ่าน LINE OA"
            title="LINE OA"
            className="rounded-full bg-green-500 p-2 text-white shadow transition hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-1"
          >
            <FaLine className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href={getContactHref('messenger')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ติดต่อผ่าน Messenger"
            title="Messenger"
            className="rounded-full bg-blue-600 p-2 text-white shadow transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-1"
          >
            <FaFacebookMessenger className="h-5 w-5" aria-hidden="true" />
          </a>
          <a
            href="tel:0956636615"
            title="โทรติดต่อ 095-663-6615"
            className="flex items-center gap-2 rounded bg-primary px-3 py-1.5 text-sm font-medium text-white shadow transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            aria-label="โทรติดต่อ 095-663-6615"
          >
            <FaPhoneAlt className="h-4 w-4" aria-hidden="true" />
            <span>095-663-6615</span>
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          ref={toggleButtonRef}
          onClick={toggleMenu}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-600 transition hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary sm:hidden"
          aria-label={menuOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          type="button"
        >
          {menuOpen ? (
            <FaTimes className="h-5 w-5" aria-hidden="true" />
          ) : (
            <FaBars className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile Menu Content */}
      {menuOpen && (
        <nav
          id="mobile-menu"
          ref={menuRef}
          className="border-t border-base-300 bg-base-100 px-4 pb-4 pt-2 transition-colors duration-300 dark:border-gray-700 dark:bg-gray-900 sm:hidden"
          role="menu"
          aria-label="เมนูนำทางโทรศัพท์มือถือ"
        >
          {navItems.map(({ label, to }) => (
            <Link
              key={to}
              to={to}
              smooth
              offset={-80}
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="block rounded py-2 text-sm font-medium text-gray-700 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary dark:text-gray-200"
              role="menuitem"
              tabIndex={0}
              aria-label={`ไปยังส่วน ${label}`}
            >
              {label}
            </Link>
          ))}

          <div
            className="flex items-center gap-3 pt-3"
            role="region"
            aria-label="ช่องทางติดต่อมือถือ"
          >
            <a
              href={getContactHref('line')}
              target="_blank"
              rel="noopener noreferrer"
              title="LINE OA"
              className="rounded-full bg-green-500 p-2 text-white shadow transition hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
              aria-label="ติดต่อผ่าน LINE OA"
            >
              <FaLine className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href={getContactHref('messenger')}
              target="_blank"
              rel="noopener noreferrer"
              title="Messenger"
              className="rounded-full bg-blue-600 p-2 text-white shadow transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="ติดต่อผ่าน Messenger"
            >
              <FaFacebookMessenger className="h-5 w-5" aria-hidden="true" />
            </a>
            <a
              href="tel:0956636615"
              title="โทรติดต่อ 095-663-6615"
              className="flex items-center gap-2 rounded bg-primary px-3 py-1.5 text-sm font-medium text-white shadow transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              aria-label="โทรติดต่อ 095-663-6615"
            >
              <FaPhoneAlt className="h-4 w-4" aria-hidden="true" />
              <span>095-663-6615</span>
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
