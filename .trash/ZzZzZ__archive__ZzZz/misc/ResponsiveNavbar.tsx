// src/components/ResponsiveNavbar.tsx
// ✅ Responsive, accessible navbar with smooth animations, full keyboard/screen reader support

import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

const navItems = [
  { name: 'หน้าแรก', to: '/' },
  { name: 'บริการ', to: '/#services' },
  { name: 'เกี่ยวกับ', to: '/#about' },
  { name: 'รีวิว', to: '/#reviews' },
  { name: 'เข้าสู่ระบบ', to: '/login' },
];

const ResponsiveNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const location = useLocation();

  // Close on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        toggleButtonRef.current &&
        !toggleButtonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Close on route change and return focus to toggle button
  useEffect(() => {
    setIsOpen(false);
    toggleButtonRef.current?.focus();
  }, [location]);

  // Handle Esc key to close menu and return focus to toggle button
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        toggleButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isOpen]);

  return (
    <nav
      className="fixed z-50 w-full border-b border-base-300 bg-base-100 shadow-sm"
      role="navigation"
      aria-label="เมนูนำทางหลัก"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" aria-label="JP Visual & Docs Home" className="flex-shrink-0">
            <img
              src="/images/logo.svg"
              alt="JP Logo"
              className="h-8 w-auto"
              draggable={false}
              loading="lazy"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex md:gap-6">
            {navItems.map(({ name, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  clsx(
                    'inline-flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150',
                    isActive
                      ? 'text-primary underline decoration-primary underline-offset-4'
                      : 'text-muted hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1',
                  )
                }
                aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
              >
                {name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Toggle Button */}
          <div className="md:hidden">
            <button
              ref={toggleButtonRef}
              type="button"
              aria-label={isOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-md p-2 text-muted hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {isOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Panel */}
      <div
        id="mobile-menu"
        ref={navRef}
        className={clsx(
          'overflow-hidden border-t border-base-300 bg-base-100 transition-[max-height] duration-300 ease-in-out md:hidden',
          isOpen ? 'max-h-64' : 'max-h-0',
        )}
        aria-hidden={!isOpen}
      >
        <div className="space-y-1 px-4 py-3" role="menu" aria-label="เมนูมือถือ">
          {navItems.map(({ name, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              role="menuitem"
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                clsx(
                  'block rounded-md px-3 py-2 text-base font-medium transition-colors duration-150',
                  isActive
                    ? 'text-primary underline decoration-primary underline-offset-4'
                    : 'text-muted hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1',
                )
              }
              aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
            >
              {name}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default ResponsiveNavbar;
