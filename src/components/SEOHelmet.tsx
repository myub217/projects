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
  const normalizedUrl = url.endsWith("/") ? url.slice(0, -1) : url;
  const fullImage = image.startsWith("http") ? image : `${normalizedUrl}${image.startsWith("/") ? "" : "/"}${image}`;

  return (
    <Helmet>
      {/* Document Language */}
      <html lang="th" />

      {/* Basic SEO */}
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={normalizedUrl} />
      <meta name="description" content={description} />

      {/* Open Graph */}
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

      {/* Theme color for PWA */}
      <meta name="theme-color" content="#7F3FBF" />
    </Helmet>
  );
};