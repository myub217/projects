import React, { useState, useEffect, useCallback } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ReviewsSection from "./components/ReviewsSection";
import JoinButtons from "./components/JoinButtons";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // อัพเดต class บน <html> ตามธีม
  const updateDocumentClass = useCallback((currentTheme: "light" | "dark") => {
    if (currentTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // โหลดธีมจาก localStorage หรือจาก prefers-color-scheme
  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;

      if (savedTheme) {
        setTheme(savedTheme);
        updateDocumentClass(savedTheme);
      } else {
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const defaultTheme = prefersDark ? "dark" : "light";
        setTheme(defaultTheme);
        updateDocumentClass(defaultTheme);
      }
    }
  }, [updateDocumentClass]);

  // ฟังก์ชันสลับธีม และเก็บใน localStorage
  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", newTheme);
      updateDocumentClass(newTheme);
      return newTheme;
    });
  }, [updateDocumentClass]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      {/* ส่ง theme และ toggleTheme ไปให้ Header */}
      <Header theme={theme} toggleTheme={toggleTheme} />

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