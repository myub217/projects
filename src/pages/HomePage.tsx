import React, { lazy, Suspense, useEffect, useState, useRef } from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import ServicesSection from "../components/ServicesSection";
import PortfolioSection from "../components/PortfolioSection";
import JoinButtons from "../components/JoinButtons";
import SkeletonSection from "../components/skeleton/SkeletonSection";
import ErrorBoundary from "../components/ErrorBoundary";

const ReviewsSectionLazy = lazy(() => import("../components/ReviewsSection"));

const HomePage: React.FC = () => {
  const [loadReviews, setLoadReviews] = useState(false);
  const reviewsRef = useRef<HTMLDivElement | null>(null);
  const hasLoaded = useRef(false);

  useEffect(() => {
    if (!reviewsRef.current || hasLoaded.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadReviews(true);
          hasLoaded.current = true;
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(reviewsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-all duration-300"
      aria-label="หน้าแรก"
    >
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
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

      {/* Reviews */}
      <section
        id="reviews"
        ref={reviewsRef}
        className="my-16"
        aria-labelledby="reviews-title"
      >
        <ErrorBoundary>
          <Suspense fallback={<SkeletonSection title="รีวิว" />}>
            {loadReviews ? <ReviewsSectionLazy /> : <SkeletonSection title="รีวิว" />}
          </Suspense>
        </ErrorBoundary>
      </section>

      {/* Contact / Join */}
      <section id="contact" className="my-16" aria-labelledby="contact-title">
        <JoinButtons />
      </section>
    </main>
  );
};

export default HomePage;