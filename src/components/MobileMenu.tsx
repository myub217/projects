import React from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string; highlight?: boolean }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, links }) => {
  return (
    <div
      className={`fixed inset-0 z-[60] bg-white/90 dark:bg-gray-900/90 backdrop-blur-md transition-transform duration-300 lg:hidden ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
      role="dialog"
      aria-modal="true"
      aria-label="เมนูนำทางมือถือ"
    >
      <nav className="flex flex-col items-center gap-6 text-lg font-medium text-gray-800 dark:text-gray-200 mt-20">
        {links.map(({ label, href, highlight }) => (
          <a
            key={href}
            href={href}
            onClick={onClose}
            className={`px-4 py-2 rounded transition-colors duration-200 ${
              highlight
                ? "bg-pink-600 text-white hover:bg-pink-700"
                : "hover:text-pink-600 dark:hover:text-pink-400"
            }`}
          >
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default MobileMenu;