import React, { useLayoutEffect, useState } from "react";
import Header from "./components/Header"; // เปลี่ยนจาก Navbar เป็น Header
import Hero from "./components/Hero";
import About from "./components/About";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import ReviewsSection from "./components/ReviewsSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ThemeToggle from "./components/ThemeToggle";

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // ตรวจสอบและตั้งค่า theme ตอนโหลดแอปครั้งแรก
  useLayoutEffect(() => {
    try {
      const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = savedTheme ?? (prefersDark ? "dark" : "light");

      setTheme(initialTheme);
      document.documentElement.classList.toggle("dark", initialTheme === "dark");
    } catch (e) {
      console.warn("Theme detection failed:", e);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 scroll-smooth min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <Hero />

        <section id="about" className="py-16 px-4 max-w-7xl mx-auto">
          <About />
        </section>

        {/* ServicesSection มี id="services" อยู่ในตัว component แล้ว จึงไม่ต้องใส่ id ซ้ำที่นี่ */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <ServicesSection />
        </section>

        <section id="portfolio" className="py-16 px-4 max-w-7xl mx-auto">
          <PortfolioSection />
        </section>

        <section id="reviews" className="py-16 px-4 max-w-7xl mx-auto">
          <ReviewsSection />
        </section>

        <section id="secret-room" className="py-16 px-4 max-w-7xl mx-auto">
          <p className="text-center text-lg text-gray-500">👀 ห้องลับจะมาเร็ว ๆ นี้...</p>
        </section>

        <section
          id="contact"
          className="py-16 px-4 max-w-7xl mx-auto text-center"
          aria-label="ข้อมูลการติดต่อ"
        >
          <h2 className="text-2xl font-bold mb-4">ติดต่อเรา</h2>
          <p>
            แอด LINE:{" "}
            <a
              href="https://line.me/ti/p/@462FQTFC"
              className="text-green-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              @462FQTFC
            </a>
          </p>
          <p>
            Facebook:{" "}
            <a
              href="https://facebook.com/yourpage"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              JP Visual & Docs
            </a>
          </p>
        </section>
      </main>

      <Footer />

      {/* Theme Toggle ปุ่มเปลี่ยนธีมสี */}
      <div className="fixed bottom-4 right-4 z-50">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>

      {/* Scroll To Top ปุ่มเลื่อนขึ้นบน + Shortcut ไป LINE */}
      <ScrollToTop lineUrl="https://line.me/ti/p/@462FQTFC" />
    </div>
  );
};

export default App;