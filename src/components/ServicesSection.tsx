import React from "react";
import serviceImg from "../assets/service-visa.webp";

interface Service {
  id: number;
  title: string;
  description: string;
  image: string;
}

const services: Service[] = [
  { id: 1, title: "Visa Application", description: "Fast and reliable visa service.", image: serviceImg },
  { id: 2, title: "Travel Insurance", description: "Comprehensive insurance plans.", image: serviceImg },
  { id: 3, title: "Consultation", description: "Expert travel advice.", image: serviceImg },
  { id: 4, title: "Flight Booking", description: "Cheap and convenient flight booking.", image: serviceImg },
  { id: 5, title: "Hotel Reservation", description: "Best hotel deals.", image: serviceImg },
  { id: 6, title: "Itinerary Planning", description: "Tailored travel plans.", image: serviceImg },
  { id: 7, title: "Visa Extension", description: "Hassle-free visa extensions.", image: serviceImg },
  { id: 8, title: "Customer Support", description: "24/7 support for travelers.", image: serviceImg },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-primary">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ id, title, description, image }) => (
            <div
              key={id}
              className="card bg-base-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <figure className="overflow-hidden rounded-t-lg">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-40 object-cover rounded-t-lg transform transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </figure>
              <div className="card-body px-6 py-4">
                <h3 className="card-title text-accent">{title}</h3>
                <p className="text-sm text-secondary">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;