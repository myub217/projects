import React, { useState, useEffect, useCallback, KeyboardEvent } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop: React.FC = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = useCallback(() => {
    setVisible(window.pageYOffset > 300);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      scrollToTop();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    toggleVisible(); // เช็คสถานะตอนโหลดหน้า
    return () => window.removeEventListener("scroll", toggleVisible);
  }, [toggleVisible]);

  return (
    <>
      {visible && (
        <button
          type="button"
          onClick={scrollToTop}
          onKeyDown={handleKeyDown}
          aria-label="เลื่อนกลับขึ้นบน"
          title="เลื่อนกลับขึ้นบน"
          tabIndex={0}
          aria-live="polite"
          className="
            fixed bottom-8 right-8
            bg-blue-600 text-white rounded-full p-4 shadow-lg
            hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500
            transition duration-300 ease-in-out
            text-2xl leading-none select-none
            z-50
            flex items-center justify-center
          "
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;