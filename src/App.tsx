// App.tsx
import React, {
  useEffect,
  useState,
  Suspense,
  lazy,
  useRef,
  MouseEvent,
  useCallback,
  startTransition,
  memo,
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
import SkeletonSection from "./components/skeleton/SkeletonSection";

const ReviewsSectionLazy = lazy(() => import("./components/ReviewsSection"));

const navLinks = [
  { label: "เกี่ยวกับเรา", href: "#about" },
  { label: "บริการ", href: "#services" },
  { label: "ผลงาน", href: "#portfolio" },
  { label: "รีวิว", href: "#reviews" },
  { label: "ติดต่อเรา", href: "#contact", highlight: true },
] as const;

type NavLink = typeof navLinks[number];

// Theme hook
const useSystemTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const applyTheme = useCallback((newTheme: "light" | "dark") => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setTheme(newTheme);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

      if (storedTheme) {
        applyTheme(storedTheme);
      } else {
        applyTheme(mediaQuery.matches ? "dark" : "light");
      }

      const onMediaChange = (e: MediaQueryListEvent) => {
        if (!localStorage.getItem("theme")) {
          applyTheme(e.matches ? "dark" : "light");
        }
      };

      mediaQuery.addEventListener("change", onMediaChange);
      return () => mediaQuery.removeEventListener("change", onMediaChange);
    } catch {
      applyTheme("light");
    }
  }, [applyTheme]);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      try {
        localStorage.setItem("theme", next);
      } catch {}
      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle("dark", next === "dark");
      }
      return next;
    });
  }, []);

  return { theme, toggle };
};

// ErrorBoundary
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): { hasError: boolean } {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info);
  }

  handleRetry = () => this.setState({ hasError: false });

  render() {
    return this.state.hasError ? (
      <div
        role="alert"
        className="p-4 bg-red-100 text-red-700 rounded max-w-xl mx-auto my-8"
      >
        <p>เกิดข้อผิดพลาดในการโหลดเนื้อหา กรุณาลองใหม่อีกครั้ง</p>
        <button
          onClick={this.handleRetry}
          className="mt-2 px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
        >
          ลองใหม่
        </button>
      </div>
    ) : (
      this.props.children
    );
  }
}

// App
const App: React.FC = memo(() => {
  const { theme, toggle } = useSystemTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const mainContentRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [loadReviews, setLoadReviews] = useState(false);

  // Set current URL
  useEffect(() => {
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, []);

  // Lock scroll when menu open
  useEffect(() => {
    if (menuOpen) {
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [menuOpen]);

  // Close on Esc
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  // Skip to main content
  const handleSkipToContent = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    mainContentRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!menuOpen) menuButtonRef.current?.focus();
  }, [menuOpen]);

  // Lazy load Reviews section
  useEffect(() => {
    const timeout = setTimeout(() => {
      startTransition(() => setLoadReviews(true));
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <html lang="th" dir="ltr" />
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
          <meta
            name="theme-color"
            content={theme === "dark" ? "#0f172a" : "#ffffff"}
          />
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
          <link rel="icon" href="/favicon.ico" />
          <style>{`html { scroll-behavior: smooth; }`}</style>
        </Helmet>

        <a
          href="#main-content"
          onClick={handleSkipToContent}
          className="sr-only focus-visible:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 p-2 bg-pink-600 text-white rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
          aria-label="ข้ามไปยังเนื้อหาหลัก"
        >
          ข้ามไปยังเนื้อหาหลัก
        </a>

        <Header
          theme={theme}
          toggleTheme={toggle}
          onOpenMenu={() => setMenuOpen(true)}
          aria-expanded={menuOpen}
          menuButtonRef={menuButtonRef}
        />

        <MobileMenu
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          links={navLinks}
          onLinkClick={() => setMenuOpen(false)}
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="เมนูนำทางมือถือ"
        />

        <main
          ref={mainContentRef}
          role="main"
          id="main-content"
          tabIndex={-1}
          aria-label="เนื้อหาหลัก"
          className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          <Hero />

          <section id="about" className="my-16" aria-labelledby="about-title" tabIndex={-1}>
            <h2
              id="about-title"
              className="text-2xl font-bold mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
            >
              เกี่ยวกับเรา
            </h2>
            <About />
          </section>

          <section id="services" className="my-16" aria-labelledby="services-title" tabIndex={-1}>
            <h2
              id="services-title"
              className="text-2xl font-bold mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
            >
              บริการของเรา
            </h2>
            <ServicesSection />
          </section>

          <section id="portfolio" className="my-16" aria-labelledby="portfolio-title" tabIndex={-1}>
            <h2
              id="portfolio-title"
              className="text-2xl font-bold mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
            >
              ผลงานที่ผ่านมา
            </h2>
            <PortfolioSection />
          </section>

          <section id="reviews" className="my-16" aria-labelledby="reviews-title" tabIndex={-1}>
            <h2
              id="reviews-title"
              className="text-2xl font-bold mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
            >
              เสียงตอบรับจากลูกค้า
            </h2>
            <ErrorBoundary>
              <Suspense fallback={<SkeletonSection title="รีวิว" />}>
                {loadReviews ? <ReviewsSectionLazy /> : <SkeletonSection title="รีวิว" />}
              </Suspense>
            </ErrorBoundary>
          </section>

          <section id="contact" className="my-16" aria-labelledby="contact-title" tabIndex={-1}>
            <h2
              id="contact-title"
              className="text-2xl font-bold mb-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-500"
            >
              ติดต่อเรา
            </h2>
            <JoinButtons />
          </section>
        </main>

        <Footer aria-label="ส่วนท้ายของเว็บไซต์" />
        <ScrollToTop />
      </>
    </HelmetProvider>
  );
});

export default App;