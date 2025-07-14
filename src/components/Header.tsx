// src/components/Header.tsx
import React, { useEffect, useState, useCallback, useRef } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle, { Theme } from "@/components/ThemeToggle";
import MobileMenu from "@/components/MobileMenu";
import LogoApplicationlubmobile from "@/components/LogoSecretApp";

interface NavLink {
  label: string;
  href: string;
  highlight?: boolean;
}

const navLinks: NavLink[] = [
  { label: "เกี่ยวกับเรา", href: "#about" },
  { label: "บริการ", href: "#services" },
  { label: "ผลงาน", href: "#portfolio" },
  { label: "รีวิว", href: "#reviews" },
  { label: "ติดต่อเรา", href: "#contact", highlight: true },
];

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [currentHash, setCurrentHash] = useState<string>(
    typeof window !== "undefined" ? window.location.hash : ""
  );
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const updateHash = () => setCurrentHash(window.location.hash || "");
    window.addEventListener("hashchange", updateHash);
    return () => window.removeEventListener("hashchange", updateHash);
  }, []);

  const isLinkActive = useCallback(
    (href: string) => {
      if (!href || href === "#") return false;
      return currentHash === href || currentHash.startsWith(href + "/");
    },
    [currentHash]
  );

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        role="banner"
        className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 shadow-sm backdrop-blur-md transition-all dark:border-gray-700 dark:bg-gray-900/90"
      >
        <nav
          role="navigation"
          aria-label="เมนูหลัก"
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
        >
          {/* โลโก้ */}
          <a href="#" className="flex h-10 w-auto items-center">
            <LogoApplicationlubmobile
              className="h-10 w-auto max-w-[200px] cursor-pointer"
              aria-label="โลโก้ Applicationlubmobile"
              colorScheme={theme === "platinum-dark" ? "dark" : "light"}
            />
          </a>

          {/* เมนู Desktop */}
          <div className="hidden items-center gap-6 text-sm font-medium text-gray-700 dark:text-gray-300 lg:flex">
            {navLinks.map(({ label, href, highlight }) => {
              const active = isLinkActive(href);
              const isExternal = /^https?:\/\//.test(href);

              const baseClass =
                "px-3 py-1.5 rounded transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2";

              const activeClass = active
                ? "text-pink-600 dark:text-pink-400 font-semibold"
                : highlight
                ? "bg-pink-600 text-white hover:bg-pink-700"
                : "hover:text-pink-600 dark:hover:text-pink-400";

              return (
                <a
                  key={href}
                  href={href}
                  title={label}
                  role="link"
                  className={`${baseClass} ${activeClass}`}
                  aria-current={active ? "page" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  target={isExternal ? "_blank" : undefined}
                >
                  {label}
                </a>
              );
            })}
          </div>

          {/* ปุ่ม Toggle และ Mobile Menu */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            </div>
            <button
              ref={menuButtonRef}
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              type="button"
              aria-label={isMobileMenuOpen ? "ปิดเมนูมือถือ" : "เปิดเมนูมือถือ"}
              aria-haspopup="true"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              className="rounded p-2 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500 focus-visible:ring-offset-2 dark:hover:bg-gray-700 lg:hidden"
            >
              {isMobileMenuOpen ? (
                <X size={22} aria-hidden="true" />
              ) : (
                <Menu size={22} aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* เมนูมือถือ */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => {
          setIsMobileMenuOpen(false);
          menuButtonRef.current?.focus();
        }}
        links={navLinks}
        triggerRef={menuButtonRef}
      />
    </>
  );
};

export default Header;