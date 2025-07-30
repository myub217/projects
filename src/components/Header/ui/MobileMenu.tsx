import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const { user, logout, isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    onClose();
    navigate("/login");
  };

  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-60 transition-opacity duration-300 ${
        isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      <div
        className={`absolute top-0 right-0 w-64 h-full bg-base-100 shadow-xl transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-4 border-b border-base-300">
          <h2 className="text-lg font-bold">เมนู</h2>
          <button onClick={onClose} className="btn btn-sm btn-ghost">
            ✕
          </button>
        </div>

        <nav className="flex flex-col p-4 space-y-3">
          <Link to="/" className="btn btn-ghost justify-start" onClick={onClose}>
            หน้าแรก
          </Link>

          {isAuthenticated && (
            <Link to="/secret" className="btn btn-ghost justify-start" onClick={onClose}>
              พื้นที่ลับ
            </Link>
          )}

          {isAdmin && (
            <Link to="/admin" className="btn btn-ghost justify-start" onClick={onClose}>
              แอดมิน
            </Link>
          )}

          {!isAuthenticated ? (
            <Link to="/login" className="btn btn-primary" onClick={onClose}>
              เข้าสู่ระบบ
            </Link>
          ) : (
            <button onClick={handleLogout} className="btn btn-error">
              ออกจากระบบ
            </button>
          )}
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;