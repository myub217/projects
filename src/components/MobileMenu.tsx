import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string; highlight?: boolean }[];
  onLinkClick?: () => void;
  initialFocusRef?: React.RefObject<HTMLElement>;
  triggerRef?: React.RefObject<HTMLElement>;
}

let scrollLockCount = 0;

const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  links,
  onLinkClick,
  initialFocusRef,
  triggerRef,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Esc") {
        e.preventDefault();
        onClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      scrollLockCount++;
      if (scrollLockCount === 1) {
        document.body.style.overflow = "hidden";
      }
      return () => {
        scrollLockCount--;
        if (scrollLockCount <= 0) {
          scrollLockCount = 0;
          document.body.style.overflow = "";
        }
      };
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !menuRef.current) return;

    const focusableSelectors =
      'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusableElements = menuRef.current.querySelectorAll<HTMLElement>(
      focusableSelectors
    );

    if (focusableElements.length === 0) {
      menuRef.current.focus();
      return;
    }

    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", trapFocus);

    if (initialFocusRef?.current) {
      initialFocusRef.current.focus();
    } else {
      first.focus();
    }

    return () => document.removeEventListener("keydown", trapFocus);
  }, [isOpen, initialFocusRef]);

  useEffect(() => {
    if (!isOpen && triggerRef?.current) {
      triggerRef.current.focus();
    }
  }, [isOpen, triggerRef]);

  const handleLinkClick = () => {
    onClose();
    onLinkClick?.();
  };

  const handleLinkKeyDown = (
    e: React.KeyboardEvent<HTMLAnchorElement>,
    href: string
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      window.location.href = href;
      handleLinkClick();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[59] bg-black/40 dark:bg-black/60"
            aria-hidden="true"
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            key="menu"
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 bottom-0 z-[60] w-4/5 max-w-xs bg-white dark:bg-gray-900 shadow-xl flex flex-col pt-20 gap-8 text-lg font-medium text-gray-800 dark:text-gray-200 px-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-menu-label"
            onClick={(e) => e.stopPropagation()}
            tabIndex={-1}
          >
            <h2 id="mobile-menu-label" className="sr-only">
              เมนูนำทางมือถือ
            </h2>

            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              aria-label="ปิดเมนู"
            >
              <X size={28} />
            </button>

            <nav aria-label="ลิงก์เมนูหลัก">
              {links.map(({ label, href, highlight }) => (
                <a
                  key={href}
                  href={href}
                  onClick={handleLinkClick}
                  onKeyDown={(e) => handleLinkKeyDown(e, href)}
                  className={`block px-6 py-3 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    highlight
                      ? "bg-primary text-white hover:bg-primary-focus"
                      : "hover:text-primary dark:hover:text-primary"
                  }`}
                  tabIndex={0}
                >
                  {label}
                </a>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;