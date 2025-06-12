import React, { useEffect, useState } from "react";
import logo from "../assets/jp-logo.png"; // เปลี่ยนเป็นโลโก้จริง

type HeaderProps = {
  children?: React.ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const handleLinkClick = () => setMenuOpen(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const sections = ["hero", "services", "portfolio", "contact"];
    const onScroll = () => {
      const scrollY = window.scrollY + 160;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY && scrollY < el.offsetTop + el.offsetHeight) {
          setActiveSection((prev) => (prev !== id ? id : prev));
          return;
        }
      }
      setActiveSection("");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { href: "#services", label: "บริการของเรา" },
    { href: "#portfolio", label: "ผลงานที่ผ่านมา" },
    { href: "#contact", label: "ติดต่อเรา" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-base-100 shadow-md transition-all">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 sm:px-6 md:px-8 py-3">
        {/* โลโก้ + ชื่อแบรนด์ */}
        <a
          href="#hero"
          className="flex items-center gap-2 hover:opacity-80 transition focus:outline-none focus-visible:ring-2 ring-primary rounded"
          onClick={handleLinkClick}
        >
          <img src={logo} alt="โลโก้ JP Visual & Docs - บริการเอกสารครบวงจร" className="h-9 w-auto" />
          <div className="flex flex-col leading-tight">
            <span className="text-lg font-bold text-primary">JP Visual & Docs</span>
            <span className="text-xs text-base-content/60 -mt-1">
              บริการเอกสารครบวงจร วีซ่า การเงิน โปรไฟล์
            </span>
          </div>
        </a>

        {/* เมนู Desktop */}
        <nav
          className="hidden md:flex items-center space-x-6 text-sm font-medium"
          aria-label="เมนูหลัก"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`transition hover:text-primary focus:outline-none focus-visible:ring-2 ring-primary rounded ${
                  isActive ? "text-primary font-semibold underline" : ""
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </a>
            );
          })}
          {children && <div className="ml-4">{children}</div>}
        </nav>

        {/* ปุ่มมือถือ */}
        <button
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "ปิดเมนู" : "เปิดเมนู"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="md:hidden p-2 focus:outline-none focus-visible:ring-2 ring-primary rounded"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* เมนูมือถือ */}
      <nav
        id="mobile-menu"
        className={`md:hidden transition-all duration-300 overflow-hidden bg-base-100 px-4 border-t border-base-200 ${
          menuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
        aria-label="เมนูมือถือ"
      >
        <div className="space-y-3">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`block transition focus:outline-none focus-visible:ring-2 ring-primary rounded px-2 py-2 ${
                  isActive ? "text-primary font-semibold" : ""
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </a>
            );
          })}
          {children && <div className="pt-2">{children}</div>}
        </div>
      </nav>
    </header>
  );
};

export default Header;