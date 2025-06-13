import React, { useState, useEffect, useRef } from "react";

const sections = ["about", "services", "contact"];

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  const handleSecretClick = () => {
    alert(
      "กรุณาติดต่อขอ ID และ Password ที่ LINE: @462FQTFC\n\nหรือคลิกที่นี่: https://lin.ee/XJZ7H4u"
    );
  };

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        (event.target as HTMLElement).id !== "menu-toggle-button"
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (isMenuOpen) setIsMenuOpen(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScrollSpy = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      let current: string | null = null;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollPos >= el.offsetTop) {
          current = section;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    handleScrollSpy();

    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav
      className="bg-gray-950 text-white py-4 shadow-lg fixed top-0 left-0 w-full z-50"
      role="navigation"
      aria-label="เมนูหลัก JP Visual & Docs"
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="text-xl font-extrabold text-red-500 tracking-wide select-none">
          JP Visual & Docs
        </div>

        <button
          id="menu-toggle-button"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
          className="sm:hidden text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
          aria-label={isMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>

        <ul
          id="primary-navigation"
          ref={menuRef}
          className={`flex flex-col sm:flex-row sm:space-x-6 text-sm font-medium bg-gray-950 sm:bg-transparent absolute sm:static top-full left-0 w-full sm:w-auto overflow-hidden transition-all duration-300 ease-in-out transform origin-top
            ${
              isMenuOpen
                ? "scale-y-100 opacity-100 pointer-events-auto"
                : "scale-y-0 opacity-0 pointer-events-none sm:scale-y-100 sm:opacity-100 sm:pointer-events-auto"
            }
          `}
          aria-hidden={!isMenuOpen && window.innerWidth < 640}
        >
          <li>
            <a
              href="#about"
              className={`block px-6 py-3 transition outline-none focus:outline-red-400 ${
                activeSection === "about"
                  ? "text-red-400 font-semibold"
                  : "hover:text-red-400 focus:text-red-400"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              เกี่ยวกับเรา
            </a>
          </li>
          <li>
            <a
              href="#services"
              className={`block px-6 py-3 transition outline-none focus:outline-red-400 ${
                activeSection === "services"
                  ? "text-red-400 font-semibold"
                  : "hover:text-red-400 focus:text-red-400"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              บริการ
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={`block px-6 py-3 transition outline-none focus:outline-red-400 ${
                activeSection === "contact"
                  ? "text-red-400 font-semibold"
                  : "hover:text-red-400 focus:text-red-400"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              ติดต่อ
            </a>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                handleSecretClick();
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-6 py-3 text-red-400 hover:text-red-600 focus:text-red-600 font-bold transition cursor-pointer outline-none focus:outline-2 focus:outline-offset-2 focus:outline-red-600 rounded"
              aria-label="ห้องลับเจ้าป่า กดเพื่อดูข้อมูลลับ"
            >
              ห้องลับเจ้าป่า
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;