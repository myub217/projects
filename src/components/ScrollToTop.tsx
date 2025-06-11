import React, { useState, useEffect } from "react";

interface ScrollToTopProps {
  theme: "light" | "dark";
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ theme }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300); // แสดงปุ่มเมื่อเลื่อนลงเกิน 300px
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null; // ซ่อนปุ่มถ้าไม่ visible

  return (
    <button
      onClick={handleClick}
      title="เลื่อนขึ้นด้านบน"
      aria-label="เลื่อนขึ้นด้านบน"
      className={`btn fixed bottom-4 right-4 z-50 p-3 rounded-full shadow-lg
        focus:outline-none focus:ring-2 focus:ring-offset-2
        transition-opacity duration-300
        ${
          theme === "dark"
            ? "btn-warning focus:ring-warning-focus"
            : "btn-primary focus:ring-primary-focus"
        }`}
    >
      {/* ใช้ไอคอน Unicode */}
      <span aria-hidden="true" className="text-xl select-none">⬆️</span>
    </button>
  );
};

export default ScrollToTop;