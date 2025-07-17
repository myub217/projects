// src/components/StatsPanel.tsx

import React, { useEffect, useState } from 'react';
import apiClient from '@/api/apiClient';

interface StatItem {
  id: number;
  label: string;
  value: number | string;
  icon: React.ReactNode;
  bgColor: string;
}

export default function StatsPanel() {
  const [users, setUsers] = useState<number | null>(null);
  const [errors, setErrors] = useState<number | null>(null);
  const [sessions, setSessions] = useState<number | null>(null);

  const loggingEnabled = import.meta.env.VITE_ENABLE_LOGGING === 'true';
  const analyticsUrl = import.meta.env.VITE_ANALYTICS_URL || '';

  useEffect(() => {
    apiClient
      .getStats()
      .then((res) => {
        setUsers(res.userCount ?? 0);
        setErrors(res.errorCount ?? 0);
        setSessions(res.sessionCount ?? 0);
      })
      .catch((err) => {
        console.error('❌ Failed to fetch stats:', err);
        setUsers(0);
        setErrors(0);
        setSessions(0);
      });
  }, []);

  const stats: StatItem[] = [
    {
      id: 1,
      label: '👥 ผู้ใช้งาน',
      value: users ?? '⏳',
      icon: <span aria-hidden="true">👥</span>,
      bgColor: 'bg-primary',
    },
    {
      id: 2,
      label: '⚡ เซสชัน',
      value: sessions ?? '⏳',
      icon: <span aria-hidden="true">⚡</span>,
      bgColor: 'bg-secondary',
    },
    {
      id: 3,
      label: '🖥️ โหลดเซิร์ฟเวอร์',
      value: '75%',
      icon: <span aria-hidden="true">🖥️</span>,
      bgColor: 'bg-accent',
    },
    {
      id: 4,
      label: '❌ ข้อผิดพลาด',
      value: errors ?? '⏳',
      icon: <span aria-hidden="true">❌</span>,
      bgColor: 'bg-error',
    },
    {
      id: 5,
      label: '📈 Analytics',
      value: analyticsUrl ? '✅ เปิดใช้งาน' : '❌ ปิดอยู่',
      icon: <span aria-hidden="true">📈</span>,
      bgColor: analyticsUrl ? 'bg-success' : 'bg-warning',
    },
    {
      id: 6,
      label: '📝 Logging',
      value: loggingEnabled ? '✅ On' : '❌ Off',
      icon: <span aria-hidden="true">📝</span>,
      bgColor: loggingEnabled ? 'bg-info' : 'bg-base-300',
    },
  ];

  return (
    <section
      aria-label="สถิติระบบ"
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 p-4 md:p-8 max-w-7xl mx-auto"
    >
      {stats.map(({ id, label, value, icon, bgColor }) => (
        <div
          key={id}
          className={`${bgColor} flex items-center gap-4 rounded-xl p-6 shadow-lg text-white transition-transform hover:scale-[1.03]`}
          role="region"
          aria-labelledby={`stat-label-${id}`}
        >
          <div className="text-4xl" aria-hidden="true">
            {icon}
          </div>
          <div>
            <p
              id={`stat-label-${id}`}
              className="text-sm font-medium opacity-90 tracking-wide"
            >
              {label}
            </p>
            <p
              className="text-3xl font-extrabold mt-1 leading-none"
              aria-live="polite"
              aria-atomic="true"
            >
              {value}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}