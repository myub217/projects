import React from "react";
import {
  FaFacebook,
  FaLine,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa";
import jpLogo from "../assets/jp-logo.png";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="bg-neutral text-neutral-content px-6 py-12 border-t border-neutral-focus text-sm"
      role="contentinfo"
      aria-label="ส่วนท้ายเว็บไซต์ JP Visual & Docs"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left side: Logo and Description */}
        <section
          aria-labelledby="footer-about"
          className="flex items-start gap-4"
          tabIndex={-1}
        >
          <img
            src={jpLogo}
            alt="โลโก้ JP Visual & Docs"
            className="h-14 w-auto object-contain flex-shrink-0"
            loading="lazy"
            width={56}
            height={56}
          />
          <div>
            <h2
              id="footer-about"
              className="text-xl font-bold text-primary"
              tabIndex={-1}
            >
              JP Visual & Docs
            </h2>
            <p className="mt-2 text-sm leading-relaxed opacity-90">
              ผู้เชี่ยวชาญด้านเอกสารธุรกิจ วีซ่า โปรไฟล์การเงิน และระบบหลังบ้าน
              <br />
              ครบวงจร: วางแผน | ยื่นกู้ | ออกแบบ | ทำการตลาด | ดูแลระบบออนไลน์
              <br />
              เสริมความมั่นคงให้ธุรกิจของคุณอย่างยั่งยืน
            </p>
            <p className="mt-3 text-neutral-content/60 text-xs" aria-label="ลิขสิทธิ์">
              © {currentYear} JP Visual & Docs — Since 2023
            </p>
          </div>
        </section>

        {/* Right side: Navigation & Contact */}
        <section
          aria-labelledby="footer-nav-contact"
          className="flex flex-col md:items-end gap-4"
        >
          {/* Navigation */}
          <nav
            aria-label="เมนูลิงก์เว็บไซต์"
            className="flex flex-wrap gap-4 text-neutral-content/80"
            id="footer-nav-contact"
          >
            <a
              href="/services"
              className="hover:text-primary hover:underline transition"
              tabIndex={0}
            >
              บริการทั้งหมด
            </a>
            <a
              href="/portfolio"
              className="hover:text-primary hover:underline transition"
              tabIndex={0}
            >
              ตัวอย่างผลงาน
            </a>
            <a
              href="/contact"
              className="hover:text-primary hover:underline transition"
              tabIndex={0}
            >
              ติดต่อเรา
            </a>
            <a
              href="/terms"
              className="hover:text-primary hover:underline transition"
              tabIndex={0}
            >
              เงื่อนไขบริการ
            </a>
          </nav>

          {/* Social Media Links */}
          <ul
            className="flex gap-4 text-xl mt-4"
            aria-label="ช่องทางโซเชียลมีเดีย"
            role="list"
          >
            <li role="listitem">
              <a
                href="https://line.me/ti/p/yourlineid"
                aria-label="ติดต่อผ่าน LINE"
                title="ติดต่อผ่าน LINE"
                className="hover:text-primary hover:scale-110 transition-transform"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <FaLine />
                <span className="sr-only">LINE</span>
              </a>
            </li>
            <li role="listitem">
              <a
                href="https://www.tiktok.com/@yourtiktok"
                aria-label="ชมวิดีโอบน TikTok"
                title="ชมวิดีโอบน TikTok"
                className="hover:text-primary hover:scale-110 transition-transform"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <FaTiktok />
                <span className="sr-only">TikTok</span>
              </a>
            </li>
            <li role="listitem">
              <a
                href="https://facebook.com/yourpage"
                aria-label="ติดตามบน Facebook"
                title="ติดตามบน Facebook"
                className="hover:text-primary hover:scale-110 transition-transform"
                target="_blank"
                rel="noopener noreferrer nofollow"
              >
                <FaFacebook />
                <span className="sr-only">Facebook</span>
              </a>
            </li>
            <li role="listitem">
              <a
                href="mailto:contact@jpdocs.co"
                aria-label="ส่งอีเมลหาเรา"
                title="ส่งอีเมลหาเรา"
                className="hover:text-primary hover:scale-110 transition-transform"
                rel="nofollow"
              >
                <FaEnvelope />
                <span className="sr-only">Email</span>
              </a>
            </li>
          </ul>

          {/* Contact info */}
          <address
            className="mt-4 text-xs text-right text-neutral-content/60 leading-relaxed not-italic"
            aria-label="ข้อมูลการติดต่อ"
          >
            LINE:{" "}
            <a
              href="https://line.me/ti/p/yourlineid"
              className="underline hover:text-primary"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              @jpdocs
            </a>{" "}
            | Email:{" "}
            <a
              href="mailto:contact@jpdocs.co"
              className="underline hover:text-primary"
              rel="nofollow"
            >
              contact@jpdocs.co
            </a>
            <br />
            บริการทั่วประเทศ ครอบคลุมทุกกลุ่มอาชีพ ทั้งบุคคลธรรมดาและนิติบุคคล
          </address>
        </section>
      </div>

      {/* Footer Bottom */}
      <div
        className="border-t border-neutral-focus mt-10 pt-4 text-center text-xs text-neutral-content/50"
        aria-label="ข้อความส่วนท้าย"
      >
        พัฒนา ออกแบบ และดูแลโดยทีมงาน JP Visual & Docs — พาร์ทเนอร์ดิจิทัลสำหรับธุรกิจไทย
      </div>
    </footer>
  );
};

export default Footer;