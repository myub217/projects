import React from "react";

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  className?: string;
  draggable?: boolean;
}

/**
 * คอมโพเนนต์แสดงโลโก้ JP Visual & Docs
 * รองรับการปรับแต่งผ่าน props เช่น className, width, height, loading ฯลฯ
 */
const Logo: React.FC<LogoProps> = ({
  className = "h-10 w-auto",
  draggable = false,
  alt = "JP Visual & Docs",
  src = "/logo.svg", // เปลี่ยน path ได้ตามต้องการ
  width = 128,
  height = 48,
  loading = "lazy",
  decoding = "async",
  fetchPriority = "high",
  ...props
}) => {
  // ฟังก์ชัน fallback เมื่อโหลดโลโก้ไม่สำเร็จ
  const handleError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.currentTarget;
    target.onerror = null;
    target.src = "/logo-placeholder.png"; // fallback logo ถ้ามี
  };

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      draggable={draggable}
      loading={loading}
      decoding={decoding}
      fetchPriority={fetchPriority}
      onError={handleError}
      {...props}
    />
  );
};

export default Logo;