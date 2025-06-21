import React from "react";
import { services } from "@/data/services"; // กรณีมีแยกไว้
import { Button } from "@/components/ui/button";

const ServicesSection: React.FC = () => {
  return (
    <section aria-labelledby="services-title" className="py-12">
      <h2
        id="services-title"
        className="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white"
      >
        บริการของเรา
      </h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
        สำรวจบริการที่เราพร้อมให้คำปรึกษาและดำเนินการให้คุณครบวงจร
      </p>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
              loading="lazy"
            />
            <div className="p-5 flex flex-col h-full justify-between">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                  {service.description}
                </p>
                <p className="text-blue-600 dark:text-blue-400 font-medium">
                  ราคา: {service.price}
                </p>
              </div>
              <Button
                className="mt-4 bg-blue-600 text-white hover:bg-blue-700 w-full"
                onClick={() => alert(`คุณเลือก: ${service.title}`)}
              >
                ขอรับบริการ
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;