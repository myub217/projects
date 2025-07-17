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
        setUsers(res?.userCount ?? 0);
        setErrors(res?.errorCount ?? 0);
        setSessions(res?.sessionCount ?? 0);
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
      icon: <span>👥</span>,
      bgColor: 'bg-primary',
    },
    {
      id: 2,
      label: '⚡ เซสชัน',
      value: sessions ?? '⏳',
      icon: <span>⚡</span>,
      bgColor: 'bg-secondary',
    },
    {
      id: 3,
      label: '🖥️ โหลดเซิร์ฟเวอร์',
      value: '75%',
      icon: <span>🖥️</span>,
      bgColor: 'bg-accent',
    },
    {
      id: 4,
      label: '❌ ข้อผิดพลาด',
      value: errors ?? '⏳',
      icon: <span>❌</span>,
      bgColor: 'bg-error',
    },
    {
      id: 5,
      label: '📈 Analytics',
      value: analyticsUrl ? '✅ เปิดใช้งาน' : '❌ ปิดอยู่',
      icon: <span>📈</span>,
      bgColor: analyticsUrl ? 'bg-success' : 'bg-warning',
    },
    {
      id: 6,
      label: '📝 Logging',
      value: loggingEnabled ? '✅ On' : '❌ Off',
      icon: <span>📝</span>,
      bgColor: loggingEnabled ? 'bg-info' : 'bg-base-300',
    },
  ];

  return (
    <section
      aria-label="สถิติระบบ"
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map(({ id, label, value, icon, bgColor }) => (
          <div
            key={id}
            className={`${bgColor} flex flex-col sm:flex-row items-center sm:items-start gap-4 rounded-xl p-6 shadow-lg text-white transition-transform hover:scale-[1.02] duration-200`}
            role="region"
            aria-labelledby={`stat-label-${id}`}
          >
            <div className="text-5xl sm:text-4xl" aria-hidden="true">
              {icon}
            </div>
            <div className="text-center sm:text-left">
              <p
                id={`stat-label-${id}`}
                className="text-base font-semibold tracking-wide opacity-90"
              >
                {label}
              </p>
              <p
                className="text-3xl font-bold mt-1 leading-tight"
                aria-live="polite"
                aria-atomic="true"
              >
                {value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}