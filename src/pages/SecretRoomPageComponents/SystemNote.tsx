// src/components/SystemNote.tsx

import React from "react";

interface SystemNoteProps {
  message: string;
  type?: "info" | "warning" | "error";
}

const ICONS = {
  info: (
    <svg
      className="mr-2 h-5 w-5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12" y1="16" x2="12" y2="12" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12" y1="8" x2="12.01" y2="8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  warning: (
    <svg
      className="mr-2 h-5 w-5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M10.29 3.86L1.82 18a1.75 1.75 0 001.51 2.64h16.34a1.75 1.75 0 001.51-2.64L13.71 3.86a1.75 1.75 0 00-3.42 0z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="12" y1="9" x2="12" y2="13" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="12" y1="17" x2="12.01" y2="17" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  error: (
    <svg
      className="mr-2 h-5 w-5 flex-shrink-0"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="15" y1="9" x2="9" y2="15" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="9" y1="9" x2="15" y2="15" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

const STYLES = {
  info: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
  error: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
};

export default function SystemNote({ message, type = "info" }: SystemNoteProps) {
  const style = STYLES[type] || STYLES.info;
  const icon = ICONS[type] || ICONS.info;

  return (
    <section
      className={`mb-6 flex items-start rounded-md p-4 shadow-sm ${style}`}
      role="alert"
      aria-live="polite"
      tabIndex={0}
    >
      {icon}
      <p className="text-sm leading-relaxed">{message}</p>
    </section>
  );
}