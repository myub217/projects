import React from "react";
import { CheckCircle, Star, Shield, Bolt, Users, Clock } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    id: 1,
    title: "รอฟังข่าวดี",
    desc: "Coming soon",
    Icon: CheckCircle,
  },
  {
    id: 2,
    title: "รอฟังข่าวดี",
    desc: "Coming soon",
    Icon: Star,
  },
  {
    id: 3,
    title: "รอฟังข่าวดี",
    desc: "Coming soon",
    Icon: Shield,
  },
  {
    id: 4,
    title: "รอฟังข่าวดี",
    desc: "Coming soon",
    Icon: Bolt,
  },
  {
    id: 5,
    title: "รอฟังข่าวดี",
    desc: "Coming soon",
    Icon: Users,
  },
  {
    id: 6,
    title: "รอฟังข่าวดี",
    desc: "Coming soon",
    Icon: Clock,
  },
];

const FeatureItem: React.FC<{
  id: number;
  title: string;
  desc: string;
  Icon: React.ElementType;
}> = ({ id, title, desc, Icon }) => {
  const handleDetailsClick = () => {
    alert(`รายละเอียดของฟีเจอร์: ${title}`);
  };

  return (
    <motion.li
      key={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="bg-base-100 text-base-content shadow-md rounded-xl p-6 hover:shadow-lg
                 dark:bg-base-300 dark:text-base-content cursor-pointer"
      tabIndex={0}
      aria-labelledby={`feature-${id}-title feature-${id}-desc`}
      role="listitem"
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          handleDetailsClick();
        }
      }}
    >
      <div className="flex items-center mb-3 group">
        <Icon className="w-6 h-6 text-secondary mr-2 group-hover:text-primary transition-colors" />
        <h3
          id={`feature-${id}-title`}
          className="text-lg font-semibold text-secondary group-hover:text-primary transition-colors"
        >
          {title}
        </h3>
      </div>
      <p id={`feature-${id}-desc`} className="opacity-80 dark:opacity-90">
        {desc}
      </p>
      <button
        onClick={handleDetailsClick}
        className="mt-4 text-sm text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary rounded"
        type="button"
      >
        รายละเอียด
      </button>
    </motion.li>
  );
};

const Features: React.FC = () => {
  return (
    <section
      className="py-16 bg-base-200 text-base-content"
      aria-labelledby="features-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white"
          >
            รอฟังข่าวดี
          </h2>
          <p className="mt-3 text-base-content/70 dark:text-base-content/50">
            Coming soon
          </p>
        </div>

        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left text-sm"
          role="list"
        >
          {features.map(({ id, title, desc, Icon }) => (
            <FeatureItem key={id} id={id} title={title} desc={desc} Icon={Icon} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Features;