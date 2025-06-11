import React from "react";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";
import viteLogo from "../assets/vite.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral text-neutral-content px-6 py-10 border-t border-neutral-focus">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left: Brand Info */}
        <div className="flex items-start gap-4">
          <img src={viteLogo} alt="Vite Logo" className="h-12" />
          <div>
            <p className="text-lg font-bold text-primary">Applicationlubmobile</p>
            <p className="text-sm opacity-70">
              &copy; {new Date().getFullYear()} — Reliable tech since 2023
            </p>
            <p className="text-xs text-neutral-content/50 mt-1">
              Empowering digital experiences across platforms.
            </p>
          </div>
        </div>

        {/* Right: Navigation + Social */}
        <div className="flex flex-col items-start md:items-end gap-4">
          {/* Navigation Links */}
          <nav
            className="flex gap-4 text-sm text-neutral-content/80"
            aria-label="Footer navigation"
          >
            <a
              href="#"
              className="hover:text-primary transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              aria-label="Terms of service"
              title="Terms of service"
            >
              Terms
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              aria-label="Privacy policy"
              title="Privacy policy"
            >
              Privacy
            </a>
            <a
              href="#"
              className="hover:text-primary transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              aria-label="Contact us"
              title="Contact us"
            >
              Contact
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex gap-4 text-2xl mt-2">
            <a
              href="#"
              aria-label="Twitter"
              title="Twitter"
              className="hover:text-primary transition-transform transform hover:scale-110 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              // rel="noopener noreferrer" target="_blank" // uncomment for real external links
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              title="YouTube"
              className="hover:text-primary transition-transform transform hover:scale-110 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              // rel="noopener noreferrer" target="_blank"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              title="Facebook"
              className="hover:text-primary transition-transform transform hover:scale-110 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded"
              // rel="noopener noreferrer" target="_blank"
            >
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;