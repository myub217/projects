import { useState } from "react";
import { FaLine, FaFacebookF, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LINE_LINK = "https://line.me/ti/p/@462FQTFC";
const FACEBOOK_LINK = "https://facebook.com/yourpage";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMenu = () => setMobileOpen(!mobileOpen);

  const navItems = [
    { to: "/services", label: "บริการ" },
    { to: "/portfolio", label: "ผลงาน" },
    { to: "/contact", label: "ติดต่อ" },
    { to: "/secret-room", label: "ห้องลับ" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* โลโก้ JP */}
        <Link to="/" className="flex items-center gap-3">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 1 }}
            className="w-11 h-11 bg-gradient-to-br from-indigo-900 to-blue-500 text-white font-bold text-lg rounded-xl shadow-md flex items-center justify-center"
          >
            JP
          </motion.div>
          <div className="text-left leading-tight">
            <h1 className="text-xl font-extrabold tracking-wide text-gray-900 dark:text-white">
              Visual & Docs
            </h1>
            <p className="text-xs text-gray-500 dark:text-gray-400">เจ้าป่า</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 font-medium text-gray-700 dark:text-gray-300">
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

        {/* Contact + Mobile */}
        <div className="flex items-center gap-3">
          <div className="hidden md:flex gap-2">
            <a
              href={LINE_LINK}
              target="_blank"
              className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-semibold bg-green-500 hover:bg-green-600 text-white transition"
            >
              <FaLine />
              LINE
            </a>
            <a
              href={FACEBOOK_LINK}
              target="_blank"
              className="flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-semibold bg-blue-600 hover:bg-blue-700 text-white transition"
            >
              <FaFacebookF />
              Facebook
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-700 dark:text-gray-300 p-2 focus:outline-none"
          >
            {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-4 text-gray-800 dark:text-gray-200">
          <ul className="space-y-3 text-base font-medium">
            {navItems.map(({ to, label }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="block py-2 px-3 rounded-md hover:bg-red-100 dark:hover:bg-red-900"
                  onClick={() => setMobileOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
            <li className="border-t border-gray-200 dark:border-gray-700 pt-3">
              <a
                href={LINE_LINK}
                target="_blank"
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