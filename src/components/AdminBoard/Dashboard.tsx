// src/components/AdminBoard/Dashboard.tsx
import React from "react";

interface StatCardProps {
  title: string;
  value: number | string;
  description?: string;
  icon?: React.ReactNode;
  bgColor?: string; // Tailwind color class เช่น bg-primary, bg-success
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  description,
  icon,
  bgColor = "bg-primary",
}) => {
  return (
    <div
      className={`flex items-center rounded-lg p-4 text-white shadow ${bgColor} select-none`}
      role="region"
      aria-label={`${title} statistic`}
    >
      {icon && <div className="mr-4 text-4xl" aria-hidden="true">{icon}</div>}
      <div>
        <p className="text-sm opacity-75">{title}</p>
        <p className="text-3xl font-bold">{value}</p>
        {description && <p className="text-xs opacity-60">{description}</p>}
      </div>
    </div>
  );
};

export default function Dashboard() {
  // ตัวอย่างข้อมูลสถิติ สามารถดึงจาก API จริงได้
  const stats = [
    {
      id: 1,
      title: "Total Users",
      value: 2345,
      description: "Active users this month",
      icon: <>👥</>,
      bgColor: "bg-primary",
    },
    {
      id: 2,
      title: "New Signups",
      value: 123,
      description: "Users signed up today",
      icon: <>🆕</>,
      bgColor: "bg-secondary",
    },
    {
      id: 3,
      title: "Server Load",
      value: "68%",
      description: "Current CPU usage",
      icon: <>🖥️</>,
      bgColor: "bg-accent",
    },
    {
      id: 4,
      title: "Errors",
      value: 5,
      description: "Errors logged today",
      icon: <>❌</>,
      bgColor: "bg-error",
    },
  ];

  return (
    <section
      aria-label="Dashboard Statistics"
      className="mb-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      {stats.map(({ id, title, value, description, icon, bgColor }) => (
        <StatCard
          key={id}
          title={title}
          value={value}
          description={description}
          icon={icon}
          bgColor={bgColor}
        />
      ))}
    </section>
  );
}