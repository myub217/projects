import React from "react";

interface Review {
  id: number;
  name: string;
  message: string;
  avatar?: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Alice",
    message: "This app transformed my business! Highly recommend it.",
    avatar: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    name: "Bob",
    message: "Smooth and reliable, great UI and performance.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    name: "Charlie",
    message: "Excellent support and beautiful design.",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
  {
    id: 4,
    name: "Diana",
    message: "Easy to use and packed with features. Love it!",
    avatar: "https://i.pravatar.cc/150?img=45",
  },
  {
    id: 5,
    name: "Evan",
    message: "Helped us launch our MVP in no time.",
    avatar: "https://i.pravatar.cc/150?img=23",
  },
];

const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-pink-400 drop-shadow-neon">
          What Our Clients Say
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map(({ id, name, message, avatar }) => (
            <div
              key={id}
              className="card bg-base-100 rounded-lg p-6 shadow-neon hover:shadow-pink-600 transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={avatar}
                  alt={name}
                  loading="lazy"
                  className="w-14 h-14 rounded-full border-2 border-pink-400 shadow-neon"
                />
                <h3 className="text-lg font-semibold text-pink-400 neon-text">
                  {name}
                </h3>
              </div>
              <p className="text-base-content/90 leading-relaxed italic">
                “{message}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;