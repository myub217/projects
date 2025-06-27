import React, { lazy, Suspense, useEffect, useState, useRef } from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import JoinButtons from "@/components/JoinButtons";
import ErrorBoundary from "@/components/ErrorBoundary";
import SEOHelmet from "@/components/SEOHelmet";

// Lazy-load รีวิว (ReviewsSection) เพื่อประหยัดโหลดหน้าแรก
const ReviewsSectionLazy = lazy(() => import("@/components/ReviewsSection"));

const ReviewFallback = (
  <div className="text-center text-gray-400 dark:text-gray-500">
    กำลังโหลดรีวิว...
  </div>
);

const HomePage: React.FC = () => {
  const [loadReviews, setLoadReviews] = useState(false);
  const reviewsRef = useRef<HTMLDivElement | null>(null);
  const hasLoaded = useRef(false);

  useEffect(() => {
    // ป้องกันโหลดซ้ำ และตรวจสอบว่ามี element หรือไม่
    if (hasLoaded.current || !reviewsRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadReviews(true);
          hasLoaded.current = true;
          observer.disconnect();
        }
      },
      {
        rootMargin: "200px",
        threshold: 0.1,
      }
    );

    observer.observe(reviewsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <main
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-all duration-300"
      aria-label="หน้าแรก"
    >
      {/* SEO */}
      <SEOHelmet title="JP Visual & Docs | บริการเอกสาร วีซ่า ยื่นกู้ ครบวงจร" />

      {/* Hero */}
      <Hero />

      {/* About */}
      <section id="about" className="my-16" aria-labelledby="about-title">
        <About />
      </section>

      {/* Services */}
      <section id="services" className="my-16" aria-labelledby="services-title">
        <ServicesSection />
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="my-16" aria-labelledby="portfolio-title">
        <PortfolioSection />
      </section>

      {/* Reviews (Lazy load) */}
      <section
        id="reviews"
        ref={reviewsRef}
        className="my-16"
        aria-labelledby="reviews-title"
      >
        <ErrorBoundary>
          {loadReviews && (
            <Suspense fallback={ReviewFallback}>
              <ReviewsSectionLazy />
            </Suspense>
          )}
        </ErrorBoundary>
      </section>

      {/* Join / Contact */}
      <section id="contact" className="my-16" aria-labelledby="contact-title">
        <JoinButtons />
      </section>
    </main>
  );
};

export default HomePage;