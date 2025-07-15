import React, { useState, useEffect } from 'react';
import { Facebook, Instagram, MessageCircleMore, ArrowUp } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import jpLogo from '../assets/jp-logo.png';

interface MenuItem {
  href: string;
  label: string;
}

interface SocialLink {
  href: string;
  label: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement> | React.HTMLAttributes<SVGElement>>;
  ariaLabel: string;
  external?: boolean;
  nofollow?: boolean;
}

const Footer: React.FC = () => {
  const currentYear: number = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo(0, 0);
    }
  };

  const menuItems: MenuItem[] = [
    { href: '#services', label: 'บริการของเรา' },
    { href: '#about', label: 'เกี่ยวกับเรา' },
    { href: '#contact', label: 'ติดต่อเรา' },
    { href: '/privacy-policy', label: 'นโยบายความเป็นส่วนตัว' },
  ];

  const socialLinks: SocialLink[] = [
    {
      href: 'https://lin.ee/BSkkcTR',
      label: '@462FQTFC',
      Icon: MessageCircleMore,
      ariaLabel: 'ติดต่อผ่าน LINE Official Account @462FQTFC',
      external: true,
      nofollow: true,
    },
    {
      href: 'https://www.instagram.com/joapa',
      label: '@joapa',
      Icon: Instagram,
      ariaLabel: 'Instagram @joapa',
      external: true,
      nofollow: true,
    },
    {
      href: 'https://www.tiktok.com/@mynameisjoapa',
      label: '@mynameisjoapa',
      Icon: FaTiktok,
      ariaLabel: 'TikTok @mynameisjoapa',
      external: true,
      nofollow: true,
    },
    {
      href: 'https://facebook.com/JPVisualDocs',
      label: 'JP Visual & Docs',
      Icon: Facebook,
      ariaLabel: 'Facebook JP Visual & Docs',
      external: true,
      nofollow: true,
    },
  ];

  return (
    <>
      <footer
        id="footer"
        role="contentinfo"
        lang="th"
        itemScope
        itemType="https://schema.org/Organization"
        className="relative w-full select-none border-t border-gray-300 bg-gradient-to-tr from-gray-50 to-gray-100 px-6 py-12 text-gray-800 dark:border-gray-700 dark:from-gray-900 dark:to-gray-800 dark:text-gray-200 sm:px-12 md:px-16"
      >
        <meta itemProp="url" content="https://jpvisualdocs.com" />

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-4 md:gap-16">
          <section
            aria-label="ข้อมูลบริษัท"
            className="flex flex-col items-center space-y-3 text-center md:items-start md:text-left"
            itemProp="publisher"
            itemScope
            itemType="https://schema.org/Organization"
          >
            <img
              src={jpLogo}
              alt="โลโก้ JP Visual & Docs"
              loading="lazy"
              className="h-auto w-28 rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
              itemProp="logo"
              draggable={false}
              onError={(e) => ((e.currentTarget as HTMLImageElement).style.display = 'none')}
              tabIndex={-1}
            />
            <h2 className="text-xl font-extrabold tracking-tight" itemProp="name">
              JP Visual & Docs
            </h2>
            <p
              className="max-w-xs text-sm leading-relaxed text-gray-600 dark:text-gray-400"
              itemProp="description"
            >
              พัฒนาโดย <strong>Applicationlab</strong>
              <br />
              ผู้เชี่ยวชาญด้านเอกสารและโซลูชันดิจิทัล
            </p>
          </section>

          <nav aria-label="เมนูเว็บไซต์" className="space-y-3 text-center text-sm md:text-left">
            <h3 className="mb-4 text-lg font-semibold tracking-wide text-gray-700 dark:text-gray-300">
              เมนู
            </h3>
            <ul role="list" className="mx-auto max-w-xs space-y-2 md:mx-0" tabIndex={-1}>
              {menuItems.map(({ href, label }) => {
                const isExternal = href.startsWith('http');
                return (
                  <li key={href}>
                    <a
                      href={href}
                      className="block rounded-md px-3 py-2 transition-colors duration-300 hover:bg-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:hover:bg-primary"
                      title={label}
                      target={isExternal ? '_blank' : undefined}
                      rel={isExternal ? 'noopener noreferrer' : undefined}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>

          <section
            aria-label="ช่องทางติดต่อและโซเชียลมีเดีย"
            className="space-y-3 text-center text-sm md:text-left"
          >
            <h3 className="mb-4 text-lg font-semibold tracking-wide text-gray-700 dark:text-gray-300">
              ติดต่อ
            </h3>
            <ul role="list" className="mx-auto max-w-xs space-y-3 md:mx-0" tabIndex={-1}>
              {socialLinks.map(({ href, label, Icon, ariaLabel, external, nofollow }) => (
                <li key={href}>
                  <a
                    href={href}
                    itemProp="sameAs"
                    target={external ? '_blank' : undefined}
                    rel={
                      external
                        ? ['noopener', 'noreferrer', nofollow && 'nofollow']
                            .filter(Boolean)
                            .join(' ')
                        : undefined
                    }
                    className="inline-flex items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-300 hover:bg-primary hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:hover:bg-primary"
                    aria-label={ariaLabel}
                    title={ariaLabel}
                  >
                    <Icon className="h-6 w-6 flex-shrink-0" aria-hidden="true" focusable={false} />
                    <span className="max-w-[9rem] truncate">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="flex flex-col items-center justify-between space-y-6 text-center text-sm md:items-end md:text-right">
            <div className="select-text">
              <p className="font-semibold tracking-wide">© {currentYear} Applicationlab</p>
              <p className="tracking-wide text-gray-500 dark:text-gray-400">All rights reserved.</p>
            </div>
            <button
              onClick={scrollToTop}
              aria-label="กลับขึ้นด้านบน"
              title="กลับขึ้นด้านบน"
              type="button"
              className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-lg bg-white px-3 py-2 text-sm font-semibold text-primary shadow-lg transition-transform duration-300 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 dark:bg-gray-800 ${
                showScrollTop
                  ? 'translate-y-0 opacity-100'
                  : 'pointer-events-none translate-y-6 opacity-0'
              }`}
            >
              <ArrowUp className="h-5 w-5" aria-hidden="true" focusable={false} />
              กลับด้านบน
            </button>
          </section>
        </div>
      </footer>

      <style>{`
        @media (prefers-reduced-motion: reduce) {
          button,
          a {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
