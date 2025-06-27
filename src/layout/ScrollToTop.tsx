// src/hooks/ScrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type ScrollToTopProps = {
  behavior?: ScrollBehavior; // "auto" | "smooth"
};

/**
 * ScrollToTop – Hook component ที่ใช้ scroll หน้าขึ้นบนสุดเมื่อ path เปลี่ยน
 * เหมาะสำหรับ SPA ที่ต้องการประสบการณ์ผู้ใช้งานที่ราบรื่น
 */
const ScrollToTop: React.FC<ScrollToTopProps> = ({ behavior = "smooth" }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    // ป้องกันกรณี window ไม่มี (เช่น SSR)
    if (typeof window !== "undefined" && "scrollTo" in window) {
      window.scrollTo({ top: 0, behavior });
    }
  }, [pathname, behavior]);

  return null;
};

export default ScrollToTop;