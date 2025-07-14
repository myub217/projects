// src/components/MobileMenu.tsx

import React, { useEffect, useRef, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MobileMenuProps {
  id?: string; // เพิ่ม id เพื่อรองรับ aria-controls
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string; highlight?: boolean }[];
  onLinkClick?: () => void;
  triggerRef?: React.RefObject<HTMLElement>;
}

let scrollLockCount = 0;

const MobileMenu: React.FC<MobileMenuProps> = ({
  id,
  isOpen,
  onClose,
  links,
  onLinkClick,
  triggerRef,
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [isClosing, onClose]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        handleClose();
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, handleClose]);

  useEffect(() => {
    if (isOpen) {
      scrollLockCount++;
      document.body.style.overflow = "hidden";
    }
    return () => {
      scrollLockCount = Math.max(0, scrollLockCount - 1);
      if (scrollLockCount === 0) {
        document.body.style.overflow = "";
      }
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen || !menuRef.current) return;

    const selectors =
      'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusable = Array.from(
      menuRef.current.querySelectorAll<HTMLElement>(selectors)
    ).filter((el) => !el.hasAttribute("disabled") && el.offsetParent !== null);

    if (focusable.length === 0) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", trapFocus);
    first.focus();

    return () => document.removeEventListener("keydown", trapFocus);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setIsClosing(false);
      triggerRef?.current?.focus();
    }
  }, [isOpen, triggerRef]);

  const handleLinkClick = useCallback(
    (href: string) => {
      if (isClosing) return;
      handleClose();
      onLinkClick?.();

      setTimeout(() => {
        if (href.startsWith("#")) {
          const targetId = href.slice(1);
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
            history.pushState(null, "", href);
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        } else if (/^https?:\/\//.test(href)) {
          window.open(href, "_blank", "noopener,noreferrer");
        } else {
          window.location.href = href;
        }
      }, 150);
    },
    [handleClose, isClosing, onLinkClick]
  );

  const currentHash = typeof window !== "undefined" ? window.location.hash : "";

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[59] bg-black/40 dark:bg-black/60"
            aria-hidden="true"
            onClick={handleClose}
          />

          <motion.div
            key="menu"
            id={id}
            ref={menuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed bottom-0 right-0 top-0 z-[60] flex w-4/5 max-w-xs flex-col gap-8 bg-white px-6 pt-20 text-lg font-medium text-gray-800 shadow-xl dark:bg-gray-900 dark:text-gray-200"
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
              onClick={handleClose}
              className="absolute right-4 top-4 rounded text-gray-700 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 dark:text-gray-300"
              aria-label="ปิดเมนู"
              disabled={isClosing}
              type="button"
            >
              <X size={28} />
            </button>

            <nav aria-label="ลิงก์เมนูหลัก" className="flex flex-col gap-2">
              {links.map(({ label, href, highlight }) => {
                const active = href === currentHash;
                return (
                  <button
                    key={href}
                    onClick={() => handleLinkClick(href)}
                    type="button"
                    role="menuitem"
                    aria-current={active ? "page" : undefined}
                    className={`rounded px-6 py-3 text-left transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2 ${
                      highlight
                        ? "bg-gray-700 text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-500"
                        : "hover:text-gray-900 dark:hover:text-gray-300"
                    } ${active ? "font-semibold text-pink-600 dark:text-pink-400" : ""}`}
                  >
                    {label}
                  </button>
                );
              })}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;