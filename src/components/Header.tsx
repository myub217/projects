// src/components/Header.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useJPTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'บริการ', href: '#services' },
  { label: 'ตัวอย่างงาน', href: '#portfolio' },
  { label: 'คำถามที่พบบ่อย', href: '#faq' },
  { label: 'ติดต่อเรา', href: '#contact' },
];

const Header = () => {
  const { theme, setTheme } = useJPTheme();

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-base-100/70 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-primary">
          JP Visual & Docs
        </Link>

        {/* Nav */}
        <nav className="hidden md:flex items-center space-x-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-base-content hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Theme Toggle */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
