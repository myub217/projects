import React, { ReactNode, useEffect, useState } from "react";

import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // สถานะธีม (light / dark)
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // สลับธีมระหว่าง light กับ dark
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  // ซิงค์ class dark บน <html> ตาม theme state
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div
      className={`flex flex-col min-h-screen transition-colors duration-300 bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100`}
    >
      {/* Header รับ theme และ toggleTheme เป็น props */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* เนื้อหาหลัก กินพื้นที่ที่เหลือ */}
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </main>

      {/* Footer ติดล่างเสมอด้วย flex layout */}
      <Footer />
    </div>
  );
};

export default Layout;