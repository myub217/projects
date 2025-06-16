import React, { useEffect, useState, useRef } from "react";

interface VisitorCountProps {
  min?: number;             // เลขต่ำสุด (default: 500)
  max?: number;             // เลขสูงสุด (default: 3000)
  className?: string;       // CSS class เสริม (optional)
  label?: string;           // ข้อความนำหน้า (default: "ยอดผู้ชมเว็บไซต์")
  updateInterval?: number;  // เวลา (ms) ที่จะสุ่มเลขใหม่อัตโนมัติ (optional)
}

/**
 * สุ่มตัวเลขในช่วง min ถึง max
 * ป้องกันกรณี min > max โดยสลับค่าให้อัตโนมัติ
 */
const getRandomCount = (min: number, max: number): number => {
  if (min > max) [min, max] = [max, min];
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const VisitorCount: React.FC<VisitorCountProps> = ({
  min = 500,
  max = 3000,
  className = "",
  label = "ยอดผู้ชมเว็บไซต์",
  updateInterval,
}) => {
  const [count, setCount] = useState<number>(() => getRandomCount(min, max));
  const prevCountRef = useRef<number>(count);

  useEffect(() => {
    if (updateInterval && updateInterval > 0) {
      const intervalId = setInterval(() => {
        let newCount = getRandomCount(min, max);

        // ป้องกันเลขซ้ำกับก่อนหน้า (ถ้าเป็นไปได้)
        if (newCount === prevCountRef.current) {
          newCount = newCount === max ? min : newCount + 1;
        }

        prevCountRef.current = newCount;
        setCount(newCount);
      }, updateInterval);

      return () => clearInterval(intervalId);
    }
    return;
  }, [min, max, updateInterval]);

  return (
    <div
      className={`text-lg font-semibold text-primary select-none ${className}`}
      role="status"
      aria-live="polite"
      aria-atomic="true"
      aria-label={`${label} จำนวน ${count.toLocaleString()} คน`}
    >
      {label}:{" "}
      <span
        aria-live="off"
        className="inline-block tabular-nums"
        style={{ minWidth: "4ch" }} // กัน layout shift เล็กน้อย
      >
        {count.toLocaleString()}
      </span>{" "}
      คน
    </div>
  );
};

export default VisitorCount;