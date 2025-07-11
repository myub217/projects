// src/components/AdminBoard/StatsPanel.tsx
import React from "react";

interface StatItem {
  id: number;
  label: string;
  value: number | string;
  icon?: React.ReactNode;
  bgColor?: string; // Tailwind color class เช่น "bg-primary", "bg-success"
}

const stats: StatItem[] = [
  { id: 1, label: "Users", value: 1234, icon: "👥", bgColor: "bg-primary" },
  { id: 2, label: "Active Sessions", value: 256, icon: "⚡", bgColor: "bg-secondary" },
  { id: 3, label: "Server Load", value: "75%", icon: "🖥️", bgColor: "bg-accent" },
  { id: 4, label: "Errors Today", value: 3, icon: "❌", bgColor: "bg-error" },
];

export default function StatsPanel() {
  return (
    <section aria-label="Statistics Panel" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map(({ id, label, value, icon, bgColor }) => (
        <div
          key={id}
          className={`flex items-center space-x-4 p-4 rounded-lg shadow ${bgColor || "bg-base-200"} text-white`}
        >
          <div className="text-3xl">{icon}</div>
          <div>
            <p className="text-sm opacity-75">{label}</p>
            <p className="text-xl font-bold">{value}</p>
          </div>
        </div>
      ))}
    </section>
  );
}