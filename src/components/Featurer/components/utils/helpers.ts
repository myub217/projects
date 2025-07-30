// src/components/Featurer/components/utils/helpers.ts
import React from "react";
import * as LucideIcons from "lucide-react";

export function resolveIcon(iconName: string, className?: string): React.ReactNode {
  // ค้นหาไอคอนจาก lucide-react โดยใช้ชื่อ (case sensitive)
  // ถ้าไม่พบคืน null
  const IconComponent = (LucideIcons as Record<string, React.ElementType>)[iconName];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
}