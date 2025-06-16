import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (hash) {
        // ใช้ decodeURIComponent กรณี hash มีตัวอักษรพิเศษ
        const id = decodeURIComponent(hash);
        const targetElement = document.querySelector(id);
        if (targetElement) {
          // focus เพื่อช่วยเรื่อง accessibility (เช่น screen readers)
          targetElement.focus?.();
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;