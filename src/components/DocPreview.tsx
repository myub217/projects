import React, { useState, KeyboardEvent } from "react";

interface DocumentCardProps {
  fileName: string;
  docLink: string;
  imageSrc?: string;
  fallbackImage: string;
  altText: string;
  maxWidth?: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
  onClick?: () => void;
}

const DocumentCard: React.FC<DocumentCardProps> = ({
  fileName,
  docLink,
  imageSrc,
  fallbackImage,
  altText,
  maxWidth = "max-w-xs",
  bgColor = "bg-white",
  textColor = "text-gray-900",
  className = "",
  onClick,
}) => {
  const [imgSrc, setImgSrc] = useState(imageSrc || fallbackImage);

  const handleImageError = () => {
    if (imgSrc !== fallbackImage) {
      setImgSrc(fallbackImage);
    }
  };

  const handleContainerClick = ( ) => {
    if (onClick) {
      onClick();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!onClick) return;
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div
      className={`${maxWidth} border rounded-lg shadow-lg overflow-hidden ${bgColor} ${textColor} ${className} relative cursor-pointer`}
      onClick={handleContainerClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={handleKeyDown}
      aria-label={onClick ? `คลิกเพื่อดำเนินการกับเอกสาร ${fileName}` : undefined}
    >
      <a href={docLink} target="_blank" rel="noopener noreferrer" className="block">
        <img
          src={imgSrc}
          alt={altText}
          className="w-full object-contain"
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
        >
          {fileName}
        </a>
      </div>
    </div>
  );
};

export default DocumentCard;