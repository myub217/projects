import React, { useState } from "react";

type Theme = "light" | "dark";

interface HeaderProps {
  theme: Theme;
  toggleTheme: () => void;
}

// ไอคอนพระอาทิตย์
const SunIcon = () => (
  <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
  </svg>
);

// ไอคอนพระจันทร์
const MoonIcon = () => (
  <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24">
    <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
  </svg>
);

// ไอคอนเมนู
const MenuIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

// ไอคอนปิดเมนู
const CloseIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const isDark = theme === "dark";
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-gray-100 dark:bg-gray-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* โลโก้ + คำอธิบาย */}
        <div>
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">JP Visual & Docs</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400">บริการเอกสาร วีซ่า ระบบหลังบ้าน</p>
        </div>

        {/* เมนู Desktop */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-200">
          <a href="#services" className="hover:underline">บริการ</a>
          <a href="#portfolio" className="hover:underline">ผลงาน</a>
          <a href="#contact" className="hover:underline">ติดต่อ</a>
        </nav>

        {/* ปุ่ม Toggle Theme */}
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="flex items-center px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm transition-all"
            aria-label="Toggle Dark Mode"
          >
            {isDark ? <SunIcon /> : <MoonIcon />}
            {isDark ? "โหมดสว่าง" : "โหมดมืด"}
          </button>

          {/* ปุ่มเมนูสำหรับมือถือ */}
          <button
            className="md:hidden p-2 text-gray-800 dark:text-gray-200"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* เมนูมือถือ */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 text-sm text-gray-700 dark:text-gray-200">
          <a href="#services" className="block py-1 hover:underline">บริการ</a>
          <a href="#portfolio" className="block py-1 hover:underline">ผลงาน</a>
          <a href="#contact" className="block py-1 hover:underline">ติดต่อ</a>
        </div>
      )}
    </header>
  );
};

export default Header;