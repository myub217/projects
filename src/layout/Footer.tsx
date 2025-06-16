import React from "react";
import { Facebook, Instagram, MessageCircleMore } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import jpLogo from "../assets/jp-logo.png";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const menuItems = [
    { href: "#services", label: "บริการของเรา" },
    { href: "#about", label: "เกี่ยวกับเรา" },
    { href: "#contact", label: "ติดต่อเรา" },
    { href: "/privacy-policy", label: "นโยบายความเป็นส่วนตัว" },
  ];

  const socialLinks = [
    {
      href: "https://lin.ee/BSkkcTR",
      label: "@462FQTFC",
      Icon: MessageCircleMore,
      ariaLabel: "ติดต่อผ่าน LINE Official Account @462FQTFC",
    },
    {
      href: "https://www.instagram.com/joapa",
      label: "@joapa",
      Icon: Instagram,
      ariaLabel: "Instagram @joapa",
    },
    {
      href: "https://www.tiktok.com/@mynameisjoapa",
      label: "@mynameisjoapa",
      Icon: FaTiktok,
      ariaLabel: "TikTok @mynameisjoapa",
    },
    {
      href: "https://facebook.com/JPVisualDocs",
      label: "JP Visual & Docs",
      Icon: Facebook,
      ariaLabel: "Facebook JP Visual & Docs",
    },
  ];

  return (
    <footer
      role="contentinfo"
      itemScope
      itemType="https://schema.org/Organization"
      className="w-full bg-base-200 text-base-content border-t border-base-300 dark:border-base-700 px-6 py-12"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* โลโก้และคำอธิบาย */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
          <img
            src={jpLogo}
            alt="โลโก้ JP Visual & Docs"
            loading="lazy"
            className="w-24 h-auto drop-shadow-md rounded-xl"
            itemProp="logo"
            draggable={false}
          />
          <h2 className="text-lg font-bold" itemProp="name">
            JP Visual & Docs
          </h2>
          <p className="text-sm text-muted text-balance" itemProp="description">
            พัฒนาโดย <strong>Applicationlab</strong>
            <br />
            ผู้เชี่ยวชาญด้านเอกสารและโซลูชันดิจิทัล
          </p>
        </div>

        {/* เมนูเว็บไซต์ */}
        <nav
          aria-label="เมนูเว็บไซต์"
          className="text-center md:text-left text-sm space-y-2"
        >
          <h3 className="text-base font-semibold mb-2">เมนู</h3>
          <ul className="space-y-1">
            {menuItems.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className="hover:text-primary transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring ring-primary rounded px-1"
                  title={label}
                  tabIndex={0}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ช่องทางติดต่อและโซเชียล */}
        <section
          aria-label="ช่องทางติดต่อและโซเชียลมีเดีย"
          className="text-center md:text-left text-sm space-y-2"
        >
          <h3 className="text-base font-semibold mb-2">ติดต่อ</h3>
          <ul className="space-y-2">
            {socialLinks.map(({ href, label, Icon, ariaLabel }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center gap-2 hover:text-primary transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring ring-primary rounded-md p-1.5"
                  aria-label={ariaLabel}
                  title={ariaLabel}
                  tabIndex={0}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                  <span>{label}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* ลิขสิทธิ์และลิงก์กลับขึ้นด้านบน */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right text-sm justify-between space-y-3">
          <div>
            <p>
              © {currentYear} <strong>Applicationlab</strong>
            </p>
            <p className="text-muted">All rights reserved.</p>
          </div>
          <div>
            <a
              href="#top"
              className="text-xs text-primary hover:underline transition-colors duration-200 ease-in-out focus-visible:outline-none focus-visible:ring ring-primary rounded px-1"
              aria-label="กลับขึ้นด้านบน"
              title="กลับขึ้นด้านบน"
              tabIndex={0}
            >
              ↑ กลับด้านบน
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;