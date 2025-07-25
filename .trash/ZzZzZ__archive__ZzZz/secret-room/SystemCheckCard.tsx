// src/components/SecretRoom/SystemCheckCard.tsx
// ✅ คอมโพเนนต์ตรวจสอบสถานะระบบ: การเชื่อมต่ออินเทอร์เน็ตและ LocalStorage พร้อมไอคอนและสถานะสี

import React, { useEffect, useState } from 'react';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

const SystemCheckCard: React.FC = () => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);
  const [storageAvailable, setStorageAvailable] = useState<boolean>(false);

  useEffect(() => {
    const testLocalStorage = () => {
      try {
        const testKey = '__storage_test__';
        localStorage.setItem(testKey, testKey);
        localStorage.removeItem(testKey);
        setStorageAvailable(true);
      } catch {
        setStorageAvailable(false);
      }
    };

    const handleConnectionChange = () => setIsOnline(navigator.onLine);

    testLocalStorage();
    window.addEventListener('online', handleConnectionChange);
    window.addEventListener('offline', handleConnectionChange);

    return () => {
      window.removeEventListener('online', handleConnectionChange);
      window.removeEventListener('offline', handleConnectionChange);
    };
  }, []);

  const systemItems = [
    {
      key: 'network',
      label: 'การเชื่อมต่ออินเทอร์เน็ต',
      status: isOnline,
      successLabel: 'ออนไลน์',
      failLabel: 'ออฟไลน์',
      icon: (ok: boolean) =>
        ok ? (
          <FaCheckCircle
            className="text-2xl text-green-600"
            aria-label="ออนไลน์"
            role="img"
            aria-hidden={false}
          />
        ) : (
          <FaExclamationTriangle
            className="text-2xl text-red-600"
            aria-label="ออฟไลน์"
            role="img"
            aria-hidden={false}
          />
        ),
    },
    {
      key: 'storage',
      label: 'LocalStorage',
      status: storageAvailable,
      successLabel: 'พร้อมใช้งาน',
      failLabel: 'ไม่พร้อมใช้งาน',
      icon: (ok: boolean) =>
        ok ? (
          <FaCheckCircle
            className="text-2xl text-green-600"
            aria-label="LocalStorage พร้อมใช้งาน"
            role="img"
            aria-hidden={false}
          />
        ) : (
          <FaExclamationTriangle
            className="text-2xl text-red-600"
            aria-label="LocalStorage ไม่พร้อมใช้งาน"
            role="img"
            aria-hidden={false}
          />
        ),
    },
  ];

  return (
    <section
      aria-label="สถานะการตรวจสอบระบบ"
      tabIndex={-1}
      role="region"
      className="dark:border-base-700 space-y-6 rounded-xl border border-base-300 bg-base-100 p-6 shadow-md transition-shadow duration-200 ease-in-out focus-within:shadow-lg dark:bg-zinc-800"
    >
      <h3 className="select-none text-xl font-bold text-primary">สถานะระบบ</h3>
      <ul className="grid gap-6 sm:grid-cols-2" role="list">
        {systemItems.map(({ key, label, status, successLabel, failLabel, icon }) => (
          <li
            key={key}
            className="flex select-text items-center gap-4"
            role="listitem"
            aria-live="polite"
            aria-atomic="true"
          >
            <span
              aria-label={`${label}: ${status ? successLabel : failLabel}`}
              role="img"
            >
              {icon(status)}
            </span>
            <div className="font-medium text-base-content">
              {label}:{' '}
              <span
                className={`font-semibold ${status ? 'text-green-700' : 'text-red-600'}`}
              >
                {status ? successLabel : failLabel}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SystemCheckCard;
