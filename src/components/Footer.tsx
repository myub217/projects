import React from "react";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import viteLogo from "../assets/vite.svg";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral text-neutral-content px-6 py-10 border-t border-neutral-focus text-sm">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left: Brand Info */}
        <div className="flex items-start gap-4">
          <img
            src={viteLogo}
            alt="โลโก้ JP Visual & Docs"
            className="h-12 w-auto object-contain"
          />
          <div>
            <h2 className="text-lg font-bold text-primary">JP Visual & Docs</h2>
            <p className="opacity-70 mt-1">&copy; {currentYear} — Since 2023</p>
            <p className="text-xs text-neutral-content/60 mt-1">
              Empowering digital experiences across platforms.
            </p>
          </div>
        </div>

        {/* Right: Navigation + Social */}
        <div className="flex flex-col md:items-end gap-4">
          {/* Navigation */}
          <nav
            className="flex flex-wrap gap-4 text-neutral-content/80"
            aria-label="ลิงก์ในส่วนท้าย"
          >
            <a
              href="/terms"
              className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              title="เงื่อนไขการให้บริการ"
            >
              Terms
            </a>
            <a
              href="/privacy"
              className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              title="นโยบายความเป็นส่วนตัว"
            >
              Privacy
            </a>
            <a
              href="/contact"
              className="hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              title="ติดต่อเรา"
            >
              Contact
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl mt-2">
            <a
              href="https://twitter.com/yourprofile"
              aria-label="ติดตามบน Twitter"
              title="Twitter"
              className="hover:text-primary transform hover:scale-110 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://youtube.com/yourchannel"
              aria-label="ชมช่อง YouTube"
              title="YouTube"
              className="hover:text-primary transform hover:scale-110 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
            <a
              href="https://facebook.com/yourpage"
              aria-label="ติดตามบน Facebook"
              title="Facebook"
              className="hover:text-primary transform hover:scale-110 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>

      {/* Optional: Divider Line & Footer Note */}
      <div className="border-t border-neutral-focus mt-8 pt-4 text-xs text-center text-neutral-content/50">
        พัฒนาโดยทีม JP Visual & Docs เพื่อประสบการณ์ดิจิทัลที่ดีที่สุด
      </div>
    </footer>
  );
};

export default Footer;