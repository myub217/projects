import React from "react";
import viteLogo from "../assets/vite.svg";

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  image: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Mobile App Project 1",
    description: "An innovative mobile app built with React Native.",
    image: viteLogo,
  },
  {
    id: 2,
    title: "Booking App",
    description: "A seamless booking experience for travelers.",
    image: viteLogo,
  },
  {
    id: 3,
    title: "Chat App",
    description: "Real-time chat application with push notifications.",
    image: viteLogo,
  },
];

const Portfolio: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-16" id="portfolio">
      <h2 className="text-4xl font-extrabold text-center mb-6 text-pink-400 neon-text">
        ผลงานล่าสุดของเรา
      </h2>
      <p className="text-center text-base-content/80 mb-12 max-w-xl mx-auto">
        ตัวอย่างผลงานแอปมือถือของเรา ที่ออกแบบมาให้ใช้งานง่าย และรองรับทุกแพลตฟอร์ม
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {portfolioItems.map(({ id, title, description, image }) => (
          <div
            key={id}
            className="card bg-base-100 shadow-neon hover:scale-[1.05] transition-transform duration-300 cursor-pointer"
            tabIndex={0}
            role="button"
            aria-pressed="false"
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                // Placeholder for click behavior (if any)
                e.preventDefault();
              }
            }}
          >
            <figure className="bg-base-200 rounded-t-lg">
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-contain p-6"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title text-lg text-pink-400 neon-text">{title}</h3>
              <p className="text-base-content/90">{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;