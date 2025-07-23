// src/components/ResponsiveNavbar.tsx
// ✅ Responsive, accessible navbar with keyboard & screen reader support, smooth mobile menu animation

import React, { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { MenuIcon, XIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

const navItems = [
  { name: 'หน้าแรก', to: '/' },
  { name: 'บริการ', to: '/#services' },
  { name: 'เกี่ยวกับ', to: '/#about' },
  { name: 'รีวิว', to: '/#reviews' },
  { name: 'เข้าสู่ระบบ', to: '/login' },
]

const ResponsiveNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navRef = useRef<HTMLDivElement>(null)
  const toggleButtonRef = useRef<HTMLButtonElement>(null)
  const location = useLocation()

  // Close mobile menu on click outside
  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  // Close mobile menu on Escape key & return focus to toggle button
  useEffect(() => {
    if (!isOpen) {
      toggleButtonRef.current?.focus()
      return
    }
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [isOpen])

  return (
    <nav
      className="fixed z-40 w-full border-b border-base-300 bg-base-100 shadow-sm"
      role="navigation"
      aria-label="เมนูนำทางหลัก"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" aria-label="JP Visual & Docs Homepage" tabIndex={0}>
              <img
                src="/images/logo.svg"
                alt="JP Visual & Docs Logo"
                className="h-8 w-auto"
                loading="lazy"
                draggable={false}
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:space-x-8">
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
                      : 'text-muted hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1'
                  )
                }
                aria-current={({ isActive }) => (isActive ? 'page' : undefined)}
              >
                {name}
              </NavLink>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              ref={toggleButtonRef}
              type="button"
              aria-label={isOpen ? 'ปิดเมนู' : 'เปิดเมนู'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen(prev => !prev)}
              className="inline-flex items-center justify-center rounded-md p-2 text-muted hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {isOpen ? (
                <XIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <div
        id="mobile-menu"
        ref={navRef}
        className={clsx(
          'overflow-hidden border-t border-base-300 bg-base-100 transition-[max-height] duration-300 ease-in-out md:hidden',
          isOpen ? 'max-h-60' : 'max-h-0'
        )}
        aria-hidden={!isOpen}
      >
        <div className="space-y-1 px-2 pb-3 pt-2" role="menu" aria-label="เมนูมือถือ">
          {navItems.map(({ name, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setIsOpen(false)}
              role="menuitem"
              tabIndex={isOpen ? 0 : -1}
              className={({ isActive }) =>
                clsx(
                  'block rounded-md px-3 py-2 text-base font-medium transition-colors duration-150',
                  isActive
                    ? 'text-primary underline decoration-primary underline-offset-4'
                    : 'text-muted hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1'
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
  )
}

export default ResponsiveNavbar
