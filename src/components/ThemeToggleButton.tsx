// src/components/ThemeToggleButton.tsx
import React from 'react';

interface ThemeToggleButtonProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({
  theme,
  toggleTheme,
}) => {
  const isLight = theme === 'light';

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`สลับเป็นโหมด ${isLight ? 'มืด' : 'สว่าง'}`}
      aria-pressed={!isLight}
      title={`สลับเป็นโหมด ${isLight ? 'มืด' : 'สว่าง'}`}
      className="fixed bottom-4 right-4 z-50 rounded-full bg-base-200 p-3 text-base-content shadow-xl backdrop-blur-md transition-colors hover:bg-base-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:bg-neutral dark:text-gray-200 dark:hover:bg-gray-700 sm:bottom-6 sm:right-6"
    >
      {isLight ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
          role="img"
          aria-hidden="true"
        >
          <path d="M12 3v1m0 16v1m8.66-11h-1M4.34 12h-1m15.07 6.07l-.7-.7M6.34 6.34l-.7-.7m12.02 12.02l-.7-.7M6.34 17.66l-.7-.7M12 7a5 5 0 000 10 5 5 0 000-10z" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-6 w-6"
          role="img"
          aria-hidden="true"
        >
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggleButton;
