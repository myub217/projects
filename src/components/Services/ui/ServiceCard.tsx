import React from "react";

interface ServiceCardProps {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  altText: string;
  available: boolean;
  comingSoonNote?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  price,
  image,
  altText,
  available,
  comingSoonNote,
}) => {
  return (
    <div
      className={`border rounded-lg p-6 shadow-md transition-transform hover:scale-[1.02] relative ${
        !available ? "opacity-60 cursor-not-allowed" : ""
      }`}
    >
      <img
        src={image}
        alt={altText}
        className="w-full h-40 object-cover rounded-md mb-4"
        loading="lazy"
      />

      {/* สถานะ */}
      {!available && comingSoonNote && (
        <div className="absolute top-4 right-4 bg-yellow-300 text-yellow-900 px-3 py-1 rounded font-semibold text-sm select-none">
          {comingSoonNote}
        </div>
      )}

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-2">{description}</p>
      <p className="font-semibold mb-4">{price}</p>

      {available ? (
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">
          สอบถามบริการ
        </button>
      ) : (
        <button
          disabled
          className="bg-gray-400 cursor-not-allowed text-white font-bold py-2 px-4 rounded w-full"
        >
          ไม่พร้อมใช้งาน
        </button>
      )}
    </div>
  );
};

export default ServiceCard;
