import React from "react";

const LINE_LINK = "https://line.me/ti/p/@462FQTFC";
const FACEBOOK_LINK = "https://www.facebook.com/yourpage";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-50">
      <div className="container mx-auto max-w-7xl px-6 py-4 flex flex-col md:flex-row items-center justify-between">
        {/* โลโก้ / ชื่อเว็บ */}
        <a href="#hero" className="text-2xl font-bold text-indigo-700 dark:text-indigo-400">
          JP Visual & Docs
        </a>

        {/* เมนูนำทาง */}
        <nav className="mt-3 md:mt-0">
          <ul className="flex flex-col md:flex-row gap-4 text-indigo-700 dark:text-indigo-300 font-medium">
            <li>
              <a href="#hero" className="hover:underline">
                หน้าแรก
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline">
                บริการ
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline">
                เกี่ยวกับเรา
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline">
                ติดต่อเรา
              </a>
            </li>
          </ul>
        </nav>
      </div>

      {/* ช่องทางติดต่อแบบข้อความใต้เมนู */}
      <div className="bg-indigo-50 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 text-center py-2 text-sm select-none">
        ติดต่อเราได้ที่ LINE ID:{" "}
        <a
          href={LINE_LINK}
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          @462FQTFC
        </a>
        {" "}หรือเยี่ยมชม Facebook Page:{" "}
        <a
          href={FACEBOOK_LINK}
          className="text-blue-600 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          JP Visual & Docs
        </a>
      </div>
    </header>
  );
}