// src/pages/HomePage.tsx
import React, {
  lazy,
  Suspense,
  useEffect,
  useState,
  useRef,
  ReactNode,
} from "react";
import { useNavigate } from "react-router-dom";

import Layout from "@/layout/Layout";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import JoinButtons from "@/components/JoinButtons";
import ErrorBoundary from "@/components/ErrorBoundary";
import SEOHelmet from "@/components/SEOHelmet";

const ReviewsSectionLazy = lazy(() => import("@/components/ReviewsSection"));

const ReviewFallback: ReactNode = (
  <div
    className="text-center text-gray-400 dark:text-gray-500 select-none"
    role="status"
    aria-live="polite"
    aria-busy="true"
  >
    กำลังโหลดรีวิว...
  </div>
);

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const [loadReviews, setLoadReviews] = useState(false);
  const reviewsRef = useRef<HTMLDivElement | null>(null);
  const hasLoaded = useRef(false);

  useEffect(() => {
    if (hasLoaded.current || !reviewsRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoadReviews(true);
          hasLoaded.current = true;
          observer.disconnect();
        }
      },
      { rootMargin: "200px", threshold: 0.1 }
    );

    observer.observe(reviewsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <SEOHelmet
        title="JP Visual & Docs | บริการเอกสาร วีซ่า ยื่นกู้ ครบวงจร"
        description="บริการเอกสารราชการ วีซ่าทั่วโลก เอกสารขอสินเชื่อครบวงจร โดยทีมงานมืออาชีพ"
      />

      <Hero />

      <section id="about" className="my-16 scroll-mt-24">
        <About />
      </section>

      <section id="services" className="my-16 scroll-mt-24">
        <ServicesSection />
      </section>

      <section id="portfolio" className="my-16 scroll-mt-24">
        <PortfolioSection />
      </section>

      <section id="reviews" ref={reviewsRef} className="my-16 scroll-mt-24">
        <ErrorBoundary>
          {loadReviews ? (
            <Suspense fallback={ReviewFallback}>
              <ReviewsSectionLazy />
            </Suspense>
          ) : (
            ReviewFallback
          )}
        </ErrorBoundary>
      </section>

      <section id="contact" className="my-16 scroll-mt-24">
        <JoinButtons />
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => navigate("/services")}
            className="btn btn-primary px-6 py-2 rounded-xl shadow hover:shadow-lg transition"
          >
            สำรวจบริการ
          </button>
          <button
            onClick={() => navigate("/login")}
            className="btn btn-outline border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/10 px-6 py-2 rounded-xl transition"
          >
            เข้าสู่ระบบ
          </button>
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;