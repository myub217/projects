// src/components/ui/Tabs.tsx
// ✅ ระบบ Tabs พร้อม ARIA, ป้องกัน Tab ที่ disabled, รองรับคีย์บอร์ด (← → Home End), ใช้งานกับ Tailwind ได้เต็มที่

import React, {
  useState,
  useId,
  ReactNode,
  KeyboardEvent,
  useEffect,
  useRef,
} from 'react';
import clsx from 'clsx';

interface Tab {
  label: string;
  content: ReactNode;
  disabled?: boolean;
}

interface TabsProps {
  tabs: Tab[];
  defaultIndex?: number;
  className?: string;
  tabClassName?: string;
  panelClassName?: string;
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultIndex = 0,
  className = '',
  tabClassName = '',
  panelClassName = '',
}) => {
  const idPrefix = useId();
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);

  const enabledIndexes = tabs
    .map((tab, i) => (!tab.disabled ? i : null))
    .filter((i): i is number => i !== null);

  const getFirstEnabled = () => enabledIndexes[0] ?? 0;

  const [activeIndex, setActiveIndex] = useState(() => {
    return tabs[defaultIndex]?.disabled ? getFirstEnabled() : defaultIndex;
  });

  const focusTab = (index: number) => {
    tabsRef.current[index]?.focus();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(e.key)) return;

    e.preventDefault();
    const currentPos = enabledIndexes.indexOf(activeIndex);
    if (currentPos === -1) return;

    let nextIndex = activeIndex;
    switch (e.key) {
      case 'ArrowRight':
        nextIndex = enabledIndexes[(currentPos + 1) % enabledIndexes.length];
        break;
      case 'ArrowLeft':
        nextIndex =
          enabledIndexes[
            (currentPos - 1 + enabledIndexes.length) % enabledIndexes.length
          ];
        break;
      case 'Home':
        nextIndex = enabledIndexes[0];
        break;
      case 'End':
        nextIndex = enabledIndexes[enabledIndexes.length - 1];
        break;
    }

    setActiveIndex(nextIndex);
    focusTab(nextIndex);
  };

  useEffect(() => {
    if (tabs[activeIndex]?.disabled) {
      setActiveIndex(getFirstEnabled());
    }
  }, [tabs, activeIndex]);

  return (
    <div className={clsx('w-full', className)}>
      <div
        role="tablist"
        aria-label="Tab navigation"
        className="flex border-b border-border"
        onKeyDown={handleKeyDown}
      >
        {tabs.map((tab, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={tab.label}
              ref={(el) => (tabsRef.current[index] = el)}
              role="tab"
              type="button"
              id={`${idPrefix}-tab-${index}`}
              aria-controls={`${idPrefix}-panel-${index}`}
              aria-selected={isActive}
              tabIndex={isActive ? 0 : -1}
              disabled={tab.disabled}
              className={clsx(
                'border-b-2 px-4 py-2 text-sm font-medium transition-all duration-150',
                isActive
                  ? 'border-primary text-primary'
                  : 'border-transparent text-muted hover:text-primary',
                tab.disabled && 'cursor-not-allowed opacity-50',
                tabClassName,
              )}
              onClick={() => !tab.disabled && setActiveIndex(index)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      <div
        id={`${idPrefix}-panel-${activeIndex}`}
        role="tabpanel"
        aria-labelledby={`${idPrefix}-tab-${activeIndex}`}
        tabIndex={0}
        className={clsx('py-4', panelClassName)}
      >
        {tabs[activeIndex]?.content}
      </div>
    </div>
  );
};

export default Tabs;
