import React from "react";
import { motion } from "framer-motion";
import { FaFacebookMessenger, FaPhoneAlt, FaLine } from "react-icons/fa";

const JoinButtons: React.FC = () => {
  return (
    <motion.section
      className="text-center space-y-6 px-4 sm:px-0"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      aria-labelledby="contact-title"
    >
      <h2
        id="contact-title"
        className="text-3xl font-bold text-primary dark:text-secondary"
      >
        ติดต่อเรา
      </h2>
      <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
        หากคุณสนใจบริการของเรา หรือต้องการพูดคุยเพิ่มเติม เรายินดีให้คำแนะนำ!
      </p>

      <div className="flex flex-wrap justify-center gap-4 mt-4">
        <a
          href="https://m.me/yourpage"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ติดต่อผ่าน Facebook Messenger"
          className="btn btn-primary flex items-center gap-2 transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary dark:focus:ring-secondary"
        >
          <FaFacebookMessenger className="w-5 h-5" aria-hidden="true" />
          Messenger
        </a>
        <a
          href="tel:0891234567"
          aria-label="โทรหาเรา"
          className="btn btn-secondary flex items-center gap-2 transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-secondary dark:focus:ring-primary"
        >
          <FaPhoneAlt className="w-5 h-5" aria-hidden="true" />
          โทรหาเรา
        </a>
        <a
          href="https://line.me/ti/p/~yourlineid"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="ติดต่อผ่าน LINE"
          className="btn btn-accent flex items-center gap-2 transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent dark:focus:ring-accent-focus"
        >
          <FaLine className="w-5 h-5" aria-hidden="true" />
          LINE
        </a>
      </div>
    </motion.section>
  );
};

export default JoinButtons;