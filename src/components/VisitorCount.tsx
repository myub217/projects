import React, { useEffect, useState, useRef, memo } from "react";

interface VisitorCountProps {
  /** เลขต่ำสุด (default: 500) */
  min?: number;
  /** เลขสูงสุด (default: 3000) */
  max?: number;
  /** CSS class เสริม (optional) */
  className?: string;
  /** ข้อความนำหน้า (default: "ยอดผู้ชมเว็บไซต์") */
  label?: string;
  /** เวลา (ms) ที่จะสุ่มเลขใหม่อัตโนมัติ (default: 10000) */
  updateInterval?: number;
  /** เลขเริ่มต้น (optional) */
  initialCount?: number;
}

const sanitizeRange = (min: number, max: number): [number, number] => {
  let minVal = Number.isInteger(min) && min >= 0 ? min : 500;
  let maxVal = Number.isInteger(max) && max >= minVal ? max : 3000;

  if (min > max) {
    console.warn(`VisitorCount: min (${min}) มากกว่า max (${max}), สลับค่าให้ถูกต้อง`);
    [minVal, maxVal] = [maxVal, minVal];
  }

  return [minVal, maxVal];
};

const getRandomCount = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const VisitorCountComponent: React.FC<VisitorCountProps> = ({
  min = 500,
  max = 3000,
  className = "",
  label = "ยอดผู้ชมเว็บไซต์",
  updateInterval = 10000,
  initialCount,
}) => {
  const [minVal, maxVal] = sanitizeRange(min, max);

  const initial = initialCount !== undefined ? initialCount : getRandomCount(minVal, maxVal);

  const [count, setCount] = useState<number>(initial);

  const prevCountRef = useRef<number>(count);

  // กำหนด locale สำหรับ toLocaleString
  const userLocale = typeof navigator !== "undefined" ? navigator.language : "en-US";

  useEffect(() => {
    if (updateInterval <= 0) return;

    // ถ้าช่วงเลขแคบเกินไป (min == max) ไม่ตั้ง interval
    if (minVal === maxVal) return;

    const intervalId = setInterval(() => {
      let newCount = getRandomCount(minVal, maxVal);

      if (newCount === prevCountRef.current) {
        newCount = newCount === maxVal ? minVal : newCount + 1;
      }

      prevCountRef.current = newCount;
      setCount(newCount);
    }, updateInterval);

    return () => clearInterval(intervalId);
  }, [minVal, maxVal, updateInterval]);

  return (
    <div
      className={`text-lg font-semibold text-primary select-none ${className}`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
      aria-label={`${label} จำนวน ${count.toLocaleString(userLocale)} คน`}
      title={`${label}: ${count.toLocaleString(userLocale)} คน`}
    >
      {label}:{" "}
      <span
        aria-hidden="true"
        className="inline-block tabular-nums"
        style={{ minWidth: "4ch" }}
      >
        {count.toLocaleString(userLocale)}
      </span>{" "}
      คน
    </div>
  );
};

const VisitorCount = memo(VisitorCountComponent);
VisitorCount.displayName = "VisitorCount";

export default VisitorCount;