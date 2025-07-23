// src/components/ui/Tabs.tsx
// ✅ Accessible tabs with keyboard navigation, ARIA roles, disabled support, and Tailwind styling

import React, { useState, useId, ReactNode, KeyboardEvent, useEffect, useRef } from 'react'
import clsx from 'clsx'

interface Tab {
  label: string
  content: ReactNode
  disabled?: boolean
}

interface TabsProps {
  tabs: Tab[]
  defaultIndex?: number
  className?: string
  tabClassName?: string
  panelClassName?: string
}

const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultIndex = 0,
  className = '',
  tabClassName = '',
  panelClassName = '',
}) => {
  const [activeIndex, setActiveIndex] = useState(() => {
    if (tabs[defaultIndex]?.disabled) {
      return tabs.findIndex(t => !t.disabled) ?? 0
    }
    return defaultIndex
  })

  const idPrefix = useId()
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([])

  const enabledTabs = tabs
    .map((t, i) => (t.disabled ? null : i))
    .filter((i): i is number => i !== null)

  const focusTab = (index: number) => {
    tabsRef.current[index]?.focus()
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(e.key)) return

    e.preventDefault()
    const currentIdx = enabledTabs.indexOf(activeIndex)

    let nextIndex: number

    switch (e.key) {
      case 'ArrowRight':
        nextIndex = enabledTabs[(currentIdx + 1) % enabledTabs.length]
        break
      case 'ArrowLeft':
        nextIndex = enabledTabs[(currentIdx - 1 + enabledTabs.length) % enabledTabs.length]
        break
      case 'Home':
        nextIndex = enabledTabs[0]
        break
      case 'End':
        nextIndex = enabledTabs[enabledTabs.length - 1]
        break
      default:
        return
    }

    setActiveIndex(nextIndex)
    focusTab(nextIndex)
  }

  useEffect(() => {
    if (tabs[activeIndex]?.disabled) {
      const firstEnabled = tabs.findIndex(t => !t.disabled)
      if (firstEnabled !== -1 && firstEnabled !== activeIndex) {
        setActiveIndex(firstEnabled)
      }
    }
  }, [tabs, activeIndex])

  return (
    <div className={clsx('w-full', className)}>
      <div
        role="tablist"
        aria-label="Tab navigation"
        className="flex border-b border-gray-300 dark:border-gray-600"
        onKeyDown={handleKeyDown}
      >
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            ref={el => (tabsRef.current[index] = el)}
            role="tab"
            type="button"
            id={`${idPrefix}-tab-${index}`}
            aria-controls={`${idPrefix}-panel-${index}`}
            aria-selected={index === activeIndex}
            tabIndex={index === activeIndex ? 0 : -1}
            disabled={tab.disabled}
            className={clsx(
              'border-b-2 px-4 py-2 text-sm font-medium transition focus:outline-none',
              index === activeIndex
                ? 'border-primary text-primary'
                : 'border-transparent text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-primary',
              tab.disabled && 'cursor-not-allowed opacity-50',
              tabClassName
            )}
            onClick={() => !tab.disabled && setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div
        id={`${idPrefix}-panel-${activeIndex}`}
        role="tabpanel"
        aria-labelledby={`${idPrefix}-tab-${activeIndex}`}
        tabIndex={0}
        className={clsx('py-4 focus:outline-none', panelClassName)}
      >
        {tabs[activeIndex]?.content}
      </div>
    </div>
  )
}

export default Tabs
