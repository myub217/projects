import React, {
  useEffect,
  useState,
  Suspense,
  lazy,
  useRef,
  MouseEvent,
  KeyboardEvent as ReactKeyboardEvent,
} from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

// Layout & Components
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import ServicesSection from "./components/ServicesSection";
import PortfolioSection from "./components/PortfolioSection";
import JoinButtons from "./components/JoinButtons";
import ScrollToTop from "./components/ScrollToTop";
import MobileMenu from "./components/MobileMenu";
import SkeletonSection from "./components/skeleton/SkeletonSection"; // Fallback UI for lazy

const ReviewsSection = lazy(() => import("./components/ReviewsSection"));

type NavLink = {
  label: string;
  href: string;
  highlight?: boolean;
};
const navLinks: NavLink[] = [
  { label: "เกี่ยวกับเรา", href: "#about" },
  { label: "บริการ", href: "#services" },
  { label: "ผลงาน", href: "#portfolio" },
  { label: "รีวิว", href: "#reviews" },
  { label: "ติดต่อเรา", href: "#contact", highlight: true },
];

/**
 * Custom hook to manage theme with system preference & localStorage.
 * Returns current theme and toggle function.
 */
const useSystemTheme = () => {
  // theme: undefined means loading/initial state
  const [theme, setTheme] = useState<"light" | "dark" | undefined>(undefined);

  // Apply theme to document and state
  const applyTheme = (newTheme: "light" | "dark") => {
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setTheme(newTheme);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedTheme = localStorage.getItem("theme") as
      | "light"
      | "dark"
      | null;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    if (storedTheme === "light" || storedTheme === "dark") {
      applyTheme(storedTheme);
    } else {
      applyTheme(mediaQuery.matches ? "dark" : "light");
    }

    // Listener for system theme changes (only if no local override)
    const onMediaChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        applyTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", onMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", onMediaChange);
    };
  }, []);

  // Toggle theme and persist
  const toggle = () => {
    setTheme((prevTheme) => {
      if (!prevTheme) return "light"; // fallback default
      const nextTheme = prevTheme === "light" ? "dark" : "light";
      localStorage.setItem("theme", nextTheme);
      document.documentElement.classList.toggle("dark", nextTheme === "dark");
      return nextTheme;
    });
  };

  return { theme, toggle };
};

const App: React.FC = () => {
  const { theme, toggle } = useSystemTheme();

  const [menuOpen, setMenuOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const mainContentRef = useRef<HTMLElement>(null);

  // Capture current URL for SEO OG tags
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  // Lock scroll when mobile menu open to prevent background scroll
  useEffect(() => {
    if (menuOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [menuOpen]);

  // Close mobile menu on Escape key press (Accessibility)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Skip to main content (focus) for keyboard users
  const handleSkipToContent = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    mainContentRef.current?.focus();
  };

  // Preload ReviewsSection lazily after 2 seconds
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      import("./components/ReviewsSection");
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, []);

  // Show loading screen while theme initializing
  if (!theme) {
    return (
      <div
        role="alert"
        aria-busy="true"
        aria-live="polite"
        className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950"
      >
        <p className="text-gray-500 dark:text-gray-400 select-none">กำลังโหลด...</p>
      </div>
    );
  }

  return (
    <HelmetProvider>
      <div
        className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300"
        data-focus-visible-added=""
      >
        {/* SEO & Meta */}
        <Helmet>
          <html lang="th" />
          <title>JP Visual & Docs | บริการออกแบบและเอกสารครบวงจร</title>
          <meta
            name="description"
            content="บริการออกแบบและเอกสารครบวงจร JP Visual & Docs"
          />
          <meta
            name="keywords"
            content="ออกแบบเว็บไซต์, เอกสาร, รีวิว, บริการ, JP Visual & Docs"
          />
          <meta name="author" content="JP Visual & Docs" />
          <meta name="theme-color" content={theme === "dark" ? "#0f172a" : "#ffffff"} />
          <meta property="og:title" content="JP Visual & Docs" />
          <meta
            property="og:description"
            content="รับออกแบบเว็บไซต์ เอกสาร และแบรนด์ครบวงจร"
          />
          <meta property="og:image" content="/assets/og-banner.png" />
          <meta property="og:url" content={currentUrl || "https://jpvisualdocs.com"} />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@jpvisualdocs" />
          <link rel="canonical" href={currentUrl || "https://jpvisualdocs.com"} />
          <style>{`html { scroll-behavior: smooth; }`}</style>
        </Helmet>

        {/* Skip to main content for keyboard users */}
        <a
          href="#main-content"
          onClick={handleSkipToContent}
          className="sr-only focus-visible:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 p-2 bg-pink-600 text-white rounded"
        >
          ข้ามไปยังเนื้อหาหลัก
        </a>

        {/* Header */}
        <Header
          theme={theme}
          toggleTheme={toggle}
          onOpenMenu={() => setMenuOpen(true)}
          aria-expanded={menuOpen}
        />

        {/* Mobile menu drawer */}
        <MobileMenu
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          links={navLinks}
          onLinkClick={() => setMenuOpen(false)}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
        />

        {/* Main content */}
        <main
          ref={mainContentRef}
          role="main"
          id="main-content"
          tabIndex={-1}
          aria-label="เนื้อหาหลัก"
          className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          <Hero />

          <section
            id="about"
            className="my-16"
            aria-labelledby="about-title"
            tabIndex={-1}
          >
            <h2 id="about-title" className="text-2xl font-bold mb-4">
              เกี่ยวกับเรา
            </h2>
            <About />
          </section>

          <section
            id="services"
            className="my-16"
            aria-labelledby="services-title"
            tabIndex={-1}
          >
            <h2 id="services-title" className="text-2xl font-bold mb-4">
              บริการของเรา
            </h2>
            <ServicesSection />
          </section>

          <section
            id="portfolio"
            className="my-16"
            aria-labelledby="portfolio-title"
            tabIndex={-1}
          >
            <h2 id="portfolio-title" className="text-2xl font-bold mb-4">
              ผลงานที่ผ่านมา
            </h2>
            <PortfolioSection />
          </section>

          <section
            id="reviews"
            className="my-16"
            aria-labelledby="reviews-title"
            tabIndex={-1}
          >
            <h2 id="reviews-title" className="text-2xl font-bold mb-4">
              เสียงตอบรับจากลูกค้า
            </h2>
            <Suspense fallback={<SkeletonSection title="รีวิว" />}>
              <ReviewsSection />
            </Suspense>
          </section>

          <section
            id="contact"
            className="my-16"
            aria-labelledby="contact-title"
            tabIndex={-1}
          >
            <h2 id="contact-title" className="text-2xl font-bold mb-4">
              ติดต่อเรา
            </h2>
            <JoinButtons />
          </section>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </HelmetProvider>
  );
};

export default App;