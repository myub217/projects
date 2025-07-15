import React, { useEffect, useState } from 'react';
import apiClient from '@/api/apiClient';

interface StatItem {
  id: number;
  title: string;
  value: number | string;
  description?: string;
  icon?: React.ReactNode;
  bgColor?: string;
}

interface StatCardProps extends Omit<StatItem, 'id'> {}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  description,
  icon,
  bgColor = 'bg-primary',
}) => (
  <div
    className={`flex items-start gap-4 rounded-xl p-4 shadow text-white ${bgColor} select-none`}
    role="region"
    aria-label={`${title} statistic`}
  >
    {icon && (
      <div className="text-3xl pt-1" aria-hidden="true">
        {icon}
      </div>
    )}
    <div>
      <h3 className="text-sm font-medium opacity-80">{title}</h3>
      <p className="text-2xl font-bold mt-1">{value}</p>
      {description && <p className="text-xs mt-1 opacity-70">{description}</p>}
    </div>
  </div>
);

export default function Dashboard() {
  const [userCount, setUserCount] = useState<number | null>(null);
  const [errorCount, setErrorCount] = useState<number | null>(null);

  const loggingEnabled = import.meta.env.VITE_ENABLE_LOGGING === 'true';
  const analyticsUrl = import.meta.env.VITE_ANALYTICS_URL || '';

  useEffect(() => {
    apiClient
      .getStats()
      .then((res) => {
        setUserCount(res.userCount ?? 0);
        setErrorCount(res.errorCount ?? 0);
      })
      .catch((err) => {
        console.error('❌ Error loading stats:', err);
        setUserCount(0);
        setErrorCount(0);
      });
  }, []);

  const stats: StatItem[] = [
    {
      id: 1,
      title: 'Total Users',
      value: userCount ?? '⏳',
      description: 'Active users this month',
      icon: '👥',
      bgColor: 'bg-primary',
    },
    {
      id: 2,
      title: 'New Signups',
      value: 123, // <- TODO: replace with live API
      description: 'Users signed up today',
      icon: '🆕',
      bgColor: 'bg-secondary',
    },
    {
      id: 3,
      title: 'Server Load',
      value: '68%', // <- TODO: fetch from real server stats
      description: 'Current CPU usage',
      icon: '🖥️',
      bgColor: 'bg-accent',
    },
    {
      id: 4,
      title: 'Errors',
      value: errorCount ?? '⏳',
      description: 'Errors logged today',
      icon: '❌',
      bgColor: 'bg-error',
    },
    {
      id: 5,
      title: 'Analytics',
      value: analyticsUrl ? '✅ Enabled' : '❌ Disabled',
      description: analyticsUrl || 'No analytics endpoint configured',
      icon: '📊',
      bgColor: 'bg-success',
    },
    {
      id: 6,
      title: 'Logging',
      value: loggingEnabled ? '✅ On' : '❌ Off',
      description: 'Controlled by VITE_ENABLE_LOGGING',
      icon: '📝',
      bgColor: loggingEnabled ? 'bg-info' : 'bg-warning',
    },
  ];

  return (
    <section
      aria-label="Dashboard Statistics"
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
    >
      {stats.map(({ id, ...card }) => (
        <StatCard key={id} {...card} />
      ))}
    </section>
  );
}
