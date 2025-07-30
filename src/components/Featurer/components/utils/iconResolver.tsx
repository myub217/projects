// src/components/Featurer/components/utils/helpers.ts
import React from "react";
import * as LucideIcons from "lucide-react";

export function resolveIcon(
  iconName: string,
  className?: string
): React.ReactElement | null {
  const IconComponent = (LucideIcons as Record<
    string,
    React.FC<React.SVGProps<SVGSVGElement>>
  >)[iconName];
  if (!IconComponent) {
    return null;
  }
  return <IconComponent className={className} />;
}