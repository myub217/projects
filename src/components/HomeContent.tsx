// src/components/HomeContent.tsx

import React, { Suspense, lazy } from 'react';
import LoadingFallback from '@components/common/LoadingFallback';

// Dynamic imports with Suspense
const HeroSection = lazy(() => import('@components/Sections/HeroSection'));
const StatsSection = lazy(() => import('@components/Sections/StatsSection'));
const ServicesSectionBlock = lazy(
  () => import('@components/Sections/ServicesSectionBlock'),
);
const TestimonialsSection = lazy(
  () => import('@components/Sections/TestimonialsSection'),
);
const FAQSection = lazy(() => import('@components/Sections/FAQSection'));
const CTASection = lazy(() => import('@components/Sections/CTASection'));
const FeatureSection = lazy(() => import('@components/Sections/FeatureSection'));
const AboutSection = lazy(() => import('@components/Sections/AboutSection'));

const HomeContent = () => {
  return (
    <main className="space-y-24 overflow-hidden">
      <Suspense fallback={<LoadingFallback section="หน้าหลัก" />}>
        <HeroSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback section="สถิติความสำเร็จ" />}>
        <StatsSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback section="บริการทั้งหมด" />}>
        <ServicesSectionBlock />
      </Suspense>

      <Suspense fallback={<LoadingFallback section="คุณสมบัติระบบ" />}>
        <FeatureSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback section="เกี่ยวกับเรา" />}>
        <AboutSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback section="รีวิวลูกค้า" />}>
        <TestimonialsSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback section="คำถามที่พบบ่อย" />}>
        <FAQSection />
      </Suspense>

      <Suspense fallback={<LoadingFallback section="ช่องทางติดต่อ/ปิดการขาย" />}>
        <CTASection />
      </Suspense>
    </main>
  );
};

export default HomeContent;
