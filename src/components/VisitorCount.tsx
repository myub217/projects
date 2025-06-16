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

const sanitizeRange = (min?: number, max?: number): [number, number] => {
  // กำหนดค่าเริ่มต้นและตรวจสอบความถูกต้อง
  let minVal = Number.isInteger(min) && min !== undefined && min >= 0 ? min : 500;
  let maxVal = Number.isInteger(max) && max !== undefined && max >= minVal ? max : 3000;

  if (minVal > maxVal) {
    console.warn(
      `VisitorCount: min (${minVal}) มากกว่า max (${maxVal}), สลับค่าให้ถูกต้อง`
    );
    [minVal, maxVal] = [maxVal, minVal];
  }

  return [minVal, maxVal];
};

const getRandomCount = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const VisitorCountComponent: React.FC<VisitorCountProps> = ({
  min,
  max,
  className = "",
  label = "ยอดผู้ชมเว็บไซต์",
  updateInterval = 10000,
  initialCount,
}) => {
  const [minVal, maxVal] = sanitizeRange(min, max);

  // ใช้เลขเริ่มต้นที่ส่งเข้ามาหรือสุ่มเลขในช่วง
  const initial =
    initialCount !== undefined && initialCount >= minVal && initialCount <= maxVal
      ? initialCount
      : getRandomCount(minVal, maxVal);

  const [count, setCount] = useState<number>(initial);
  const prevCountRef = useRef<number>(count);

  // กำหนด locale สำหรับ toLocaleString
  const userLocale =
    typeof navigator !== "undefined" && navigator.language
      ? navigator.language
      : "en-US";

  useEffect(() => {
    if (updateInterval <= 0) return;
    if (minVal === maxVal) return;

    const intervalId = setInterval(() => {
      let newCount = getRandomCount(minVal, maxVal);

      // ป้องกันเลขซ้ำกับรอบก่อนหน้า
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