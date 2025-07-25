// src/components/ui/Accordion.tsx
// ✅ Accessible Accordion พร้อม ARIA, keyboard toggle, animation และ smooth UX

import React, { useState, useCallback, KeyboardEvent } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({
  items,
  defaultOpenId,
  className = '',
}) => {
  const [openId, setOpenId] = useState<string | null>(defaultOpenId || null);

  const toggle = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  const onKeyDown = useCallback(
    (e: KeyboardEvent<HTMLButtonElement>, id: string) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggle(id);
      }
    },
    [toggle],
  );

  return (
    <div className={clsx('divide-y divide-base-300', className)}>
      {items.map(({ id, title, content }) => {
        const isOpen = id === openId;
        return (
          <div key={id} className="py-2">
            <button
              onClick={() => toggle(id)}
              onKeyDown={(e) => onKeyDown(e, id)}
              className="flex w-full items-center justify-between rounded px-4 py-3 text-left font-medium text-base-content transition hover:bg-base-200 focus:outline-none focus:ring-2 focus:ring-primary"
              aria-expanded={isOpen}
              aria-controls={`accordion-content-${id}`}
              id={`accordion-header-${id}`}
              type="button"
            >
              <span>{title}</span>
              <ChevronDown
                className={clsx(
                  'h-5 w-5 transition-transform duration-300 ease-in-out',
                  {
                    'rotate-180': isOpen,
                  },
                )}
                aria-hidden="true"
              />
            </button>
            <div
              id={`accordion-content-${id}`}
              role="region"
              aria-labelledby={`accordion-header-${id}`}
              className={clsx(
                'mt-2 overflow-hidden px-4 text-sm text-base-content transition-all duration-300 ease-in-out',
                isOpen ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0',
              )}
            >
              {content}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
