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
    <footer className="bg-neutral text-neutral-content px-6 py-12 border-t border-neutral-focus text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Logo & Description */}
        <div className="flex items-start gap-4">
          <img
            src={jpLogo}
            alt="โลโก้ JP Visual & Docs"
            className="h-14 w-auto object-contain"
          />
          <div>
            <h2 className="text-xl font-bold text-primary">
              JP Visual & Docs
            </h2>
            <p className="mt-2 text-sm leading-relaxed opacity-90">
              ผู้เชี่ยวชาญด้านเอกสารธุรกิจ วีซ่า โปรไฟล์การเงิน และระบบหลังบ้าน
              <br />
              ครบวงจร: วางแผน | ยื่นกู้ | ออกแบบ | ทำการตลาด | ดูแลระบบออนไลน์
              <br />
              เสริมความมั่นคงให้ธุรกิจของคุณอย่างยั่งยืน
            </p>
            <p className="mt-3 text-neutral-content/60 text-xs">
              © {currentYear} JP Visual & Docs — Since 2023
            </p>
          </div>
        </div>

        {/* Right: Navigation & Contact */}
        <div className="flex flex-col md:items-end gap-4">
          {/* Nav Links */}
          <nav
            className="flex flex-wrap gap-4 text-neutral-content/80"
            aria-label="ลิงก์เมนูเว็บไซต์"
          >
            <a
              href="/services"
              className="hover:text-primary hover:underline transition"
            >
              บริการทั้งหมด
            </a>
            <a
              href="/portfolio"
              className="hover:text-primary hover:underline transition"
            >
              ตัวอย่างผลงาน
            </a>
            <a
              href="/contact"
              className="hover:text-primary hover:underline transition"
            >
              ติดต่อเรา
            </a>
            <a
              href="/terms"
              className="hover:text-primary hover:underline transition"
            >
              เงื่อนไขบริการ
            </a>
          </nav>

          {/* Social Links */}
          <div className="flex gap-4 text-xl mt-4">
            <a
              href="https://line.me/ti/p/yourlineid"
              aria-label="LINE Official"
              title="ติดต่อผ่าน LINE"
              className="hover:text-primary hover:scale-110 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLine />
              <span className="sr-only">LINE</span>
            </a>
            <a
              href="https://www.tiktok.com/@yourtiktok"
              aria-label="TikTok"
              title="ชมวิดีโอบน TikTok"
              className="hover:text-primary hover:scale-110 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok />
              <span className="sr-only">TikTok</span>
            </a>
            <a
              href="https://facebook.com/yourpage"
              aria-label="Facebook"
              title="ติดตามบน Facebook"
              className="hover:text-primary hover:scale-110 transition-transform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
              <span className="sr-only">Facebook</span>
            </a>
            <a
              href="mailto:contact@jpdocs.co"
              aria-label="Email"
              title="ส่งอีเมลหาเรา"
              className="hover:text-primary hover:scale-110 transition-transform"
            >
              <FaEnvelope />
              <span className="sr-only">Email</span>
            </a>
          </div>

          {/* Contact Info */}
          <div className="mt-4 text-xs text-right text-neutral-content/60 leading-relaxed">
            LINE: @jpdocs | Email: contact@jpdocs.co
            <br />
            บริการทั่วประเทศ ครอบคลุมทุกกลุ่มอาชีพ ทั้งบุคคลธรรมดาและนิติบุคคล
          </div>
        </div>
      </div>

      {/* Bottom Message */}
      <div className="border-t border-neutral-focus mt-10 pt-4 text-center text-xs text-neutral-content/50">
        พัฒนา ออกแบบ และดูแลโดยทีมงาน JP Visual & Docs — พาร์ทเนอร์ดิจิทัลสำหรับธุรกิจไทย
      </div>
    </footer>
  );
};

export default Footer;