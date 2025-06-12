import React from "react";
import fallbackImage from "../assets/fallback-image.png";

interface DocPreviewProps {
  imageSrc?: string;    // URL หรือ import รูปภาพ
  docLink: string;      // URL ลิงก์เอกสาร
  fileName: string;     // ชื่อไฟล์พร้อมนามสกุล
}

const DocPreview: React.FC<DocPreviewProps> = ({ imageSrc, docLink, fileName }) => {
  // เมื่อโหลดรูปไม่สำเร็จ ให้เปลี่ยนเป็น fallbackImage
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = fallbackImage;
  };

  return (
    <div className="max-w-sm border rounded-lg shadow-lg overflow-hidden bg-gray-800 text-gray-200">
      <a
        href={docLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label={`เปิดเอกสาร ${fileName} ในแท็บใหม่`}
      >
        <img
          src={imageSrc || fallbackImage}
          alt={fileName}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
          onError={handleImageError}
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

export default DocPreview;