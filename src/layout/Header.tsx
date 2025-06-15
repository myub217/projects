import React from "react";
import { Sun, Moon, Menu } from "lucide-react";
import jpLogo from "../assets/jp-logo.png";

interface NavLink {
  label: string;
  href: string;
  highlight?: boolean; // Reserved for future use
}

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
  onOpenMenu?: () => void;
}

// รายการลิงก์ในเมนูหลัก
const navLinks: NavLink[] = [
  { label: "เกี่ยวกับเรา", href: "#about" },
  { label: "บริการ", href: "#services" },
  { label: "ผลงาน", href: "#portfolio" },
  { label: "รีวิว", href: "#reviews" },
];

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme, onOpenMenu }) => {
  return (
    <header
      role="banner"
      className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700 shadow-sm"
    >
      <nav
        role="navigation"
        aria-label="Main navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
      >
        {/* Logo */}
        <a
          href="#hero"
          className="flex items-center gap-2"
          aria-label="กลับไปด้านบน"
        >
          <img
            src={jpLogo}
            alt="โลโก้ JP Visual & Docs"
            className="h-8 w-auto"
            loading="lazy"
            draggable={false}
          />
          <span className="font-bold text-lg tracking-tight select-none text-gray-900 dark:text-gray-100">
            JP Visual & Docs
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          aria-label="Desktop navigation"
          className="hidden lg:flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-300"
        >
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="px-2 py-1 rounded hover:text-pink-600 dark:hover:text-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-1"
            >
              {label}
            </a>
          ))}

          <a
            href="#contact"
            className="px-4 py-1 rounded-full bg-pink-600 text-white hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-1"
          >
            ติดต่อเรา
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label="สลับโหมดแสง/มืด"
            title="สลับธีม"
            type="button"
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-1"
          >
            <span className="sr-only">Toggle theme</span>
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={onOpenMenu}
            aria-label="เปิดเมนูนำทาง"
            title="เมนูมือถือ"
            type="button"
            className="lg:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-1"
          >
            <span className="sr-only">เปิดเมนูมือถือ</span>
            <Menu size={22} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;