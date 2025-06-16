import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

const SecretRoom: React.FC = () => {
  return (
    <main
      role="main"
      aria-labelledby="secret-room-heading"
      className="min-h-screen bg-gradient-to-br from-purple-950 via-indigo-900 to-black text-white px-6 py-12 sm:px-12 sm:py-20"
    >
      {/* SEO & Meta */}
      <Helmet>
        <html lang="th" />
        <title>Secret Room - JP Visual & Docs</title>
        <link rel="canonical" href="https://jp-visual-docs.com/secret" />
        <meta
          name="description"
          content="ยินดีต้อนรับสู่ Secret Room ของ JP Visual & Docs — พื้นที่พิเศษสำหรับสมาชิกและผู้เยี่ยมชมที่ได้รับสิทธิ์"
        />
        <meta property="og:title" content="Secret Room - JP Visual & Docs" />
        <meta
          property="og:description"
          content="ยินดีต้อนรับสู่ Secret Room ของ JP Visual & Docs — พื้นที่พิเศษสำหรับสมาชิกและผู้เยี่ยมชมที่ได้รับสิทธิ์"
        />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/secret-room-og.png" />
        <meta name="theme-color" content="#7F3FBF" />
      </Helmet>

      {/* Heading Section */}
      <section className="text-center max-w-4xl mx-auto" aria-labelledby="secret-room-heading">
        <motion.h1
          id="secret-room-heading"
          className="text-4xl sm:text-5xl font-extrabold mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          ห้องลับ (Secret Room)
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          นี่คือพื้นที่พิเศษสำหรับสมาชิก JP Visual & Docs เท่านั้น
          คุณสามารถเข้าถึงข้อมูลและฟีเจอร์ที่พิเศษกว่าใคร
          <br className="hidden sm:block" />
          โปรดติดต่อทีมงานหากต้องการสิทธิ์เข้าถึง
        </motion.p>
      </section>

      {/* Divider */}
      <hr className="border-gray-700 my-10 mx-auto w-1/2" aria-hidden="true" />

      {/* CTA Button */}
      <section className="text-center">
        <motion.a
          href="#contact"
          role="button"
          aria-label="ติดต่อเราเพื่อขอสิทธิ์เข้าห้องลับ"
          className="btn btn-primary px-6 py-3 rounded-lg shadow-xl transition-transform
            focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-purple-500
            hover:scale-105 active:scale-95"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.7, ease: 'easeOut' }}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              e.currentTarget.click();
            }
          }}
        >
          ติดต่อเราเพื่อขอสิทธิ์
        </motion.a>
      </section>
    </main>
  );
};

export default SecretRoom;