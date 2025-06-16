// src/components/common/ScrollToTop.tsx

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HEADER_OFFSET = 80; // ปรับตามความสูงของ Header (px)

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const scrollToHashOrTop = () => {
      if (hash) {
        try {
          const decodedHash = decodeURIComponent(hash);
          const selector = decodedHash.startsWith("#") ? decodedHash : `#${decodedHash}`;
          const target = document.querySelector<HTMLElement>(selector);

          if (target) {
            const top = target.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;
            requestAnimationFrame(() =>
              window.scrollTo({ top: top >= 0 ? top : 0, behavior: "smooth" })
            );

            // optional: focus for accessibility
            if (target.tabIndex < 0) {
              target.setAttribute("tabindex", "-1");
            }
            target.focus();
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        } catch (err) {
          console.warn("Invalid hash:", hash, err);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    const timeout = setTimeout(scrollToHashOrTop, 50); // Delay เพื่อรอ DOM mount

    return () => clearTimeout(timeout);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;