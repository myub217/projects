import React, { useState, useEffect, useRef } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  const handleSecretClick = () => {
    alert(
      "กรุณาติดต่อขอ ID และ Password ที่ LINE: @462FQTFC\n\nหรือคลิกที่นี่: https://lin.ee/XJZ7H4u"
    );
  };

  // ปิดเมนูเมื่อคลิกข้างนอก (สำหรับมือถือ)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        (event.target as HTMLElement).id !== "menu-toggle-button"
      ) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  // สลับเมนูมือถือ
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <nav
      className="bg-gray-950 text-white py-4 shadow-lg fixed top-0 left-0 w-full z-50"
      role="navigation"
      aria-label="เมนูหลัก JP Visual & Docs"
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* โลโก้ / ชื่อแบรนด์ */}
        <div
          className="text-xl font-extrabold text-red-500 tracking-wide select-none"
          tabIndex={-1}
        >
          JP Visual & Docs
        </div>

        {/* ปุ่มเปิดเมนูมือถือ */}
        <button
          id="menu-toggle-button"
          aria-controls="primary-navigation"
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
          className="sm:hidden text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 rounded"
          aria-label={isMenuOpen ? "ปิดเมนู" : "เปิดเมนู"}
          type="button"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>

        {/* เมนูลิงก์ */}
        <ul
          id="primary-navigation"
          ref={menuRef}
          className={`flex flex-col sm:flex-row sm:space-x-6 text-sm font-medium bg-gray-950 sm:bg-transparent absolute sm:static top-full left-0 w-full sm:w-auto transition-transform transform origin-top duration-300 ease-in-out overflow-hidden
          ${isMenuOpen ? "scale-y-100" : "scale-y-0 sm:scale-y-100"}
          `}
          style={{ transformOrigin: "top" }}
        >
          <li>
            <a
              href="#about"
              className="block px-6 py-3 hover:text-red-400 focus:text-red-400 transition outline-none focus:outline-red-400"
              onClick={() => setIsMenuOpen(false)}
            >
              เกี่ยวกับเรา
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="block px-6 py-3 hover:text-red-400 focus:text-red-400 transition outline-none focus:outline-red-400"
              onClick={() => setIsMenuOpen(false)}
            >
              บริการ
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block px-6 py-3 hover:text-red-400 focus:text-red-400 transition outline-none focus:outline-red-400"
              onClick={() => setIsMenuOpen(false)}
            >
              ติดต่อ
            </a>
          </li>
          <li>
            <button
              onClick={() => {
                handleSecretClick();
                setIsMenuOpen(false);
              }}
              className="block w-full text-left px-6 py-3 text-red-400 hover:text-red-600 focus:text-red-600 font-bold transition cursor-pointer outline-none focus:outline-2 focus:outline-offset-2 focus:outline-red-600 rounded"
              aria-label="ห้องลับเจ้าป่า กดเพื่อดูข้อมูลลับ"
              type="button"
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