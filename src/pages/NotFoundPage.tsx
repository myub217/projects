import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImage from '@assets/404.svg'; // ✅ default export URL

const NotFoundPage: React.FC = () => {
  return (
    <main
      role="main"
      aria-label="ไม่พบหน้าที่คุณค้นหา"
      className="flex min-h-screen flex-col items-center justify-center bg-base-100 px-6 py-16 text-base-content transition-colors duration-300 dark:bg-gray-900"
    >
      <img
        src={NotFoundImage}
        alt="404 Not Found"
        className="mb-8 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
      />

      <h1
        className="text-3xl font-bold text-primary sm:text-4xl"
        tabIndex={0}
        aria-label="ไม่พบหน้านี้"
      >
        ไม่พบหน้านี้ (404)
      </h1>

      <p className="mt-4 text-center text-base text-muted sm:text-lg">
        ขอโทษด้วย เราไม่พบหน้าที่คุณพยายามเข้าถึง
      </p>

      <Link
        to="/"
        className="mt-6 inline-block rounded-xl bg-primary px-6 py-3 text-base font-semibold text-white shadow-lg transition duration-200 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
        aria-label="กลับหน้าหลัก"
      >
        กลับหน้าหลัก
      </Link>
    </main>
  );
};

export default NotFoundPage;
