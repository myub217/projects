// src/components/JoinButtons.tsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebookMessenger, FaLine, FaCopy, FaCheckCircle } from "react-icons/fa";
import { QRCodeSVG } from "qrcode.react";

const lineURL = "https://lin.ee/1L4DoHO";
const lineID = "@462fqtfc";

const JoinButtons: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyLineID = () => {
    if (!navigator.clipboard) {
      // Fallback if clipboard API is not supported
      alert("ไม่สามารถคัดลอก LINE ID ได้ในเบราว์เซอร์นี้");
      return;
    }
    navigator.clipboard.writeText(lineID).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <motion.section
      className="text-center space-y-6 px-4 sm:px-0 py-12 max-w-3xl mx-auto"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      aria-labelledby="contact-title"
      role="region"
    >
      <h2
        id="contact-title"
        className="text-3xl font-extrabold text-primary dark:text-secondary"
      >
        ติดต่อเรา
      </h2>

      <p className="text-gray-800 dark:text-gray-200 max-w-xl mx-auto leading-relaxed">
        หากคุณสนใจบริการของเรา หรือต้องการพูดคุยเพิ่มเติม <br />
        <span className="font-medium text-gray-700 dark:text-gray-300">
          เราพร้อมให้คำแนะนำโดยไม่มีค่าใช้จ่ายเบื้องต้น
        </span>
      </p>

      {/* LINE ID + Copy */}
      <div className="flex items-center justify-center gap-3 mt-2">
        <span className="text-sm font-medium text-gray-700 dark:text-gray-400 select-text">
          LINE ID: {lineID}
        </span>
        <button
          onClick={handleCopyLineID}
          className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition"
          aria-label="คัดลอก LINE ID"
          type="button"
          disabled={copied}
        >
          {copied ? (
            <>
              <FaCheckCircle className="text-green-500" aria-hidden="true" />
              <span aria-live="polite" role="status" className="sr-only">
                คัดลอกแล้ว
              </span>
            </>
          ) : (
            <>
              <FaCopy aria-hidden="true" />
              <span>คัดลอก</span>
            </>
          )}
        </button>
      </div>

      {/* QR Code */}
      <div className="flex justify-center mt-4">
        <QRCodeSVG
          value={lineURL}
          size={192}
          bgColor="transparent"
          fgColor="#16a34a"
          level="M"
          className="rounded-lg shadow-lg border border-gray-300 dark:border-gray-700 p-2"
          aria-label="QR Code สำหรับเพิ่มเพื่อนใน LINE"
          title="QR Code LINE"
          role="img"
        />
      </div>

      {/* Contact Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-8">
        {/* Facebook */}
        <a
          href="https://www.facebook.com/profile.php?id=61573307616115&mibextid=kFxxJD"
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="ติดต่อผ่าน Facebook"
          title="ติดต่อผ่าน Facebook"
          className="btn btn-primary flex items-center gap-2 px-5 py-3 text-lg font-semibold transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/60 dark:focus:ring-secondary/70 rounded-lg"
        >
          <FaFacebookMessenger className="w-6 h-6" aria-hidden="true" />
          Facebook
        </a>

        {/* LINE */}
        <a
          href={lineURL}
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label="ติดต่อผ่าน LINE"
          title="ติดต่อผ่าน LINE"
          className="btn btn-accent flex items-center gap-2 px-5 py-3 text-lg font-semibold transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent/60 dark:focus:ring-accent/70 rounded-lg"
        >
          <FaLine className="w-6 h-6" aria-hidden="true" />
          LINE
        </a>
      </div>
    </motion.section>
  );
};

export default JoinButtons;