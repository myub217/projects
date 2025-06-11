import React, { ReactNode, useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; // ไอคอนจาก lucide-react

interface HeaderProps {
  children?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuItems = (
    <>
      <li>
        <Link to="hero" smooth duration={500} className="cursor-pointer font-medium" onClick={() => setIsOpen(false)}>
          Home
        </Link>
      </li>
      <li>
        <Link to="services" smooth duration={500} className="cursor-pointer font-medium" onClick={() => setIsOpen(false)}>
          Services
        </Link>
      </li>
      <li>
        <Link to="portfolio" smooth duration={500} className="cursor-pointer font-medium" onClick={() => setIsOpen(false)}>
          Portfolio
        </Link>
      </li>
      <li>
        <Link to="reviews" smooth duration={500} className="cursor-pointer font-medium" onClick={() => setIsOpen(false)}>
          Reviews
        </Link>
      </li>
      <li>
        <Link to="join" smooth duration={500} className="cursor-pointer font-medium" onClick={() => setIsOpen(false)}>
          Join Us
        </Link>
      </li>
      <li>
        <Link to="footer" smooth duration={500} className="cursor-pointer font-medium" onClick={() => setIsOpen(false)}>
          Contact
        </Link>
      </li>
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-base-100/70 backdrop-blur-md border-b border-base-content/10 shadow">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-primary">MySite</div>

        {/* Desktop Menu */}
        <ul className="menu menu-horizontal bg-base-100 rounded-box hidden lg:flex px-1">
          {menuItems}
        </ul>

        {/* Theme Toggle + Mobile Menu Toggle */}
        <div className="flex items-center gap-2 ml-auto lg:ml-4">
          {children}

          {/* Mobile Menu Button */}
          <button className="lg:hidden btn btn-ghost btn-square" onClick={toggleMenu}>
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <ul className="menu menu-vertical p-4 bg-base-100 lg:hidden shadow-md">
          {menuItems}
        </ul>
      )}
    </header>
  );
};

export default Header;