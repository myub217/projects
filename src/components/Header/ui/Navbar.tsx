// src/components/Header/Navbar.tsx
import React from "react";
import { Link } from "react-router-dom";
import ThemeToggleButton from "@/components/common/ThemeToggleButton";
import { useAuth } from "@/contexts/AuthContext";
import jpLogo from "@/assets/jp-logo.webp";

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout(); // ออกจากระบบ
  };

  return (
    <header className="sticky top-0 z-50 bg-base-100 shadow-md transition-colors duration-300">
      <nav className="navbar max-w-7xl mx-auto px-4">
        {/* 🔗 Brand / Logo */}
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl flex items-center gap-2"
          >
            <img
              src={jpLogo}
              alt="JP Visual & Docs Logo"
              className="h-8 w-auto"
              loading="lazy"
            />
            <span className="font-semibold">JP Visual & Docs</span>
          </Link>
        </div>

        {/* 🔘 Actions */}
        <div className="flex-none flex items-center gap-2">
          {user ? (
            <>
              <span
                className="hidden sm:inline-block text-sm px-3"
                aria-label={`สวัสดี, ${user.name}`}
              >
                สวัสดี, {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="btn btn-sm btn-outline btn-primary"
                aria-label="Logout"
                type="button"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="btn btn-sm btn-primary"
              aria-label="Login"
            >
              Login
            </Link>
          )}

          {/* 🌙 Theme Toggle */}
          <ThemeToggleButton />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;