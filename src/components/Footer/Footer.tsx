// src/components/Footer/Footer.tsx
import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 text-base-content py-8 border-t border-base-300">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Copyright */}
        <div className="text-sm">
          © {currentYear} <span className="font-semibold">JP Visual & Docs</span>. All rights reserved.
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6">
          <a
            href="https://www.facebook.com/jpvisualdocs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-600 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.522-4.478-10-10-10S2 6.478 2 12c0 4.991 3.658 9.128 8.438 9.879v-6.987H7.898v-2.892h2.54V9.845c0-2.507 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.465h-1.26c-1.243 0-1.63.772-1.63 1.562v1.875h2.773l-.443 2.892h-2.33v6.987C18.342 21.128 22 16.991 22 12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/jp-visual-docs"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-700 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.75v2.5h.07c.66-1.25 2.28-2.57 4.7-2.57 5 0 5.93 3.29 5.93 7.56V24H17v-8.1c0-1.94-.04-4.45-2.71-4.45-2.72 0-3.14 2.12-3.14 4.31V24H7.5V8z" />
            </svg>
          </a>
          <a
            href="mailto:contact@jpvisualdocs.com"
            aria-label="Email"
            className="hover:text-red-500 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 12l-4-4-4 4m8 0v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6m12 0H4" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;