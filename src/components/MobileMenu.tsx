// src/components/MobileMenu.tsx
import React, { useEffect, useRef, useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; href: string; highlight?: boolean }[];
  onLinkClick?: () => void;
  triggerRef?: React.RefObject<HTMLElement>;
}

let scrollLockCount = 0;

const MobileMenu: React.FC<MobileMenuProps> = ({
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
    onClose();
  }, [isClosing, onClose]);

  // ปิดเมนูเมื่อกด Escape
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

  // ล็อก scroll เมื่อเมนูเปิด
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

  // ดักจับ focus ภายในเมนูมือถือ
  useEffect(() => {
    if (!isOpen || !menuRef.current) return;

    const selectors =
      'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusable = Array.from(
      menuRef.current.querySelectorAll<HTMLElement>(selectors)
    ).filter((el) => !el.hasAttribute("disabled") && el.offsetParent !== null);

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      if (focusable.length === 0) return;

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", trapFocus);
    first?.focus();

    return () => document.removeEventListener("keydown", trapFocus);
  }, [isOpen]);

  // คืนโฟกัสให้ปุ่มเปิดเมนูเมื่อเมนูปิด
  useEffect(() => {
    if (!isOpen) {
      setIsClosing(false);
      triggerRef?.current?.focus();
    }
  }, [isOpen, triggerRef]);

  // จัดการคลิกลิงก์ในเมนู
  const handleLinkClick = useCallback(
    (href: string) => {
      if (isClosing) return;
      handleClose();
      onLinkClick?.();

      // ใช้ setTimeout เล็กน้อยให้ handleClose ทำงานก่อนเปลี่ยนหน้า
      setTimeout(() => {
        if (href.startsWith("#")) {
          window.location.hash = href;
        } else if (/^https?:\/\//.test(href)) {
          window.open(href, "_blank", "noopener,noreferrer");
        } else {
          window.location.href = href;
        }
      }, 150);
    },
    [handleClose, isClosing, onLinkClick]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop คลิกปิดเมนู */}
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

          {/* เมนูมือถือ */}
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
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              aria-label="ปิดเมนู"
              disabled={isClosing}
              type="button"
            >
              <X size={28} />
            </button>

            <nav aria-label="ลิงก์เมนูหลัก" className="flex flex-col gap-2">
              {links.map(({ label, href, highlight }) => (
                <button
                  key={href}
                  onClick={() => handleLinkClick(href)}
                  className={`text-left px-6 py-3 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 ${
                    highlight
                      ? "bg-pink-600 text-white hover:bg-pink-700 dark:hover:bg-pink-500"
                      : "hover:text-primary dark:hover:text-primary"
                  }`}
                  type="button"
                >
                  {label}
                </button>
              ))}
            </nav>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;