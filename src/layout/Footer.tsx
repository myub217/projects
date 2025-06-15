import React from "react";
import { Facebook, Instagram, MessageCircleMore } from "lucide-react";
import { FaTiktok } from "react-icons/fa";
import jpLogo from "../assets/jp-logo.png";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="w-full bg-base-200 text-base-content border-t border-base-300 dark:border-base-700 px-6 py-10"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* โลโก้และรายละเอียด */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <img
            src={jpLogo}
            alt="โลโก้ JP Visual & Docs"
            className="w-24 h-auto mb-4 drop-shadow-md rounded-xl"
          />
          <p className="text-sm font-bold">JP Visual & Docs</p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            พัฒนาโดย <strong>Applicationlab</strong><br />
            ผู้เชี่ยวชาญด้านเอกสารและโซลูชันดิจิทัล
          </p>
        </div>

        {/* เมนูเว็บไซต์ */}
        <div className="text-center md:text-left text-sm">
          <h3 className="font-semibold mb-2">เมนู</h3>
          <ul className="space-y-1">
            <li>
              <a
                href="#services"
                className="hover:text-primary transition-colors focus-visible:ring"
              >
                บริการของเรา
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-primary transition-colors focus-visible:ring"
              >
                เกี่ยวกับเรา
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-primary transition-colors focus-visible:ring"
              >
                ติดต่อเรา
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="hover:text-primary transition-colors focus-visible:ring"
              >
                นโยบายความเป็นส่วนตัว
              </a>
            </li>
          </ul>
        </div>

        {/* ช่องทางติดต่อ */}
        <div className="text-center md:text-left text-sm">
          <h3 className="font-semibold mb-2">ติดต่อ</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://line.me/ti/p/@462FQFC"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors focus-visible:ring"
                aria-label="ติดต่อผ่าน LINE @462FQFC"
              >
                <MessageCircleMore className="w-5 h-5" />
                <span>@462FQFC</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/joapa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors focus-visible:ring"
                aria-label="Instagram @joapa"
              >
                <Instagram className="w-5 h-5" />
                <span>@joapa</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@mynameisjoapa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors focus-visible:ring"
                aria-label="TikTok @mynameisjoapa"
              >
                <FaTiktok className="w-5 h-5" />
                <span>@mynameisjoapa</span>
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/JPVisualDocs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-primary transition-colors focus-visible:ring"
                aria-label="Facebook JP Visual & Docs"
              >
                <Facebook className="w-5 h-5" />
                <span>JP Visual & Docs</span>
              </a>
            </li>
          </ul>
        </div>

        {/* ลิขสิทธิ์ */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right text-sm justify-center">
          <p>
            © {year} <strong>Applicationlab</strong>
          </p>
          <p className="text-gray-500 dark:text-gray-400 mt-1">
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;