// src/components/SecretRoom/ThemeToggleButton.tsx

import React from 'react'

interface ThemeToggleButtonProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const ThemeToggleButton: React.FC<ThemeToggleButtonProps> = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light'

  return (
    <button
      type="button"
      aria-label={`สลับเป็นโหมด ${isLight ? 'มืด' : 'สว่าง'}`}
      title={`สลับเป็นโหมด ${isLight ? 'มืด' : 'สว่าง'}`}
      onClick={toggleTheme}
      aria-pressed={!isLight}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-base-200 text-base-content p-3 rounded-full shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-base-300 dark:bg-neutral dark:text-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
    >
      {isLight ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          role="img"
          aria-hidden="true"
          focusable="false"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v1m0 16v1m8.66-11h-1M4.34 12h-1m15.07 6.07l-.7-.7M6.34 6.34l-.7-.7m12.02 12.02l-.7-.7M6.34 17.66l-.7-.7M12 7a5 5 0 000 10 5 5 0 000-10z"
          />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          role="img"
          aria-hidden="true"
          focusable="false"
        >
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
        </svg>
      )}
    </button>
  )
}

export default ThemeToggleButton