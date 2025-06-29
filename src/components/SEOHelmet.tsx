import React from "react";
import { Helmet } from "react-helmet-async";

type SEOHelmetProps = {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  ogImage?: string;
};

const SEOHelmet: React.FC<SEOHelmetProps> = ({
  title = "JP Visual & Docs",
  description = "บริการเอกสาร วีซ่า ยื่นกู้ ครบวงจร โดย JP Visual & Docs",
  keywords = "บริการเอกสาร, วีซ่า, ยื่นกู้, การเงิน, JP Visual & Docs",
  url = "https://jpvisualdocs.com",
  ogImage = "https://jpvisualdocs.com/assets/images/og-image-v2.jpg", // ✅ absolute path
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "JP Visual & Docs",
    "url": url,
    "logo": ogImage,
    "sameAs": [
      "https://www.facebook.com/jpvisualdocs",
      "https://www.linkedin.com/company/jpvisualdocs"
    ]
  };

  return (
    <Helmet>
      <html lang="th" />
      <title>{title}</title>

      {/* General Tags */}
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Language" content="th" />
      <meta name="robots" content="index, follow" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="JP Visual & Docs" />
      <meta name="theme-color" content="#1A237E" />
      <link rel="canonical" href={url} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={url} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:site" content="@jpvisualdocs" />
      <meta name="twitter:creator" content="@jpvisualdocs" />

      {/* Favicon & PWA */}
      <link rel="icon" type="image/png" sizes="32x32" href="/assets/icons/icon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/assets/icons/icon-16x16.png" />
      <link rel="apple-touch-icon" href="/assets/icons/icon-192x192.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#1A237E" />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEOHelmet;