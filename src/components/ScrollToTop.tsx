import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      if (timeoutId) return; // debounce ง่าย ๆ ไม่ให้เรียกบ่อยเกิน
      timeoutId = setTimeout(() => {
        setIsVisible(window.scrollY > 300);
        timeoutId = null;
      }, 100);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          key="scroll-to-top"
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-[9999] btn btn-circle btn-primary shadow-xl
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary
            dark:focus:ring-white dark:bg-primary dark:text-white"
          aria-label="เลื่อนกลับขึ้นด้านบน"
          title="เลื่อนกลับขึ้นด้านบน"
          tabIndex={0}
          role="button"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              scrollToTop();
            }
          }}
        >
          <FaArrowUp className="w-4 h-4" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;