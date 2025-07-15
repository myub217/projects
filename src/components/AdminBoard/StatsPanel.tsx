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
        console.error('Failed to fetch stats:', err);
        setUsers(0);
        setErrors(0);
        setSessions(0);
      });
  }, []);

  const stats: StatItem[] = [
    {
      id: 1,
      label: '👥 Users',
      value: users ?? '⏳',
      icon: '👥',
      bgColor: 'bg-primary',
    },
    {
      id: 2,
      label: '⚡ Active Sessions',
      value: sessions ?? '⏳',
      icon: '⚡',
      bgColor: 'bg-secondary',
    },
    {
      id: 3,
      label: '🖥️ Server Load',
      value: '75%', // TODO: fetch real-time CPU/memory later
      icon: '🖥️',
      bgColor: 'bg-accent',
    },
    {
      id: 4,
      label: '❌ Errors Today',
      value: errors ?? '⏳',
      icon: '❌',
      bgColor: 'bg-error',
    },
    {
      id: 5,
      label: '📈 Analytics',
      value: analyticsUrl ? 'Enabled' : 'Disabled',
      icon: '📈',
      bgColor: analyticsUrl ? 'bg-success' : 'bg-warning',
    },
    {
      id: 6,
      label: '📝 Logging',
      value: loggingEnabled ? 'On' : 'Off',
      icon: '📝',
      bgColor: loggingEnabled ? 'bg-info' : 'bg-base-300',
    },
  ];

  return (
    <section
      aria-label="Statistics Panel"
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
    >
      {stats.map(({ id, label, value, icon, bgColor }) => (
        <div
          key={id}
          className={`flex items-center space-x-4 rounded-lg p-4 shadow text-white ${bgColor}`}
          role="region"
          aria-labelledby={`stat-label-${id}`}
        >
          <div className="text-3xl" aria-hidden="true">
            {icon}
          </div>
          <div>
            <p id={`stat-label-${id}`} className="text-sm opacity-75">
              {label}
            </p>
            <p className="text-xl font-bold" aria-live="polite">
              {value}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
