// src/components/Services/Services.tsx
import React from "react";
import ServiceCard from "./ui/ServiceCard";
import services from "./data";

const Services: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold mb-8 text-center">บริการของเรา</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
};

export default Services;
