import { useState } from "react";
import { Link } from "react-scroll";
import jpLogo from "../assets/jp-logo.png";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  // ข้อมูลติดต่อ
  const LINE_LINK = "https://lin.ee/XJZ7H4u";
  const FACEBOOK_LINK = "https://www.facebook.com/khaphcea.mi.nam.wa.cea.pa?mibextid=ZbWKwL";

  return (
    <header
      className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md"
      aria-label="ส่วนหัวเว็บไซต์ JP Visual & Docs"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center" title="JP Visual & Docs - เจพี วิชวล แอนด์ ด็อคส์">
          <a href="/" aria-label="ไปยังหน้าแรก JP Visual & Docs">
            <img src={jpLogo} alt="โลโก้ JP Visual & Docs" className="h-10 w-auto" />
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 items-center text-gray-800 dark:text-gray-100 font-medium" role="navigation" aria-label="เมนูหลัก">
          <Link
            to="about"
            smooth
            duration={500}
            className="hover:text-blue-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            tabIndex={0}
          >
            เกี่ยวกับเรา
          </Link>
          <Link
            to="services"
            smooth
            duration={500}
            className="hover:text-blue-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            tabIndex={0}
          >
            บริการ
          </Link>
          <Link
            to="portfolio"
            smooth
            duration={500}
            className="hover:text-blue-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            tabIndex={0}
          >
            ผลงาน
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            className="hover:text-blue-600 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            tabIndex={0}
          >
            ติดต่อ
          </Link>

          <a
            href={LINE_LINK}
            className="bg-blue-700 text-white px-4 py-1.5 rounded-full hover:bg-blue-800 transition shadow-md"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ติดต่อผ่าน LINE ID: @462FQTFC"
          >
            ปรึกษาฟรี
          </a>

          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        </nav>

        {/* Hamburger Icon สำหรับมือถือ */}
        <button
          type="button"
          className="md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="เปิด/ปิด เมนูหลัก"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <svg
            className="w-6 h-6 text-gray-900 dark:text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav
          id="mobile-menu"
          className="md:hidden bg-white dark:bg-black px-6 py-4 space-y-3 text-gray-800 dark:text-white"
          role="navigation"
          aria-label="เมนูหลักแบบมือถือ"
        >
          <Link
            to="about"
            smooth
            duration={500}
            onClick={() => setIsOpen(false)}
            className="block cursor-pointer hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            tabIndex={0}
          >
            เกี่ยวกับเรา
          </Link>
          <Link
            to="services"
            smooth
            duration={500}
            onClick={() => setIsOpen(false)}
            className="block cursor-pointer hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            tabIndex={0}
          >
            บริการ
          </Link>
          <Link
            to="portfolio"
            smooth
            duration={500}
            onClick={() => setIsOpen(false)}
            className="block cursor-pointer hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            tabIndex={0}
          >
            ผลงาน
          </Link>
          <Link
            to="contact"
            smooth
            duration={500}
            onClick={() => setIsOpen(false)}
            className="block cursor-pointer hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
            tabIndex={0}
          >
            ติดต่อ
          </Link>

          <a
            href={LINE_LINK}
            className="inline-block bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition shadow-md"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ติดต่อผ่าน LINE ID: @462FQTFC"
          >
            ปรึกษาฟรี
          </a>

          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

          {/* ลิงก์ Facebook (เพิ่มเพื่อเสริมช่องทาง) */}
          <a
            href={FACEBOOK_LINK}
            className="inline-block text-blue-600 underline hover:text-blue-800 mt-2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook JP Visual & Docs"
          >
            Facebook JP Visual & Docs
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;