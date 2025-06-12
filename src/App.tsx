import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import ReviewsSection from "./components/ReviewsSection";
import JoinButtons from "./components/JoinButtons";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LineButton from "./components/LineButton";
import { AppConfig } from "./Config/Config";

type Theme = "light" | "dark";

const useTheme = (defaultTheme: Theme = "light") => {
  const [theme, setTheme] = React.useState<Theme>(defaultTheme);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    if (typeof window === "undefined") return;

    const html = document.documentElement;
    const savedTheme = localStorage.getItem("theme") as Theme | null;

    const applyTheme = (t: Theme) => {
      html.classList.toggle("dark", t === "dark");
      setTheme(t);
    };

    if (savedTheme === "light" || savedTheme === "dark") {
      applyTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      applyTheme(prefersDark ? "dark" : "light");
    }

    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "light" ? "dark" : "light";
      localStorage.setItem("theme", next);
      document.documentElement.classList.toggle("dark", next === "dark");
      return next;
    });
  };

  return { theme, toggleTheme, mounted };
};

const App: React.FC = () => {
  const { theme, toggleTheme, mounted } = useTheme(AppConfig.defaultTheme);

  if (!mounted) {
    // ป้องกัน flash effect ขณะโหลด theme
    return null;
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 ease-in-out relative">
      {/* ส่วนหัว */}
      <Header theme={theme} toggleTheme={toggleTheme} />

      {/* เนื้อหาหลัก */}
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <ReviewsSection />
        <JoinButtons />
      </main>

      {/* ส่วนท้าย */}
      <Footer />

      {/* ปุ่ม Scroll To Top */}
      <ScrollToTop theme={theme} />

      {/* ปุ่มติดต่อ LINE */}
      <LineButton lineUrl="https://line.me/R/ti/p/@yourlineid" />
    </div>
  );
};

export default App;