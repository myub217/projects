import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export const SEOHelmet: React.FC<SEOProps> = ({
  title,
  description,
  image = "/og-default.png",
  url = "https://jp-visual-docs.com",
}) => {
  // ลบ / ท้าย URL ถ้ามี เพื่อความสอดคล้องในการต่อ URL
  const normalizedUrl = url.endsWith("/") ? url.slice(0, -1) : url;

  // ตรวจสอบว่า image เป็น URL เต็ม หรือ path ภายใน ให้เติม base URL ให้ถูกต้อง
  const fullImage =
    image.startsWith("http") || image.startsWith("https")
      ? image
      : `${normalizedUrl}${image.startsWith("/") ? "" : "/"}${image}`;

  return (
    <Helmet>
      {/* กำหนดภาษาใน html */}
      <html lang="th" />

      {/* เมต้าแท็กพื้นฐาน SEO */}
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={normalizedUrl} />
      <meta name="description" content={description} />

      {/* Open Graph สำหรับแชร์ในโซเชียล */}
      <meta property="og:locale" content="th_TH" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={normalizedUrl} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:image:alt" content={title} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* สีธีมสำหรับ PWA */}
      <meta name="theme-color" content="#7F3FBF" />
    </Helmet>
  );
};