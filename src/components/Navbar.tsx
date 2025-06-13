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
      className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md shadow-md border-b border-white/20"
      role="navigation"
      aria-label="เมนูหลัก JP Visual & Docs"
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center h-16">
        <div className="text-2xl font-extrabold text-red-500 tracking-widest select-none drop-shadow-md">
          JP Visual & Docs
        </div>

        <button
          id="menu-toggle-button"
          type="button"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
          className="sm:hidden text-red-500 hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 rounded transition"
          aria-label={isMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.5}
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
          className={`flex flex-col sm:flex-row sm:space-x-8 text-sm font-semibold bg-white/20 backdrop-blur-md rounded-md sm:bg-transparent sm:backdrop-blur-0 sm:rounded-none absolute sm:static top-full left-0 w-full sm:w-auto overflow-hidden transition-transform duration-300 ease-in-out origin-top
            ${
              isMenuOpen
                ? "scale-y-100 opacity-100 pointer-events-auto"
                : "scale-y-0 opacity-0 pointer-events-none sm:scale-y-100 sm:opacity-100 sm:pointer-events-auto"
            }
            shadow-lg sm:shadow-none
            `}
          aria-hidden={!isMenuOpen && window.innerWidth < 640 ? "true" : undefined}
        >
          <li>
            <a
              href="#about"
              aria-current={activeSection === "about" ? "page" : undefined}
              className={`block px-6 py-3 transition-colors duration-200 rounded-md outline-none focus:outline-red-400 ${
                activeSection === "about"
                  ? "text-red-500 bg-white/30"
                  : "text-gray-100 hover:text-red-500 hover:bg-white/20 focus:text-red-500 focus:bg-white/20"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              เกี่ยวกับเรา
            </a>
          </li>
          <li>
            <a
              href="#services"
              aria-current={activeSection === "services" ? "page" : undefined}
              className={`block px-6 py-3 transition-colors duration-200 rounded-md outline-none focus:outline-red-400 ${
                activeSection === "services"
                  ? "text-red-500 bg-white/30"
                  : "text-gray-100 hover:text-red-500 hover:bg-white/20 focus:text-red-500 focus:bg-white/20"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              บริการ
            </a>
          </li>
          <li>
            <a
              href="https://lin.ee/XJZ7H4u"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center px-6 py-3 transition-colors duration-200 rounded-md outline-none focus:outline-red-400 ${
                activeSection === "contact"
                  ? "text-red-500 bg-white/30"
                  : "text-gray-100 hover:text-red-500 hover:bg-white/20 focus:text-red-500 focus:bg-white/20"
              }`}
              onClick={() => setIsMenuOpen(false)}
              aria-current={activeSection === "contact" ? "page" : undefined}
            >
              ติดต่อ
              <svg
                className="ml-1 w-4 h-4 fill-red-500"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
              >
                <path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 14.586-4-4 1.414-1.414L13 13.757l3.586-3.586L18 11.586Z" />
              </svg>
            </a>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                handleSecretClick();
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-6 py-3 text-red-400 hover:text-red-600 focus:text-red-600 font-bold transition-colors rounded-md cursor-pointer outline-none focus:outline-2 focus:outline-offset-2 focus:outline-red-600"
              aria-label="ห้องลับเจ้าป่า กดเพื่อดูข้อมูลลับ"
              title="ห้องลับเจ้าป่า — กดเพื่อดูข้อมูลลับ"
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