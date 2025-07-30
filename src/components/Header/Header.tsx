import { useLocation, Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import MobileMenu from "@/components/Header/ui/MobileMenu";
import NavLinks from "@/components/Header/ui/NavLinks";
import jpLogo from "@/assets/jp-logo.webp";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  const handleLogout = () => {
    logout();
    closeMenu();
    navigate("/login");
  };

  // ซ่อนปุ่ม Login เมื่ออยู่หน้า /login
  const isLoginPage = location.pathname === "/login";

  return (
    <header className="bg-base-100 shadow-md sticky top-0 z-50">
      <div className="navbar max-w-6xl mx-auto px-4">
        {/* Logo */}
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl flex items-center gap-2"
            onClick={closeMenu}
          >
            <img src={jpLogo} alt="JP Visual & Docs Logo" className="h-8 w-auto" />
            JP Visual & Docs
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4">
          <NavLinks />
          {user ? (
            <>
              <span className="text-sm whitespace-nowrap">👋 สวัสดี, {user.username}</span>
              <button
                onClick={handleLogout}
                className="btn btn-outline btn-sm ml-2"
                aria-label="Logout"
              >
                Logout
              </button>
            </>
          ) : !isLoginPage ? (
            <Link
              to="/login"
              className="btn btn-primary btn-sm ml-2"
              onClick={closeMenu}
            >
              Login
            </Link>
          ) : null}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="btn btn-square btn-ghost"
            aria-label="Toggle Menu"
          >
            {/* Icon SVG */}
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu isMenuOpen={menuOpen} closeMenu={closeMenu}>
        <div className="mt-4 px-4 space-y-4">
          <NavLinks />
          {user ? (
            <>
              <span className="block">👋 สวัสดี, {user.username}</span>
              <button
                onClick={handleLogout}
                className="btn btn-outline btn-block"
                aria-label="Logout"
              >
                Logout
              </button>
            </>
          ) : !isLoginPage ? (
            <Link
              to="/login"
              className="btn btn-primary btn-block"
              onClick={closeMenu}
            >
              Login
            </Link>
          ) : null}
        </div>
      </MobileMenu>
    </header>
  );
};

export default Header;