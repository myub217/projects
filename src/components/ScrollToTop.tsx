import React from "react";

interface ScrollToTopProps {
  theme: string;
  // toggleTheme: () => void;  // ลบออกไปเลย
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ theme }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={handleClick}
      className={`btn fixed bottom-4 right-4 ${
        theme === "dark" ? "btn-warning" : "btn-primary"
      }`}
      aria-label="Scroll to top"
    >
      ↑ Top
    </button>
  );
};

export default ScrollToTop;