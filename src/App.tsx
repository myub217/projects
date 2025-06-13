import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ServicesSection from "./components/ServicesSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ThemeToggle from "./components/ThemeToggle";

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // โหลดธีมจาก localStorage หรือระบบ OS
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme ?? (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // ฟังก์ชัน toggle ธีม
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 scroll-smooth min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <section id="about" className="py-16 px-4 max-w-7xl mx-auto">
          <About />
        </section>
        <section id="services" className="py-16 px-4 max-w-7xl mx-auto">
          <ServicesSection />
        </section>
        <section id="contact" className="py-16 px-4 max-w-7xl mx-auto">
          <Footer />
        </section>
      </main>

      {/* ปุ่มสลับธีม */}
      <div className="fixed bottom-4 right-4 z-50">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>

<ScrollToTop lineUrl="https://line.me/ti/p/your_line_id" />/
    </div>
  );
};

export default App;