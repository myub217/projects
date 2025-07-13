// src/pages/SecretRoomPageComponents/AccessTimeout.tsx

import React, { useEffect, useState, useRef } from "react";

//-------------------------------
// Props
//-------------------------------

interface AccessTimeoutProps {
  timeLeft: number; // เหลือเวลาในรูปแบบมิลลิวินาที
  onTimeoutConfirm: () => void; // ฟังก์ชันที่เรียกเมื่อกดออกจากระบบ
}

//-------------------------------
// Component
//-------------------------------

export default function AccessTimeout({
  timeLeft,
  onTimeoutConfirm,
}: AccessTimeoutProps) {
  const [visible, setVisible] = useState(false);
  const [countdown, setCountdown] = useState(timeLeft);
  const dialogRef = useRef<HTMLDivElement>(null);

  // แสดง modal เมื่อเวลาน้อยกว่า 1 นาทีและมากกว่า 0
  useEffect(() => {
    if (timeLeft <= 60 * 1000 && timeLeft > 0) {
      setVisible(true);
      setCountdown(timeLeft);
    } else {
      setVisible(false);
    }
  }, [timeLeft]);

  // อัปเดต countdown ทุก 1 วินาที เมื่อ modal แสดงอยู่
  useEffect(() => {
    if (!visible) return;
    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 1000 ? prev - 1000 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [visible]);

  // Focus trap & focus on dialog
  useEffect(() => {
    if (visible && dialogRef.current) {
      dialogRef.current.focus();
    }
  }, [visible]);

  // Format mm:ss
  const formatTime = (ms: number): string => {
    const total = Math.floor(ms / 1000);
    const m = Math.floor(total / 60);
    const s = total % 60;
    return `${m}:${s.toString().padStart(2, "0")}`;
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="timeout-title"
      aria-describedby="timeout-desc"
      tabIndex={-1}
      ref={dialogRef}
    >
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h2
          id="timeout-title"
          className="text-xl font-semibold mb-4 text-gray-900 dark:text-white"
        >
          หมดเวลาการใช้งานในอีก {formatTime(countdown)}
        </h2>
        <p id="timeout-desc" className="mb-6 text-gray-700 dark:text-gray-300">
          ระบบจะทำการออกจากระบบอัตโนมัติเพื่อความปลอดภัยของบัญชีผู้ใช้
        </p>
        <button
          onClick={onTimeoutConfirm}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition"
          aria-label="ยืนยันการออกจากระบบ"
          autoFocus
        >
          ออกจากระบบตอนนี้
        </button>
      </div>
    </div>
  );
}