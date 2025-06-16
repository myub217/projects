import React, { useEffect, useState, useCallback } from "react";
import { Sun, Moon, Menu } from "lucide-react";
import jpLogo from "../assets/jp-logo.png";

interface NavLink {
  label: string;
  href: string;
  highlight?: boolean;
}

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
  onOpenMenu?: () => void;
  isMobileMenuOpen?: boolean;
}

const navLinks: NavLink[] = [
  { label: "เกี่ยวกับเรา", href: "#about" },
  { label: "บริการ", href: "#services" },
  { label: "ผลงาน", href: "#portfolio" },
  { label: "รีวิว", href: "#reviews" },
  { label: "ติดต่อเรา", href: "#contact", highlight: true },
];

const Header: React.FC<HeaderProps> = ({
  theme,
  toggleTheme,
  onOpenMenu = () => {},
  isMobileMenuOpen = false,
}) => {
  const [currentHash, setCurrentHash] = useState<string>(
    typeof window !== "undefined" ? window.location.hash : ""
  );

  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash || "#");
    window.addEventListener("hashchange", updateHash);

    // อัพเดตตอน mount เผื่อโหลดพร้อม hash
    updateHash();

    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const isLinkActive = useCallback(
    (href: string) => {
      if (!href || href === "#") return false;
      if (!currentHash || currentHash === "#") return false;
      if (currentHash === href) return true;
      // รองรับกรณี hash เป็น prefix (เช่น #services/detail)
      return currentHash.startsWith(href + "/");
    },
    [currentHash]
  );

  return (
    <header
      role="banner"
      className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-gray-200 dark:border-gray-700 shadow-sm"
    >
      <nav
        role="navigation"
        aria-label="เมนูหลัก"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
      >
        {/* Logo */}
        <a
          href="#hero"
          aria-label="กลับไปยังส่วนหัว"
          className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
        >
          <img
            src={jpLogo}
            alt="โลโก้ JP Visual & Docs"
            className="h-8 w-auto select-none"
            loading="lazy"
            draggable={false}
          />
          <span className="font-bold text-lg tracking-tight select-none text-gray-900 dark:text-gray-100">
            JP Visual & Docs
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          {navLinks.map(({ label, href, highlight }) => {
            const active = isLinkActive(href);
            return (
              <a
                key={href}
                href={href}
                role="link"
                aria-current={active ? "page" : undefined}
                title={label}
                className={`px-3 py-1.5 rounded transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 ${
                  highlight
                    ? "bg-pink-600 text-white hover:bg-pink-700"
                    : active
                    ? "text-pink-600 dark:text-pink-400 font-semibold"
                    : "hover:text-pink-600 dark:hover:text-pink-400"
                }`}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                target={href.startsWith("http") ? "_blank" : undefined}
              >
                {label}
              </a>
            );
          })}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            type="button"
            aria-label="สลับโหมดสว่าง / มืด"
            title="สลับธีม"
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={onOpenMenu}
            type="button"
            aria-label={isMobileMenuOpen ? "ปิดเมนูมือถือ" : "เปิดเมนูมือถือ"}
            title="เมนูมือถือ"
            aria-haspopup="true"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            className="lg:hidden p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;