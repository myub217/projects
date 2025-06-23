import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type ScrollToTopProps = {
  behavior?: ScrollBehavior; // "auto" หรือ "smooth"
};

const ScrollToTop: React.FC<ScrollToTopProps> = ({ behavior = "smooth" }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior });
    }
  }, [pathname, behavior]);

  return null;
};

export default ScrollToTop;