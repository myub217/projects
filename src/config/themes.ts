// src/config/themes.ts

/**
 * ThemeMode: โหมดของธีม (light/dark)
 */
export type ThemeMode = "light" | "dark";

/**
 * AppTheme: โครงสร้างข้อมูลของธีมที่ระบบรองรับ
 */
export type AppTheme = {
  name: string; // internal name (เช่น "platinum-dark")
  displayName: string; // ชื่อที่แสดงให้ผู้ใช้
  dataTheme: string; // ค่าที่ใช้กับ data-theme
  mode: ThemeMode; // light หรือ dark
  primaryColor: string; // สีหลัก (primary)
  secondaryColor: string; // สีรอง
  accentColor: string; // สีเสริม
  backgroundColor?: string; // สีพื้นหลัง (optional)
  textColor?: string; // สีตัวอักษรหลัก (optional)
  borderColor?: string; // สีขอบหรือเส้นแบ่ง (optional)
};

/**
 * themes: ธีมทั้งหมดที่ระบบรองรับ
 */
export const themes: AppTheme[] = [
  {
    name: "platinum",
    displayName: "Platinum Light",
    dataTheme: "platinum",
    mode: "light",
    primaryColor: "#D4AF37",
    secondaryColor: "#6B7280",
    accentColor: "#2A2F3A",
    backgroundColor: "#FFFFFF",
    textColor: "#111827",
    borderColor: "#E5E7EB",
  },
  {
    name: "platinum-dark",
    displayName: "Platinum Dark",
    dataTheme: "platinum-dark",
    mode: "dark",
    primaryColor: "#D4AF37",
    secondaryColor: "#A3A9B4",
    accentColor: "#E4E6EB",
    backgroundColor: "#1F2937",
    textColor: "#F3F4F6",
    borderColor: "#374151",
  },
  {
    name: "temp",
    displayName: "Temp Theme",
    dataTheme: "temp",
    mode: "light",
    primaryColor: "#4F46E5",
    secondaryColor: "#64748B",
    accentColor: "#1E40AF",
    backgroundColor: "#F9FAFB",
    textColor: "#1E293B",
    borderColor: "#CBD5E1",
  },
];