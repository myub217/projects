import React from "react";
import { motion } from "framer-motion";
import { FaUserSecret } from "react-icons/fa";

const SecretRoom: React.FC = () => {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 p-6 text-center transition-colors duration-300"
      role="main"
      aria-label="พื้นที่ส่วนตัวสำหรับจัดการข้อมูลลับ"
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white dark:bg-gray-900 shadow-2xl rounded-2xl p-8 max-w-lg w-full"
      >
        <div className="flex flex-col items-center">
          <FaUserSecret className="text-5xl text-green-600 dark:text-green-400 mb-4" />

          <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            ยินดีต้อนรับสู่แอปลับ
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            นี่คือพื้นที่ส่วนตัวของคุณ สามารถจัดการข้อมูลหรือดูเนื้อหาลับได้ที่นี่
          </p>

          <a
            href="https://line.me/ti/p/@jpdocs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="ติดต่อเจ้าป่า ผ่าน LINE"
            className="inline-block px-6 py-3 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:scale-105"
          >
            ติดต่อเจ้าป่า
          </a>
        </div>
      </motion.div>
    </main>
  );
};

export default SecretRoom;