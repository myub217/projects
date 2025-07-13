import React, { useState, useEffect } from "react"; import { Facebook, Instagram, MessageCircleMore, ArrowUp, } from "lucide-react"; import { FaTiktok } from "react-icons/fa"; import jpLogo from "../assets/jp-logo.png";

interface MenuItem { href: string; label: string; }

interface SocialLink { href: string; label: string; Icon: React.ComponentType< React.SVGProps<SVGSVGElement> | React.HTMLAttributes<SVGElement>

> ; ariaLabel: string; external?: boolean; nofollow?: boolean; }



const Footer: React.FC = () => { const currentYear: number = new Date().getFullYear(); const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

useEffect(() => { const onScroll = () => setShowScrollTop(window.scrollY > 300); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);

const scrollToTop = () => { if ("scrollBehavior" in document.documentElement.style) { window.scrollTo({ top: 0, behavior: "smooth" }); } else { window.scrollTo(0, 0); } };

const menuItems: MenuItem[] = [ { href: "#services", label: "บริการของเรา" }, { href: "#about", label: "เกี่ยวกับเรา" }, { href: "#contact", label: "ติดต่อเรา" }, { href: "/privacy-policy", label: "นโยบายความเป็นส่วนตัว" }, ];

const socialLinks: SocialLink[] = [ { href: "https://lin.ee/BSkkcTR", label: "@462FQTFC", Icon: MessageCircleMore, ariaLabel: "ติดต่อผ่าน LINE Official Account @462FQTFC", external: true, nofollow: true, }, { href: "https://www.instagram.com/joapa", label: "@joapa", Icon: Instagram, ariaLabel: "Instagram @joapa", external: true, nofollow: true, }, { href: "https://www.tiktok.com/@mynameisjoapa", label: "@mynameisjoapa", Icon: FaTiktok, ariaLabel: "TikTok @mynameisjoapa", external: true, nofollow: true, }, { href: "https://facebook.com/JPVisualDocs", label: "JP Visual & Docs", Icon: Facebook, ariaLabel: "Facebook JP Visual & Docs", external: true, nofollow: true, }, ];

return ( <> <footer
id="footer"
role="contentinfo"
lang="th"
itemScope
itemType="https://schema.org/Organization"
className="relative w-full bg-gradient-to-tr from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-200 border-t border-gray-300 dark:border-gray-700 px-6 py-12 sm:px-12 md:px-16 select-none"
> <meta itemProp="url" content="https://jpvisualdocs.com" />

<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16">
      <section
        aria-label="ข้อมูลบริษัท"
        className="flex flex-col items-center md:items-start text-center md:text-left space-y-3"
        itemProp="publisher"
        itemScope
        itemType="https://schema.org/Organization"
      >
        <img
          src={jpLogo}
          alt="โลโก้ JP Visual & Docs"
          loading="lazy"
          className="w-28 h-auto rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
          itemProp="logo"
          draggable={false}
          onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = "none")}
          tabIndex={-1}
        />
        <h2 className="text-xl font-extrabold tracking-tight" itemProp="name">
          JP Visual & Docs
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs" itemProp="description">
          พัฒนาโดย <strong>Applicationlab</strong>
          <br />
          ผู้เชี่ยวชาญด้านเอกสารและโซลูชันดิจิทัล
        </p>
      </section>

      <nav aria-label="เมนูเว็บไซต์" className="text-center md:text-left text-sm space-y-3">
        <h3 className="text-lg font-semibold mb-4 tracking-wide text-gray-700 dark:text-gray-300">
          เมนู
        </h3>
        <ul role="list" className="space-y-2 max-w-xs mx-auto md:mx-0" tabIndex={-1}>
          {menuItems.map(({ href, label }) => {
            const isExternal = href.startsWith("http");
            return (
              <li key={href}>
                <a
                  href={href}
                  className="block rounded-md px-3 py-2 hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  title={label}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      <section aria-label="ช่องทางติดต่อและโซเชียลมีเดีย" className="text-center md:text-left text-sm space-y-3">
        <h3 className="text-lg font-semibold mb-4 tracking-wide text-gray-700 dark:text-gray-300">
          ติดต่อ
        </h3>
        <ul role="list" className="space-y-3 max-w-xs mx-auto md:mx-0" tabIndex={-1}>
          {socialLinks.map(({ href, label, Icon, ariaLabel, external, nofollow }) => (
            <li key={href}>
              <a
                href={href}
                itemProp="sameAs"
                target={external ? "_blank" : undefined}
                rel={
                  external
                    ? ["noopener", "noreferrer", nofollow && "nofollow"].filter(Boolean).join(" ")
                    : undefined
                }
                className="inline-flex items-center gap-3 rounded-lg px-3 py-2 hover:bg-primary hover:text-white dark:hover:bg-primary transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                aria-label={ariaLabel}
                title={ariaLabel}
              >
                <Icon className="w-6 h-6 flex-shrink-0" aria-hidden="true" focusable={false} />
                <span className="truncate max-w-[9rem]">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col items-center md:items-end text-center md:text-right text-sm justify-between space-y-6">
        <div className="select-text">
          <p className="font-semibold tracking-wide">© {currentYear} Applicationlab</p>
          <p className="text-gray-500 dark:text-gray-400 tracking-wide">All rights reserved.</p>
        </div>
        <button
          onClick={scrollToTop}
          aria-label="กลับขึ้นด้านบน"
          title="กลับขึ้นด้านบน"
          type="button"
          className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-lg bg-white dark:bg-gray-800 px-3 py-2 shadow-lg text-primary font-semibold text-sm hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-transform duration-300 ${
            showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"
          }`}
        >
          <ArrowUp className="w-5 h-5" aria-hidden="true" focusable={false} />
          กลับด้านบน
        </button>
      </section>
    </div>
  </footer>

  <style jsx>{`
    @media (prefers-reduced-motion: reduce) {
      button,
      a {
        transition: none !important;
        animation: none !important;
      }
    }
  `}</style>
</>

); };

export default Footer;