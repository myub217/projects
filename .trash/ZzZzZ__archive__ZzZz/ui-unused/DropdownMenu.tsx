// src/components/ui/DropdownMenu.tsx
// ✅ Accessible Dropdown Menu component with keyboard support, Tailwind & DaisyUI theme-aware styling
// ✨ ปรับปรุง keyboard navigation, aria attributes, focus management, และ styling ให้ครบถ้วน

import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';
import clsx from 'clsx';

interface DropdownMenuProps {
  label: React.ReactNode;
  items: Array<{
    label: string;
    onClick?: () => void;
    href?: string;
    disabled?: boolean;
  }>;
  className?: string;
  menuClassName?: string;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  label,
  items,
  className,
  menuClassName,
}) => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  // Keyboard navigation: open/close & arrow navigation
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement | HTMLUListElement>) => {
    if (e.currentTarget === buttonRef.current) {
      if (['ArrowDown', 'Enter', ' '].includes(e.key)) {
        e.preventDefault();
        setOpen(true);
        // Focus first menu item on next tick
        setTimeout(() => {
          menuRef.current?.querySelector('li[tabindex="0"]')?.focus();
        }, 0);
      }
    } else if (e.currentTarget === menuRef.current) {
      const focusableItems = Array.from(
        menuRef.current?.querySelectorAll('li[tabindex="0"]') || [],
      ) as HTMLElement[];
      const currentIndex = focusableItems.indexOf(
        document.activeElement as HTMLElement,
      );
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        const nextIndex = (currentIndex + 1) % focusableItems.length;
        focusableItems[nextIndex].focus();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const prevIndex =
          (currentIndex - 1 + focusableItems.length) % focusableItems.length;
        focusableItems[prevIndex].focus();
      } else if (e.key === 'Escape') {
        e.preventDefault();
        setOpen(false);
        buttonRef.current?.focus();
      } else if (e.key === 'Tab') {
        setOpen(false);
      }
    }
  };

  const onItemClick = (item: DropdownMenuProps['items'][0]) => {
    if (item.disabled) return;
    if (item.onClick) item.onClick();
    setOpen(false);
    buttonRef.current?.focus();
  };

  return (
    <div className={clsx('relative inline-block text-left', className)}>
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="dropdown-menu"
        onClick={() => setOpen((prev) => !prev)}
        onKeyDown={handleKeyDown}
        ref={buttonRef}
        className="inline-flex items-center rounded-md bg-base-200 px-4 py-2 text-sm font-medium text-base-content shadow-sm hover:bg-base-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:bg-neutral dark:text-gray-200 dark:hover:bg-gray-700"
      >
        {label}
        <svg
          className="ml-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul
          id="dropdown-menu"
          role="menu"
          tabIndex={-1}
          ref={menuRef}
          onKeyDown={handleKeyDown}
          className={clsx(
            'absolute right-0 mt-2 w-48 origin-top-right rounded-md border border-base-300 bg-base-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900',
            menuClassName,
          )}
        >
          {items.map(({ label, onClick, href, disabled }, idx) => (
            <li
              key={idx}
              role="menuitem"
              tabIndex={disabled ? -1 : 0}
              aria-disabled={disabled || undefined}
              onClick={() =>
                !disabled && onItemClick({ label, onClick, href, disabled })
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  !disabled && onItemClick({ label, onClick, href, disabled });
                }
              }}
              className={clsx(
                'cursor-pointer px-4 py-2 text-sm text-base-content hover:bg-primary hover:text-primary-content focus:bg-primary focus:text-primary-content',
                disabled && 'cursor-not-allowed opacity-50',
              )}
            >
              {href ? (
                <a href={href} tabIndex={-1} className="block w-full">
                  {label}
                </a>
              ) : (
                label
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
