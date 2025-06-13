import React from "react";

const portfolioImages = [
  "/images/portfolio-loan-success.jpg",
  "/images/portfolio-loan-success1.jpg",
  "/images/portfolio-loan-success2.jpg",
  "/images/portfolio-loan-success3.jpg",
  "/images/portfolio-loan-success4.jpg",
];

const PortfolioSection: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="max-w-6xl mx-auto px-6 py-16"
      aria-label="ผลงานล่าสุด"
    >
      <h2 className="text-4xl font-extrabold text-center mb-12 text-red-600">
        ผลงานล่าสุด
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {portfolioImages.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition"
          >
            <img
              src={src}
              alt={`ผลงานตัวอย่าง ${index + 1}`}
              className="w-full h-56 object-cover"
              loading="lazy"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = "/assets/fallback-image.png";
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PortfolioSection;