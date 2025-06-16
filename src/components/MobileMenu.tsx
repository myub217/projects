import React, { useEffect, useRef, useCallback, useState } from "react";
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
  const [isClosing, setIsClosing] = useState(false);

  // ป้องกันคลิกซ้ำระหว่างปิดเมนู
  const handleClose = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    onClose();
  }, [isClosing, onClose]);

  // ปิดเมนูด้วยปุ่ม Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Esc") {
        e.preventDefault();
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, handleClose]);

  // Lock scroll เมื่อเมนูเปิด (ซ้อนกันหลายชั้น)
  useEffect(() => {
    if (isOpen) {
      scrollLockCount++;
      document.body.style.overflow = "hidden";
      return () => {
        scrollLockCount--;
        if (scrollLockCount <= 0) {
          scrollLockCount = 0;
          document.body.style.overflow = "";
        }
      };
    }
  }, [isOpen]);

  // Trap focus ภายในเมนู
  useEffect(() => {
    if (!isOpen || !menuRef.current) return;

    const focusableSelectors =
      'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const focusableElements = Array.from(
      menuRef.current.querySelectorAll<HTMLElement>(focusableSelectors)
    ).filter((el) => !el.hasAttribute("disabled") && el.offsetParent !== null);

    if (focusableElements.length === 0) {
      menuRef.current.focus();
      return;
    }

    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];

    const trapFocus = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        // Tab
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", trapFocus);

    // Focus element เริ่มต้น ถ้ามี
    if (initialFocusRef?.current && menuRef.current.contains(initialFocusRef.current)) {
      initialFocusRef.current.focus();
    } else {
      first.focus();
    }

    return () => document.removeEventListener("keydown", trapFocus);
  }, [isOpen, initialFocusRef]);

  // เมื่อเมนูปิด ให้ focus กลับไปยังปุ่มที่เปิดเมนู (trigger)
  useEffect(() => {
    if (!isOpen) {
      setIsClosing(false);
      if (triggerRef?.current) {
        triggerRef.current.focus();
      }
    }
  }, [isOpen, triggerRef]);

  // ฟังก์ชันจัดการคลิกลิงก์ในเมนู
  const handleLinkClick = useCallback(() => {
    if (isClosing) return;
    handleClose();
    onLinkClick?.();
  }, [handleClose, isClosing, onLinkClick]);

  // กด Enter หรือ Space บนลิงก์ ให้ไป URL และปิดเมนู
  const handleLinkKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLAnchorElement>, href: string) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        window.location.href = href;
        handleLinkClick();
      }
    },
    [handleLinkClick]
  );

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
            onClick={handleClose}
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
              onClick={handleClose}
              className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
              aria-label="ปิดเมนู"
              disabled={isClosing}
            >
              <X size={28} />
            </button>

            <nav aria-label="ลิงก์เมนูหลัก" className="flex flex-col gap-2">
              {links.map(({ label, href, highlight }) => {
                // ตรวจสอบว่าลิงก์นี้คือหน้า current หรือไม่ โดยเทียบกับ window.location.href
                const isCurrentPage =
                  typeof window !== "undefined" && window.location.href.includes(href);

                return (
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
                    aria-current={isCurrentPage ? "page" : undefined}
                  >
                    {label}
                  </a>
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