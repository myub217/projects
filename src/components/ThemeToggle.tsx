import React from 'react';

export type Theme = 'light' | 'dark' | 'platinum' | 'platinum-dark';

interface ThemeToggleProps {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  // ให้ isLight ตรวจแค่ light, platinum เป็นสว่าง
  const isLight = theme === 'light' || theme === 'platinum';

  return (
    <button
      onClick={toggleTheme}
      aria-label={`เปลี่ยนเป็นโหมด${isLight ? 'มืด' : 'สว่าง'}`}
      title={`สลับเป็นโหมด${isLight ? 'มืด' : 'สว่าง'}`}
      type="button"
      className="rounded-full bg-base-200 p-2 text-base-content transition-colors duration-300 hover:bg-base-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      {isLight ? (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          role="img"
          focusable="false"
        >
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95-6.95l-1.414 1.414M6.464 17.536l-1.414 1.414m12.728 0l-1.414-1.414M6.464 6.464L5.05 5.05" />
        </svg>
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
          role="img"
          focusable="false"
        >
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle;
