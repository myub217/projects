// src/components/ui/Card.tsx
// ✅ Card component แบบ reusable พร้อมรองรับ custom className

import React from 'react';
import clsx from 'clsx';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-base-200 bg-base-100 p-4 shadow-sm transition-shadow hover:shadow-md',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
