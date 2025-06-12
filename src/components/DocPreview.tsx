import React from "react";
import fallbackImage from "../assets/fallback-image.png";

interface DocPreviewProps {
  imageSrc?: string;    // URL หรือ import รูปภาพ
  docLink: string;      // URL ลิงก์เอกสาร
  fileName: string;     // ชื่อไฟล์พร้อมนามสกุล
  maxWidth?: string;    // ควบคุมความกว้าง เช่น "max-w-sm", "max-w-md"
  height?: string;      // ควบคุมความสูงรูป เช่น "h-48", "h-64"
  bgColor?: string;     // สีพื้นหลัง เช่น "bg-gray-800"
  textColor?: string;   // สีตัวหนังสือ เช่น "text-gray-200"
  className?: string;   // คลาส CSS เพิ่มเติม
  onClick?: () => void; // callback เมื่อคลิกบน container (optional)
}

const DocPreview: React.FC<DocPreviewProps> = ({
  imageSrc,
  docLink,
  fileName,
  maxWidth = "max-w-sm",
  height = "h-48",
  bgColor = "bg-gray-800",
  textColor = "text-gray-200",
  className = "",
  onClick,
}) => {
  // ฟังก์ชันเปลี่ยนรูปเป็น fallback กรณีโหลดภาพล้มเหลว
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = fallbackImage;
  };

  // ป้องกันการคลิก container ซ้ำซ้อน (ไม่ให้ trigger onClick และลิงก์พร้อมกัน)
  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (onClick) {
      // หากคลิกบนลิงก์จะไม่เรียก onClick
      if ((e.target as HTMLElement).closest("a")) {
        return;
      }
      onClick();
    }
  };

  // รองรับ keyboard สำหรับ accessibility (Enter / Space เพื่อ trigger onClick)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (onClick && (e.key === "Enter" || e.key === " ")) {
      e.preventDefault();
      onClick();
    }
  };

  const altText = fileName || "Document preview image";
  const ariaLabel = fileName ? `เปิดเอกสาร ${fileName} ในแท็บใหม่` : "เปิดเอกสารในแท็บใหม่";

  return (
    <div
      className={`${maxWidth} border rounded-lg shadow-lg overflow-hidden ${bgColor} ${textColor} ${className}`}
      onClick={handleContainerClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={handleKeyDown}
      aria-label={onClick ? `คลิกเพื่อดำเนินการกับเอกสาร ${fileName}` : undefined}
    >
      <a
        href={docLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={ariaLabel}
      >
        <img
          src={imageSrc || fallbackImage}
          alt={altText}
          className={`w-full object-cover hover:scale-105 transition-transform duration-300 ${height}`}
          onError={handleImageError}
          loading="lazy"
          decoding="async"
        />
      </a>

      <div className="p-4 text-center">
        <a
          href={docLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-500 font-semibold hover:underline break-words"
          title={`ดาวน์โหลดหรือเปิดไฟล์ ${fileName}`}
          aria-label={`ดาวน์โหลดหรือเปิดไฟล์ ${fileName}`}
        >
          {fileName}
        </a>
      </div>
    </div>
  );
};

export default DocPreview;