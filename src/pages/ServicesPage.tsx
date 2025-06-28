// src/pages/ServicesPage.tsx
import React from "react";
import Layout from "@/layout/Layout";
import SEOHelmet from "@/components/SEOHelmet";

import ServicesSection from "@/components/ServicesSection";

const ServicesPage: React.FC = () => {
  return (
    <Layout>
      <SEOHelmet
        title="บริการของเรา | JP Visual & Docs"
        description="บริการเอกสาร วีซ่า ยื่นกู้ ครบวงจร โดยทีมงานมืออาชีพ"
      />
      <ServicesSection />
    </Layout>
  );
};

export default ServicesPage;