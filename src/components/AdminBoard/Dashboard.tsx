// src/components/AdminBoard/Dashboard.tsx

import React, { useEffect, useState } from 'react';
import apiClient from '@/api/apiClient';
import {
  FaUsers,
  FaUserPlus,
  FaServer,
  FaExclamationCircle,
  FaChartBar,
  FaClipboard,
} from 'react-icons/fa';

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
  <article
    className={`flex items-center gap-4 rounded-2xl p-4 sm:p-5 shadow-md sm:shadow-lg text-white ${bgColor} transition-transform hover:scale-[1.02] duration-200`}
    role="region"
    aria-label={`${title} statistic`}
    tabIndex={0}
  >
    <div
      className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/25 text-xl sm:text-2xl"
      aria-hidden="true"
    >
      {icon}
    </div>
    <div className="flex flex-col">
      <h3 className="text-xs sm:text-sm font-semibold opacity-90">{title}</h3>
      <p className="text-2xl sm:text-3xl font-extrabold mt-1">{value}</p>
      {description && (
        <p className="mt-1 text-[10px] sm:text-xs opacity-75 leading-tight">{description}</p>
      )}
    </div>
  </article>
);

export default function Dashboard() {
  const [userCount, setUserCount] = useState<number | null>(null);
  const [newUsersToday, setNewUsersToday] = useState<number | null>(null);
  const [serverLoad, setServerLoad] = useState<string>('⏳');
  const [errorCount, setErrorCount] = useState<number | null>(null);

  const loggingEnabled = import.meta.env.VITE_ENABLE_LOGGING === 'true';
  const analyticsUrl = import.meta.env.VITE_ANALYTICS_URL || '';

  useEffect(() => {
    apiClient
      .getStats()
      .then((res) => {
        setUserCount(res.userCount ?? 0);
        setNewUsersToday(res.newUsersToday ?? 0);
        setServerLoad(res.serverLoad ?? '0%');
        setErrorCount(res.errorCount ?? 0);
      })
      .catch((err) => {
        console.error('❌ Error loading stats:', err);
        setUserCount(0);
        setNewUsersToday(0);
        setServerLoad('0%');
        setErrorCount(0);
      });
  }, []);

  const stats: StatItem[] = [
    {
      id: 1,
      title: 'ผู้ใช้งานทั้งหมด',
      value: userCount ?? '⏳',
      description: 'ผู้ใช้งานที่มีอยู่ในระบบ',
      icon: <FaUsers />,
      bgColor: 'bg-primary',
    },
    {
      id: 2,
      title: 'ผู้สมัครใหม่',
      value: newUsersToday ?? '⏳',
      description: 'จำนวนผู้สมัครวันนี้',
      icon: <FaUserPlus />,
      bgColor: 'bg-secondary',
    },
    {
      id: 3,
      title: 'โหลดเซิร์ฟเวอร์',
      value: serverLoad,
      description: 'การใช้งาน CPU ปัจจุบัน',
      icon: <FaServer />,
      bgColor: 'bg-accent',
    },
    {
      id: 4,
      title: 'ข้อผิดพลาด',
      value: errorCount ?? '⏳',
      description: 'Error ที่เกิดขึ้นวันนี้',
      icon: <FaExclamationCircle />,
      bgColor: 'bg-error',
    },
    {
      id: 5,
      title: 'Analytics',
      value: analyticsUrl ? '✅ ใช้งาน' : '❌ ปิดอยู่',
      description: analyticsUrl || 'ยังไม่มีการตั้งค่า endpoint',
      icon: <FaChartBar />,
      bgColor: 'bg-success',
    },
    {
      id: 6,
      title: 'Logging',
      value: loggingEnabled ? '✅ เปิดอยู่' : '❌ ปิดอยู่',
      description: 'VITE_ENABLE_LOGGING',
      icon: <FaClipboard />,
      bgColor: loggingEnabled ? 'bg-info' : 'bg-warning',
    },
  ];

  return (
    <section
      aria-label="แดชบอร์ดสถิติ"
      className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0"
    >
      {stats.map(({ id, ...card }) => (
        <StatCard key={id} {...card} />
      ))}
    </section>
  );
}