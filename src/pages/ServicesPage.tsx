import React from "react";
import Layout from "@/layout/Layout";
import SEOHelmet from "@/components/SEOHelmet";
import ServicesSection from "@/components/ServicesSection";

const ServicesPage: React.FC = () => {
  return (
    <Layout>
      <SEOHelmet
        title="บริการของเรา | JP Visual & Docs"
        description="บริการเอกสาร วีซ่า ยื่นกู้ครบวงจร โดยทีมงานมืออาชีพ ประสบการณ์กว่า 10 ปี"
        keywords="บริการเอกสาร, วีซ่า, ยื่นกู้, เอกสารราชการ, แปลเอกสาร, JP Visual & Docs"
        url="https://jpvisualdocs.com/services"
        ogImage="https://jpvisualdocs.com/assets/images/og-service.jpg"
      />

      <main
        id="services-page"
        className="py-12 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 max-w-screen-xl mx-auto scroll-mt-24"
        aria-labelledby="services-main-title"
      >
        <h1
          id="services-main-title"
          className="text-3xl md:text-4xl font-extrabold text-center text-blue-900 dark:text-blue-100 mb-10"
        >
          บริการของเรา
        </h1>

        <ServicesSection />
      </main>
    </Layout>
  );
};

export default ServicesPage;