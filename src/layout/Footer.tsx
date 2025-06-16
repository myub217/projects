import React from "react";
import { Facebook, Instagram, MessageCircleMore } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import jpLogo from "../assets/jp-logo.png";

interface MenuItem {
  href: string;
  label: string;
}

interface SocialLink {
  href: string;
  label: string;
  Icon: React.ComponentType<
    React.SVGProps<SVGSVGElement> | React.HTMLAttributes<SVGElement>
  >;
  ariaLabel: string;
  external?: boolean;
  nofollow?: boolean;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  // เมนูหลักของเว็บไซต์
  const menuItems: MenuItem[] = [
    { href: "#services", label: "บริการของเรา" },
    { href: "#about", label: "เกี่ยวกับเรา" },
    { href: "#contact", label: "ติดต่อเรา" },
    { href: "/privacy-policy", label: "นโยบายความเป็นส่วนตัว" },
  ];

  // ลิงก์โซเชียลและช่องทางติดต่อ
  const socialLinks: SocialLink[] = [
    {
      href: "https://lin.ee/BSkkcTR",
      label: "@462FQTFC",
      Icon: MessageCircleMore,
      ariaLabel: "ติดต่อผ่าน LINE Official Account @462FQTFC",
      external: true,
      nofollow: true,
    },
    {
      href: "https://www.instagram.com/joapa",
      label: "@joapa",
      Icon: Instagram,
      ariaLabel: "Instagram @joapa",
      external: true,
      nofollow: true,
    },
    {
      href: "https://www.tiktok.com/@mynameisjoapa",
      label: "@mynameisjoapa",
      Icon: FaTiktok,
      ariaLabel: "TikTok @mynameisjoapa",
      external: true,
      nofollow: true,
    },
    {
      href: "https://facebook.com/JPVisualDocs",
      label: "JP Visual & Docs",
      Icon: Facebook,
      ariaLabel: "Facebook JP Visual & Docs",
      external: true,
      nofollow: true,
    },
  ];

  return (
    <footer
      role="contentinfo"
      lang="th"
      itemScope
      itemType="https://schema.org/Organization"
      className="w-full bg-base-200 text-base-content border-t border-base-300
                 dark:bg-gray-900 dark:text-gray-200 dark:border-base-700
                 px-6 py-12 sm:px-8 md:px-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* ข้อมูลบริษัท พร้อมโลโก้ */}
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
            className="w-24 h-auto drop-shadow-md rounded-xl select-none"
            itemProp="logo"
            draggable={false}
          />
          <h2 className="text-lg font-bold" itemProp="name">
            JP Visual & Docs
          </h2>
          <p
            className="text-sm text-muted text-balance"
            itemProp="description"
          >
            พัฒนาโดย <strong>Applicationlab</strong>
            <br />
            ผู้เชี่ยวชาญด้านเอกสารและโซลูชันดิจิทัล
          </p>
        </section>

        {/* เมนูหลักของเว็บไซต์ */}
        <nav
          aria-label="เมนูเว็บไซต์"
          className="text-center md:text-left text-sm space-y-2"
        >
          <h3 className="text-base font-semibold mb-2">เมนู</h3>
          <ul role="list" className="space-y-1">
            {menuItems.map(({ href, label }) => {
              const isExternal = href.startsWith("http");
              return (
                <li role="listitem" key={href}>
                  <a
                    href={href}
                    className="inline-block hover:text-primary dark:hover:text-primary
                               transition-colors duration-300 ease-in-out
                               focus-visible:outline-none focus-visible:ring ring-primary
                               rounded px-1"
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

        {/* ช่องทางติดต่อและโซเชียลมีเดีย */}
        <section
          aria-label="ช่องทางติดต่อและโซเชียลมีเดีย"
          className="text-center md:text-left text-sm space-y-2"
        >
          <h3 className="text-base font-semibold mb-2">ติดต่อ</h3>
          <ul role="list" className="space-y-2">
            {socialLinks.map(
              ({ href, label, Icon, ariaLabel, external, nofollow }) => (
                <li role="listitem" key={href}>
                  <a
                    href={href}
                    target={external ? "_blank" : undefined}
                    rel={
                      external
                        ? `noopener noreferrer${nofollow ? " nofollow" : ""}`
                        : undefined
                    }
                    className="inline-flex items-center gap-2
                               hover:text-primary dark:hover:text-primary
                               transition-colors duration-300 ease-in-out
                               focus-visible:outline-none focus-visible:ring ring-primary
                               rounded-md p-1.5"
                    aria-label={ariaLabel}
                    title={ariaLabel}
                  >
                    <Icon
                      className="w-5 h-5 flex-shrink-0"
                      aria-hidden="true"
                      focusable="false"
                    />
                    <span>{label}</span>
                  </a>
                </li>
              )
            )}
          </ul>
        </section>

        {/* ลิขสิทธิ์ และลิงก์กลับขึ้นด้านบน */}
        <section
          className="flex flex-col items-center md:items-end text-center md:text-right
                     text-sm justify-between space-y-3"
        >
          <div>
            <p>
              © {currentYear} <strong>Applicationlab</strong>
            </p>
            <p className="text-muted">All rights reserved.</p>
          </div>
          <div>
            <a
              href="#top"
              className="text-xs text-primary hover:underline dark:hover:text-primary
                         transition-colors duration-300 ease-in-out
                         focus-visible:outline-none focus-visible:ring ring-primary
                         rounded px-1"
              aria-label="กลับขึ้นด้านบน"
              title="กลับขึ้นด้านบน"
            >
              ↑ กลับด้านบน
            </a>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;