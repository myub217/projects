import React from "react";

interface LogoProps {
  className?: string;
  "aria-label"?: string;
  role?: string;
  draggable?: boolean;
}

/**
 * คอมโพเนนต์แสดงโลโก้ JP Visual & Docs
 * สามารถปรับ className และ props อื่นๆ ได้ตามต้องการ
 */
const Logo: React.FC<LogoProps> = ({
  className = "",
  "aria-label": ariaLabel = "โลโก้ JP Visual & Docs",
  role = "img",
  draggable = false,
  ...props
}) => {
  return (
    <img
      src="/logo.svg" // เปลี่ยนเป็น path โลโก้จริงของคุณ เช่น "/assets/jp-logo.png"
      alt="JP Visual & Docs"
      className={className}
      aria-label={ariaLabel}
      role={role}
      draggable={draggable}
      loading="lazy"
      decoding="async"
      {...props}
    />
  );
};

export default Logo;