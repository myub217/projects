import React from "react";

interface LogoProps {
  className?: string;
  "aria-label"?: string;
  role?: string;
  draggable?: boolean;
}

const Logo: React.FC<LogoProps> = ({
  className = "",
  ...props
}) => {
  return (
    <img
      src="/logo.svg" // ✅ เปลี่ยนได้ตามตำแหน่งโลโก้จริงของคุณ เช่น "/assets/jp-logo.png"
      alt="JP Visual & Docs"
      className={className}
      {...props}
    />
  );
};

export default Logo;