// src/components/VisitorCount.tsx
import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
  memo,
} from "react";

interface VisitorCountProps {
  min?: number;
  max?: number;
  className?: string;
  label?: string;
  updateInterval?: number;
  initialCount?: number;
  enableAutoUpdate?: boolean;
}

const DEFAULT_MIN = 500;
const DEFAULT_MAX = 3000;

// 🧠 Ensure min-max range is logical
const sanitizeRange = (min?: number, max?: number): [number, number] => {
  let minVal = Number.isInteger(min) && min! >= 0 ? min! : DEFAULT_MIN;
  let maxVal = Number.isInteger(max) && max! >= minVal ? max! : DEFAULT_MAX;
  if (minVal > maxVal) [minVal, maxVal] = [maxVal, minVal];
  return [minVal, maxVal];
};

// 🎲 Random next value, close to current value
const getSmartRandom = (current: number, min: number, max: number): number => {
  const delta = Math.max(1, Math.floor((max - min) * 0.05));
  const direction = Math.random() > 0.5 ? 1 : -1;
  const next = current + direction * Math.floor(Math.random() * (delta + 1));
  return Math.min(max, Math.max(min, next));
};

const VisitorCountComponent: React.FC<VisitorCountProps> = ({
  min,
  max,
  className = "",
  label = "ยอดเข้าชม",
  updateInterval = 10000,
  initialCount,
  enableAutoUpdate = true,
}) => {
  const [minVal, maxVal] = useMemo(() => sanitizeRange(min, max), [min, max]);

  const getInitial = useCallback(() => {
    if (
      typeof initialCount === "number" &&
      initialCount >= minVal &&
      initialCount <= maxVal
    ) {
      return initialCount;
    }
    return getSmartRandom(minVal, minVal, maxVal);
  }, [initialCount, minVal, maxVal]);

  const [count, setCount] = useState<number>(getInitial);
  const prevCountRef = useRef<number>(count);

  const locale =
    typeof navigator !== "undefined" && navigator.language
      ? navigator.language
      : "en-US";

  const numberFormatter = useMemo(() => new Intl.NumberFormat(locale), [locale]);

  const updateCount = useCallback(() => {
    const prev = prevCountRef.current;
    const next = getSmartRandom(prev, minVal, maxVal);
    if (next !== prev) {
      prevCountRef.current = next;
      setCount(next);
    }
  }, [minVal, maxVal]);

  useEffect(() => {
    if (!enableAutoUpdate || updateInterval <= 0 || minVal === maxVal) return;
    const intervalId = setInterval(updateCount, updateInterval);
    return () => clearInterval(intervalId);
  }, [updateInterval, updateCount, enableAutoUpdate, minVal, maxVal]);

  useEffect(() => {
    if (
      typeof initialCount === "number" &&
      initialCount >= minVal &&
      initialCount <= maxVal &&
      initialCount !== count
    ) {
      setCount(initialCount);
      prevCountRef.current = initialCount;
    }
  }, [initialCount, minVal, maxVal, count]);

  const formatted = numberFormatter.format(count);

  return (
    <div
      suppressHydrationWarning
      className={`fixed bottom-2 right-2 z-50 text-sm text-gray-600 dark:text-gray-300 bg-white/80 dark:bg-gray-800/80 px-3 py-1.5 rounded shadow-md font-medium select-none ${className}`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
      aria-label={`${label} ${formatted} คน`}
      title={`${label}: ${formatted} คน`}
      data-testid="visitor-count"
    >
      {label}:{" "}
      <span
        aria-hidden="true"
        className="inline-block font-mono tracking-tight"
        style={{ minWidth: "4ch" }}
      >
        {formatted}
      </span>{" "}
      คน
    </div>
  );
};

// 🧠 Memoized for performance
const VisitorCount = memo(VisitorCountComponent);
VisitorCount.displayName = "VisitorCount";

export default VisitorCount;