// src/pages/Home.tsx
import React from "react";

import HeroSection from "@/components/Hero/Hero";
import FeatureSection from "@/components/Featurer/Featurer";
import ServicesSection from "@/components/Services/Services";
import AboutSection from "@/components/About/About"; // ✅ ใช้ชื่อชัดเจน

const Home: React.FC = () => {
  return (
    <main className="space-y-16">
      <HeroSection />
      <FeatureSection />
      <ServicesSection />
      <AboutSection />
    </main>
  );
};

export default Home;
