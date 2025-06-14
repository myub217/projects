// src/components/Header.tsx
import { useEffect, useState } from "react";
import { FaLine, FaFacebookF, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LINE_LINK = "https://line.me/ti/p/@462FQTFC";
const FACEBOOK_LINK = "https://facebook.com/khaphcea.mi.nam.wa.cea.pa?mibextid=ZbWKwL";

// เพิ่ม Props ที่รับจาก App.tsx
type HeaderProps = {
  toggleTheme: () => void;
  currentTheme: "light" | "dark";
};

export default function Header({ toggleTheme, currentTheme }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  const navItems = [
    { to: "/services", label: "บริการ" },
    { to: "/portfolio", label: "ผลงาน" },
    { to: "/contact", label: "ติดต่อ" },
    { to: "/secret-room", label: "ห้องลับ" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* โลโก้ */}
        <Link to="/" className="flex items-center gap-3 select-none">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="w-11 h-11 bg-gradient-to-br from-indigo-900 to-blue-500 text-white font-bold text-lg rounded-xl shadow-md flex items-center justify-center"
          >
            JP
          </motion.div>
          <div className="text-left leading-tight">
            <h1 className="text-xl font-extrabold text-gray-900 dark:text-white">
              Visual & Docs
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">เจ้าป่า</p>
          </div>
        </Link>

        {/* เมนู Desktop */}
        <nav className="hidden md:flex items-center space-x-8 text-gray-700 dark:text-gray-300">
          {navItems.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className="relative group hover:text-red-500 transition"
            >
              {label}
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-full bg-red-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          ))}
        </nav>

        {/* ปุ่ม Theme + Toggle มือถือ + ติดต่อ */}
        <div className="flex items-center gap-3">
          {/* Toggle Theme */}
          <button
            onClick={toggleTheme}
            className={`px-2 py-1.5 rounded-md border text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              currentTheme === "dark"
                ? "bg-indigo-700 text-white border-indigo-600 hover:bg-indigo-800"
                : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
            }`}
          >
            <span className="mr-1">{currentTheme === "dark" ? "🌙" : "🌞"}</span>
            {currentTheme === "dark" ? "โหมดมืด" : "โหมดสว่าง"}
          </button>

          {/* ปุ่มเมนูมือถือ */}
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="md:hidden p-2 text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded"
            aria-label={mobileOpen ? "ปิดเมนู" : "เปิดเมนู"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>

          {/* ปุ่มติดต่อ Desktop */}
          <div className="hidden md:flex gap-2">
            <a
              href={LINE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-semibold bg-green-500 hover:bg-green-600 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
            >
              <FaLine />
              LINE
            </a>
            <a
              href={FACEBOOK_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <FaFacebookF />
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* เมนู Mobile */}
      <nav
        id="mobile-menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96" : "max-h-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="px-6 pb-4 text-gray-800 dark:text-gray-200">
          <ul className="space-y-3 text-base font-medium">
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 px-3 rounded-md hover:bg-red-100 dark:hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="border-t border-gray-200 dark:border-gray-700 pt-3">
              <a
                href={LINE_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-green-600 dark:text-green-400"
              >
                <FaLine />
                @462FQTFC
              </a>
            </li>
            <li>
              <a
                href={FACEBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-600 dark:text-blue-400"
              >
                <FaFacebookF />
                JP Visual & Docs
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}