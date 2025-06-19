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

const useSystemTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const applyTheme = useCallback((newTheme: "light" | "dark") => {
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    setTheme(newTheme);
  }, []);

  useEffect(() => {
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

    mediaQuery.addEventListener?.("change", onMediaChange);

    return () => mediaQuery.removeEventListener?.("change", onMediaChange);
  }, [applyTheme]);

  const toggle = useCallback(() => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      document.documentElement.classList.toggle("dark", next === "dark");
      return next;
    });
  }, []);

  return { theme, toggle };
};

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
    if (this.state.hasError) {
      return (
        <section
          role="alert"
          aria-live="assertive"
          className="p-6 bg-red-100 text-red-700 rounded max-w-xl mx-auto my-8 text-center"
        >
          <p className="mb-4 font-semibold text-lg">
            เกิดข้อผิดพลาดในการโหลดเนื้อหา กรุณาลองใหม่อีกครั้ง
          </p>
          <button
            onClick={this.handleRetry}
            className="inline-block px-5 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400"
          >
            ลองใหม่
          </button>
        </section>
      );
    }
    return this.props.children;
  }
}

const App: React.FC = memo(() => {
  const { theme, toggle } = useSystemTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const mainContentRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const [loadReviews, setLoadReviews] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");
  const reviewsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";
    document.body.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menuOpen) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const handleSkipToContent = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      mainContentRef.current?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        mainContentRef.current?.focus();
      }, 300);
    },
    []
  );

  useEffect(() => {
    if (!reviewsRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          startTransition(() => setLoadReviews(true));
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    observer.observe(reviewsRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <HelmetProvider>
      <>
        <Helmet>
          <html lang="th" dir="ltr" />
          <title>JP Visual & Docs | บริการออกแบบและเอกสารครบวงจร</title>
          <meta name="description" content="บริการออกแบบและเอกสารครบวงจร JP Visual & Docs" />
          <meta name="keywords" content="ออกแบบเว็บไซต์, เอกสาร, รีวิว, บริการ, JP Visual & Docs" />
          <meta name="author" content="JP Visual & Docs" />
          <meta name="theme-color" content={theme === "dark" ? "#0f172a" : "#ffffff"} />
          <meta property="og:title" content="JP Visual & Docs" />
          <meta property="og:description" content="รับออกแบบเว็บไซต์ เอกสาร และแบรนด์ครบวงจร" />
          <meta property="og:image" content={`${currentUrl}assets/images/repository-open-graph-template.png`} />
          <meta property="og:url" content={currentUrl || "https://jpvisualdocs.com"} />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@jpvisualdocs" />
          <link rel="canonical" href={currentUrl || "https://jpvisualdocs.com"} />
          <link rel="icon" href="/favicon.ico" />
          <style>{`html { scroll-behavior: smooth; }`}</style>
        </Helmet>

        <noscript>
          <div className="bg-yellow-100 text-yellow-800 p-4 text-center text-sm">
            กรุณาเปิดใช้งาน JavaScript เพื่อใช้งานเว็บไซต์อย่างสมบูรณ์
          </div>
        </noscript>

        <a
          href="#main-content"
          onClick={handleSkipToContent}
          className="sr-only focus-visible:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 p-2 bg-pink-600 text-white rounded"
        >
          ข้ามไปยังเนื้อหาหลัก
        </a>

        <Header
          theme={theme}
          toggleTheme={toggle}
          onOpenMenu={() => setMenuOpen(true)}
          isMobileMenuOpen={menuOpen}
          menuButtonRef={menuButtonRef}
          navLinks={navLinks}
        />

        <MobileMenu
          isOpen={menuOpen}
          onClose={() => setMenuOpen(false)}
          links={navLinks}
          onLinkClick={() => setMenuOpen(false)}
        />

        <main
          ref={mainContentRef}
          role="main"
          id="main-content"
          tabIndex={-1}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          <Hero />

          <section id="about" className="my-16" aria-labelledby="about-title">
            <h2 id="about-title" className="text-2xl font-bold mb-4">เกี่ยวกับเรา</h2>
            <About />
          </section>

          <section id="services" className="my-16" aria-labelledby="services-title">
            <h2 id="services-title" className="text-2xl font-bold mb-4">บริการของเรา</h2>
            <ServicesSection />
          </section>

          <section id="portfolio" className="my-16" aria-labelledby="portfolio-title">
            <h2 id="portfolio-title" className="text-2xl font-bold mb-4">ผลงานที่ผ่านมา</h2>
            <PortfolioSection />
          </section>

          <section id="reviews" ref={reviewsRef} className="my-16" aria-labelledby="reviews-title">
            <h2 id="reviews-title" className="text-2xl font-bold mb-4">เสียงตอบรับจากลูกค้า</h2>
            <ErrorBoundary>
              <Suspense fallback={<SkeletonSection title="รีวิว" />}>
                {loadReviews ? <ReviewsSectionLazy /> : <SkeletonSection title="รีวิว" />}
              </Suspense>
            </ErrorBoundary>
          </section>

          <section id="contact" className="my-16" aria-labelledby="contact-title">
            <h2 id="contact-title" className="text-2xl font-bold mb-4">ติดต่อเรา</h2>
            <JoinButtons />
          </section>
        </main>

        <Footer />
        <ScrollToTop />
      </>
    </HelmetProvider>
  );
});

export default App;