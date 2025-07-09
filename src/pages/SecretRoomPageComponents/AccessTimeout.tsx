// src/pages/SecretRoomPageComponents/AccessTimeout.tsx
import React, { useEffect, useState } from "react";

interface AccessTimeoutProps {
  timeLeft: number; // เหลือเวลาในรูปแบบมิลลิวินาที
  onTimeoutConfirm: () => void; // ฟังก์ชันที่เรียกเมื่อกดออกจากระบบ
}

export default function AccessTimeout({ timeLeft, onTimeoutConfirm }: AccessTimeoutProps) {
  const [visible, setVisible] = useState(false);
  const [countdown, setCountdown] = useState(timeLeft);

  // แสดง modal เมื่อเวลาน้อยกว่า 1 นาที
  useEffect(() => {
    if (timeLeft <= 60 * 1000 && timeLeft > 0) {
      setVisible(true);
      setCountdown(timeLeft);
    } else {
      setVisible(false);
    }
  }, [timeLeft]);

  // อัปเดต countdown ทุก 1 วินาที
  useEffect(() => {
    if (!visible) return;

    const interval = setInterval(() => {
      setCountdown((prev) => (prev > 1000 ? prev - 1000 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, [visible]);

  // แปลงเวลาที่เหลือให้เป็นรูปแบบ mm:ss
  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      role="alertdialog"
      aria-modal="true"
      aria-labelledby="timeout-title"
      aria-describedby="timeout-desc"
    >
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h2
          id="timeout-title"
          className="text-xl font-semibold mb-4 text-gray-900 dark:text-white"
        >
          หมดเวลาการใช้งานในอีก {formatTime(countdown)}
        </h2>
        <p
          id="timeout-desc"
          className="mb-6 text-gray-700 dark:text-gray-300"
        >
          ระบบจะทำการออกจากระบบอัตโนมัติ เพื่อความปลอดภัยของบัญชีผู้ใช้
        </p>
        <button
          onClick={onTimeoutConfirm}
          className="bg-red-600 hover:bg-red-700 text-white font-semibold px-4 py-2 rounded-md"
          aria-label="ยืนยันการออกจากระบบ"
        >
          ออกจากระบบตอนนี้
        </button>
      </div>
    </div>
  );
}