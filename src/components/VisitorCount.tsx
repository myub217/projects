import React, {
  useEffect,
  useState,
  useRef,
  useMemo,
  memo,
  useCallback,
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

const sanitizeRange = (min?: number, max?: number): [number, number] => {
  let minVal = Number.isInteger(min) && min! >= 0 ? min! : 500;
  let maxVal = Number.isInteger(max) && max! >= minVal ? max! : 3000;

  if (minVal > maxVal) {
    console.warn(`VisitorCount: min (${minVal}) > max (${maxVal}), swapping.`);
    [minVal, maxVal] = [maxVal, minVal];
  }

  return [minVal, maxVal];
};

const getSmartRandom = (current: number, min: number, max: number): number => {
  const delta = Math.floor((max - min) * 0.05); // เปลี่ยนแค่ 5%
  const direction = Math.random() > 0.5 ? 1 : -1;
  let next = current + direction * Math.floor(Math.random() * delta + 1);
  return Math.min(max, Math.max(min, next));
};

const VisitorCountComponent: React.FC<VisitorCountProps> = ({
  min,
  max,
  className = "",
  label = "ยอดผู้ชมเว็บไซต์",
  updateInterval = 10000,
  initialCount,
  enableAutoUpdate = true,
}) => {
  const [minVal, maxVal] = useMemo(() => sanitizeRange(min, max), [min, max]);

  const initial = useMemo(() => {
    return initialCount !== undefined &&
      initialCount >= minVal &&
      initialCount <= maxVal
      ? initialCount
      : getSmartRandom(minVal, minVal, maxVal);
  }, [initialCount, minVal, maxVal]);

  const [count, setCount] = useState<number>(initial);
  const prevCountRef = useRef<number>(initial);

  const locale =
    typeof navigator !== "undefined" && navigator.language
      ? navigator.language
      : "th-TH";

  const numberFormatter = useMemo(
    () => new Intl.NumberFormat(locale),
    [locale]
  );

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

  return (
    <div
      className={`text-lg font-semibold text-primary select-none ${className}`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
      aria-label={`${label} จำนวน ${numberFormatter.format(count)} คน`}
      title={`${label}: ${numberFormatter.format(count)} คน`}
      data-testid="visitor-count"
    >
      {label}:{" "}
      <span
        aria-hidden="true"
        className="inline-block font-mono tracking-tight"
        style={{ minWidth: "4ch" }}
      >
        {numberFormatter.format(count)}
      </span>{" "}
      คน
    </div>
  );
};

const VisitorCount = memo(VisitorCountComponent);
VisitorCount.displayName = "VisitorCount";

export default VisitorCount;