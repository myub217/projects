import React from "react";
import { motion } from "framer-motion";
import { FaFacebookMessenger, FaPhoneAlt, FaLine } from "react-icons/fa";

const JoinButtons: React.FC = () => {
  return (
    <motion.section
      className="text-center space-y-6 px-4 sm:px-0 py-12 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      aria-labelledby="contact-title"
    >
      <h2
        id="contact-title"
        className="text-3xl font-extrabold text-primary dark:text-secondary"
      >
        ติดต่อเรา
      </h2>
      <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto leading-relaxed">
        หากคุณสนใจบริการของเรา หรือต้องการพูดคุยเพิ่มเติม เรายินดีให้คำแนะนำ!
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        <a
          href="https://m.me/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ติดต่อผ่าน Facebook Messenger"
          className="btn btn-primary flex items-center gap-2 px-5 py-3 text-lg font-semibold transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/60 dark:focus:ring-secondary/70 rounded-lg"
        >
          <FaFacebookMessenger className="w-6 h-6" aria-hidden="true" />
          Messenger
        </a>
        <a
          href="tel:0891234567"
          aria-label="โทรหาเรา"
          className="btn btn-secondary flex items-center gap-2 px-5 py-3 text-lg font-semibold transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-secondary/60 dark:focus:ring-primary/70 rounded-lg"
        >
          <FaPhoneAlt className="w-6 h-6" aria-hidden="true" />
          โทรหาเรา
        </a>
        <a
          href="https://line.me/ti/p/~yourlineid"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ติดต่อผ่าน LINE"
          className="btn btn-accent flex items-center gap-2 px-5 py-3 text-lg font-semibold transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent/60 dark:focus:ring-accent-focus/70 rounded-lg"
        >
          <FaLine className="w-6 h-6" aria-hidden="true" />
          LINE
        </a>
      </div>
    </motion.section>
  );
};

export default JoinButtons;