// src/components/ui/Spinner.tsx
// ✅ Accessible loading spinner with Tailwind + DaisyUI color support and optional size

import React from 'react';
import clsx from 'clsx';

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  'size'?: 'sm' | 'md' | 'lg' | 'xl';
  'className'?: string;
  'aria-label'?: string;
}

const sizeMap = {
  sm: 'h-4 w-4',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-12 w-12',
} as const;

const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  className,
  'aria-label': ariaLabel = 'Loading',
  ...props
}) => {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={ariaLabel}
      className={clsx(
        'inline-block animate-spin text-primary',
        sizeMap[size],
        className,
      )}
      {...props}
    >
      <svg
        className="fill-current"
        viewBox="0 0 24 24"
        aria-hidden="true"
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
          fill="none"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
    </div>
  );
};

export default Spinner;
