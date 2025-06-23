import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

const SEOHelmet: React.FC<SEOProps> = ({
  title = "JP Service | บริการเอกสารครบวงจร",
  description = "บริการเอกสาร สินเชื่อ วีซ่า โปรไฟล์บริษัท และอื่น ๆ ครบจบที่เดียว",
  image = "/og-image.png",
  url = "https://yourdomain.com",
}) => {
  // สร้าง full URL สำหรับภาพ og:image
  const fullImage =
    image.startsWith("http")
      ? image
      : `${url.replace(/\/+$/, "")}${image.startsWith("/") ? "" : "/"}${image}`;

  // ลิงก์ canonical ตัด / ท้ายออก
  const canonicalUrl = url.replace(/\/+$/, "");

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph (Facebook, LINE) */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={canonicalUrl} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default SEOHelmet;