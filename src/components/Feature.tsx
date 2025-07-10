import React from "react";
import { motion } from "framer-motion";

// โหลดคอมโพเนนต์จาก ./Features แบบ eager
const featureModules = import.meta.glob("./Features/Feature*.tsx", { eager: true });

const features = Object.entries(featureModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, mod]: any) => mod?.default)
  .filter((comp) => typeof comp === "function");

const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const hoverFocusEffect = {
  scale: 1.05,
  boxShadow: "0 15px 25px rgba(0, 0, 0, 0.15)",
};

const Feature: React.FC = () => {
  return (
    <section
      className="py-16 bg-base-200 dark:bg-base-300 text-base-content transition-colors duration-300"
      aria-labelledby="features-section-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            id="features-section-heading"
            className="text-3xl sm:text-4xl font-bold text-base-content"
          >
            รอฟังข่าวดี
          </h2>
          <p className="mt-3 text-base-content opacity-70 dark:opacity-60">
            Coming soon
          </p>
        </motion.div>

        {/* Feature Grid */}
        {features.length > 0 ? (
          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left text-sm"
            role="list"
            variants={listVariants}
            initial="hidden"
            animate="visible"
          >
            {features.map((Component: React.FC, index: number) => (
              <motion.li
                key={index}
                variants={itemVariants}
                whileHover={hoverFocusEffect}
                whileFocus={hoverFocusEffect}
                tabIndex={0}
                role="listitem"
                aria-label={`ฟีเจอร์ที่ ${index + 1}`}
                className="focus-within:ring-2 focus-within:ring-primary rounded-xl p-6 cursor-pointer
                  bg-base-100 text-base-content dark:bg-base-200 dark:text-base-content shadow-md dark:shadow-lg"
                style={{
                  transition: "background-color 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <Component />
              </motion.li>
            ))}
          </motion.ul>
        ) : (
          <div className="text-center text-base-content/60 dark:text-base-content/40">
            ไม่มีฟีเจอร์ให้แสดงในขณะนี้
          </div>
        )}
      </div>
    </section>
  );
};

export default Feature;