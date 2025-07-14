// src/pages/SecretRoomPageComponents/AccessTimeout.tsx

import React, { useEffect, useState, useRef } from "react";

interface AccessTimeoutProps {
  timeLeft: number; // เวลาเหลือก่อน logout (ms)
  onTimeoutConfirm: () => void; // callback เมื่อ user กดยืนยันออกจากระบบ
}

export default function AccessTimeout({
  timeLeft,
  onTimeoutConfirm,
}: AccessTimeoutProps) {
  const [visible, setVisible] = useState(false);
  const [countdown, setCountdown] = useState(timeLeft);
  const dialogRef = useRef<HTMLDivElement>(null);

  // Toggle modal visibility
  useEffect(() => {
    if (timeLeft > 0 && timeLeft <= 60_000) {
      setCountdown(timeLeft);
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [timeLeft]);

  // Countdown timer tick
  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 1000 ? prev - 1000 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [visible]);

  // Focus on dialog when visible
  useEffect(() => {
    if (visible && dialogRef.current) {
      dialogRef.current.focus();
    }
  }, [visible]);

  const formatTime = (ms: number): string => {
    const totalSec = Math.floor(ms / 1000);
    const min = Math.floor(totalSec / 60);
    const sec = totalSec % 60;
    return `${min}:${sec.toString().padStart(2, "0")}`;
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="timeout-title"
      aria-describedby="timeout-desc"
      tabIndex={-1}
      ref={dialogRef}
    >
      <div className="w-full max-w-sm rounded-xl bg-white p-6 text-center shadow-xl dark:bg-gray-800">
        <h2
          id="timeout-title"
          className="mb-3 text-lg font-semibold text-gray-900 dark:text-white"
        >
          ⏳ ออกจากระบบภายใน {formatTime(countdown)}
        </h2>
        <p
          id="timeout-desc"
          className="mb-6 text-sm text-gray-700 dark:text-gray-300"
        >
          ระบบจะออกจากระบบโดยอัตโนมัติเพื่อความปลอดภัย
        </p>
        <button
          onClick={onTimeoutConfirm}
          className="w-full rounded-md bg-red-600 px-4 py-2 font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1"
          aria-label="ยืนยันการออกจากระบบ"
        >
          ออกจากระบบตอนนี้
        </button>
      </div>
    </div>
  );
}