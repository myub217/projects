import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const HEADER_OFFSET = 80; // ปรับขนาด offset ตามความสูง header ของคุณ (px)

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (hash) {
        try {
          // decodeURIComponent เพื่อรองรับตัวอักษรพิเศษใน hash
          const id = decodeURIComponent(hash);
          // ตรวจสอบว่า id มี # นำหน้าหรือไม่
          const selector = id.startsWith("#") ? id : `#${id}`;
          const targetElement = document.querySelector<HTMLElement>(selector);

          if (targetElement) {
            // เพิ่ม tabindex -1 หากไม่มี เพื่อให้ focus ได้
            if (!targetElement.hasAttribute("tabindex")) {
              targetElement.setAttribute("tabindex", "-1");
            }
            targetElement.focus();

            // คำนวณตำแหน่ง scroll โดยลบ offset header
            const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const scrollToPosition = elementTop - HEADER_OFFSET;

            // เลื่อนแบบ smooth พร้อม offset
            window.scrollTo({
              top: scrollToPosition >= 0 ? scrollToPosition : 0,
              behavior: "smooth",
            });
          } else {
            // ถ้าไม่เจอ element เลื่อนกลับบนสุด
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        } catch (error) {
          // กรณี decodeURIComponent ผิดพลาด fallback เลื่อนบนสุด
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        // ไม่มี hash เลื่อนกลับบนสุด
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 50);

    return () => clearTimeout(timeout);
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;