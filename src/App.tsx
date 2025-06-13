import React, { useLayoutEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import ReviewsSection from "./components/ReviewsSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import ThemeToggle from "./components/ThemeToggle";
import { motion } from "framer-motion";
import { FaFacebookSquare, FaLine } from "react-icons/fa"; // ✅ ใช้ react-icons

const GA_MEASUREMENT_ID = "G-XXXXXXXXXX"; // ✅ ใส่รหัสจริงของคุณ

function useGoogleAnalytics() {
  React.useEffect(() => {
    if ((window as any).gtag) return;

    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    `;
    document.head.appendChild(script2);
  }, []);
}

const ContactForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("กรุณากรอกทุกช่องให้ครบถ้วน");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("กรุณากรอกอีเมลให้ถูกต้อง");
      return;
    }

    console.log({ name, email, message });
    setSuccess(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-gray-100 dark:bg-gray-700 p-6 rounded-lg shadow-md"
      aria-label="ฟอร์มติดต่อเรา"
    >
      <h3 className="text-xl font-semibold mb-4 text-center text-gray-900 dark:text-gray-100">
        ส่งข้อความถึงเรา
      </h3>
      {error && <p className="text-red-600 mb-2">{error}</p>}
      {success && <p className="text-green-600 mb-2">ส่งข้อความสำเร็จ ขอบคุณครับ!</p>}
      <label className="block mb-2 text-gray-700 dark:text-gray-200">
        ชื่อ
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full mt-1 p-2 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </label>
      <label className="block mb-2 text-gray-700 dark:text-gray-200">
        อีเมล
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-1 p-2 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </label>
      <label className="block mb-4 text-gray-700 dark:text-gray-200">
        ข้อความ
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="w-full mt-1 p-2 rounded border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
      </label>
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition"
      >
        ส่งข้อความ
      </button>
    </form>
  );
};

const SocialShare: React.FC = () => {
  const shareUrl =
    typeof window !== "undefined"
      ? encodeURIComponent(window.location.href)
      : encodeURIComponent("https://yourdomain.com");
  const shareText = encodeURIComponent("บริการยื่นกู้ วีซ่า เอกสาร JP Visual & Docs");

  return (
    <div className="flex justify-center space-x-6 my-6">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareText}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="แชร์บน Facebook"
        className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 text-lg"
      >
        <FaFacebookSquare />
        <span>Facebook</span>
      </a>

      <a
        href={`https://social-plugins.line.me/lineit/share?url=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="แชร์บน LINE"
        className="flex items-center space-x-2 text-green-500 hover:text-green-700 text-lg"
      >
        <FaLine />
        <span>LINE</span>
      </a>
    </div>
  );
};

const App: React.FC = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useGoogleAnalytics();

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme ?? (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 scroll-smooth min-h-screen flex flex-col">
      <Helmet>
        <title>JP Visual & Docs | บริการยื่นกู้ วีซ่า เอกสาร</title>
        <meta
          name="description"
          content="บริการครบวงจร ยื่นกู้ วีซ่า เอกสาร โปรไฟล์ พร้อมความลับที่ปลอดภัย มืออาชีพจริงใจ"
        />
        <meta property="og:title" content="JP Visual & Docs" />
        <meta property="og:description" content="ยื่นกู้ วีซ่า เอกสาร – อย่างมืออาชีพ และปลอดภัย" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta name="theme-color" content={theme === "dark" ? "#111827" : "#ffffff"} />
      </Helmet>

      <Header />

      <main role="main" className="flex-grow">
        <Hero />

        <section id="about" className="bg-gray-50 dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <About />
        </section>

        <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <ServicesSection />
        </section>

        <section id="portfolio" className="bg-gray-50 dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <PortfolioSection />
        </section>

        <section id="reviews" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <ReviewsSection />
        </section>

        <section id="contact-form" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <ContactForm />
          </motion.div>
        </section>

        <SocialShare />

        <section className="bg-gray-50 dark:bg-gray-800 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <p className="text-center text-lg text-gray-500">👀 ห้องลับจะมาเร็ว ๆ นี้...</p>
        </section>
      </main>

      <Footer />

      <div className="fixed bottom-4 right-4 z-50">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      </div>

      <ScrollToTop lineUrl="https://line.me/ti/p/@462FQTFC" />
    </div>
  );
};

export default App;