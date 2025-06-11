import React, { useEffect, useState } from "react";

type HeaderProps = {
  children?: React.ReactNode; // ปุ่ม ThemeToggle หรืออื่น ๆ
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
      const scrollPosition = window.scrollY + 160; // เผื่อความสูง header
      for (const id of sections) {
        const el = document.getElementById(id);
        if (
          el &&
          el.offsetTop <= scrollPosition &&
          scrollPosition < el.offsetTop + el.offsetHeight
        ) {
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
    { href: "#services", label: "บริการ" },
    { href: "#portfolio", label: "ผลงาน" },
    { href: "#contact", label: "ติดต่อเรา" },
  ];

  return (
    <header
      className="bg-base-100 text-base-content sticky top-0 z-50 shadow-md transition duration-300"
      role="banner"
    >
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-4">
        {/* โลโก้ */}
        <a
          href="#hero"
          className="text-2xl font-bold text-primary hover:opacity-80 transition focus:outline-none focus-visible:ring-2 ring-primary rounded"
          aria-label="กลับไปยังหน้าแรก"
          onClick={handleLinkClick}
        >
          JP Visual & Docs
        </a>

        {/* เมนูสำหรับ Desktop */}
        <nav
          className="hidden md:flex space-x-6 items-center text-sm font-medium"
          role="navigation"
          aria-label="เมนูหลัก"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`hover:underline transition focus:outline-none focus-visible:ring-2 ring-primary rounded ${
                  isActive ? "text-primary font-semibold" : ""
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {link.label}
              </a>
            );
          })}
          {children && <div className="ml-4">{children}</div>}
        </nav>

        {/* ปุ่ม Toggle สำหรับมือถือ */}
        <button
          className="md:hidden p-2 rounded-lg focus:outline-none focus-visible:ring-2 ring-primary"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? "ปิดเมนู" : "เปิดเมนู"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
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
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out px-4 pb-4 border-t border-base-200 text-sm bg-base-100 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-label="เมนูมือถือ"
      >
        <div className="space-y-2 pt-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className={`block py-2 transition focus:outline-none focus-visible:ring-2 ring-primary rounded ${
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