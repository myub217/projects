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
      type="button"
      onClick={scrollToTop}
      title="กลับขึ้นด้านบน"
      aria-label="เลื่อนขึ้นด้านบน"
      className={`fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg transition-opacity duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      } ${
        theme === "dark"
          ? "bg-indigo-700 text-white focus:ring-indigo-300"
          : "bg-white text-gray-800 border focus:ring-gray-400"
      }`}
    >
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  );
};

export default ScrollToTop;