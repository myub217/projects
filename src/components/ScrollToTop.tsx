import React, { useEffect, useState } from "react";

type ScrollToTopProps = {
  theme: "light" | "dark";
};

const ScrollToTop: React.FC<ScrollToTopProps> = ({ theme }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      } ${theme === "dark" ? "bg-indigo-700 text-white" : "bg-white text-gray-800 border"}`}
      aria-label="เลื่อนไปด้านบน"
    >
      ⬆️
    </button>
  );
};

export default ScrollToTop;