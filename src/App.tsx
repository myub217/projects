import React, { useState, useEffect } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ReviewsSection from "./components/ReviewsSection";
import JoinButtons from "./components/JoinButtons";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

const App: React.FC = () => {
  // สถานะธีมในแอป
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // โหลดค่า theme จาก localStorage หรือระบบเมื่อเริ่มต้นแอป
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // เช็ค system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setTheme(prefersDark ? "dark" : "light");
      document.documentElement.classList.toggle("dark", prefersDark);
    }
  }, []);

  // ฟังก์ชันสลับธีม
  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      document.documentElement.classList.toggle("dark", newTheme === "dark");
      return newTheme;
    });
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content">
      <Header />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <ReviewsSection />
        <JoinButtons />
      </main>
      <Footer />
    </div>
  );
};

export default App;