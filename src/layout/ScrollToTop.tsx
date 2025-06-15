import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // เลื่อนหน้าไปบนสุดเมื่อ path เปลี่ยน
    window.scrollTo({ top: 0, behavior: "auto" }); // หรือ "smooth" ถ้าชอบ animation
  }, [pathname]);

  return null;
};

export default ScrollToTop;