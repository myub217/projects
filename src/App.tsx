import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

const services = [
  "บริการยื่นกู้",
  "บริการวีซ่า",
  "แปลและรับรองเอกสาร",
  "ที่ปรึกษาด้านการเงิน",
  "ออกแบบโปรไฟล์สมัครงาน",
  "ระบบหลังบ้านธุรกิจ",
  "ออกแบบโลโก้และแบรนด์",
  "ระบบการตลาดออนไลน์",
];

const Header = ({
  darkMode,
  toggleDarkMode,
}: {
  darkMode: boolean;
  toggleDarkMode: () => void;
}) => (
  <header className="flex items-center justify-between p-4 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
    <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
      Applicationlubmobile
    </h1>
    <button
      onClick={toggleDarkMode}
      className="p-2 rounded-full bg-blue-100 dark:bg-blue-700 hover:bg-blue-200 dark:hover:bg-blue-600 text-blue-800 dark:text-white transition-colors"
      aria-label="Toggle dark mode"
    >
      {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  </header>
);

const Welcome = () => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="p-8 text-center"
  >
    <h2 className="text-3xl font-semibold mb-4 text-blue-700 dark:text-blue-300">
      ยินดีต้อนรับ
    </h2>
    <p className="max-w-xl mx-auto text-slate-700 dark:text-slate-300">
      เราคือผู้ช่วยมืออาชีพด้านเอกสาร วีซ่า การเงิน และโปรไฟล์ ที่คุณวางใจได้
    </p>
    <div className="mt-6">
      <a
        href="https://line.me/ti/p/@applicationlub"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition"
      >
        ติดต่อเราผ่าน LINE
      </a>
    </div>
  </motion.section>
);

const ServiceCard = ({ title }: { title: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="rounded-2xl p-6 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow hover:shadow-lg transition"
  >
    <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-2">
      {title}
    </h3>
    <p className="text-sm text-slate-600 dark:text-slate-300">
      บริการนี้จะช่วยให้คุณประสบความสำเร็จในเป้าหมายที่คุณต้องการ
    </p>
  </motion.div>
);

const Footer = () => (
  <footer className="p-6 text-center text-sm text-slate-500 dark:text-slate-400 border-t border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800">
    <p>© 2025 Applicationlubmobile. All rights reserved.</p>
  </footer>
);

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <>
      <Helmet>
        <title>Applicationlubmobile</title>
        <meta
          name="description"
          content="บริการยื่นกู้ วีซ่า เอกสาร โปรไฟล์ และระบบหลังบ้านครบวงจร"
        />
        <meta property="og:title" content="Applicationlubmobile" />
        <meta
          property="og:description"
          content="เราช่วยให้คุณสำเร็จในเอกสารและระบบทุกด้าน"
        />
        <meta property="og:image" content="/og-image.png" />
        <meta name="theme-color" content={darkMode ? "#0f172a" : "#f8fafc"} />
      </Helmet>

      <main className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-200 transition-colors duration-300">
        <Header darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
        <Welcome />
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 p-6 max-w-6xl mx-auto">
          {services.map((service) => (
            <ServiceCard key={service} title={service} />
          ))}
        </section>
        <Footer />
      </main>
    </>
  );
}

export default App;